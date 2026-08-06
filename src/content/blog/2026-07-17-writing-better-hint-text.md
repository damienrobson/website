---
title: 'Writing better hint text'
description: 'Discover how to use hint text for accessible forms: learn best practices for placement, when to use it, and what to avoid, ensuring clarity and support for all users entering information.'
pubDate: '2026-07-17'
tags: ['Accessibility']
---

Use hint text to provide additional, non-essential guidance that helps users understand what information to enter or how to format it.

## When to use it

Only use hint text if there is a clear user need - for example, if user research shows people struggle to understand a label or enter data in the wrong format.

Hint text should appear directly below the field label (or legend) and above the input box. This ensures screen readers read the guidance before the user enters the field.

## When not to use it

Do not use hint text to tell users:

- **that a field is required**: Use a clear marker on the main label instead, such as:
  - explicit wording (“required”); or
  - an asterisk (”*”) with an appropriate field key (for example, “fields marked with a * are required”).
- **consequences or legal terms**: Put important legal text or instructions that users must not skip in the body copy or main labels. Users with cognitive conditions or those rushing often skip hint text entirely.

Do not use placeholder text inside input boxes as a replacement for hint text. Placeholder text vanishes when a user types, which creates severe barriers for users with cognitive conditions or those using screen readers.

## How to write it

When writing hint text, you must:

- Keep it brief: Use a single sentence of a few words. Long paragraphs of hint text increase cognitive load and make the form harder to scan.
- Be explicit with examples: If there is a specific formatting rule, provide a clear example (for example, “For example, 07700 900077” for a UK mobile number).
- Avoid acronyms and idioms: Write "For example" instead of "e.g." or "i.e.". Use plain, everyday language.
- Use correct punctuation: Always end hint text with a full stop, even if the text is just a format example or an un-punctuated string. Screen readers use full stops to pause naturally between elements.

## Specific formatting rules

### Date Inputs

If you are writing hint text for a date input, give a format example using a day higher than 12 and a month lower than 10 (for example, use “27 3 2007” to demonstrate a UK date, or “3 27 2007” to demonstrate a US date). This ensures users do not confuse the day and month order, and demonstrates that they do not need to type a leading zero.
Reference numbers and codes

If a code contains specific characters, spaces, or cases, show exactly how it appears on the physical object or document (for example, “Your national insurance number is on your tax return, for example, QQ 12 34 56 A”).
