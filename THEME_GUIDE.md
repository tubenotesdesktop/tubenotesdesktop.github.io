# TubeNotes - Frontend Theme Guide (Landing Page Reference)

Bu doküman, TubeNotes uygulamasının tüm frontend/tema özelliklerini içerir. Landing page tasarımında kullanılabilecek renk paletleri, tipografi, animasyonlar ve görsel stil kuralları detaylı olarak açıklanmıştır.

---

## 🎨 Tema Mimarisi

TubeNotes, **Brutalist Design** ve **Cyberpunk Editorial** stillerini birleştiren iki ana tema ailesine sahiptir:

### 1. Cyberpunk Temaları (Bold & Sharp)
- **cyberpunk-dark** - Ana tema, keskin ve bold
- **cyberpunk-navy** - Deniz mavisi varyasyonu
- **cyberpunk-light** - Aydınlık versiyon

### 2. Editorial Temaları (Minimal & Sophisticated)
- **editorial-dark** - Sofistike ve temiz
- **editorial-navy** - Derin ve zarif
- **editorial-light** - Minimalist ve açık

---

## 🎯 Renk Paletleri

### Cyberpunk Dark (Ana Tema - Önerilen Landing Page Teması)

```css
/* Arka Planlar */
--background: #0a0a0a          /* Ana arka plan - Derin siyah */
--surface: #1a1a1a             /* Kartlar ve paneller için */
--surface-hover: #252525       /* Hover durumları */

/* Metin Renkleri */
--foreground: #ffffff          /* Ana metin - Beyaz */
--foreground-muted: #a0a0a0    /* İkincil metin - Gri */

/* Accent Renkleri (Uygulamanın Karakteristik Renkleri) */
--accent-primary: #ff3366      /* Pembe-Kırmızı - CTA butonlar */
--accent-secondary: #00ff88    /* Neon Yeşil - Başarı durumları */
--accent-tertiary: #ffdd00     /* Sarı - Önemli vurgular */
--accent-blue: #00ccff         /* Parlak Mavi - Linkler */

/* Status Renkleri */
--status-watching: #ff6b35     /* Turuncu - İşlemde */
--status-watched: #00ff88      /* Yeşil - Tamamlandı */
--status-important: #ffdd00    /* Sarı - Önemli */

/* Çizgiler ve Kenarlıklar */
--border: #333333              /* Standart kenarlık */
--border-accent: #ff3366       /* Vurgulu kenarlık */
```

### Cyberpunk Navy (Alternatif)

```css
--background: #0d1b2a          /* Lacivert-Siyah */
--surface: #1b263b             /* Lacivert yüzey */
--foreground: #e0e1dd          /* Kırık beyaz */

--accent-primary: #415a77      /* Koyu mavi */
--accent-secondary: #00d4ff    /* Parlak cyan */
--accent-tertiary: #ffd60a     /* Altın sarısı */
--accent-blue: #00b4d8         /* Gökyüzü mavisi */
```

### Cyberpunk Light (Aydınlık Mod)

```css
--background: #f8f9fa          /* Açık gri */
--surface: #ffffff             /* Beyaz */
--foreground: #212529          /* Koyu gri-siyah */

--accent-primary: #d63384      /* Magenta */
--accent-secondary: #0dcaf0    /* Cyan */
--accent-tertiary: #ffc107     /* Amber */
```

### Editorial Dark (Sofistike Alternatif)

```css
--background: #0f0f0f          /* Karbon siyahı */
--surface: #1c1c1c             /* Antrasit */
--foreground: #e8e8e8          /* Yumuşak beyaz */

--accent-primary: #c9a77c      /* Altın kahverengi */
--accent-secondary: #7c9cb5    /* Kül mavisi */
--accent-tertiary: #a8937d     /* Taupe */
```

---

## 🔤 Tipografi

### Font Aileleri

```css
/* Cyberpunk Temaları için */
--font-display: ui-sans-serif, system-ui, sans-serif
--font-mono: ui-monospace, 'Cascadia Code', 'Courier New', monospace

/* Editorial Temaları için */
--font-editorial-display: ui-serif, Georgia, serif
--font-editorial-body: ui-sans-serif, system-ui, sans-serif
```

