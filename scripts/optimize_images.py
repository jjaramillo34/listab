#!/usr/bin/env python3
"""
Script para optimizar imágenes del proyecto Lista B
- Convierte imágenes JPEG/PNG a WebP para mejor compresión
- Detecta y remueve imágenes duplicadas
- Redimensiona imágenes muy grandes
- Mantiene la estructura de carpetas
"""

import os
import sys
import hashlib
import shutil
from pathlib import Path
from PIL import Image
import argparse
from typing import Dict, List, Tuple
import json

class ImageOptimizer:
    def __init__(self, input_dir: str, output_dir: str, quality: int = 85, max_size: Tuple[int, int] = (1920, 1080)):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir)
        self.quality = quality
        self.max_size = max_size
        self.duplicates = {}
        self.stats = {
            'processed': 0,
            'converted': 0,
            'duplicates_removed': 0,
            'resized': 0,
            'errors': 0,
            'original_size': 0,
            'optimized_size': 0
        }
        
        # Formatos soportados
        self.supported_formats = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff'}
        self.output_format = '.webp'
        
    def calculate_hash(self, file_path: Path) -> str:
        """Calcula el hash MD5 de un archivo para detectar duplicados"""
        hash_md5 = hashlib.md5()
        with open(file_path, "rb") as f:
            for chunk in iter(lambda: f.read(4096), b""):
                hash_md5.update(chunk)
        return hash_md5.hexdigest()
    
    def find_duplicates(self) -> Dict[str, List[Path]]:
        """Encuentra archivos duplicados basados en hash MD5"""
        print("🔍 Buscando imágenes duplicadas...")
        file_hashes = {}
        
        for file_path in self.input_dir.rglob('*'):
            if file_path.is_file() and file_path.suffix.lower() in self.supported_formats:
                file_hash = self.calculate_hash(file_path)
                if file_hash not in file_hashes:
                    file_hashes[file_hash] = []
                file_hashes[file_hash].append(file_path)
        
        # Filtrar solo los duplicados
        duplicates = {hash_val: files for hash_val, files in file_hashes.items() if len(files) > 1}
        
        print(f"📊 Encontrados {len(duplicates)} grupos de duplicados")
        return duplicates
    
    def remove_duplicates(self, duplicates: Dict[str, List[Path]]) -> None:
        """Remueve archivos duplicados, manteniendo el primero de cada grupo"""
        print("🗑️  Removiendo duplicados...")
        
        for hash_val, files in duplicates.items():
            # Mantener el primer archivo, remover el resto
            keep_file = files[0]
            remove_files = files[1:]
            
            print(f"   Manteniendo: {keep_file.name}")
            for file_to_remove in remove_files:
                print(f"   Removiendo: {file_to_remove.name}")
                file_to_remove.unlink()
                self.stats['duplicates_removed'] += 1
    
    def resize_image_if_needed(self, img: Image.Image) -> Image.Image:
        """Redimensiona la imagen si es muy grande"""
        if img.size[0] > self.max_size[0] or img.size[1] > self.max_size[1]:
            img.thumbnail(self.max_size, Image.Resampling.LANCZOS)
            self.stats['resized'] += 1
        return img
    
    def optimize_image(self, input_path: Path, output_path: Path) -> bool:
        """Optimiza una imagen individual"""
        try:
            # Crear directorio de salida si no existe
            output_path.parent.mkdir(parents=True, exist_ok=True)
            
            # Abrir imagen
            with Image.open(input_path) as img:
                # Convertir a RGB si es necesario (para WebP)
                if img.mode in ('RGBA', 'LA', 'P'):
                    # Mantener transparencia para PNG
                    if img.mode == 'RGBA':
                        img = img.convert('RGBA')
                    else:
                        img = img.convert('RGB')
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Redimensionar si es necesario
                img = self.resize_image_if_needed(img)
                
                # Guardar como WebP
                save_kwargs = {
                    'format': 'WEBP',
                    'quality': self.quality,
                    'optimize': True
                }
                
                # Mantener transparencia si la imagen original la tenía
                if img.mode == 'RGBA':
                    save_kwargs['lossless'] = False
                
                img.save(output_path, **save_kwargs)
                
                # Actualizar estadísticas
                original_size = input_path.stat().st_size
                optimized_size = output_path.stat().st_size
                
                self.stats['original_size'] += original_size
                self.stats['optimized_size'] += optimized_size
                self.stats['converted'] += 1
                
                return True
                
        except Exception as e:
            print(f"❌ Error procesando {input_path}: {e}")
            self.stats['errors'] += 1
            return False
    
    def process_images(self) -> None:
        """Procesa todas las imágenes en el directorio"""
        print(f"🚀 Iniciando optimización de imágenes...")
        print(f"📁 Directorio origen: {self.input_dir}")
        print(f"📁 Directorio destino: {self.output_dir}")
        print(f"🎯 Calidad WebP: {self.quality}%")
        print(f"📏 Tamaño máximo: {self.max_size[0]}x{self.max_size[1]}")
        print("-" * 50)
        
        # Encontrar y remover duplicados
        duplicates = self.find_duplicates()
        if duplicates:
            self.remove_duplicates(duplicates)
        
        # Procesar imágenes
        for input_path in self.input_dir.rglob('*'):
            if input_path.is_file() and input_path.suffix.lower() in self.supported_formats:
                # Calcular ruta de salida
                relative_path = input_path.relative_to(self.input_dir)
                output_path = self.output_dir / relative_path.with_suffix(self.output_format)
                
                print(f"🔄 Procesando: {relative_path}")
                
                if self.optimize_image(input_path, output_path):
                    print(f"✅ Optimizado: {output_path.name}")
                else:
                    print(f"❌ Falló: {relative_path}")
                
                self.stats['processed'] += 1
        
        self.print_stats()
    
    def print_stats(self) -> None:
        """Imprime estadísticas del procesamiento"""
        print("\n" + "=" * 50)
        print("📊 ESTADÍSTICAS DE OPTIMIZACIÓN")
        print("=" * 50)
        print(f"📁 Imágenes procesadas: {self.stats['processed']}")
        print(f"✅ Conversiones exitosas: {self.stats['converted']}")
        print(f"🗑️  Duplicados removidos: {self.stats['duplicates_removed']}")
        print(f"📏 Imágenes redimensionadas: {self.stats['resized']}")
        print(f"❌ Errores: {self.stats['errors']}")
        
        if self.stats['original_size'] > 0:
            original_mb = self.stats['original_size'] / (1024 * 1024)
            optimized_mb = self.stats['optimized_size'] / (1024 * 1024)
            savings = ((self.stats['original_size'] - self.stats['optimized_size']) / self.stats['original_size']) * 100
            
            print(f"💾 Tamaño original: {original_mb:.2f} MB")
            print(f"💾 Tamaño optimizado: {optimized_mb:.2f} MB")
            print(f"💰 Ahorro: {savings:.1f}% ({original_mb - optimized_mb:.2f} MB)")
        
        print("=" * 50)
    
    def generate_report(self, report_path: str = "optimization_report.json") -> None:
        """Genera un reporte JSON con los resultados"""
        report = {
            'timestamp': str(Path().cwd()),
            'input_directory': str(self.input_dir),
            'output_directory': str(self.output_dir),
            'settings': {
                'quality': self.quality,
                'max_size': self.max_size,
                'output_format': self.output_format
            },
            'statistics': self.stats
        }
        
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        print(f"📄 Reporte guardado en: {report_path}")

