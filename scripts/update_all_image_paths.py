#!/usr/bin/env python3
"""
Script para actualizar todas las rutas de imágenes en la aplicación
Convierte rutas de .jpeg/.jpg a .webp donde sea apropiado
"""

import os
import re
from pathlib import Path
import argparse
import json

class ImagePathUpdater:
    def __init__(self, project_root: str):
        self.project_root = Path(project_root)
        self.updated_files = []
        self.total_replacements = 0
        
    def update_file(self, file_path: Path) -> int:
        """Actualiza las rutas de imágenes en un archivo"""
        replacements = 0
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Patrones para reemplazar rutas de imágenes
            patterns = [
                # Rutas del equipo - convertir a WebP
                (r'(\/images\/team\/[^"\']*?)\.jpeg', r'\1.webp'),
                (r'(\/images\/team\/[^"\']*?)\.jpg', r'\1.webp'),
                
                # Rutas de donaciones - convertir a WebP
                (r'(\/images\/donaciones\/[^"\']*?)\.jpeg', r'\1.webp'),
                (r'(\/images\/donaciones\/[^"\']*?)\.jpg', r'\1.webp'),
                
                # Rutas de la galería - convertir a WebP
                (r'(\/images\/galleria\/[^"\']*?)\.jpeg', r'\1.webp'),
                (r'(\/images\/galleria\/[^"\']*?)\.jpg', r'\1.webp'),
                
                # Rutas del banner de campaña - convertir a WebP
                (r'(\/images\/campaign-banner)\.jpeg', r'\1.webp'),
                (r'(\/images\/campaign-banner)\.jpg', r'\1.webp'),
                
                # Rutas del gorila - mantener PNG
                # (r'(\/images\/gorilla)\.png', r'\1.webp'),  # Opcional: convertir a WebP
                
                # Rutas de videos - mantener MP4
                # (r'(\/images\/[^"\']*?)\.mp4', r'\1.webp'),  # No convertir videos
            ]
            
            for pattern, replacement in patterns:
                new_content = re.sub(pattern, replacement, content)
                if new_content != content:
                    content = new_content
                    replacements += 1
            
            # Solo escribir si hubo cambios
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                self.updated_files.append(str(file_path))
                print(f"✅ Actualizado: {file_path.relative_to(self.project_root)} ({replacements} cambios)")
            
            return replacements
            
        except Exception as e:
            print(f"❌ Error procesando {file_path}: {e}")
            return 0
    
    def update_project(self) -> None:
        """Actualiza todas las rutas de imágenes en el proyecto"""
        print("🔍 Buscando archivos para actualizar...")
        
        # Archivos a procesar
        file_patterns = [
            '**/*.ts',
            '**/*.tsx',
            '**/*.js',
            '**/*.jsx',
            '**/*.json'
        ]
        
        for pattern in file_patterns:
            for file_path in self.project_root.rglob(pattern):
                if file_path.is_file():
                    # Saltar node_modules, .next, y archivos de mapeo
                    if any(part in str(file_path) for part in ['node_modules', '.next', 'dist', 'build', 'image_mapping.json']):
                        continue
                    
                    replacements = self.update_file(file_path)
                    self.total_replacements += replacements
        
        print(f"\n📊 Resumen de actualizaciones:")
        print(f"📁 Archivos actualizados: {len(self.updated_files)}")
        print(f"🔄 Total de reemplazos: {self.total_replacements}")
        
        if self.updated_files:
            print(f"\n📋 Archivos modificados:")
            for file_path in self.updated_files:
                print(f"   - {file_path}")
    
    def check_image_files(self) -> None:
        """Verifica qué archivos de imagen existen"""
        print("\n🔍 Verificando archivos de imagen existentes...")
        
        image_dirs = [
            'public/images/team',
            'public/images/donaciones',
            'public/images/galleria',
            'public/images/lanzamiento/images'
        ]
        
        for dir_path in image_dirs:
            full_path = self.project_root / dir_path
            if full_path.exists():
                jpeg_files = list(full_path.glob('*.jpeg')) + list(full_path.glob('*.jpg'))
                webp_files = list(full_path.glob('*.webp'))
                png_files = list(full_path.glob('*.png'))
                
                print(f"\n📁 {dir_path}:")
                print(f"   📸 JPEG/JPG: {len(jpeg_files)}")
                print(f"   🖼️  WebP: {len(webp_files)}")
                print(f"   🖼️  PNG: {len(png_files)}")
                
                if jpeg_files and not webp_files:
                    print(f"   ⚠️  Necesita conversión a WebP")
                elif jpeg_files and webp_files:
                    print(f"   ✅ Tiene ambos formatos")
                elif webp_files:
                    print(f"   ✅ Solo WebP (optimizado)")

def main():
    parser = argparse.ArgumentParser(description='Actualizar todas las rutas de imágenes a WebP')
    parser.add_argument('--project-root', '-p', default='.', 
                       help='Directorio raíz del proyecto (default: .)')
    parser.add_argument('--dry-run', action='store_true',
                       help='Mostrar qué se cambiaría sin hacer cambios')
    parser.add_argument('--check-images', action='store_true',
                       help='Solo verificar qué archivos de imagen existen')
    
    args = parser.parse_args()
    
    project_root = Path(args.project_root).resolve()
    
    if not project_root.exists():
        print(f"❌ Error: El directorio {project_root} no existe")
        return 1
    
    print(f"🚀 Actualizando rutas de imágenes en: {project_root}")
    print("=" * 50)
    
    updater = ImagePathUpdater(project_root)
    
    if args.check_images:
        updater.check_image_files()
        return 0
    
    if args.dry_run:
        print("🔍 Modo dry-run: No se realizarán cambios reales")
        # TODO: Implementar modo dry-run
    else:
        updater.update_project()
    
    print("\n✅ ¡Actualización completada!")
    return 0

if __name__ == "__main__":
    exit(main())
