# Phase Implementation Prompt Template

> **📝 DOCUMENTATION STANDARD**: All project documentation MUST be written in English.

This is a standardized prompt template for implementing any phase of the portfolio project. Simply replace `{PHASE_NUMBER}` with the desired phase number (1-10).

---

## 🎯 Standard Implementation Prompt

```
Implement Phase {PHASE_NUMBER} as described in @docs/IMPLEMENTATION_PHASES.md

Follow these steps:

1. **Analyze Documentation**
   - Review @docs/IMPLEMENTATION_PHASES.md for Phase {PHASE_NUMBER} specifications
   - Check @DOCUMENTATION_STANDARDS.md for project standards
   - Review @DOCUMENTATION_SUMMARY.md for context
   - Check @IMPLEMENTATION_STATUS.md for current project state

2. **Implement Phase {PHASE_NUMBER}**
   - Follow all specifications from IMPLEMENTATION_PHASES.md
   - Create all required components/files
   - Ensure TypeScript compilation passes
   - Verify no linter errors
   - Test production build
   - Follow project coding standards

3. **Create Documentation**
   - Create PHASE_{PHASE_NUMBER}_COMPLETE.md in phases/completed/
   - Document all implemented features
   - Include code examples
   - Add verification steps
   - Document any issues or notes

4. **Update Status**
   - Update @IMPLEMENTATION_STATUS.md
   - Mark Phase {PHASE_NUMBER} as complete
   - Update progress metrics
   - Update completion date
   - Update "Next Phase" section

5. **Create Commit**
   - Stage all changes
   - Create commit with message: "feat: implement Phase {PHASE_NUMBER} - {Phase Name}"
   - Include detailed description of changes
   - Verify commit was successful
```

---

## 📋 Phase Reference

Quick reference for phase numbers and names:

| Phase | Name | Description |
|-------|------|-------------|
| 1 | Foundation & Setup | i18n, SEO, type structure |
| 2 | Types & Mock Data | TypeScript types and example data |
| 3 | Layout & Navigation | Header, footer, language switcher |
| 4 | Homepage Sections | Hero, projects, about, technologies, contact |
| 5 | Project Pages | Project detail pages with dynamic routes |
| 6 | Complete Internationalization | Full translation coverage |
| 7 | Styling & Polish | Design refinement and animations |
| 8 | Performance | Optimization and Core Web Vitals |
| 9 | Testing & Accessibility | WCAG compliance and testing |
| 10 | Deploy & SEO | Production deployment and SEO setup |

---

## 🔍 Example Usage

### Example 1: Implement Phase 3
```
Implement Phase 3 as described in @docs/IMPLEMENTATION_PHASES.md

Follow these steps:

1. **Analyze Documentation**
   - Review @docs/IMPLEMENTATION_PHASES.md for Phase 3 specifications
   - Check @DOCUMENTATION_STANDARDS.md for project standards
   - Review @DOCUMENTATION_SUMMARY.md for context
   - Check @IMPLEMENTATION_STATUS.md for current project state

2. **Implement Phase 3**
   - Follow all specifications from IMPLEMENTATION_PHASES.md
   - Create all required components/files
   - Ensure TypeScript compilation passes
   - Verify no linter errors
   - Test production build
   - Follow project coding standards

3. **Create Documentation**
   - Create PHASE_3_COMPLETE.md in phases/completed/
   - Document all implemented features
   - Include code examples
   - Add verification steps
   - Document any issues or notes

4. **Update Status**
   - Update @IMPLEMENTATION_STATUS.md
   - Mark Phase 3 as complete
   - Update progress metrics
   - Update completion date
   - Update "Next Phase" section

5. **Create Commit**
   - Stage all changes
   - Create commit with message: "feat: implement Phase 3 - Layout & Navigation"
   - Include detailed description of changes
   - Verify commit was successful
```

