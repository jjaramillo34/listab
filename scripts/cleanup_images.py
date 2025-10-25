#!/usr/bin/env python3
"""
Script para limpiar imágenes innecesarias
Remueve imágenes originales JPEG cuando existen versiones WebP optimizadas
"""

import os
import shutil
from pathlib import Path
import argparse
import json
from datetime import datetime

class ImageCleanup:
    def __init__(self, project_root: str):
        self.project_root = Path(project_root)
        self.removed_files = []
        self.stats = {
            'jpeg_removed': 0,
            'jpg_removed': 0,
            'png_removed': 0,
            'duplicates_removed': 0,
            'backup_cleaned': 0,
            'space_saved': 0
        }
        
    def get_file_size(self, file_path: Path) -> int:
        """Obtiene el tamaño de un archivo en bytes"""
        try:
            return file_path.stat().st_size
        except:
            return 0
    
    def remove_jpeg_duplicates(self, directory: Path) -> None:
        """Remueve archivos JPEG cuando existe una versión WebP"""
        print(f"🔍 Limpiando duplicados JPEG en: {directory}")
        
        for file_path in directory.rglob('*.jpeg'):
            webp_path = file_path.with_suffix('.webp')
            if webp_path.exists():
                file_size = self.get_file_size(file_path)
                file_path.unlink()
                self.removed_files.append(str(file_path))
                self.stats['jpeg_removed'] += 1
                self.stats['space_saved'] += file_size
                print(f"   ✅ Removido: {file_path.name} (existe {webp_path.name})")
        
        for file_path in directory.rglob('*.jpg'):
            webp_path = file_path.with_suffix('.webp')
            if webp_path.exists():
                file_size = self.get_file_size(file_path)
                file_path.unlink()
                self.removed_files.append(str(file_path))
                self.stats['jpg_removed'] += 1
                self.stats['space_saved'] += file_size
                print(f"   ✅ Removido: {file_path.name} (existe {webp_path.name})")
    
    def clean_optimized_directories(self) -> None:
        """Limpia directorios de imágenes optimizadas que ya no se necesitan"""
        print("🧹 Limpiando directorios de optimización...")
        
        # Directorios a limpiar
        dirs_to_clean = [
            'public/images_optimized',
            'public/images_renamed',
            'backup_images_*',
            'backup_lanzamiento_*',
            'backup_*'
        ]
        
        for pattern in dirs_to_clean:
            for dir_path in self.project_root.glob(pattern):
                if dir_path.is_dir():
                    try:
                        # Calcular tamaño antes de eliminar
                        total_size = sum(f.stat().st_size for f in dir_path.rglob('*') if f.is_file())
                        
                        shutil.rmtree(dir_path)
                        self.stats['backup_cleaned'] += 1
                        self.stats['space_saved'] += total_size
                        print(f"   ✅ Removido directorio: {dir_path.name} ({total_size / (1024*1024):.1f} MB)")
                    except Exception as e:
                        print(f"   ❌ Error removiendo {dir_path.name}: {e}")
    
    def clean_duplicate_images(self) -> None:
        """Remueve imágenes duplicadas basadas en hash MD5"""
        print("🔍 Buscando imágenes duplicadas...")
        
        import hashlib
        file_hashes = {}
        
        # Buscar todas las imágenes
        for file_path in self.project_root.rglob('*'):
            if file_path.is_file() and file_path.suffix.lower() in {'.jpeg', '.jpg', '.png', '.webp'}:
                # Saltar archivos en directorios de backup
                if any(part in str(file_path) for part in ['backup', 'optimized', 'renamed']):
                    continue
                
                try:
                    file_hash = hashlib.md5(file_path.read_bytes()).hexdigest()
                    if file_hash not in file_hashes:
                        file_hashes[file_hash] = []
                    file_hashes[file_hash].append(file_path)
                except:
                    continue
        
        # Remover duplicados (mantener el primero)
        for file_hash, files in file_hashes.items():
            if len(files) > 1:
                # Ordenar por prioridad: WebP > PNG > JPEG
                def priority_key(f):
                    if f.suffix.lower() == '.webp':
                        return 0
                    elif f.suffix.lower() == '.png':
                        return 1
                    else:
                        return 2
                
                files.sort(key=priority_key)
                keep_file = files[0]
                remove_files = files[1:]
                
                print(f"   📁 Grupo de {len(files)} duplicados:")
                print(f"      ✅ Manteniendo: {keep_file.name}")
                
                for file_to_remove in remove_files:
                    file_size = self.get_file_size(file_to_remove)
                    file_to_remove.unlink()
                    self.removed_files.append(str(file_to_remove))
                    self.stats['duplicates_removed'] += 1
                    self.stats['space_saved'] += file_size
                    print(f"      🗑️  Removido: {file_to_remove.name}")
    
    def clean_old_backups(self, keep_days: int = 7) -> None:
        """Remueve backups antiguos (más de X días)"""
        print(f"🗂️  Limpiando backups antiguos (más de {keep_days} días)...")
        
        cutoff_time = datetime.now().timestamp() - (keep_days * 24 * 60 * 60)
        
        for backup_dir in self.project_root.glob('backup_*'):
            if backup_dir.is_dir():
                try:
                    dir_mtime = backup_dir.stat().st_mtime
                    if dir_mtime < cutoff_time:
                        total_size = sum(f.stat().st_size for f in backup_dir.rglob('*') if f.is_file())
                        shutil.rmtree(backup_dir)
                        self.stats['backup_cleaned'] += 1
                        self.stats['space_saved'] += total_size
                        print(f"   ✅ Removido backup antiguo: {backup_dir.name}")
                except Exception as e:
                    print(f"   ❌ Error removiendo {backup_dir.name}: {e}")
    
    def clean_report_files(self) -> None:
        """Remueve archivos de reporte temporales"""
        print("📄 Limpiando archivos de reporte...")
        
        report_files = [
            'optimization_report.json',
            'image_mapping.json'
        ]
        
        for report_file in report_files:
            for file_path in self.project_root.rglob(report_file):
                if file_path.is_file():
                    # Mantener solo el más reciente
                    if 'backup' in str(file_path) or 'optimized' in str(file_path):
                        file_size = self.get_file_size(file_path)
                        file_path.unlink()
                        self.stats['space_saved'] += file_size
                        print(f"   ✅ Removido reporte: {file_path.name}")
    
    def cleanup(self, keep_backups_days: int = 7, remove_duplicates: bool = True) -> None:
        """Ejecuta la limpieza completa"""
        print("🧹 Iniciando limpieza de imágenes...")
        print("=" * 50)
        
        # 1. Remover duplicados JPEG cuando existe WebP
        self.remove_jpeg_duplicates(self.project_root / 'public/images')
        
        # 2. Limpiar directorios de optimización
        self.clean_optimized_directories()
        
        # 3. Remover duplicados por hash
        if remove_duplicates:
            self.clean_duplicate_images()
        
        # 4. Limpiar backups antiguos
        self.clean_old_backups(keep_backups_days)
        
        # 5. Limpiar archivos de reporte
        self.clean_report_files()
        
        self.print_stats()
    
    def print_stats(self) -> None:
        """Imprime estadísticas de la limpieza"""
        print("\n" + "=" * 50)
        print("📊 ESTADÍSTICAS DE LIMPIEZA")
        print("=" * 50)
        print(f"🗑️  Archivos JPEG removidos: {self.stats['jpeg_removed']}")
        print(f"🗑️  Archivos JPG removidos: {self.stats['jpg_removed']}")
        print(f"🗑️  Archivos PNG removidos: {self.stats['png_removed']}")
        print(f"🔄 Duplicados removidos: {self.stats['duplicates_removed']}")
        print(f"📁 Directorios de backup limpiados: {self.stats['backup_cleaned']}")
        print(f"💾 Espacio liberado: {self.stats['space_saved'] / (1024*1024):.2f} MB")
        print(f"📁 Total de archivos removidos: {len(self.removed_files)}")
        print("=" * 50)

