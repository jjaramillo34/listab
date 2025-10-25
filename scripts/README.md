# 🖼️ Scripts de Optimización de Imágenes

Este directorio contiene scripts para optimizar las imágenes del proyecto Lista B, convirtiéndolas a formato WebP y removiendo duplicados.

## 📁 Archivos

- `optimize_images.py` - Script principal de Python para optimización
- `optimize.sh` - Script de bash para facilitar el uso
- `README.md` - Este archivo de documentación

## 🚀 Uso Rápido

### Opción 1: Script de Bash (Recomendado)

```bash
# Instalar dependencias
./scripts/optimize.sh --install-deps

# Optimizar con configuración por defecto
./scripts/optimize.sh

# Optimizar con configuración personalizada
./scripts/optimize.sh -i public/images -o public/images_optimized --quality 90

# Crear backup antes de optimizar
./scripts/optimize.sh --backup
```

### Opción 2: Script de Python Directo

```bash
# Instalar dependencias
pip install -r requirements.txt

# Ejecutar optimización
python3 scripts/optimize_images.py --input public/images --output public/images_optimized
```

## ⚙️ Opciones de Configuración

### Script de Bash (`optimize.sh`)

| Opción | Descripción | Valor por Defecto |
|--------|-------------|-------------------|
| `-h, --help` | Mostrar ayuda | - |
| `-i, --input DIR` | Directorio de entrada | `public/images` |
| `-o, --output DIR` | Directorio de salida | `public/images_optimized` |
| `-q, --quality NUM` | Calidad WebP (1-100) | `85` |
| `--max-width NUM` | Ancho máximo en píxeles | `1920` |
| `--max-height NUM` | Alto máximo en píxeles | `1080` |
| `--install-deps` | Solo instalar dependencias | - |
| `--backup` | Crear backup antes de optimizar | - |

### Script de Python (`optimize_images.py`)

| Opción | Descripción | Valor por Defecto |
|--------|-------------|-------------------|
| `--input, -i` | Directorio de entrada | `public/images` |
| `--output, -o` | Directorio de salida | `public/images_optimized` |
| `--quality, -q` | Calidad WebP (1-100) | `85` |
| `--max-width` | Ancho máximo en píxeles | `1920` |
| `--max-height` | Alto máximo en píxeles | `1080` |
| `--report, -r` | Archivo de reporte JSON | `optimization_report.json` |

## 📊 Características

### ✅ Optimización de Imágenes
- **Conversión a WebP**: Mejor compresión que JPEG/PNG
- **Redimensionado automático**: Imágenes muy grandes se redimensionan
- **Calidad configurable**: Ajusta la calidad según tus necesidades
- **Preservación de transparencia**: Mantiene transparencia en PNG

### 🗑️ Detección de Duplicados
- **Hash MD5**: Detecta archivos idénticos
- **Remoción automática**: Elimina duplicados manteniendo el primero
- **Reporte detallado**: Muestra cuántos duplicados se encontraron

### 📈 Estadísticas Detalladas
- **Tamaño original vs optimizado**: Muestra el ahorro de espacio
- **Porcentaje de compresión**: Calcula la reducción de tamaño
- **Conteo de archivos**: Procesados, convertidos, duplicados, errores
- **Reporte JSON**: Genera un archivo con todos los datos

## 🎯 Ejemplos de Uso

### Optimización Básica
```bash
./scripts/optimize.sh
```
- Procesa `public/images/`
- Guarda en `public/images_optimized/`
- Calidad 85%
- Máximo 1920x1080px

### Optimización de Alta Calidad
```bash
./scripts/optimize.sh --quality 95 --max-width 2560 --max-height 1440
```
- Calidad 95% (casi sin pérdida)
- Resolución máxima 2560x1440px (2K)

### Optimización con Backup
```bash
./scripts/optimize.sh --backup
```
- Crea backup antes de procesar
- Backup en `backup_YYYYMMDD_HHMMSS/`

### Solo Instalar Dependencias
```bash
./scripts/optimize.sh --install-deps
```
- Instala solo las dependencias de Python
- No procesa imágenes

