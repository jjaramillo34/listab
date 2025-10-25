#!/bin/bash

# Script para renombrar imágenes del lanzamiento a nombres simples
# Uso: ./scripts/rename_lanzamiento.sh [opciones]

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar ayuda
show_help() {
    echo -e "${BLUE}🖼️  Renombrador de Imágenes - Lista B${NC}"
    echo ""
    echo "Uso: $0 [opciones]"
    echo ""
    echo "Opciones:"
    echo "  -h, --help              Mostrar esta ayuda"
    echo "  -i, --input DIR         Directorio de entrada (default: public/images/lanzamiento/images)"
    echo "  -o, --output DIR        Directorio de salida (default: mismo que entrada)"
    echo "  --dry-run               Mostrar qué se cambiaría sin hacer cambios"
    echo "  --backup                Crear backup antes de renombrar"
    echo ""
    echo "Ejemplos:"
    echo "  $0                                    # Renombrar con configuración por defecto"
    echo "  $0 --dry-run                         # Ver qué se cambiaría"
    echo "  $0 --backup                          # Crear backup antes de renombrar"
    echo "  $0 -i public/images/lanzamiento/images -o public/images_renamed"
}

# Función para crear backup
create_backup() {
    local input_dir="$1"
    local backup_dir="backup_lanzamiento_$(date +%Y%m%d_%H%M%S)"
    
    echo -e "${YELLOW}💾 Creando backup en $backup_dir...${NC}"
    
    if [ -d "$input_dir" ]; then
        cp -r "$input_dir" "$backup_dir"
        echo -e "${GREEN}✅ Backup creado: $backup_dir${NC}"
    else
        echo -e "${RED}❌ Error: El directorio $input_dir no existe${NC}"
        exit 1
    fi
}

# Valores por defecto
INPUT_DIR="public/images/lanzamiento/images"
OUTPUT_DIR=""
DRY_RUN=false
BACKUP=false

# Parsear argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        -i|--input)
            INPUT_DIR="$2"
            shift 2
            ;;
        -o|--output)
            OUTPUT_DIR="$2"
            shift 2
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        --backup)
            BACKUP=true
            shift
            ;;
        *)
            echo -e "${RED}❌ Opción desconocida: $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

# Verificar que el directorio de entrada existe
if [ ! -d "$INPUT_DIR" ]; then
    echo -e "${RED}❌ Error: El directorio $INPUT_DIR no existe${NC}"
    exit 1
fi

# Crear backup si se solicita
if [ "$BACKUP" = true ]; then
    create_backup "$INPUT_DIR"
fi

# Mostrar configuración
echo -e "${BLUE}🖼️  Renombrador de Imágenes - Lista B${NC}"
echo -e "${BLUE}=====================================${NC}"
echo -e "📁 Directorio entrada: ${YELLOW}$INPUT_DIR${NC}"
if [ -n "$OUTPUT_DIR" ]; then
    echo -e "📁 Directorio salida: ${YELLOW}$OUTPUT_DIR${NC}"
else
    echo -e "📁 Directorio salida: ${YELLOW}$INPUT_DIR (mismo que entrada)${NC}"
fi
echo -e "🔍 Modo dry-run: ${YELLOW}$DRY_RUN${NC}"
echo ""

# Mostrar algunas imágenes que se van a renombrar
echo -e "${BLUE}📋 Ejemplos de imágenes que se van a renombrar:${NC}"
ls "$INPUT_DIR" | head -5 | while read -r file; do
    echo -e "   ${YELLOW}$file${NC} → ${GREEN}imageXXX${file##*.}${NC}"
done
echo ""

# Confirmar antes de continuar
if [ "$DRY_RUN" = false ]; then
    read -p "¿Continuar con el renombrado? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}⏹️  Renombrado cancelado${NC}"
        exit 0
    fi
fi

# Ejecutar renombrado
echo -e "${GREEN}🚀 Iniciando renombrado...${NC}"

if [ -n "$OUTPUT_DIR" ]; then
    python3 scripts/rename_images.py --input "$INPUT_DIR" --output "$OUTPUT_DIR" $([ "$DRY_RUN" = true ] && echo "--dry-run")
else
    python3 scripts/rename_images.py --input "$INPUT_DIR" $([ "$DRY_RUN" = true ] && echo "--dry-run")
fi

if [ "$DRY_RUN" = false ]; then
    echo -e "${GREEN}🎉 ¡Renombrado completado!${NC}"
    echo -e "📄 Revisa el mapeo en: ${YELLOW}image_mapping.json${NC}"
    echo ""
    echo -e "${BLUE}💡 Próximos pasos:${NC}"
    echo -e "1. Ejecutar: ${YELLOW}npm run build${NC} para verificar que todo funciona"
    echo -e "2. Ejecutar: ${YELLOW}npm run dev${NC} para probar localmente"
    echo -e "3. Las imágenes ahora tienen nombres simples: image001.webp, image002.webp, etc."
else
    echo -e "${BLUE}💡 Para aplicar los cambios, ejecuta sin --dry-run${NC}"
fi