### Tipografi Sınıfları

#### `.text-display` (Başlıklar için)
```css
/* Cyberpunk Modunda */
letter-spacing: 0.05em;        /* Geniş harf aralığı */
text-transform: uppercase;      /* Tüm harfler büyük */
font-weight: 700;              /* Bold */
font-family: var(--font-display);

/* Editorial Modunda */
letter-spacing: 0.02em;        /* Dar harf aralığı */
text-transform: none;          /* Normal metin */
font-weight: 400;              /* Normal */
font-family: Georgia, serif;   /* Serif font */
```

#### `.text-mono` (Detaylar için)
```css
font-family: var(--font-mono), monospace;
```

### Başlık Örnekleri

```html
<!-- Hero Başlık (Landing Page için) -->
<h1 class="text-display text-6xl tracking-wider text-[var(--foreground)]">
  VIDEO LIBRARY
</h1>

<!-- Alt Başlık -->
<h2 class="text-display text-4xl mb-3">
  NO VIDEOS YET
</h2>

<!-- Küçük Detaylar -->
<span class="text-mono text-sm text-[var(--foreground-muted)]">
  152 videos • 89 watched • 23 important
</span>
```

---

## ✨ Animasyonlar

### Framer Motion Animasyonları (React)

#### Sayfa Giriş Animasyonu
```jsx
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* İçerik */}
</motion.div>
```

#### Kart Hover Efekti
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ y: -4 }}
  transition={{ delay: index * 0.05 }}  // Stagger efekti
  className="theme-card"
>
  {/* Kart içeriği */}
</motion.div>
```

#### Buton Animasyonu
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="btn-brutal"
>
  ADD VIDEO
</motion.button>
```

#### Stagger Grid Animasyonu
```jsx
{notes.map((note, index) => (
  <motion.div
    key={note.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}  // Her kart 50ms gecikmeli
  >
    <Card />
  </motion.div>
))}
```

### CSS Keyframe Animasyonları

#### Slide In Left (Sidebar için)
```css
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.4s ease-out;
}
```

#### Slide In Up (Modal için)
```css
@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-in-up {
  animation: slideInUp 0.3s ease-out;
}
```

#### Glitch Effect (Hover için)
```css
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.hover-glitch:hover {
  animation: glitch 0.3s ease-in-out;
}
```

#### Pulse (Loading için)
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse-animation {
  animation: pulse 1s infinite;
}
```

#### Fade In (Tooltip için)
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}
```

---

## 🎯 Brutalist Shadow System (Karakteristik Özellik)

Uygulamanın en belirgin özelliği: **Offset shadow + Border** kombinasyonu

### Brutalist Shadow Değişkenleri

```css
/* Cyberpunk Temaları */
--shadow-brutal: 4px 4px 0px var(--accent-primary);
--shadow-brutal-hover: 6px 6px 0px var(--accent-primary);

/* Editorial Temaları */
--shadow-brutal: 2px 2px 12px rgba(0, 0, 0, 0.3);
--shadow-brutal-hover: 2px 4px 16px rgba(0, 0, 0, 0.4);
```

### Brutal Buton Örnekleri

#### Primary Button
```html
<button class="
  px-6 py-3
  bg-[var(--accent-primary)]
  text-[var(--background)]
  border-3 border-[var(--border)]
  text-display text-xl
  shadow-[4px_4px_0px_var(--accent-secondary)]
  hover:shadow-[6px_6px_0px_var(--accent-secondary)]
  hover:translate-x-[-2px] hover:translate-y-[-2px]
  transition-all duration-200
">
  ADD VIDEO
</button>
```

#### Secondary Button
```html
<button class="
  px-6 py-3
  border-2 border-[var(--border)]
  text-display text-lg
  hover:border-[var(--accent-primary)]
  hover:text-[var(--accent-primary)]
  transition-colors
">
  CANCEL
</button>
```

