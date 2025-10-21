# Sponsors Logos

Add your sponsor logos here.

## Instructions

1. Save sponsor logos in this folder
2. Recommended format: PNG with transparent background
3. Recommended size: 400x200 pixels (width x height)
4. Name format: `company-name.png`

## Example

If you have a sponsor called "Super Market", save the logo as:
- `super-market.png`

Then update the `sponsors` array in `/lib/donorsData.ts`:

```typescript
{
  name: "Super Market",
  logo: "/images/sponsors/super-market.png",
  website: "https://www.supermarket.com",
  tier: "gold"
}
```

## Placeholder

A placeholder image (`placeholder.png`) will be shown for sponsors without a logo file.

