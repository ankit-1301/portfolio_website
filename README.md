# Devanshi Tandel - Data Engineer Portfolio

A modern, professional portfolio website showcasing data engineering expertise with an oceanic data theme featuring deep blues and teal accents.

## 🌟 Features

- **Single-page scrolling layout** with smooth anchor navigation
- **Responsive design** - works beautifully on desktop, tablet, and mobile
- **Interactive elements** including:
  - Animated background particles and data visualizations
  - Smooth scroll animations and transitions
  - Hover effects on cards and buttons
  - Interactive chatbot widget
  - Singing animation with audio playback capability
- **Professional sections**:
  - Hero with profile image and call-to-action
  - About Me with statistics cards
  - Professional Experience timeline
  - Featured Projects showcase
  - Technical Skills categorized display
  - Beyond Work (personality section)
  - Contact with minimalist chatbot
  - Footer with quick links

## 🎨 Design Theme

**Primary Colors:**
- Deep Navy Blue: #0A1628
- Ocean Blue: #1E3A5F
- Teal Accent: #00BCD4
- Bright Cyan: #4DD0E1
- Soft Teal: #80DEEA

**Supporting Colors:**
- White: #FFFFFF
- Light Gray: #F5F5F5
- Medium Gray: #9E9E9E
- Dark Text: #212121

## 📋 Assets Needed

To complete the portfolio, you'll need to provide the following assets:

1. **Profile Photo** - Replace the placeholder image in the Hero section
   - Location: `/src/app/components/Hero.tsx` (line with ImageWithFallback)
   - Recommended: Square image, high resolution, professional headshot

2. **Company Logos** (optional)
   - DAE Inc.
   - Tata Consultancy Services
   - University of New Haven

3. **Audio File** - For the singing section
   - Add your audio file to the `/public` folder
   - Update the audio path in `/src/app/components/BeyondWork.tsx`
   - Uncomment and modify the audio playback code

4. **Resume PDF**
   - Add your resume PDF to the `/public` folder
   - Update the download link in multiple locations:
     - `/src/app/components/Hero.tsx` (Download Resume button)
     - `/src/app/components/Contact.tsx` (Chatbot Download Resume action)

## 🔗 External Links Already Configured

- **LinkedIn**: https://www.linkedin.com/in/devanshi-tandel-a96607184/
- **GitHub**: https://github.com/devtandel24?tab=repositories
- **Email**: Devanshi.jtandel@gmail.com
- **Phone**: (732) 822-1603
- **Art Gallery**: Google Drive folder for drawings
- **Travel Photos**: Google Drive folder for travel memories

## 🛠️ Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## 📱 Responsive Breakpoints

- **Desktop**: 1920px+
- **Tablet**: 768px - 1919px
- **Mobile**: < 768px

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run development server:
   ```bash
   pnpm dev
   ```

3. Build for production:
   ```bash
   pnpm build
   ```

## 🎯 Customization Guide

### Adding Your Profile Photo

1. Add your image to the `/public` folder or use an external URL
2. Update the `src` prop in `/src/app/components/Hero.tsx`:
   ```tsx
   <ImageWithFallback
     src="/path-to-your-image.jpg"
     alt="Devanshi Tandel"
     className="w-full h-full object-cover"
   />
   ```

### Adding Audio for Singing Section

1. Add your audio file (MP3, WAV, etc.) to `/public` folder
2. Update `/src/app/components/BeyondWork.tsx`:
   ```tsx
   const handlePlayAudio = () => {
     setIsPlaying(!isPlaying);
     const audio = new Audio('/your-audio-file.mp3');
     if (isPlaying) {
       audio.pause();
     } else {
       audio.play();
     }
   };
   ```

### Adding Resume Download

1. Add your resume PDF to `/public` folder
2. Update the download buttons:
   - In `/src/app/components/Hero.tsx`:
     ```tsx
     <a href="/your-resume.pdf" download>
       <button>Download Resume</button>
     </a>
     ```
   - In `/src/app/components/Contact.tsx` (chatbot action):
     ```tsx
     action: () => window.open('/your-resume.pdf', '_blank'),
     ```

## 📄 File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── About.tsx           # About Me section
│   │   ├── BeyondWork.tsx      # Personal interests section
│   │   ├── Contact.tsx         # Contact info & chatbot
│   │   ├── Experience.tsx      # Professional timeline
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── Hero.tsx            # Hero/landing section
│   │   ├── Navigation.tsx      # Fixed navigation bar
│   │   ├── Projects.tsx        # Featured projects
│   │   └── Skills.tsx          # Technical skills
│   └── App.tsx                 # Main app component
├── styles/
│   ├── fonts.css              # Font imports
│   ├── index.css              # Main CSS entry
│   ├── tailwind.css           # Tailwind imports
│   └── theme.css              # Custom theme & smooth scroll
└── ...
```

## ✨ Special Features

### Chatbot Widget
- Fixed position in bottom-right corner
- Auto-opens after 3 seconds
- Direct action buttons (no conversation simulation)
- Email, phone, LinkedIn, GitHub, and resume download options

### Animations
- Page load animations with stagger effect
- Scroll-triggered reveal animations
- Hover effects on cards and buttons
- Particle animations in background
- Music notes animation in singing section

### Accessibility
- High contrast ratios (WCAG AA compliant)
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators on interactive elements
- Screen reader friendly

## 📞 Contact Information

- **Email**: Devanshi.jtandel@gmail.com
- **Phone**: (732) 822-1603
- **LinkedIn**: [Connect with me](https://www.linkedin.com/in/devanshi-tandel-a96607184/)
- **GitHub**: [Check out my code](https://github.com/devtandel24?tab=repositories)

---

**Built with ❤️ and lots of data**

© 2026 Devanshi Tandel. All rights reserved.
