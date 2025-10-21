# 📝 Cómo Agregar Donantes

## Archivo: `lib/donorsData.ts`

Este archivo contiene toda la información de donantes y patrocinadores.

## ✅ Agregar un Donante Individual o Familia

Abre `lib/donorsData.ts` y agrega un nuevo objeto al array `donors`:

```typescript
export const donors: Donor[] = [
  // ... donantes existentes ...
  {
    name: "Familia Nuevo",           // Nombre del donante o familia
    type: "family",                  // "family" o "individual"
    amount: "gold",                  // "platinum", "gold", "silver", o "bronze"
    message: "Mensaje opcional"      // Opcional: mensaje de agradecimiento
  }
]
```

## 🏢 Agregar un Patrocinador con Logo

1. Guarda el logo en `/public/images/sponsors/nombre-empresa.png`
2. Agrega el patrocinador al array `sponsors`:

```typescript
export const sponsors: Sponsor[] = [
  // ... patrocinadores existentes ...
  {
    name: "Nombre de la Empresa",
    logo: "/images/sponsors/nombre-empresa.png",
    website: "https://www.empresa.com",    // Opcional
    tier: "gold"                            // "platinum", "gold", "silver", o "bronze"
  }
]
```

## 💎 Niveles de Donación

- **Platino** 💎: $100+ - Color gris brillante
- **Oro** 🥇: $50+ - Color dorado
- **Plata** 🥈: $25+ - Color plateado
- **Bronce** 🥉: $10+ - Color naranja/bronce

## 📋 Ejemplo Completo

```typescript
// Donante Familia
{
  name: "Familia Rodríguez",
  type: "family",
  amount: "platinum",
  message: "¡Apoyamos a Lista B!"
}

// Donante Individual
{
  name: "María González",
  type: "individual",
  amount: "silver"
}

// Patrocinador con Logo
{
  name: "Restaurante El Sabor",
  logo: "/images/sponsors/el-sabor.png",
  website: "https://www.elsabor.com",
  tier: "gold"
}
```

## 🔄 Después de Agregar

1. Guarda el archivo `lib/donorsData.ts`
2. La página se actualizará automáticamente en desarrollo
3. Listo! ✨

