#!/usr/bin/env python3
"""
Script para actualizar rutas de imágenes en el código
Cambia las rutas de .jpeg/.jpg a .webp en los archivos del proyecto
"""

import os
import re
from pathlib import Path
import argparse

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
                # Rutas que terminan en .jpeg
                (r'(\/images\/[^"\']*?)\.jpeg', r'\1.webp'),
                # Rutas que terminan en .jpg
                (r'(\/images\/[^"\']*?)\.jpg', r'\1.webp'),
                # Rutas específicas del lanzamiento
                (r'(\/images\/lanzamiento\/images\/image\d+)\.jpeg', r'\1.webp'),
                # Rutas del equipo
                (r'(\/images\/team\/[^"\']*?)\.jpeg', r'\1.webp'),
                # Rutas de la galería
                (r'(\/images\/galleria\/[^"\']*?)\.jpeg', r'\1.webp'),
                # Rutas de donaciones
                (r'(\/images\/donaciones\/[^"\']*?)\.jpeg', r'\1.webp'),
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
                    # Saltar node_modules y .next
                    if any(part in str(file_path) for part in ['node_modules', '.next', 'dist', 'build']):
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

def main():
    parser = argparse.ArgumentParser(description='Actualizar rutas de imágenes a WebP')
    parser.add_argument('--project-root', '-p', default='.', 
                       help='Directorio raíz del proyecto (default: .)')
    parser.add_argument('--dry-run', action='store_true',
                       help='Mostrar qué se cambiaría sin hacer cambios')
    
    args = parser.parse_args()
    
    project_root = Path(args.project_root).resolve()
    
    if not project_root.exists():
        print(f"❌ Error: El directorio {project_root} no existe")
        return 1
    
    print(f"🚀 Actualizando rutas de imágenes en: {project_root}")
    print("=" * 50)
    
    updater = ImagePathUpdater(project_root)
    
    if args.dry_run:
        print("🔍 Modo dry-run: No se realizarán cambios reales")
        # TODO: Implementar modo dry-run
    else:
        updater.update_project()
    
    print("\n✅ ¡Actualización completada!")
    return 0

if __name__ == "__main__":
    exit(main())