def main():
    parser = argparse.ArgumentParser(description='Optimiza imágenes para web')
    parser.add_argument('--input', '-i', default='public/images', 
                       help='Directorio de entrada (default: public/images)')
    parser.add_argument('--output', '-o', default='public/images_optimized', 
                       help='Directorio de salida (default: public/images_optimized)')
    parser.add_argument('--quality', '-q', type=int, default=85, 
                       help='Calidad WebP 1-100 (default: 85)')
    parser.add_argument('--max-width', type=int, default=1920, 
                       help='Ancho máximo en píxeles (default: 1920)')
    parser.add_argument('--max-height', type=int, default=1080, 
                       help='Alto máximo en píxeles (default: 1080)')
    parser.add_argument('--report', '-r', default='optimization_report.json', 
                       help='Archivo de reporte JSON (default: optimization_report.json)')
    
    args = parser.parse_args()
    
    # Verificar que el directorio de entrada existe
    if not Path(args.input).exists():
        print(f"❌ Error: El directorio {args.input} no existe")
        sys.exit(1)
    
    # Crear optimizador
    optimizer = ImageOptimizer(
        input_dir=args.input,
        output_dir=args.output,
        quality=args.quality,
        max_size=(args.max_width, args.max_height)
    )
    
    try:
        # Procesar imágenes
        optimizer.process_images()
        
        # Generar reporte
        optimizer.generate_report(args.report)
        
        print("\n🎉 ¡Optimización completada exitosamente!")
        print(f"📁 Las imágenes optimizadas están en: {args.output}")
        
    except KeyboardInterrupt:
        print("\n⏹️  Optimización interrumpida por el usuario")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Error durante la optimización: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
