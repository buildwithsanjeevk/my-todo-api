---
name: express-api-standards
description: Coding standards and minimal-diff rules for Express.js REST API development.
---

# Express.js API Development Skill

## 1. Surgical & Minimal Changes (Strict Rule)
- **NEVER** rewrite, reformat, or rename existing working code, variables (like `PORT`), or routes unless explicitly asked in the issue.
- Preserve existing comments, spacing, and structure verbatim. Only insert the new lines required for the current issue.

## 2. Express & REST Conventions
- Always use `express.json()` middleware when handling JSON bodies.
- Use consistent HTTP status codes: `200` (OK), `201` (Created), `400` (Bad Request), `404` (Not Found).
- Always return consistent JSON error objects: `{ "error": "Clear message" }`.
- Compare IDs safely using `String(item.id) === String(req.params.id)`.

## 3. Documentation Rules
- When adding or modifying an endpoint, update only the Endpoints table in `README.md` without altering existing sections.