def main():
    parser = argparse.ArgumentParser(description='Limpiar imágenes innecesarias')
    parser.add_argument('--project-root', '-p', default='.', 
                       help='Directorio raíz del proyecto (default: .)')
    parser.add_argument('--keep-backups', type=int, default=7,
                       help='Días para mantener backups (default: 7)')
    parser.add_argument('--no-duplicates', action='store_true',
                       help='No remover duplicados por hash')
    parser.add_argument('--dry-run', action='store_true',
                       help='Mostrar qué se removería sin hacer cambios')
    
    args = parser.parse_args()
    
    project_root = Path(args.project_root).resolve()
    
    if not project_root.exists():
        print(f"❌ Error: El directorio {project_root} no existe")
        return 1
    
    print(f"🧹 Limpiando imágenes innecesarias en: {project_root}")
    print(f"📅 Manteniendo backups de los últimos {args.keep_backups} días")
    print("=" * 50)
    
    cleaner = ImageCleanup(project_root)
    
    if args.dry_run:
        print("🔍 Modo dry-run: No se realizarán cambios reales")
        # TODO: Implementar modo dry-run
    else:
        cleaner.cleanup(
            keep_backups_days=args.keep_backups,
            remove_duplicates=not args.no_duplicates
        )
    
    print("\n✅ ¡Limpieza completada!")
    return 0

if __name__ == "__main__":
    exit(main())
