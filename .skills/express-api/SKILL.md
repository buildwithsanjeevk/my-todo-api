---
name: express-api-standards
description: Coding standards and minimal-diff rules for Express.js REST API development.
---

# Express.js API Development Skill

- Make the smallest diff that satisfies the issue. Preserve working code, formatting, imports, routes, and comments unless the issue explicitly requires a change.
- Use `express.json()` for JSON request bodies.
- Use `200`, `201`, `400`, `404`, and `500` as appropriate.
- Return errors as `{ "error": "Clear message" }`.
- Compare IDs with `String(item.id) === String(req.params.id)`.
- For a new or changed endpoint, update the relevant README section and OpenAPI document only when applicable.
