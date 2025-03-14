# **Hello World**

_A lightweight CLI tool that prints "Hello, World!"_

![npm](https://img.shields.io/npm/v/@sp-packages/hello-world)
![npm](https://img.shields.io/npm/dw/@sp-packages/hello-world)
![License](https://img.shields.io/npm/l/@sp-packages/hello-world)
![Build](https://github.com/SP-Packages/hello-world/actions/workflows/release.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue.svg)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

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