#### Icon Button
```jsx
<motion.button
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  className="
    p-2
    bg-[var(--background)]
    border-2 border-[var(--border)]
    hover:border-[var(--accent-primary)]
    transition-colors
  "
>
  <Icon size={20} />
</motion.button>
```

### Brutal Card Tasarımı

```html
<div class="
  bg-[var(--surface)]
  border-3 border-[var(--border)]
  shadow-[6px_6px_0px_var(--accent-primary)]
  hover:shadow-[8px_8px_0px_var(--accent-primary)]
  hover:translate-x-[-2px] hover:translate-y-[-2px]
  transition-all duration-200
  p-6
">
  <h3 class="text-display text-2xl mb-4">FEATURE TITLE</h3>
  <p class="text-mono text-sm text-[var(--foreground-muted)]">
    Description text...
  </p>
</div>
```

---

## 📐 Layout & Spacing

### Spacing System
```css
--spacing-unit: 8px;           /* Temel birim */

/* Kullanım Örnekleri */
padding: calc(var(--spacing-unit) * 2);    /* 16px */
padding: calc(var(--spacing-unit) * 4);    /* 32px */
gap: calc(var(--spacing-unit) * 3);        /* 24px */
```

### Grid System
```css
--grid-columns: repeat(auto-fill, minmax(320px, 1fr));
--grid-gap: 20px;

/* Kullanım */
.theme-aware-grid {
  display: grid;
  grid-template-columns: var(--grid-columns);
  gap: var(--grid-gap);
}
```

### Border System
```css
/* Cyberpunk: Ağır kenarlıklar */
--border-width: 3px;
--border-radius: 0px;          /* Keskin köşeler */

/* Editorial: İnce kenarlıklar */
--border-width: 1px;
--border-radius: 8px;          /* Yuvarlatılmış köşeler */
```

### Container (Landing Page için)
```html
<div class="max-w-[1600px] mx-auto px-6 py-8">
  <!-- İçerik buraya -->
</div>
```

---

## 🖼️ Component Patterns (Landing Page için Kullanılabilir)

### Hero Section
```html
<section class="
  min-h-screen
  flex items-center justify-center
  bg-[var(--background)]
  grid-noise
">
  <div class="text-center">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      class="text-display text-7xl mb-6 tracking-wider"
    >
      TUBENOTES
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      class="text-mono text-xl text-[var(--foreground-muted)] mb-12"
    >
      Visual Video Knowledge Base
    </motion.p>
    
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      class="
        px-12 py-4
        bg-[var(--accent-primary)]
        text-[var(--background)]
        border-3 border-[var(--border)]
        text-display text-2xl
        shadow-[6px_6px_0px_var(--accent-secondary)]
        hover:shadow-[8px_8px_0px_var(--accent-secondary)]
        hover:translate-x-[-2px] hover:translate-y-[-2px]
        transition-all duration-200
      "
    >
      GET STARTED
    </motion.button>
  </div>
</section>
```

### Feature Cards Grid
```html
<section class="py-24 px-6 bg-[var(--surface)]">
  <div class="max-w-[1400px] mx-auto">
    <h2 class="text-display text-5xl mb-16 text-center">
      FEATURES
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Feature Card 1 -->
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        class="
          bg-[var(--background)]
          border-3 border-[var(--border)]
          p-8
          shadow-[4px_4px_0px_var(--accent-primary)]
          hover:shadow-[6px_6px_0px_var(--accent-primary)]
          hover:translate-x-[-2px] hover:translate-y-[-2px]
          transition-all duration-200
        "
      >
        <div class="text-5xl mb-4">📹</div>
        <h3 class="text-display text-2xl mb-3">VIDEO NOTES</h3>
        <p class="text-mono text-sm text-[var(--foreground-muted)]">
          Take notes directly from YouTube videos
        </p>
      </motion.div>
      
      <!-- Feature Card 2 -->
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ y: -4 }}
        class="
          bg-[var(--background)]
          border-3 border-[var(--border)]
          p-8
          shadow-[4px_4px_0px_var(--accent-secondary)]
          hover:shadow-[6px_6px_0px_var(--accent-secondary)]
          hover:translate-x-[-2px] hover:translate-y-[-2px]
          transition-all duration-200
        "
      >
        <div class="text-5xl mb-4">🎨</div>
        <h3 class="text-display text-2xl mb-3">CANVAS</h3>
        <p class="text-mono text-sm text-[var(--foreground-muted)]">
          Infinite whiteboard for visual organization
        </p>
      </motion.div>
      
      <!-- Feature Card 3 -->
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -4 }}
        class="
          bg-[var(--background)]
          border-3 border-[var(--border)]
          p-8
          shadow-[4px_4px_0px_var(--accent-tertiary)]
          hover:shadow-[6px_6px_0px_var(--accent-tertiary)]
          hover:translate-x-[-2px] hover:translate-y-[-2px]
          transition-all duration-200
        "
      >
        <div class="text-5xl mb-4">📋</div>
        <h3 class="text-display text-2xl mb-3">KANBAN</h3>
        <p class="text-mono text-sm text-[var(--foreground-muted)]">
          Organize tasks with drag-and-drop boards
        </p>
      </motion.div>
    </div>
  </div>
</section>
```

