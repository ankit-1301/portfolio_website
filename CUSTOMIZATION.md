# Portfolio Customization Guide

This guide will help you personalize your portfolio with your own assets and information.

## 🖼️ Profile Photo

**Current Status**: Using a placeholder image from Unsplash

**To Replace**:

1. **Option A - Use your own uploaded image**:
   - Add your photo to the `/public` folder (e.g., `/public/profile.jpg`)
   - Update `/src/app/components/Hero.tsx` (around line 62):
   ```tsx
   <ImageWithFallback
     src="/profile.jpg"  // Change this path
     alt="Devanshi Tandel"
     className="w-full h-full object-cover"
   />
   ```

2. **Option B - Use an external URL**:
   - Upload your photo to a hosting service (Imgur, Google Drive, etc.)
   - Use the direct image URL in the same location

**Recommended Image Specs**:
- Format: JPG or PNG
- Size: At least 800x800px
- Aspect Ratio: Square (1:1)
- Style: Professional headshot with good lighting

---

## 🎵 Singing Section Audio

**Current Status**: Play button is functional but needs audio file

**To Add**:

1. Prepare your audio file:
   - Format: MP3, WAV, or OGG
   - Duration: Keep it under 3 minutes for web performance
   - Name: e.g., `singing.mp3`

2. Add file to `/public` folder:
   ```
   /public/singing.mp3
   ```

3. Update `/src/app/components/BeyondWork.tsx` (around line 9-15):

   **Replace this**:
   ```tsx
   const handlePlayAudio = () => {
     setIsPlaying(!isPlaying);
     // Placeholder for audio playback - user will need to provide audio file
     // const audio = new Audio('/path-to-audio.mp3');
     // audio.play();
   };
   ```

   **With this**:
   ```tsx
   const audioRef = useRef<HTMLAudioElement | null>(null);

   const handlePlayAudio = () => {
     if (!audioRef.current) {
       audioRef.current = new Audio('/singing.mp3');
     }
     
     if (isPlaying) {
       audioRef.current.pause();
       setIsPlaying(false);
     } else {
       audioRef.current.play();
       setIsPlaying(true);
     }
   };
   ```

---

## 📄 Resume Download

**Current Status**: Placeholder alert message

**To Add**:

1. Add your resume PDF to `/public` folder:
   ```
   /public/Devanshi_Tandel_Resume.pdf
   ```

2. **Update Hero Section** (`/src/app/components/Hero.tsx`, around line 116):

   **Replace**:
   ```tsx
   <button className="px-8 py-3 border-2 border-[#00BCD4]...">
   ```

   **With**:
   ```tsx
   <a href="/Devanshi_Tandel_Resume.pdf" download="Devanshi_Tandel_Resume.pdf">
     <button className="px-8 py-3 border-2 border-[#00BCD4] text-[#00BCD4] font-semibold rounded-lg hover:bg-[#00BCD4] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
       <Download size={20} />
       Download Resume
     </button>
   </a>
   ```

3. **Update Chatbot** (`/src/app/components/Contact.tsx`, around line 69):

   **Replace**:
   ```tsx
   {
     icon: Download,
     label: 'Download Resume',
     emoji: '📄',
     action: () => {
       alert('Resume download would start here. Please provide the resume PDF file.');
     },
   },
   ```

   **With**:
   ```tsx
   {
     icon: Download,
     label: 'Download Resume',
     emoji: '📄',
     action: () => {
       const link = document.createElement('a');
       link.href = '/Devanshi_Tandel_Resume.pdf';
       link.download = 'Devanshi_Tandel_Resume.pdf';
       link.click();
     },
   },
   ```

---

## 🏢 Company Logos (Optional)

**Current Status**: Using icons instead of logos

**To Add Custom Logos**:

1. Add logo images to `/public/logos/`:
   ```
   /public/logos/dae-inc.png
   /public/logos/tcs.png
   /public/logos/unh.png
   ```

2. Update `/src/app/components/Experience.tsx`:

   Add this above the experiences array (around line 11):
   ```tsx
   const companyLogos: Record<string, string> = {
     'DAE Inc.': '/logos/dae-inc.png',
     'Tata Consultancy Services': '/logos/tcs.png',
     'University of New Haven': '/logos/unh.png',
   };
   ```

3. Modify the timeline dot section (around line 89):
   ```tsx
   <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-[#00BCD4] flex items-center justify-center shadow-lg z-10">
     {companyLogos[exp.company] ? (
       <img 
         src={companyLogos[exp.company]} 
         alt={exp.company}
         className="w-10 h-10 object-contain"
       />
     ) : (
       <exp.icon className="text-[#00BCD4]" size={28} />
     )}
   </div>
   ```

---

