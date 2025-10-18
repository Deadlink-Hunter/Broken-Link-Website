# Contributing to Deadlink-Hunter

Thank you for your interest in contributing to Deadlink-Hunter! We welcome contributions from everyone and appreciate your help in making this project better.

## Table of Contents
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Code of Conduct](#code-of-conduct)

---

## Getting Started

Before you begin:
- Make sure you have a GitHub account
- Familiarize yourself with the project by reading the [README](README.md)
- Check existing [issues](https://github.com/Deadlink-Hunter/Broken-Link-Website/issues) and [pull requests](https://github.com/Deadlink-Hunter/Broken-Link-Website/pulls) to avoid duplicates

---

## How to Contribute

There are many ways to contribute to Deadlink-Hunter:

- **Report bugs**: If you find a bug, please open an issue with detailed information
- **Suggest features**: Have an idea? Open an issue to discuss it
- **Improve documentation**: Help us make our docs clearer and more comprehensive
- **Write code**: Fix bugs, implement features, or improve existing code
- **Review pull requests**: Help review and test other contributors' work

---

## Development Setup

### Prerequisites
- Node.js (version 20 or higher)
- pnpm package manager ([installation guide](https://pnpm.io/installation))
- Git

### Setup Steps

1. **Fork** this repository to your own GitHub account

2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/Broken-Link-Website.git
   cd Broken-Link-Website
   ```

3. **Install dependencies** using pnpm (please do not use npm or yarn):
   ```bash
   pnpm install
   ```

4. **Run the development server**:
   ```bash
   pnpm run dev
   ```

5. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b my-feature-name
   ```

---

## Pull Request Process

1. **Make your changes** in your feature branch
   - Write clear, concise commit messages
   - Keep commits focused and atomic
   - Test your changes thoroughly

2. **Run the tests** before submitting:
   ```bash
   pnpm run test
   ```

3. **Push your branch** to your fork:
   ```bash
   git push origin my-feature-name
   ```

4. **Create a Pull Request** from your repository's branch to the `main` branch of the original repository

5. **PR Requirements**:
   - Provide a clear description of what your PR does
   - Reference any related issues (e.g., "Fixes #123")
   - Ensure all tests pass
   - Make sure your code follows the project's style guide
   - ⚠️ **Important**: PRs that are fully AI-generated and not reviewed by a human will not be accepted

6. **Review Process**:
   - A maintainer will review your PR
   - Address any feedback or requested changes
   - Once approved, your PR will be merged

---

## Style Guide

### Code Style

*Style guide details will be added here*

<!-- 
TODO: Add specific style guidelines including:
- Code formatting conventions
- Naming conventions
- File structure
- Import organization
- Component structure
- TypeScript best practices
-->

### Commit Messages

- Use clear and descriptive commit messages
- Start with a verb in the present tense (e.g., "Add", "Fix", "Update", "Remove")
- Keep the first line under 72 characters
- Add additional details in the body if necessary

Example:
```
Add language selection dropdown to navbar

- Implement i18n language switcher
- Update navbar component
- Add tests for language selection
```

### Code Quality

- Write tests for new features
- Ensure all existing tests pass
- Run the linter and fix any issues
- Check TypeScript types

---

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information
- Any conduct that would be inappropriate in a professional setting

---

## Questions?

If you have questions or need help, feel free to:
- Open an issue for discussion
- Reach out to the maintainers
- Check existing documentation and issues

Thank you for contributing to Deadlink-Hunter! 🎉