### Stats Section
```html
<section class="py-16 bg-[var(--background)]">
  <div class="max-w-[1200px] mx-auto px-6">
    <div class="flex items-center justify-around">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        class="text-center"
      >
        <div class="text-6xl text-[var(--accent-primary)] mb-2 text-display">
          1000+
        </div>
        <div class="text-mono text-sm text-[var(--foreground-muted)]">
          Active Users
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        class="text-center"
      >
        <div class="text-6xl text-[var(--accent-secondary)] mb-2 text-display">
          50K+
        </div>
        <div class="text-mono text-sm text-[var(--foreground-muted)]">
          Videos Organized
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        class="text-center"
      >
        <div class="text-6xl text-[var(--accent-tertiary)] mb-2 text-display">
          99%
        </div>
        <div class="text-mono text-sm text-[var(--foreground-muted)]">
          Satisfaction
        </div>
      </motion.div>
    </div>
  </div>
</section>
```

### CTA Section
```html
<section class="py-32 bg-[var(--accent-primary)] text-center">
  <div class="max-w-[800px] mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      class="text-display text-6xl mb-6 text-[var(--background)]"
    >
      READY TO START?
    </motion.h2>
    
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      class="text-mono text-xl mb-12 text-[var(--background)] opacity-80"
    >
      Download TubeNotes for free and organize your video library today
    </motion.p>
    
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      class="
        px-12 py-4
        bg-[var(--background)]
        text-[var(--accent-primary)]
        border-3 border-[var(--background)]
        text-display text-2xl
        shadow-[6px_6px_0px_var(--background)]
        hover:shadow-[8px_8px_0px_var(--background)]
        hover:translate-x-[-2px] hover:translate-y-[-2px]
        transition-all duration-200
      "
    >
      DOWNLOAD NOW
    </motion.button>
  </div>
</section>
```

---

## 🌟 Özel Efektler

### Grid Noise Texture (Arka Plana)
```css
.grid-noise {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Kullanım */
<div class="bg-[var(--background)] grid-noise">
  <!-- İçerik -->
</div>
```

### Custom Selection (Metin Seçimi)
```css
::selection {
  background: var(--accent-primary);
  color: var(--background);
}
```

### Scrollbar Özelleştirmesi
```css
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface);
}

::-webkit-scrollbar-thumb {
  background: var(--accent-primary);
  border-radius: 0;  /* Keskin köşeler */
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-secondary);
}
```

### Tooltip Animasyonu
```css
.tooltip-trigger:hover::after {
  content: attr(title);
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 12px;
  padding: 8px 12px;
  background: var(--surface);
  border: 2px solid var(--border);
  color: var(--foreground);
  font-size: 12px;
  font-family: var(--font-mono), monospace;
  white-space: nowrap;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
}
```

### Overlay Gradient (Hover için)
```html
<div class="relative group">
  <img src="..." alt="..." />
  
  <!-- Hover overlay -->
  <div class="
    absolute inset-0
    bg-gradient-to-t from-[var(--background)] via-transparent to-transparent
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300
    flex items-end justify-between p-4
  ">
    <!-- Overlay içeriği -->
  </div>
</div>
```

