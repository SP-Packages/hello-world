# **Hello World**

<p align="center"><i>A lightweight CLI tool that prints "Hello, World!"</i></p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@sp-packages/hello-world" alt="npm version">
  <a href="https://packagephobia.com/result?p=@sp-packages/hello-world"><img src="https://packagephobia.com/badge?p=@sp-packages/hello-world" alt="install size"></a>
  <img src="https://img.shields.io/npm/dw/@sp-packages/hello-world" alt="npm downloads">
  <img src="https://img.shields.io/npm/l/@sp-packages/hello-world" alt="license">
  <img src="https://github.com/SP-Packages/hello-world/actions/workflows/release.yml/badge.svg" alt="build status">
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release" alt="semantic-release"></a>
  <img src="https://img.shields.io/badge/Made%20with-TypeScript-blue.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Prettier">
  <a href="https://codecov.io/gh/SP-Packages/hello-world"><img src="https://codecov.io/gh/SP-Packages/hello-world/graph/badge.svg?token=60X95UNTQL" alt="codecov"></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome">
   <a href="https://github.com/sponsors/iamsenthilprabu"><img src="https://img.shields.io/badge/Sponsor-%E2%9D%A4-pink?logo=github" alt="codecov"></a>
</p>

---

## **✨ Features**

- 🚀 **Simple and lightweight** – Just prints "Hello, World!"
- 📜 **CLI and programmatic support**
- 🛠 **Perfect for testing Node.js setup**
- 🌍 **Cross-platform compatibility**

---

## **📦 Installation**

### **Global Installation** (For system-wide CLI use)

```sh
npm install -g @sp-packages/hello-world
```

This allows you to use `hello-world` globally in your terminal.

### **Local Installation** (For project-specific use)

```sh
npm install --save-dev @sp-packages/hello-world
```

Then, run it via:

```sh
npx hello-world
```

---

## **🚀 CLI Usage**

### **Basic Usage**

```sh
hello-world
```

or using `npx`:

```sh
npx hello-world
```

**Example Output:**

```sh
Hello, World!
```

---

## **📜 Programmatic Usage (Inside Node.js)**

You can also use `hello-world` inside your JavaScript/TypeScript projects.

### **Import and Use in Your Project**

```ts
import { helloWorld } from "@sp-packages/hello-world";

helloWorld();
```

**Example Output:**

```sh
Hello, World!
```

---

## **🤝 Contributing**

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

---

## **📜 License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
