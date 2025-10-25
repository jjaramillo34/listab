#!/bin/bash

# Script para optimizar imágenes del proyecto Lista B
# Uso: ./scripts/optimize.sh [opciones]

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar ayuda
show_help() {
    echo -e "${BLUE}🖼️  Optimizador de Imágenes - Lista B${NC}"
    echo ""
    echo "Uso: $0 [opciones]"
    echo ""
    echo "Opciones:"
    echo "  -h, --help              Mostrar esta ayuda"
    echo "  -i, --input DIR         Directorio de entrada (default: public/images)"
    echo "  -o, --output DIR        Directorio de salida (default: public/images_optimized)"
    echo "  -q, --quality NUM       Calidad WebP 1-100 (default: 85)"
    echo "  --max-width NUM         Ancho máximo en píxeles (default: 1920)"
    echo "  --max-height NUM        Alto máximo en píxeles (default: 1080)"
    echo "  --install-deps          Instalar dependencias de Python"
    echo "  --backup                Crear backup antes de optimizar
  --update-paths          Actualizar rutas de imágenes en el código
  --deploy                Desplegar imágenes optimizadas al directorio de producción"
    echo ""
    echo "Ejemplos:"
    echo "  $0                                    # Optimizar con configuración por defecto"
    echo "  $0 -i public/images -o public/optimized  # Directorios personalizados"
    echo "  $0 --quality 90 --max-width 2560     # Calidad alta, resolución 4K"
    echo "  $0 --install-deps                    # Solo instalar dependencias"
    echo "  $0 --backup                          # Crear backup antes de optimizar"
}

# Función para instalar dependencias
install_dependencies() {
    echo -e "${YELLOW}📦 Instalando dependencias de Python...${NC}"
    
    if command -v pip3 &> /dev/null; then
        pip3 install -r requirements.txt
    elif command -v pip &> /dev/null; then
        pip install -r requirements.txt
    else
        echo -e "${RED}❌ Error: No se encontró pip o pip3${NC}"
        echo "Por favor instala Python y pip primero"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Dependencias instaladas correctamente${NC}"
}

# Función para crear backup
create_backup() {
    local input_dir="$1"
    local backup_dir="backup_$(date +%Y%m%d_%H%M%S)"
    
    echo -e "${YELLOW}💾 Creando backup en $backup_dir...${NC}"
    
    if [ -d "$input_dir" ]; then
        cp -r "$input_dir" "$backup_dir"
        echo -e "${GREEN}✅ Backup creado: $backup_dir${NC}"
    else
        echo -e "${RED}❌ Error: El directorio $input_dir no existe${NC}"
        exit 1
    fi
}

# Función para verificar Python
check_python() {
    if ! command -v python3 &> /dev/null; then
        echo -e "${RED}❌ Error: Python 3 no está instalado${NC}"
        echo "Por favor instala Python 3 primero"
        exit 1
    fi
}

# Función para verificar dependencias
check_dependencies() {
    if ! python3 -c "import PIL" &> /dev/null; then
        echo -e "${YELLOW}⚠️  Las dependencias de Python no están instaladas${NC}"
        echo "Ejecuta: $0 --install-deps"
        exit 1
    fi
}

# Valores por defecto
INPUT_DIR="public/images"
OUTPUT_DIR="public/images_optimized"
QUALITY=85
MAX_WIDTH=1920
MAX_HEIGHT=1080
INSTALL_DEPS=false
BACKUP=false
UPDATE_PATHS=false
DEPLOY=false

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
        -q|--quality)
            QUALITY="$2"
            shift 2
            ;;
        --max-width)
            MAX_WIDTH="$2"
            shift 2
            ;;
        --max-height)
            MAX_HEIGHT="$2"
            shift 2
            ;;
        --install-deps)
            INSTALL_DEPS=true
            shift
            ;;
        --backup)
            BACKUP=true
            shift
            ;;
        --update-paths)
            UPDATE_PATHS=true
            shift
            ;;
        --deploy)
            DEPLOY=true
            shift
            ;;
        *)
            echo -e "${RED}❌ Opción desconocida: $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

# Si solo se quiere instalar dependencias
if [ "$INSTALL_DEPS" = true ]; then
    check_python
    install_dependencies
    exit 0
fi

# Verificaciones
check_python
check_dependencies

# Crear backup si se solicita
if [ "$BACKUP" = true ]; then
    create_backup "$INPUT_DIR"
fi

# Verificar que el directorio de entrada existe
if [ ! -d "$INPUT_DIR" ]; then
    echo -e "${RED}❌ Error: El directorio $INPUT_DIR no existe${NC}"
    exit 1
fi

# Mostrar configuración
echo -e "${BLUE}🖼️  Optimizador de Imágenes - Lista B${NC}"
echo -e "${BLUE}=====================================${NC}"
echo -e "📁 Directorio origen: ${YELLOW}$INPUT_DIR${NC}"
echo -e "📁 Directorio destino: ${YELLOW}$OUTPUT_DIR${NC}"
echo -e "🎯 Calidad WebP: ${YELLOW}$QUALITY%${NC}"
echo -e "📏 Tamaño máximo: ${YELLOW}${MAX_WIDTH}x${MAX_HEIGHT}${NC}"
echo ""

# Confirmar antes de continuar
read -p "¿Continuar con la optimización? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⏹️  Optimización cancelada${NC}"
    exit 0
fi

# Ejecutar optimización
echo -e "${GREEN}🚀 Iniciando optimización...${NC}"
python3 scripts/optimize_images.py \
    --input "$INPUT_DIR" \
    --output "$OUTPUT_DIR" \
    --quality "$QUALITY" \
    --max-width "$MAX_WIDTH" \
    --max-height "$MAX_HEIGHT" \
    --report "optimization_report.json"

echo -e "${GREEN}🎉 ¡Optimización completada!${NC}"
echo -e "📄 Revisa el reporte en: ${YELLOW}optimization_report.json${NC}"
echo -e "📁 Imágenes optimizadas en: ${YELLOW}$OUTPUT_DIR${NC}"

# Actualizar rutas si se solicita
if [ "$UPDATE_PATHS" = true ]; then
    echo ""
    echo -e "${YELLOW}🔄 Actualizando rutas de imágenes en el código...${NC}"
    python3 scripts/update_image_paths.py
fi

# Desplegar si se solicita
if [ "$DEPLOY" = true ]; then
    echo ""
    echo -e "${YELLOW}🚀 Desplegando imágenes optimizadas...${NC}"
    ./scripts/deploy_optimized.sh
fi
