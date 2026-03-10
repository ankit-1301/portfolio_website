# Quick Start Guide

Get your portfolio up and running in 5 minutes! ⚡

## Step 1: View Your Portfolio

The portfolio is ready to view right now! All the content about Ankit Rathod is already populated.

### What You'll See:
✅ **Hero Section** - Professional introduction with profile photo  
✅ **About Section** - Professional summary with impressive stats  
✅ **Experience Timeline** - 3 positions with achievements  
✅ **Featured Projects** - 2 major data engineering projects  
✅ **Technical Skills** - 5 categorized skill sets  
✅ **Beyond Work** - Personal interests (dance, singing, art, travel)  
✅ **Contact Section** - With minimalist chatbot widget  
✅ **Footer** - Quick links and social media  

---

## Step 2: Essential Customizations (5 Minutes)

### 🖼️ Add Your Profile Photo

**Quick Method**:
1. Find a professional headshot photo
2. Open `/src/app/components/Hero.tsx`
3. Find line 62 (the ImageWithFallback component)
4. Replace the image URL with your own

```tsx
// Before:
<ImageWithFallback
  src="https://images.unsplash.com/photo-1712174766230-cb7304feaafe..."
  alt="Ankit Rathod"
/>

// After:
<ImageWithFallback
  src="/your-photo.jpg"  // Put your photo in /public folder
  alt="Ankit Rathod"
/>
```

### 📄 Add Your Resume

**Quick Method**:
1. Save your resume as `resume.pdf` in the `/public` folder
2. The download buttons will automatically work!

If you want a custom filename:
- Update the download links in Hero.tsx and Contact.tsx
- See CUSTOMIZATION.md for detailed instructions

---

## Step 3: Test Everything (2 Minutes)

### Navigation
- [ ] Click on navigation items - smooth scroll to sections?
- [ ] Mobile menu works on small screens?

### Interactions
- [ ] Hover over cards - do they lift up?
- [ ] Chatbot opens in bottom-right corner?
- [ ] Social media links open correctly?

### Content
- [ ] All sections load properly?
- [ ] Animations trigger on scroll?
- [ ] Images display correctly?

---

## Step 4: Optional Enhancements

Want to add more personality? Check these out:

### 🎵 Add Singing Audio
See CUSTOMIZATION.md → "Singing Section Audio"

### 🏢 Add Company Logos  
See CUSTOMIZATION.md → "Company Logos"

### 🖼️ Add Project Screenshots
See CUSTOMIZATION.md → "Project Thumbnails"

---

## Features Already Working

### ✨ Animations
- **Page Load**: Sections fade in with stagger effect
- **Scroll**: Elements reveal as you scroll down
- **Hover**: Cards lift, buttons glow
- **Background**: Particles float and pulse

### 🤖 Chatbot
- Auto-opens after 3 seconds
- Quick access to:
  - Send Email
  - Call Phone
  - LinkedIn Profile
  - GitHub Repos
  - Download Resume

### 📱 Responsive Design
- **Desktop**: Full multi-column layout
- **Tablet**: Adjusted spacing and columns
- **Mobile**: Single column, hamburger menu

### 🔗 All Links Working
- ✅ LinkedIn: https://www.linkedin.com/in/ankit-rathod-27a631233/
- ✅ GitHub: https://github.com/ankit-1301?tab=repositories
- ✅ Email: Devanshi.jtandel@gmail.com
- ✅ Phone: (732) 822-1603
- ✅ Art Gallery: Google Drive link
- ✅ Travel Photos: Google Drive link

---

## File Structure (What's What)

```
/src/app/components/
├── Navigation.tsx     → Fixed top navigation bar
├── Hero.tsx          → Landing section with photo
├── About.tsx         → About me + stats cards
├── Experience.tsx    → Timeline of jobs
├── Projects.tsx      → Featured projects showcase
├── Skills.tsx        → Technical skills organized
├── BeyondWork.tsx    → Personal interests section
├── Contact.tsx       → Contact info + chatbot
└── Footer.tsx        → Footer with links

/src/app/
└── App.tsx           → Main component (assembles everything)

/src/styles/
├── theme.css         → Colors & smooth scrolling
└── ...
```

---

## Common Questions

**Q: How do I change my name?**  
A: Search for "Ankit Rathod" in all files and replace it

**Q: How do I update my experience?**  
A: Edit the `experiences` array in `/src/app/components/Experience.tsx`

**Q: How do I change the colors?**  
A: Replace the hex color codes (like `#00BCD4`) throughout the component files

**Q: How do I add more projects?**  
A: Add more objects to the `projects` array in `/src/app/components/Projects.tsx`

**Q: The chatbot says "Resume download would start here" - what do I do?**  
A: Add your resume PDF to `/public` folder and update the link (see CUSTOMIZATION.md)

---

## Pro Tips 💡

1. **Compress Your Images**: Use tools like TinyPNG before uploading
2. **Test on Mobile**: Open on your phone to see how it looks
3. **Update Regularly**: Keep your projects and experience current
4. **Customize Colors**: Make it uniquely yours by changing the color scheme
5. **Add More Sections**: Feel free to add new sections that showcase your work

---

## Next Steps

1. ✅ Portfolio is live and working
2. 🖼️ Add your profile photo
3. 📄 Add your resume PDF
4. ✏️ Customize content (projects, experience, etc.)
5. 🎨 Personalize colors and design (optional)
6. 🎵 Add audio file (optional)
7. 🚀 Deploy to hosting platform

---

## Deployment

When ready to deploy, you can use:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Build and push to `gh-pages` branch
- **Any Static Host**: Run `pnpm build` and upload the `dist` folder

---

## Need More Help?

- 📖 **Full Guide**: See CUSTOMIZATION.md for detailed instructions
- 🎨 **Design System**: Check the color palette in README.md
- 🔧 **Technical Issues**: Check the browser console for errors

---

**Your portfolio is ready to impress! 🌟**

Made with ❤️ and lots of data
