#!/bin/bash

# Script para desplegar imágenes optimizadas al directorio de producción
# Uso: ./scripts/deploy_optimized.sh

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Directorios
OPTIMIZED_DIR="public/images_optimized"
PRODUCTION_DIR="public/images"
BACKUP_DIR="backup_images_$(date +%Y%m%d_%H%M%S)"

echo -e "${BLUE}🚀 Desplegando Imágenes Optimizadas${NC}"
echo -e "${BLUE}===================================${NC}"

# Verificar que el directorio optimizado existe
if [ ! -d "$OPTIMIZED_DIR" ]; then
    echo -e "${RED}❌ Error: El directorio $OPTIMIZED_DIR no existe${NC}"
    echo "Ejecuta primero: ./scripts/optimize.sh"
    exit 1
fi

# Crear backup del directorio original
echo -e "${YELLOW}💾 Creando backup del directorio original...${NC}"
if [ -d "$PRODUCTION_DIR" ]; then
    cp -r "$PRODUCTION_DIR" "$BACKUP_DIR"
    echo -e "${GREEN}✅ Backup creado: $BACKUP_DIR${NC}"
else
    echo -e "${YELLOW}⚠️  El directorio $PRODUCTION_DIR no existe, creando uno nuevo${NC}"
fi

# Mostrar estadísticas antes del despliegue
echo -e "${BLUE}📊 Estadísticas del despliegue:${NC}"
echo -e "📁 Imágenes optimizadas: $(find $OPTIMIZED_DIR -name "*.webp" | wc -l)"
echo -e "📁 Videos: $(find $OPTIMIZED_DIR -name "*.mp4" | wc -l)"
echo -e "💾 Tamaño total optimizado: $(du -sh $OPTIMIZED_DIR | cut -f1)"

# Confirmar antes de continuar
echo ""
read -p "¿Continuar con el despliegue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⏹️  Despliegue cancelado${NC}"
    exit 0
fi

# Crear directorio de producción si no existe
mkdir -p "$PRODUCTION_DIR"

# Copiar imágenes optimizadas
echo -e "${YELLOW}📋 Copiando imágenes optimizadas...${NC}"

# Copiar archivos WebP
find "$OPTIMIZED_DIR" -name "*.webp" -exec cp --parents {} "$PRODUCTION_DIR" \;

# Copiar videos (mantener formato original)
find "$OPTIMIZED_DIR" -name "*.mp4" -exec cp --parents {} "$PRODUCTION_DIR" \;

# Copiar otros archivos importantes
if [ -f "$OPTIMIZED_DIR/campaign-banner.webp" ]; then
    cp "$OPTIMIZED_DIR/campaign-banner.webp" "$PRODUCTION_DIR/"
fi

if [ -f "$OPTIMIZED_DIR/gorilla.webp" ]; then
    cp "$OPTIMIZED_DIR/gorilla.webp" "$PRODUCTION_DIR/"
fi

echo -e "${GREEN}✅ Imágenes copiadas exitosamente${NC}"

# Mostrar estadísticas finales
echo ""
echo -e "${BLUE}📊 Estadísticas finales:${NC}"
echo -e "📁 Imágenes en producción: $(find $PRODUCTION_DIR -name "*.webp" | wc -l)"
echo -e "📁 Videos en producción: $(find $PRODUCTION_DIR -name "*.mp4" | wc -l)"
echo -e "💾 Tamaño total en producción: $(du -sh $PRODUCTION_DIR | cut -f1)"

# Verificar que las imágenes principales existen
echo ""
echo -e "${BLUE}🔍 Verificando imágenes principales...${NC}"

# Verificar imágenes del lanzamiento
LANZAMIENTO_COUNT=$(find "$PRODUCTION_DIR/lanzamiento/images" -name "*.webp" 2>/dev/null | wc -l || echo "0")
echo -e "📸 Imágenes del lanzamiento: $LANZAMIENTO_COUNT"

# Verificar imágenes del equipo
TEAM_COUNT=$(find "$PRODUCTION_DIR/team" -name "*.webp" 2>/dev/null | wc -l || echo "0")
echo -e "👥 Imágenes del equipo: $TEAM_COUNT"

# Verificar galería
GALLERY_COUNT=$(find "$PRODUCTION_DIR/galleria" -name "*.webp" 2>/dev/null | wc -l || echo "0")
echo -e "🖼️  Imágenes de la galería: $GALLERY_COUNT"

echo ""
echo -e "${GREEN}🎉 ¡Despliegue completado exitosamente!${NC}"
echo -e "📁 Las imágenes optimizadas están ahora en: ${YELLOW}$PRODUCTION_DIR${NC}"
echo -e "💾 Backup del directorio original: ${YELLOW}$BACKUP_DIR${NC}"
echo ""
echo -e "${BLUE}💡 Próximos pasos:${NC}"
echo -e "1. Ejecutar: ${YELLOW}npm run build${NC} para verificar que todo funciona"
echo -e "2. Ejecutar: ${YELLOW}npm run dev${NC} para probar localmente"
echo -e "3. Subir al servidor cuando esté listo"
echo ""
echo -e "${GREEN}✨ ¡Disfruta de imágenes optimizadas y carga más rápida!${NC}"
