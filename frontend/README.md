# Install Tailwind CSS with Vite

Setting up Tailwind CSS in a [Vite project](https://tailwindcss.com/docs/guides/vite).

### 1. Create your project

Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

### 2. Install Tailwind CSS

Install tailwindcss and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your `./src/index.css` file.

```css
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
