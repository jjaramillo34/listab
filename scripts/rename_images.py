#!/usr/bin/env python3
"""
Script para renombrar imágenes del lanzamiento a nombres más simples
Convierte nombres de WhatsApp a image1.webp, image2.webp, etc.
"""

import os
import shutil
from pathlib import Path
import argparse
import json
from datetime import datetime

class ImageRenamer:
    def __init__(self, input_dir: str, output_dir: str = None):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir) if output_dir else self.input_dir
        self.renamed_files = []
        self.stats = {
            'total_files': 0,
            'renamed_files': 0,
            'skipped_files': 0,
            'errors': 0
        }
        
    def get_supported_formats(self):
        """Obtiene los formatos de imagen soportados"""
        return {'.jpeg', '.jpg', '.png', '.webp', '.bmp', '.tiff'}
    
    def get_image_files(self):
        """Obtiene todos los archivos de imagen en el directorio"""
        image_files = []
        for file_path in self.input_dir.rglob('*'):
            if file_path.is_file() and file_path.suffix.lower() in self.get_supported_formats():
                image_files.append(file_path)
        return sorted(image_files)
    
    def generate_new_name(self, index: int, original_path: Path) -> str:
        """Genera un nuevo nombre para la imagen"""
        # Mantener la estructura de directorios
        relative_path = original_path.relative_to(self.input_dir)
        parent_dir = relative_path.parent
        
        # Generar nuevo nombre
        new_name = f"image{index:03d}{original_path.suffix.lower()}"
        
        # Crear nueva ruta
        new_path = self.output_dir / parent_dir / new_name
        return new_path
    
    def rename_images(self, dry_run: bool = False) -> None:
        """Renombra todas las imágenes en el directorio"""
        print(f"🔍 Buscando imágenes en: {self.input_dir}")
        
        image_files = self.get_image_files()
        self.stats['total_files'] = len(image_files)
        
        if not image_files:
            print("❌ No se encontraron imágenes para renombrar")
            return
        
        print(f"📁 Encontradas {len(image_files)} imágenes")
        print(f"📁 Directorio de salida: {self.output_dir}")
        
        if dry_run:
            print("🔍 Modo dry-run: Mostrando cambios que se realizarían")
        
        for i, image_file in enumerate(image_files, 1):
            try:
                new_path = self.generate_new_name(i, image_file)
                
                # Crear directorio de destino si no existe
                new_path.parent.mkdir(parents=True, exist_ok=True)
                
                if dry_run:
                    print(f"   {image_file.name} → {new_path.name}")
                else:
                    # Copiar archivo con nuevo nombre
                    shutil.copy2(image_file, new_path)
                    self.renamed_files.append({
                        'original': str(image_file),
                        'new': str(new_path),
                        'index': i
                    })
                    print(f"✅ {image_file.name} → {new_path.name}")
                
                self.stats['renamed_files'] += 1
                
            except Exception as e:
                print(f"❌ Error renombrando {image_file.name}: {e}")
                self.stats['errors'] += 1
        
        self.print_stats()
        
        if not dry_run:
            self.generate_mapping_file()
    
    def generate_mapping_file(self) -> None:
        """Genera un archivo JSON con el mapeo de nombres"""
        mapping_file = self.output_dir / "image_mapping.json"
        
        mapping_data = {
            'timestamp': datetime.now().isoformat(),
            'input_directory': str(self.input_dir),
            'output_directory': str(self.output_dir),
            'total_files': self.stats['total_files'],
            'renamed_files': self.stats['renamed_files'],
            'mapping': self.renamed_files
        }
        
        with open(mapping_file, 'w', encoding='utf-8') as f:
            json.dump(mapping_data, f, indent=2, ensure_ascii=False)
        
        print(f"📄 Mapeo guardado en: {mapping_file}")
    
    def print_stats(self) -> None:
        """Imprime estadísticas del proceso"""
        print("\n" + "=" * 50)
        print("📊 ESTADÍSTICAS DE RENOMBRADO")
        print("=" * 50)
        print(f"📁 Total de archivos: {self.stats['total_files']}")
        print(f"✅ Archivos renombrados: {self.stats['renamed_files']}")
        print(f"⏭️  Archivos omitidos: {self.stats['skipped_files']}")
        print(f"❌ Errores: {self.stats['errors']}")
        print("=" * 50)

def main():
    parser = argparse.ArgumentParser(description='Renombrar imágenes a nombres simples')
    parser.add_argument('--input', '-i', default='public/images/lanzamiento/images',
                       help='Directorio de entrada (default: public/images/lanzamiento/images)')
    parser.add_argument('--output', '-o', 
                       help='Directorio de salida (default: mismo que entrada)')
    parser.add_argument('--dry-run', action='store_true',
                       help='Mostrar qué se cambiaría sin hacer cambios')
    
    args = parser.parse_args()
    
    # Verificar que el directorio de entrada existe
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ Error: El directorio {input_path} no existe")
        return 1
    
    # Usar directorio de entrada como salida si no se especifica
    output_path = Path(args.output) if args.output else input_path
    
    print(f"🚀 Renombrando imágenes de WhatsApp a nombres simples")
    print(f"📁 Entrada: {input_path}")
    print(f"📁 Salida: {output_path}")
    print("=" * 50)
    
    renamer = ImageRenamer(input_path, output_path)
    
    try:
        renamer.rename_images(dry_run=args.dry_run)
        print("\n🎉 ¡Renombrado completado exitosamente!")
        return 0
    except KeyboardInterrupt:
        print("\n⏹️  Renombrado interrumpido por el usuario")
        return 1
    except Exception as e:
        print(f"\n❌ Error durante el renombrado: {e}")
        return 1

if __name__ == "__main__":
    exit(main())
