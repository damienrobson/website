---
title: 'Buttons vs. Links'
description: "The age-old debate rages on: when should you use a button over a link? When should you use a link over a button? Let's find out!"
pubDate: '2026-08-20'
tags: ['Accessibility']
---

Time was, the question on everyone's lips (at least, in my day job) was, _"when should I use a button instead of a link?"_. At the same time, _"when should I use a link instead of a button?"_ was also the question on everyone's lips. What follows is a brief summary of a presentation I gave to my colleagues which I hoped would answer that very question.

## Links

### What are they for?

Put simply, links are for **navigation**. They take you to new places; a new page, a different website, or somewhere else on the page you're looking at.

### Accessibility features of links

- Screen readers announce links as "link". A user's immediate expectation is to be taken somewhere else.
- Pressing the `Enter` key triggers links. Nothing else.
- Additional context comes via a right-click; users can choose to e.g. open a link in a new tab or copy the URL.

### What they should look like

- Keep the underline! Don't remove it via `text-decoration: none;`. If you absolutely have to (and why would you?), add it back in on hover or focus.
- Use a "pointer" cursor.
- Ensure a high-contrast focus ring;

## Buttons

### What are they for?

Buttons are for **actions on the page**. They change something, submit something or trigger a functional change (e.g. saving forms, opening menus).

### Accessibility features of links

- Screen readers announce buttons as "button". Users expect something to happen when a button is triggered.
- Pressing either the `Enter` key or the `Space` key triggers a button.
- Users cannot do anything else with buttons, regardless of function. They don't, for example, offer a context menu to right-clicking on a link

### What they should look like

- Use a "pointer" cursor.
- Ensure a high-contrast focus ring;

## Common Issues

### Links as buttons

**The problem**: You've made a link look exactly like a button via CSS.

**The solution**: Don't change the behaviour or semantic meaning. Links can look like buttons, but if all it does is navigate to a page, don't force it to be a button with the `role="button"` attribute

### Empty links

**The problem**: You've used a link with a meaningless `href` target to act as a menu trigger.

**The solution**: Use a `button`. If a link doesn't have a valid URL destination, it's not a link.

### Fake buttons

**The problem**: You've built a custom button using `div` and/or `span` elements because styling is a lot easier.

**The solution**: Build around the `button` element. It comes with things like keyboard support and focus states out of the box, for free.

### Silent buttons

**The problem**: A button that changes something (e.g. expands or collapses an accordion component) doesn't announce the state change.

**The solution**: Make use of [good, meaningful ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) attributes such as `aria-pressed` and `aria-expanded`

## Deciding which one to use

Ask yourself:

- **Does it change the URL?**: use a **link**
- **Does it move focus to a different part of the page?**: use a **link**
- **Does it toggle state (e.g. reaction components)?**: use a **button**
- **Does it toggle component visibility (e.g. accordions, modals, drawers)?**: use a **button**

### Advice for designers

Don't let the "look and feel" dictate the element. Tell your developers what the element _does_.

### Advice for developers

Use semantic HTML first; build custom only if absolutely necessary, and use the correct mark-up to ensure behaviours and announcements are aligned.

### Advice for product owners

Semantic HTML can lead to better SEO and a better user experience.

## Takeaways

- If you find yourself adding `role="button"` to a link, stop and ask yourself, _"why is this not just a button?"_.
- The moment you add an `onclick` handler to your link, it stops being a link and becomes a button.
- If it looks like a button, the it should behave exactly like a button.

## An important caveat

If styling a link to look like a button, it's important to remember that dependent on purpose, you might not actually need attributes such as `role="button"`. The combination of the element (the link) and the displayed text (e.g. "Get Started") naturally informs screen readers that they're on a link.
