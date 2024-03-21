# Design Figma for the project [here](https://www.figma.com/file/ZrGNVNG0kZL6txDv4G8P6s/DSCommerce)

### The skills evaluated include creation of web applications with ReactJS, components, props, routes, hooks, requests, local storage, events, global state, access control, forms, among others.

## Correction criteria for this project:

- Customer header: link to home, login/logout link, cart item count 
- Catalog page: paginated listing, filter by name, next page button 
- Product details page 
- Cart page: listing items, changing quantities, subtotals and totals 
- Login page: email validation, error message in case of invalid credentials 
- Admin header:  Home/Products navigation menu 
- Product listing page: paginated listing, filter by name, next page button 
- Product form page: field validations, cancel button, save button working

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
