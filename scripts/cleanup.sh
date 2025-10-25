#!/bin/bash

# Script para limpiar imágenes innecesarias
# Uso: ./scripts/cleanup.sh [opciones]

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar ayuda
show_help() {
    echo -e "${BLUE}🧹 Limpiador de Imágenes - Lista B${NC}"
    echo ""
    echo "Uso: $0 [opciones]"
    echo ""
    echo "Opciones:"
    echo "  -h, --help              Mostrar esta ayuda"
    echo "  -p, --project-root DIR  Directorio raíz del proyecto (default: .)"
    echo "  --keep-backups DAYS     Días para mantener backups (default: 7)"
    echo "  --no-duplicates         No remover duplicados por hash"
    echo "  --dry-run               Mostrar qué se removería sin hacer cambios"
    echo "  --aggressive            Limpieza agresiva (remover más archivos)"
    echo ""
    echo "Ejemplos:"
    echo "  $0                                    # Limpieza estándar"
    echo "  $0 --dry-run                         # Ver qué se removería"
    echo "  $0 --keep-backups 3                  # Mantener solo 3 días de backups"
    echo "  $0 --aggressive                      # Limpieza más agresiva"
    echo "  $0 --no-duplicates                   # No remover duplicados por hash"
}

# Función para mostrar estadísticas antes de limpiar
show_pre_cleanup_stats() {
    echo -e "${BLUE}📊 Estadísticas antes de la limpieza:${NC}"
    
    # Contar archivos por tipo
    jpeg_count=$(find public/images -name "*.jpeg" -o -name "*.jpg" 2>/dev/null | wc -l || echo "0")
    webp_count=$(find public/images -name "*.webp" 2>/dev/null | wc -l || echo "0")
    png_count=$(find public/images -name "*.png" 2>/dev/null | wc -l || echo "0")
    
    echo -e "📸 Imágenes JPEG: ${YELLOW}$jpeg_count${NC}"
    echo -e "🖼️  Imágenes WebP: ${YELLOW}$webp_count${NC}"
    echo -e "🖼️  Imágenes PNG: ${YELLOW}$png_count${NC}"
    
    # Calcular tamaño total
    total_size=$(du -sh public/images 2>/dev/null | cut -f1 || echo "0")
    echo -e "💾 Tamaño total: ${YELLOW}$total_size${NC}"
    
    # Contar directorios de backup
    backup_count=$(find . -maxdepth 1 -name "backup_*" -type d 2>/dev/null | wc -l || echo "0")
    echo -e "📁 Directorios de backup: ${YELLOW}$backup_count${NC}"
    
    echo ""
}

# Valores por defecto
PROJECT_ROOT="."
KEEP_BACKUPS=7
NO_DUPLICATES=false
DRY_RUN=false
AGGRESSIVE=false

# Parsear argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        -p|--project-root)
            PROJECT_ROOT="$2"
            shift 2
            ;;
        --keep-backups)
            KEEP_BACKUPS="$2"
            shift 2
            ;;
        --no-duplicates)
            NO_DUPLICATES=true
            shift
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        --aggressive)
            AGGRESSIVE=true
            KEEP_BACKUPS=1  # Solo mantener 1 día de backups
            shift
            ;;
        *)
            echo -e "${RED}❌ Opción desconocida: $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

# Verificar que el directorio del proyecto existe
if [ ! -d "$PROJECT_ROOT" ]; then
    echo -e "${RED}❌ Error: El directorio $PROJECT_ROOT no existe${NC}"
    exit 1
fi

# Mostrar estadísticas antes de limpiar
show_pre_cleanup_stats

# Mostrar configuración
echo -e "${BLUE}🧹 Limpiador de Imágenes - Lista B${NC}"
echo -e "${BLUE}===================================${NC}"
echo -e "📁 Directorio del proyecto: ${YELLOW}$PROJECT_ROOT${NC}"
echo -e "📅 Mantener backups: ${YELLOW}$KEEP_BACKUPS días${NC}"
echo -e "🔄 Remover duplicados: ${YELLOW}$([ "$NO_DUPLICATES" = true ] && echo "No" || echo "Sí")${NC}"
echo -e "🔍 Modo dry-run: ${YELLOW}$DRY_RUN${NC}"
echo -e "⚡ Modo agresivo: ${YELLOW}$AGGRESSIVE${NC}"
echo ""

# Mostrar qué se va a limpiar
echo -e "${BLUE}📋 Archivos que se van a limpiar:${NC}"

# JPEG duplicados
jpeg_duplicates=$(find public/images -name "*.jpeg" -o -name "*.jpg" 2>/dev/null | while read -r file; do
    webp_file="${file%.*}.webp"
    if [ -f "$webp_file" ]; then
        echo "$file"
    fi
done | wc -l)
echo -e "   🗑️  Archivos JPEG duplicados: ${YELLOW}$jpeg_duplicates${NC}"

# Directorios de backup
backup_dirs=$(find . -maxdepth 1 -name "backup_*" -type d 2>/dev/null | wc -l)
echo -e "   📁 Directorios de backup: ${YELLOW}$backup_dirs${NC}"

# Directorios de optimización
opt_dirs=$(find . -maxdepth 1 -name "*optimized*" -o -name "*renamed*" 2>/dev/null | wc -l)
echo -e "   🗂️  Directorios de optimización: ${YELLOW}$opt_dirs${NC}"

echo ""

# Confirmar antes de continuar
if [ "$DRY_RUN" = false ]; then
    read -p "¿Continuar con la limpieza? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}⏹️  Limpieza cancelada${NC}"
        exit 0
    fi
fi

# Ejecutar limpieza
echo -e "${GREEN}🚀 Iniciando limpieza...${NC}"

if [ "$DRY_RUN" = true ]; then
    python3 scripts/cleanup_images.py --project-root "$PROJECT_ROOT" --keep-backups "$KEEP_BACKUPS" $([ "$NO_DUPLICATES" = true ] && echo "--no-duplicates") --dry-run
else
    python3 scripts/cleanup_images.py --project-root "$PROJECT_ROOT" --keep-backups "$KEEP_BACKUPS" $([ "$NO_DUPLICATES" = true ] && echo "--no-duplicates")
fi

if [ "$DRY_RUN" = false ]; then
    echo -e "${GREEN}🎉 ¡Limpieza completada!${NC}"
    echo ""
    echo -e "${BLUE}📊 Estadísticas después de la limpieza:${NC}"
    
    # Mostrar estadísticas después
    jpeg_count=$(find public/images -name "*.jpeg" -o -name "*.jpg" 2>/dev/null | wc -l || echo "0")
    webp_count=$(find public/images -name "*.webp" 2>/dev/null | wc -l || echo "0")
    total_size=$(du -sh public/images 2>/dev/null | cut -f1 || echo "0")
    
    echo -e "📸 Imágenes JPEG restantes: ${YELLOW}$jpeg_count${NC}"
    echo -e "🖼️  Imágenes WebP: ${YELLOW}$webp_count${NC}"
    echo -e "💾 Tamaño total: ${YELLOW}$total_size${NC}"
    
    echo ""
    echo -e "${BLUE}💡 Próximos pasos:${NC}"
    echo -e "1. Ejecutar: ${YELLOW}npm run build${NC} para verificar que todo funciona"
    echo -e "2. Ejecutar: ${YELLOW}npm run dev${NC} para probar localmente"
    echo -e "3. Las imágenes están optimizadas y limpias"
else
    echo -e "${BLUE}💡 Para aplicar la limpieza, ejecuta sin --dry-run${NC}"
fi
