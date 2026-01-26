# Documentation Standards

> **IMPORTANT**: This document defines mandatory standards for all project documentation.

---

## 📝 Language Standard

### English Only

**ALL project documentation MUST be written in English.**

This includes:
- ✅ README files
- ✅ Code comments
- ✅ Documentation files (.md)
- ✅ Commit messages
- ✅ Pull request descriptions
- ✅ Issue descriptions
- ✅ Code documentation
- ✅ API documentation
- ✅ Implementation guides

### Rationale

1. **International Accessibility**: English is the universal language of software development
2. **Consistency**: One language ensures uniform documentation quality
3. **Community**: Enables collaboration with international developers
4. **Professional Standards**: Aligns with industry best practices
5. **SEO & Discoverability**: Improves project visibility globally

### Exceptions

The ONLY exception to the English-only rule:
- **User-facing content** (translations in `src/messages/*.json`)
- Content translations for end-users (EN, PT, etc.)

---

## 📐 Documentation Structure

### File Naming
- Use `SCREAMING_SNAKE_CASE.md` for root-level docs
- Use `kebab-case.md` for nested documentation
- Use descriptive, clear names

### Examples
```
✅ GOOD:
- IMPLEMENTATION_PHASES.md
- DOCUMENTATION_STANDARDS.md
- docs/api/authentication.md

❌ BAD:
- implementacao_fase_1.md
- docs.md
- stuff.md
```

---

## 📋 Document Headers

Every documentation file should start with:

```markdown
# Document Title

> **📝 DOCUMENTATION STANDARD**: All project documentation MUST be written in English.

Brief description of the document purpose.

---
```

---

## ✍️ Writing Style

### Be Clear and Concise
- Use simple, direct language
- Avoid jargon when possible
- Define technical terms
- Use active voice

### Use Consistent Formatting
- Use headers (H1-H4) hierarchically
- Use code blocks with language specification
- Use lists for sequential steps
- Use tables for comparisons

### Examples

```markdown
✅ GOOD:
## Installation

Install the required dependencies:

```bash
pnpm install
```

❌ BAD:
instalar dependencias:
npm i
```

---

## 🔍 Code Comments

### In English Only
```typescript
// ✅ GOOD: Calculate user age based on birth date
const calculateAge = (birthDate: Date): number => {
  return new Date().getFullYear() - birthDate.getFullYear();
};

// ❌ BAD: Calcula idade do usuário
const calcularIdade = (dataNascimento: Date): number => {
  return new Date().getFullYear() - dataNascimento.getFullYear();
};
```

### Comment Standards
- Use `//` for single-line comments
- Use `/** */` for JSDoc documentation
- Always explain "why", not "what"
- Keep comments up-to-date with code

---

## 📝 Commit Messages

### Format (English)
```
type(scope): brief description

Detailed explanation (if needed)

Fixes #123
```

### Examples
```bash
✅ GOOD:
feat(i18n): add Portuguese translations
fix(layout): resolve mobile menu overflow
docs: update installation instructions

❌ BAD:
adiciona traduções
corrige bug
atualiza
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/config changes

---

## 📚 Documentation Checklist

Before creating or updating documentation:

- [ ] Written in English
- [ ] Clear and concise
- [ ] Follows formatting standards
- [ ] Code examples included (when applicable)
- [ ] Headers properly structured
- [ ] No spelling/grammar errors
- [ ] Links work correctly
- [ ] Up-to-date with current implementation

---

## 🚨 Enforcement

### Review Process
All documentation changes must be reviewed for:
1. **Language**: English only
2. **Clarity**: Clear and understandable
3. **Accuracy**: Reflects current state
4. **Format**: Follows standards

### Automated Checks (Future)
- Spell checker (English)
- Markdown linter
- Broken link checker

---

## 📖 Resources

### Style Guides
- [Google Developer Documentation Style Guide](https://developers.google.com/style)
- [Microsoft Writing Style Guide](https://docs.microsoft.com/en-us/style-guide/)
- [Conventional Commits](https://www.conventionalcommits.org/)

### Tools
- Grammarly (English grammar)
- markdownlint (Markdown linting)
- Vale (prose linter)

---

## 🔄 Updates

This standards document may be updated as the project evolves. All contributors must follow the latest version.

**Last Updated**: January 26, 2026  
**Version**: 1.0.0

---

**Remember**: Consistency in documentation is as important as consistency in code. Always write in English!
