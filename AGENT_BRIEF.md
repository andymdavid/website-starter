# Agent Brief: SaaS Landing Page Builder

## Purpose

Build a reusable, content-driven landing page system for high-converting SaaS microsites. Users should create new pages by editing content/theme files only—no JSX changes required.

## Stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **shadcn/ui**
- **lucide-react**
- **framer-motion** (light usage)

No additional libraries. Stay minimal.

## Core Principle

**Single source of truth:** All page content comes from a typed content schema file. Copy, structure, and section config are data-driven, not hardcoded in JSX.

## Target Sections (Default Order)

1. Navbar
2. Hero
3. Partners/Logos
4. Benefits (bento cards)
5. How It Works (3 steps)
6. Pricing (3 plans)
7. Testimonials
8. FAQ
9. Final CTA
10. Footer

Each section is:
- Isolated (no dependencies on other sections)
- Responsive and production-ready
- Supports simple layout variants
- Enabled/disabled via content config

## Implementation Stages

### Stage 1: Project Scaffold ✓
- Next.js + Tailwind + shadcn/ui + lucide + framer-motion
- Layout primitives: `Container`, `Section`

### Stage 2: Content Schema
- Create typed content file defining all section data
- All copy must come from this schema

### Stage 3: Section Registry
- Build renderer that outputs sections based on schema
- Sections appear/disappear based on config alone

### Stage 4: Build Sections
- Implement each section as isolated component consuming schema data
- Follow modern SaaS landing page patterns

### Stage 5: Polish + Defaults
- Consistent spacing and responsive behavior
- Clear CTAs and conversion-optimized defaults

## Definition of Done

- Full landing page renders from content data only
- New pages created by editing content file + assets
- No manual wiring required for section visibility
- Matches modern SaaS design standards
- Zero lint/type errors

## Guardrails

- **Do not over-engineer** — Keep it simple
- **Prefer clarity over abstraction** — Code should be obvious
- **Prefer explicit over clever** — No magic
- **Do not introduce unnecessary config layers**
- **Do not collapse sections into one generic component** — Each section stays distinct
- **Do not rewrite structure** unless explicitly required

## Reference

See `docs/landing-page-anatomy.jpeg` for section order and intent. Use as a structural guide only—not a pixel-perfect design target.

## Optimization Priorities

1. Agent usability (easy for AI to understand and modify)
2. Human readability (clear, maintainable code)
3. Conversion best practices (CTAs, social proof, clarity)
4. Long-term extensibility (easy to add sections or variants)