---

## 🎮 Interactive Elements

### Input Fields
```html
<input
  type="text"
  placeholder="Enter text..."
  class="
    w-full px-4 py-3
    bg-[var(--background)]
    border-2 border-[var(--border)]
    text-mono text-sm
    focus:border-[var(--accent-secondary)]
    focus:outline-none
    transition-colors
  "
/>
```

### Search Bar
```html
<div class="flex items-center gap-2 px-4 py-3 bg-[var(--surface)] border-2 border-[var(--border)]">
  <SearchIcon class="text-[var(--foreground-muted)]" />
  <input
    type="text"
    placeholder="SEARCH..."
    class="
      flex-1
      bg-transparent
      text-mono text-sm
      focus:outline-none
      placeholder:text-[var(--foreground-muted)]
    "
  />
</div>
```

### Checkbox/Toggle
```html
<label class="flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    class="
      w-5 h-5
      border-2 border-[var(--border)]
      appearance-none
      checked:bg-[var(--accent-primary)]
      checked:border-[var(--accent-primary)]
      transition-all
    "
  />
  <span class="text-mono text-sm">Enable feature</span>
</label>
```

### Dropdown/Select
```html
<select class="
  px-4 py-3
  bg-[var(--surface)]
  border-2 border-[var(--border)]
  text-mono text-sm
  focus:border-[var(--accent-primary)]
  focus:outline-none
">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

### Badge/Tag
```html
<span class="
  inline-block
  px-3 py-1
  bg-[var(--accent-primary)]
  text-[var(--background)]
  text-mono text-xs
  border-2 border-[var(--border)]
  uppercase
">
  NEW
</span>
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Extra Small Devices */
@media (max-width: 640px) {
  .text-display { font-size: 2rem; }
  --grid-columns: 1fr;
  --spacing-unit: 6px;
}

/* Small Devices (Tablets) */
@media (min-width: 640px) {
  --grid-columns: repeat(2, 1fr);
}

/* Medium Devices (Small Laptops) */
@media (min-width: 768px) {
  --grid-columns: repeat(auto-fill, minmax(320px, 1fr));
}

/* Large Devices (Desktops) */
@media (min-width: 1024px) {
  --grid-columns: repeat(auto-fill, minmax(360px, 1fr));
}

/* Extra Large Devices */
@media (min-width: 1280px) {
  --grid-gap: 32px;
}
```

---

## 🎨 Icon System

Uygulama **Lucide React** icon kütüphanesini kullanıyor. Landing page için önerilen iconlar:

```jsx
// Ana feature iconları
import {
  Video,        // Video notları
  Layout,       // Canvas
  Kanban,       // Kanban board
  FolderOpen,   // Klasörler
  Search,       // Arama
  Settings,     // Ayarlar
  Download,     // İndirme
  Github,       // GitHub link
  Twitter,      // Social media
  Mail,         // İletişim
  Star,         // Önemli/favori
  Eye,          // İzlendi
  Clock,        // İzleniyor
  Plus,         // Ekle
  ChevronRight, // Ok
  Check,        // Onay
  X,            // Kapat
} from 'lucide-react';

// Kullanım örneği
<Video size={24} className="text-[var(--accent-primary)]" />
```

---

## 🌐 Tema Değişimi Implementasyonu

### HTML Data Attribute ile
```html
<html data-theme="cyberpunk-dark">
  <!-- Sayfa içeriği -->
</html>
```

### JavaScript Toggle
```javascript
// Tema değiştirme fonksiyonu
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('tubenotes_theme', themeName);
}

// Sayfa yüklendiğinde
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('tubenotes_theme') || 'cyberpunk-dark';
  setTheme(savedTheme);
});

