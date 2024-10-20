# React + TypeScript + Vite //create by vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh --- I am using.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh ((This is written by Rust))

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Create Process

- create a new react project by vite

  ```js
  npm create vite@latest
  ```
  Good VS Tools:
    1. ES7+React/Redux/React-Native[template script: "tsrafce" --- For TS]
    2. Prettier -Coder formatter

- use animation
   ```js
      npm i framer-motion
   ```

- use anchor link
   ```js
      npm i react-anchor-link-smooth-scroll@1.0.12  // need a certain version
   ```

- use icons
  ```js
  npm i @heroicons/react
  ```
  usage:
  ```js
   import { HiAcademicCap } from "react-icons/hi";
    function Demo() {
      return (
        <>
          <HiAcademicCap/>
        </>
      )
    }
  ```

- install some dev dependencies
   ```js
   npm i -D @types/react-anchor-link-smooth-scroll@1.0.2
   npm i -D @types/node // path module
   ```

   Then:<br/>
   &emsp;use 'path' to config costume path for "@" in vite.config.ts<br/>
   &emsp;Also In tsconfig.json, add a key named as "paths" in CompileOptions, its value is there.

- install & config tailwind

   Good VS Tools:<br/>
      1. TailWind Document, cmd+crl+t
      2. Tailwind CSS IntelliSense: automatic show me available props

   - “Install Tailwind CSS with vite": [ Official Doc for install and config Tailwind ](https://tailwindcss.com/docs/guides/vite)
   按照link 里面操作【具体步骤文档内并未书写】 ( 期间需要清空 index.css, 删除 App.css, 并调整 App.jsx 的内容  )

   ```js
      npm i -D prettier prettier-plugin-tailwindcss // 可以让自己更自由的书写 tailwind，不必必须按照 tailwind 要求的顺序书写
   ```
  创建一个 prettier.config.cjs
  并更改：
  ```js
  <!-- export default {
    plugins: [require("prettier-plugin-tailwindcss")]
  }; -->
  module.exports = {
     plugins: [require("prettier-plugin-tailwindcss")]
   }
  ```
  在 tailwind.config.cjs 添加配置,具体可参考[这个链接](https://tailwindcss.com/docs/theme)

- 添加字体： Google Fonts

   - [Google Fonts Official website](https://fonts.google.com)

  在找到了想要的字体后，将对应链接（@import 中的 “@import。。。”） 复制到 index.css 首行
  再在 tailwind.config.cjs 进行添加