### Example 2: Implement Phase 4
```
Implement Phase 4 as described in @docs/IMPLEMENTATION_PHASES.md

Follow these steps:

1. **Analyze Documentation**
   - Review @docs/IMPLEMENTATION_PHASES.md for Phase 4 specifications
   - Check @DOCUMENTATION_STANDARDS.md for project standards
   - Review @DOCUMENTATION_SUMMARY.md for context
   - Check @IMPLEMENTATION_STATUS.md for current project state

2. **Implement Phase 4**
   - Follow all specifications from IMPLEMENTATION_PHASES.md
   - Create all required components/files
   - Ensure TypeScript compilation passes
   - Verify no linter errors
   - Test production build
   - Follow project coding standards

3. **Create Documentation**
   - Create PHASE_4_COMPLETE.md in phases/completed/
   - Document all implemented features
   - Include code examples
   - Add verification steps
   - Document any issues or notes

4. **Update Status**
   - Update @IMPLEMENTATION_STATUS.md
   - Mark Phase 4 as complete
   - Update progress metrics
   - Update completion date
   - Update "Next Phase" section

5. **Create Commit**
   - Stage all changes
   - Create commit with message: "feat: implement Phase 4 - Homepage Sections"
   - Include detailed description of changes
   - Verify commit was successful
```

---

## ✅ Verification Checklist

Before marking a phase as complete, verify:

### Code Quality
- [ ] TypeScript compilation passes (`pnpm exec tsc --noEmit`)
- [ ] No linter errors
- [ ] Production build successful (`pnpm build`)
- [ ] All new files follow project structure
- [ ] Code follows project standards

### Documentation
- [ ] PHASE_X_COMPLETE.md created in phases/completed/
- [ ] All implemented features documented
- [ ] Code examples included
- [ ] Verification steps documented
- [ ] IMPLEMENTATION_STATUS.md updated

### Git
- [ ] All changes staged
- [ ] Commit message follows format
- [ ] Commit includes detailed description
- [ ] Commit verified successful

### Testing
- [ ] Development server runs (`pnpm dev`)
- [ ] All routes accessible
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Both languages tested (EN/PT)

---

## 📝 Commit Message Format

```
feat: implement Phase {X} - {Phase Name}

{Detailed description of what was implemented}

Key changes:
- {Change 1}
- {Change 2}
- {Change 3}

{Additional context or notes}

Phase {X} complete: TypeScript compilation ✓, Production build ✓, No linter errors ✓
```

---

## 🚨 Important Notes

### Always Include
1. **Reference documentation**: Always check IMPLEMENTATION_PHASES.md first
2. **Follow standards**: Review DOCUMENTATION_STANDARDS.md
3. **Update status**: Never forget to update IMPLEMENTATION_STATUS.md
4. **Create commit**: Always create a commit after completing a phase
5. **Document everything**: Create comprehensive PHASE_X_COMPLETE.md

### Never Skip
- TypeScript compilation check
- Linter verification
- Production build test
- Documentation creation
- Status update
- Commit creation

### Best Practices
- Read the phase specifications completely before starting
- Create components in the correct folders
- Use existing types and utilities
- Follow naming conventions
- Write semantic HTML
- Include accessibility features
- Test in both languages (EN/PT)
- Test responsive design

---

## 📚 Related Documentation

- [IMPLEMENTATION_PHASES.md](../../docs/IMPLEMENTATION_PHASES.md) - Complete phase guide
- [DOCUMENTATION_STANDARDS.md](../../DOCUMENTATION_STANDARDS.md) - Documentation standards
- [IMPLEMENTATION_STATUS.md](../../IMPLEMENTATION_STATUS.md) - Current status
- [DOCUMENTATION_SUMMARY.md](../../DOCUMENTATION_SUMMARY.md) - All docs summary

---

## 🎯 Quick Commands

```bash
# Check TypeScript
cd apps/web && pnpm exec tsc --noEmit

# Build production
cd apps/web && pnpm build

# Start dev server
cd apps/web && pnpm dev

# Check git status
git status

# Create commit
git add . && git commit -m "feat: implement Phase X - Phase Name"
```

---

**Last Updated**: January 26, 2026  
**Version**: 1.0.0  
**Template Type**: Phase Implementation

---

**Usage**: Copy the standard prompt above, replace `{PHASE_NUMBER}` with your target phase (1-10), and execute the implementation following all steps.