// Tema seçici
const themes = [
  'cyberpunk-dark',
  'cyberpunk-navy',
  'cyberpunk-light',
  'editorial-dark',
  'editorial-navy',
  'editorial-light'
];
```

### React Implementasyonu
```jsx
import { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('cyberpunk-dark');
  
  useEffect(() => {
    // Load saved theme
    const saved = localStorage.getItem('tubenotes_theme');
    if (saved) setTheme(saved);
  }, []);
  
  useEffect(() => {
    // Apply theme
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tubenotes_theme', theme);
  }, [theme]);
  
  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="px-4 py-2 bg-[var(--surface)] border-2 border-[var(--border)]"
    >
      <option value="cyberpunk-dark">Cyberpunk Dark</option>
      <option value="cyberpunk-navy">Cyberpunk Navy</option>
      <option value="cyberpunk-light">Cyberpunk Light</option>
      <option value="editorial-dark">Editorial Dark</option>
      <option value="editorial-navy">Editorial Navy</option>
      <option value="editorial-light">Editorial Light</option>
    </select>
  );
}
```

---

## 📋 Hızlı Referans: Landing Page için Checklist

### Kullanılması Gereken Temel Öğeler

- ✅ **Renk Paleti**: Cyberpunk Dark teması (#0a0a0a, #ff3366, #00ff88, #ffdd00)
- ✅ **Tipografi**: Uppercase başlıklar + Monospace detaylar
- ✅ **Brutalist Shadows**: 4px/6px offset shadows
- ✅ **Keskin Kenarlıklar**: border-radius: 0
- ✅ **3px Border Width**: Ağır kenarlıklar
- ✅ **Grid Noise Background**: Arka plan texture
- ✅ **Framer Motion**: Sayfa giriş animasyonları
- ✅ **Stagger Effects**: Kart listelerinde gecikme
- ✅ **Hover Transforms**: translate(-2px, -2px) + shadow artışı
- ✅ **Icon Size**: 24px (feature cards için 48px+)
- ✅ **Spacing**: 8px temel birim (calc ile çarpımlar)
- ✅ **Max Width**: 1400-1600px container

### Kaçınılması Gerekenler

- ❌ Yuvarlatılmış köşeler (border-radius > 0)
- ❌ Gradient butonlar (düz renkler kullan)
- ❌ Drop shadows (offset shadows kullan)
- ❌ Pastel renkler (bold renkler kullan)
- ❌ İnce fontlar (bold/mono kullan)
- ❌ Lowercase başlıklar (UPPERCASE kullan)
- ❌ Yumuşak animasyonlar (keskin transitions)

---

## 🔗 Ek Kaynaklar

### CSS Dosyası
Tüm stil kuralları: [`app/globals.css`](app/globals.css)

### Örnek Componentler
- Hero: [`app/page.tsx`](app/page.tsx)
- Cards: [`components/VideoCard.tsx`](components/VideoCard.tsx)
- Dashboard: [`components/Dashboard.tsx`](components/Dashboard.tsx)
- Sidebar: [`components/Sidebar.tsx`](components/Sidebar.tsx)

### Animasyon Örnekleri
- Framer Motion: [`components/Dashboard.tsx`](components/Dashboard.tsx#L47-L73)
- CSS Keyframes: [`app/globals.css`](app/globals.css#L424-L473)

---

## 🎯 Landing Page için Önerilen Yapı

```
1. Hero Section
   - Büyük başlık (text-7xl, UPPERCASE)
   - Alt başlık (text-mono, muted)
   - Primary CTA button (brutal shadow)
   - Grid noise background

2. Feature Cards Section
   - 3 column grid
   - Her kart farklı accent color shadow
   - Emoji + başlık + açıklama
   - Hover: y-offset animation

3. Stats Section
   - 3-4 istatistik
   - Büyük sayılar (text-6xl)
   - Farklı accent colors
   - Scale animation on view

4. Screenshot/Demo Section
   - App screenshot/video
   - Border + shadow
   - Caption text

5. CTA Section
   - Accent color background
   - Kontrastlı buton
   - Download links

6. Footer
   - Links (Github, Twitter, Email)
   - Copyright
   - Theme switcher
```

---

**Son Güncelleme:** 2026-02-08  
**Oluşturan:** GitHub Copilot  
**Proje:** TubeNotes Desktop App
