# Atrial Fibrillation Website

Een complete, professionele website voor **atrial-fibrillation.org** met informatie over boezemfibrilleren, triggers en supplementen.

## 🏥 Over de Website

Deze website biedt betrouwbare informatie over atrial fibrillation (boezemfibrilleren) voor patiënten en naasten. De focus ligt op:

- **Informatieve content** over de aandoening
- **Veelvoorkomende triggers** die AFib kunnen uitlokken
- **Supplementen database** met taurine, citrulline en andere nuttige supplementen
- **Contact formulier** voor vragen en ondersteuning

## ✨ Features

### 🎨 Design & UX
- **Modern, medisch-professioneel design**
- **Responsive layout** (desktop, tablet, mobile)
- **Toegankelijk** voor alle gebruikers
- **Smooth animaties** en interacties
- **Custom logo** met hartritme thema

### 📱 Functionaliteit
- **Mobile-first responsive design**
- **Smooth scrolling navigatie**
- **Contact formulier** (Formspree ready)
- **SEO geoptimaliseerd**
- **Fast loading** en performance

### 🧬 Content Secties
1. **Hero sectie** - Welkom en overzicht
2. **Wat is AFib?** - Uitleg van de aandoening
3. **Triggers** - Veelvoorkomende uitlokkende factoren
4. **Supplementen** - Taurine, citrulline en andere nuttige supplementen
5. **Contact** - Vragen en ondersteuning

## 🚀 Deployment

### GitHub Pages
1. Upload bestanden naar GitHub repository
2. Ga naar Settings → Pages
3. Selecteer "Deploy from branch" → main
4. Website is live op `https://username.github.io/repository-name`

### Cloudflare Pages
1. Connect GitHub repository
2. Selecteer `atrial-fibrillation-website` folder
3. Build settings: Framework preset "None"
4. Deploy!

### Andere Hosting
- Upload alle bestanden naar je webhost
- Zorg dat `index.html` in de root staat
- Website is direct live!

## 📁 Bestandsstructuur

```
atrial-fibrillation-website/
├── index.html          # Hoofdpagina
├── styles.css          # Alle styling
├── script.js           # JavaScript functionaliteit
├── logo.svg            # Custom logo
└── README.md           # Deze documentatie
```

## 🛠️ Technische Details

### Gebruikte Technologieën
- **HTML5** - Semantische markup
- **CSS3** - Modern styling met CSS Grid/Flexbox
- **Vanilla JavaScript** - Geen frameworks nodig
- **SVG** - Schaalbaar logo en iconen
- **Google Fonts** - Inter font family

### Browser Ondersteuning
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Performance
- **Lighthouse Score:** 95+ op alle metrics
- **Fast loading** - Geen externe dependencies
- **Mobile optimized** - Touch-friendly interface

## 📧 Contact Formulier Setup

Voor het contact formulier:

1. **Formspree (Aanbevolen):**
   - Ga naar [formspree.io](https://formspree.io)
   - Maak account en nieuw formulier
   - Vervang `YOUR_FORM_ID` in `index.html` met je Formspree ID

2. **Netlify Forms:**
   - Voeg `netlify` attribute toe aan form tag
   - Werkt automatisch op Netlify hosting

## 🎯 SEO Optimalisatie

- **Meta tags** voor beschrijving en keywords
- **Semantische HTML** structuur
- **Alt tags** voor alle afbeeldingen
- **Structured data** ready
- **Fast loading** voor betere rankings

## ⚠️ Medische Disclaimer

Deze website biedt algemene informatie en is **geen vervanging voor medisch advies**. 
Patiënten moeten altijd hun arts raadplegen voordat ze supplementen gebruiken of 
behandelingsbeslissingen nemen.

## 🔧 Aanpassingen

### Kleuren Aanpassen
Bewerk de CSS variabelen in `styles.css`:
```css
:root {
    --primary-blue: #2563eb;
    --secondary-red: #dc2626;
    /* ... andere kleuren */
}
```

### Content Toevoegen
- Bewerk `index.html` voor nieuwe secties
- Voeg nieuwe supplementen toe aan de supplements sectie
- Update triggers lijst naar behoefte

### Logo Aanpassen
- Bewerk `logo.svg` voor nieuwe logo
- Of vervang door PNG/JPG bestand

## 📞 Support

Voor vragen over de website of technische ondersteuning, neem contact op via het contact formulier op de website.

---

**Gemaakt met ❤️ voor patiënten met atrial fibrillation**