## 📋 Requisitos

### Sistema
- **Python 3.6+**: Para ejecutar el script
- **Bash**: Para el script de conveniencia (Linux/macOS)
- **Pillow**: Biblioteca de Python para procesamiento de imágenes

### Instalación de Dependencias
```bash
# Opción 1: Usar el script
./scripts/optimize.sh --install-deps

# Opción 2: Instalación manual
pip install -r requirements.txt

# Opción 3: Con pip3
pip3 install -r requirements.txt
```

## 📁 Estructura de Salida

```
public/images_optimized/
├── lanzamiento/
│   ├── images/
│   │   ├── image1.webp
│   │   ├── image2.webp
│   │   └── ...
│   └── videos/
│       ├── video1.mp4
│       └── ...
├── team/
│   ├── daniel.webp
│   ├── sofy.webp
│   └── ...
└── ...
```

## 📊 Reporte de Optimización

El script genera un reporte JSON con información detallada:

```json
{
  "timestamp": "2025-01-27T10:30:00",
  "input_directory": "public/images",
  "output_directory": "public/images_optimized",
  "settings": {
    "quality": 85,
    "max_size": [1920, 1080],
    "output_format": ".webp"
  },
  "statistics": {
    "processed": 102,
    "converted": 102,
    "duplicates_removed": 5,
    "resized": 15,
    "errors": 0,
    "original_size": 15728640,
    "optimized_size": 3145728
  }
}
```

## 🔧 Solución de Problemas

### Error: "Python 3 no está instalado"
```bash
# macOS con Homebrew
brew install python3

# Ubuntu/Debian
sudo apt update && sudo apt install python3 python3-pip

# Windows
# Descargar desde python.org
```

### Error: "No se encontró pip"
```bash
# Instalar pip
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py
```

### Error: "Permission denied" en el script
```bash
# Hacer el script ejecutable
chmod +x scripts/optimize.sh
```

### Error: "PIL no está instalado"
```bash
# Instalar Pillow
pip3 install Pillow
# o
pip install Pillow
```

## 🎨 Formatos Soportados

### Entrada
- ✅ JPEG (.jpg, .jpeg)
- ✅ PNG (.png)
- ✅ BMP (.bmp)
- ✅ TIFF (.tiff)

### Salida
- ✅ WebP (.webp) - Formato optimizado para web

## 💡 Consejos de Optimización

### Calidad Recomendada
- **85%**: Buen balance entre calidad y tamaño (recomendado)
- **90%**: Alta calidad, archivos más grandes
- **75%**: Archivos más pequeños, calidad aceptable
- **95%**: Calidad casi sin pérdida, archivos grandes

### Tamaño Máximo Recomendado
- **1920x1080**: Para la mayoría de casos (Full HD)
- **2560x1440**: Para imágenes de alta resolución (2K)
- **3840x2160**: Para imágenes 4K (archivos muy grandes)

### Antes de Optimizar
1. **Hacer backup**: Siempre respalda tus imágenes originales
2. **Revisar duplicados**: El script los detecta automáticamente
3. **Verificar espacio**: Asegúrate de tener espacio suficiente
4. **Probar con pocas imágenes**: Prueba primero con una carpeta pequeña

## 🚀 Integración con el Proyecto

Después de optimizar las imágenes:

1. **Actualizar rutas**: Cambiar las rutas en el código de `.jpeg` a `.webp`
2. **Verificar funcionamiento**: Probar que todas las imágenes se cargan correctamente
3. **Actualizar build**: Ejecutar `npm run build` para verificar
4. **Deploy**: Subir las imágenes optimizadas al servidor

## 📞 Soporte

Si encuentras problemas:

1. **Revisar logs**: El script muestra información detallada
2. **Verificar permisos**: Asegúrate de tener permisos de escritura
3. **Comprobar dependencias**: Ejecuta `./scripts/optimize.sh --install-deps`
4. **Revisar espacio**: Verifica que tienes espacio suficiente en disco

¡Disfruta de imágenes optimizadas y un sitio web más rápido! 🚀✨
