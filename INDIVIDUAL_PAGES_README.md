# Individual Team Member Pages

## 🎯 Overview

Each team member now has their own dedicated page with a beautiful photo gallery, personal information, and hobbies. These pages follow the orange theme and provide an immersive experience.

## 📍 Routes

Access individual team member pages at:

- `/daniel` - Daniel Córdova (Presidente)
- `/ian` - Ian Vilaña (Vice Presidente)
- `/sofy` - Sofy Jaramillo (Tesorera)
- `/valentina` - Valentina Cáceres (Secretaria)
- `/majo` - Majo Guevara (Vocal)
- `/giuliana` - Giuliana Carrera (Vocal)

## ✨ Features

### 1. **Hero Section**
- Large profile photo with animated border
- Name, position, age, and year
- Personal quote
- Social media links (Instagram, Email)
- Animated mascot
- Orange gradient background with animated circles

### 2. **Biography Section**
- Personal bio and campaign message
- Clean card design with orange accent

### 3. **Hobbies Section**
- 3 hobbies per team member
- Interactive cards with icons
- Detailed descriptions
- Categories: painting, music, gaming, reading, photography, cooking, travel, sports

### 4. **Photo Gallery**
- Grid layout with 5 photos per member
- Hover effects and animations
- Click to open lightbox
- Full-screen image viewer
- Navigation between photos
- Photo counter

### 5. **Call to Action**
- Vote button
- Link back to team section
- Gradient background

## 📁 File Structure

```
/app/
├── [member]/
│   ├── page.tsx          # Dynamic member page
│   └── not-found.tsx     # 404 page for invalid members
/lib/
├── teamData.ts           # Centralized team data
/components/
├── PhotoGallery.tsx      # Photo gallery with lightbox
├── TeamCard.tsx          # Updated with navigation
└── ...
/public/images/team/
├── sofy1.jpeg            # Individual photos
├── sofy2.jpeg
├── sofy3.jpeg
├── sofy4.jpeg
├── sofy5.jpeg
└── ...                   # Photos for other members
```

## 📸 Photo Requirements

### Team Photos Needed:

For each team member, add 5 photos in `/public/images/team/`:

**Daniel:**
- `daniel1.jpeg`
- `daniel2.jpeg`
- `daniel3.jpeg`
- `daniel4.jpeg`
- `daniel5.jpeg`

**Ian:**
- `ian1.jpeg`
- `ian2.jpeg`
- `ian3.jpeg`
- `ian4.jpeg`
- `ian5.jpeg`

**Sofy:** ✅ (Already added)
- `sofy1.jpeg`
- `sofy2.jpeg`
- `sofy3.jpeg`
- `sofy4.jpeg`
- `sofy5.jpeg`

**Valentina:**
- `valentina1.jpeg`
- `valentina2.jpeg`
- `valentina3.jpeg`
- `valentina4.jpeg`
- `valentina5.jpeg`

**Majo:**
- `majo1.jpeg`
- `majo2.jpeg`
- `majo3.jpeg`
- `majo4.jpeg`
- `majo5.jpeg`

**Giuliana:**
- `giuliana1.jpeg`
- `giuliana2.jpeg`
- `giuliana3.jpeg`
- `giuliana4.jpeg`
- `giuliana5.jpeg`

### Photo Specifications:
- **Format**: JPEG or PNG
- **Recommended Size**: 800x800px or larger
- **Aspect Ratio**: Square or similar
- **Quality**: High resolution, clear and well-lit
- **Content**: Professional but friendly, showing personality

## 🎨 Design Features

### Color Scheme:
- Primary: Orange (#FF6B35)
- Gradients: Orange to darker orange
- Accents: White, yellow for highlights
- Background: Soft orange gradient

### Animations:
- Framer Motion for smooth transitions
- Hover effects on cards and images
- Lightbox transitions
- Scroll-based reveals
- Rotating borders and elements

### Responsive Design:
- Mobile-first approach
- Grid adjusts from 2 to 5 columns
- Stacked layout on mobile
- Touch-friendly interactions

## 🔗 Navigation

### From Main Page:
Click "¡Conóceme!" button on any team member card → Navigates to `/{member-id}`

### From Individual Page:
- "Volver a Lista B" → Returns to home page
- "Conoce al Equipo" → Scrolls to team section
- "Vota por Lista B" → Returns to home

## 🚀 How It Works

### Dynamic Routing:
- Next.js dynamic routes using `[member]` folder
- Team data centralized in `/lib/teamData.ts`
- Automatic route generation for all team members
- 404 handling for invalid member IDs

### Data Management:
```typescript
// lib/teamData.ts
export const teamMembers: TeamMember[] = [...]
export function getTeamMemberById(id: string)
export function getAllTeamMemberIds()
```

### Component Hierarchy:
```
[member]/page.tsx
├── PhotoGallery
├── AnimatedMascot
└── Individual sections
```

## 💡 Benefits

1. **SEO**: Each member has their own URL
2. **Shareable**: Students can share specific member pages
3. **Engagement**: More interactive and personal
4. **Professional**: Showcases each member individually
5. **Scalable**: Easy to add new members

## 🎯 User Experience

1. Student sees team member card
2. Clicks "¡Conóceme!"
3. Navigates to personal page
4. Views biography and hobbies
5. Explores photo gallery
6. Can share page or return to main site

## 📝 Future Enhancements

- Add video introductions
- Student testimonials
- Achievements timeline
- Social media feed integration
- Contact form for questions
- Campaign goals progress tracker
