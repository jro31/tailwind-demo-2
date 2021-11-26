The second repo from working through the [Tailwind YouTube demo](https://youtube.com/playlist?list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0), with commits of demos of:\
(note that there were no commits from [06: Extracting Reusable Components](https://youtu.be/v-mkUxhaFVA); this video just demo'd some basic React, but nothing Tailwind specific)

* [07: Customizing Your Design System](https://youtu.be/0l0Gx8gWPHk)
  * Running `npx tailwindcss init tailwind-full.config.js --full` to generate a `tailwind-full.config.js` file, which includes all the Tailwind styling. Then updated `postcss.config.js` to use this file (by default, the `tailwind.config.js` file is used). This means that the names/values in this file could be manually updated if you wanted to customise the Tailwind styling. - [Commit link](https://github.com/jro31/tailwind-demo-2/commit/5fe77ce9359fae89a41d5efd959f4fcd4179f2d0)
    * This is NOT the recommended way to use custom styling (see later commits for that), but just a demo that you *can* do it this way.
  * Adding the color `brand` to the `tailwind.config.js` file, and using it in `App.jsx` - [Commit link](https://github.com/jro31/tailwind-demo-2/commit/193605906aa96874c72ca4fc093004d7f07c4e31)
  * Also adding the `brand-light` and `brand-dark` colors, and using them in the jsx - [Commit link](https://github.com/jro31/tailwind-demo-2/commit/4908e4c2a908b5a498cf62d12b9e84589fecc792)
  * Nesting the previously added `brand`, `brand-light` and `brand-dark` colors in within a `brand` key, including using `DEFAULT` to set the `brand` color - [Commit link](https://github.com/jro31/tailwind-demo-2/commit/9342ca168b07c299d0d0d556c22f2f2088fdf84c)
    * Works the same as before, but is more readable
  * Import the `Poppins` font from Google Fonts, and create the `font-headline` class, which uses this font, and use it in `App.jsx` - [Commit link](https://github.com/jro31/tailwind-demo-2/commit/c5e218eaa32d840227d28e7968b95b032a8618f4)