## 🎨 Project Thumbnails (Optional)

**Current Status**: Using icon-based cards

**To Add Custom Thumbnails**:

1. Add project images to `/public/projects/`:
   ```
   /public/projects/archiving-platform.png
   /public/projects/nlp-pipeline.png
   ```

2. Update `/src/app/components/Projects.tsx`:

   Modify the projects array to include image URLs (around line 11):
   ```tsx
   const projects = [
     {
       icon: Database,
       image: '/projects/archiving-platform.png', // Add this line
       title: 'Student Project Archiving Platform',
       // ... rest of the project data
     },
     // ... repeat for other projects
   ];
   ```

3. Update the project card rendering (around line 92):
   ```tsx
   {/* Icon or Image */}
   {project.image ? (
     <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
       <img 
         src={project.image} 
         alt={project.title}
         className="w-full h-full object-cover"
       />
     </div>
   ) : (
     <div className="w-16 h-16 bg-gradient-to-br from-[#00BCD4] to-[#4DD0E1] rounded-lg flex items-center justify-center mb-6">
       <project.icon className="text-white" size={32} />
     </div>
   )}
   ```

---

## 🔗 External Links

All external links are already configured! Here's where they're used:

### Contact Information
- **Email**: `Devanshi.jtandel@gmail.com`
- **Phone**: `(732) 822-1603`
- **LinkedIn**: `https://www.linkedin.com/in/devanshi-tandel-a96607184/`
- **GitHub**: `https://github.com/devtandel24?tab=repositories`

### Google Drive Links
- **Art Gallery**: Already configured in BeyondWork.tsx
- **Travel Photos**: Already configured in BeyondWork.tsx

**To Update**: Search for the old link and replace with your new link in the respective component files.

---

## 🎯 Content Updates

### Updating Your Information

1. **Name**: Search for "DEVANSHI TANDEL" in all files and replace
2. **Tagline**: Update in `/src/app/components/Hero.tsx`
3. **Bio**: Update in `/src/app/components/About.tsx`
4. **Experience**: Modify the experiences array in `/src/app/components/Experience.tsx`
5. **Projects**: Modify the projects array in `/src/app/components/Projects.tsx`
6. **Skills**: Modify the skillCategories array in `/src/app/components/Skills.tsx`

### Modifying Statistics

In `/src/app/components/About.tsx` (around line 12), update the stats array:
```tsx
const stats = [
  {
    icon: TrendingUp,
    value: '5+ Years',  // Change this
    label: 'In Data Engineering',  // Change this
    color: '#00BCD4',
  },
  // ... update other stats
];
```

---

## 🎨 Color Theme Customization

To change the color scheme, update these files:

### 1. Primary Colors
Find and replace these hex codes throughout all component files:
- `#0A1628` - Deep Navy Blue
- `#1E3A5F` - Ocean Blue
- `#00BCD4` - Teal Accent
- `#4DD0E1` - Bright Cyan
- `#80DEEA` - Soft Teal

### 2. Add to Tailwind Theme
If you want to use custom colors as Tailwind classes, update `/src/styles/theme.css`:

```css
:root {
  --primary-navy: #0A1628;
  --ocean-blue: #1E3A5F;
  --teal-accent: #00BCD4;
  --bright-cyan: #4DD0E1;
  --soft-teal: #80DEEA;
}
```

---

## 🚀 Quick Checklist

Before deploying your portfolio, make sure you've:

- [ ] Added your profile photo
- [ ] Added your resume PDF
- [ ] Added audio file for singing section (optional)
- [ ] Verified all contact links work
- [ ] Updated any placeholder text
- [ ] Tested on mobile, tablet, and desktop
- [ ] Checked all animations work smoothly
- [ ] Verified chatbot functionality
- [ ] Tested smooth scrolling navigation
- [ ] Proofread all content

---

## 💡 Tips

1. **Image Optimization**: Compress images before uploading to improve load times
2. **Audio Size**: Keep audio files under 5MB for better performance
3. **PDF Resume**: Keep resume PDF under 2MB
4. **Testing**: Test the portfolio on different browsers (Chrome, Firefox, Safari)
5. **Mobile First**: Always check mobile responsiveness

---

## 🆘 Need Help?

Common issues and solutions:

**Issue**: Images not loading
- **Solution**: Check file paths are correct and files exist in `/public` folder

**Issue**: Audio not playing
- **Solution**: Ensure audio file format is supported (MP3 is most compatible)

**Issue**: Resume download not working
- **Solution**: Verify PDF file is in `/public` folder and path is correct

**Issue**: Smooth scrolling not working
- **Solution**: Check that `scroll-behavior: smooth` is in `/src/styles/theme.css`

---

Made with ❤️ and lots of data!
