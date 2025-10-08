# Sprinters Test

Тестовий проєкт інтерфейсу платформи Sprinters — пошуку перевізників, бронювання поїздок, демонстраційної верстки інтерфейсу.

## 📁 Стек технологій & інструменти

- React + TypeScript
- Vite
- Tailwind CSS
- ESLint
- React Router
- SVG / зображення як assets
- (Опціонально) SVGR для імпорту SVG як компонентів

---

## 🚀 Як запустити проект локально

1. **Клонувати репозиторій**

   ```bash
   git clone https://github.com/YuliaSilk/sprinters-test.git
   cd sprinters-test
   ```

# Sprinters Test

Тестовий проєкт інтерфейсу платформи Sprinters — пошуку перевізників, бронювання поїздок, демонстраційної верстки інтерфейсу.

## 📁 Стек технологій & інструменти

- React + TypeScript
- Vite
- Tailwind CSS
- ESLint
- React Router
- SVG / зображення як assets
- (Опціонально) SVGR для імпорту SVG як компонентів

---

## 🚀 Як запустити проект локально

1. **Клонувати репозиторій**

   ```bash
   git clone https://github.com/YuliaSilk/sprinters-test.git
   cd sprinters-test
   ```

2. **Встановити залежності**

   npm install

   # або

   yarn install

3. **Запустити у режимі розробки**

   npm run dev

   # або

   yarn dev

4. **Збірка для продакшен**

   npm run build

   # або

   yarn build

## 🚀 Як запустити проект локально

    sprinters-test/
    ├── public/
    │   └── favicon.svg
    ├── src/
    │   ├── assets/
    │   │   ├── icons/
    │   │   ├── images/
    │   ├── components/
    │   │   ├── layout/
    │   │   ├── ui/
    │   │   ├── TestimonialsSection.tsx
    │   │   └── TestimonialCard.tsx
    │   ├── data/
    │   │   └── testimonials.ts
    │   ├── pages/
    │   ├── App.tsx
    │   └── main.tsx
    ├── index.css
    ├── vite.config.ts
    ├── tsconfig.json
    └── package.json

## 🎯 Особливості реалізації

    •	Адаптивність: на великих екранах відгуки поряд з текстом, на менших — під текстом.
    •	Фон + патерн: реалізовано через абсолютні блоки під секцією, щоб фон був на всю ширину, а патерн накладався зверху.
    •	Контейнер: обмеження ширини контенту через клас container (max-width + паддінги).
    •	SVG / PNG імпорти: зображення імпортуються як ресурси — import bg from '...'; — і використовуються через <img>.
    •	Tailwind конфіг: кастомні кольори, шрифти (Rubik, Lato), брейкпоінти, utility-класи.

## 🛠 Поради / можливі покращення

    •	Додати SVGR плагін (vite-plugin-svgr), щоб імпортувати SVG як React-компоненти.
    •	Додати Switch темної / світлої теми, і відповідні стилі.
    •	Реалізувати повний слайдер (наприклад, з анімацією), а не простий flex overflow-x.
    •	Оптимізувати зображення (WebP, lazy loading).
    •	Додати тестування (Jest, Testing Library).
    •	Додати SEO метадані, фавікон логіку, Open Graph.

## ✅ Ліцензія

Проєкт ліцензовано під MIT License — дивись файл LICENSE.

# Sprinters Test

A test project showcasing a modern landing page layout for **Sprinters**, a booking and transportation platform.  
The goal of this project is to demonstrate clean UI composition, responsive layout, and reusable React components styled with **Tailwind CSS**.

---

## 🚀 Tech Stack

- ⚛️ **React + TypeScript**
- ⚡ **Vite**
- 💨 **Tailwind CSS**
- 🧩 **ESLint + Prettier**
- 🖼️ **SVG & WebP assets**
- 🧱 **Modular component structure**

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YuliaSilk/sprinters-test.git
cd sprinters-test

```

### 2. Install dependencies

npm install

# or

yarn install

### 3. Start the development server

npm run dev

# or

yarn dev

### 4. Build for production

npm run build

## 📂 Project Structure

sprinters-test/
├── public/
│ └── favicon.svg
├── src/
│ ├── assets/
│ │ ├── icons/
│ │ └── images/
│ ├── components/
│ │ ├── layout/
│ │ ├── ui/
│ │ ├── TestimonialsSection.tsx
│ │ └── TestimonialCard.tsx
│ ├── data/
│ │ └── testimonials.ts
│ ├── pages/
│ ├── App.tsx
│ └── main.tsx
├── index.css
├── vite.config.ts
├── tsconfig.json
└── package.json

## ✨ Features

    •	Responsive layout — testimonial cards move below text and button on smaller screens.
    •	Custom Tailwind theme — extended breakpoints, colors, and typography.
    •	Layered background — implemented with absolutely positioned image and pattern.
    •	Reusable UI components — button, testimonial card, and section structure.
    •	Semantic HTML & accessible color contrast.

## 🧠 Possible Improvements

    •	Add testimonial slider (e.g., Swiper.js or Framer Motion).
    •	Use SVGR to import SVGs as React components.
    •	Add dark/light theme switcher.
    •	Implement lazy loading for images.
    •	Add unit tests with Jest + Testing Library.
    •	Extend SEO metadata (Open Graph & Twitter cards).

## 🪪 License

This project is licensed under the MIT License — you are free to use, modify, and distribute it.

## 👩‍💻 Author

Yulia Shevchuk
Frontend Developer — building fast, accessible, and responsive user interfaces.
🔗 GitHub Profile
