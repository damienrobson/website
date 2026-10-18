---
title: "Focus indicators don't have to be ugly"
description: "Many designers hate default browser focus rings and strip them out without replacing them. Here's why that's not the best idea anyone's ever had."
pubDate: '2026-10-18'
tags: ['Accessibility']
---

Let's get this out of the way early: focus indicators serve a vital purpose. **Stop hiding them.**

## What are you on about?

In case you don't know, focus indicators are those thin (usually blue) outlines that appear around form inputs, buttons and the like all across the web. They give a visual indication to users as to where their current "focus" is, and you can only ever have one item focused at any given time. Whilst everyone benefits from them, they are heavily relied on by keyboard-only users to know where they are on the page.

## Why would you hide them?

The biggest reason I've seen for hiding/removing focus indicators is that they look horrible and don't fit the aesthetic of the rest of the page. Which is fine. Not all designs are centred around the colour blue, but that in itself is not an excuse to turn them off altogether. What's worse, it violates <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html" target="_blank" rel="noopener noreferrer">WCAG 2.4.7 Focus Visible (opens in a new tab)</a>, meaning that by removing the indicator you're actively choosing to make your website or app non-compliant from the get go.

## What you should do

### Keep the indicator

This is a given, otherwise I wouldn't be writing this. You don't have to use the default one, but you should replace it rather than remove it altogether.

### Make it visually discernible

Don't use an indicator that makes it harder to tell where you are. For example, a light grey dotted line isn't helping anyone.

### Make sure it's visible

WCAG 2.4.7 says that at least part of your focus indicator must be visible when active. WCAG 2.4.13 Focus Appearance (which is a AAA-level criterion) takes this further by enforcing total visibility of the indicator; you can <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance" target="_blank" rel="noopener noreferrer">read more on 2.4.13 here</a>

### Contrast ratio

The focus indicator needs to meet a minimum contrast ratio (usually 3:1 against the adjacent background) and have a thick enough perimeter (e.g., a solid 2px or 3px outline).

### Use :focus-visible instead of :focus

If you're worried about focus rings popping up when someone clicks a button with a mouse or tap of a finger, use `:focus-visible` instead of `:focus`. Unlike `:focus`, which triggers on every click, tap, or keystroke, `:focus-visible` only displays the indicator when the user’s input method requires it, such as when navigating via a keyboard or assistive tech. This solves the main complaint designers have while keeping your site completely accessible for those who need it.

## Example

This very website uses the following CSS rule to apply a custom focus indicator in both light and dark modes. I use CSS tokens, so it just works regardless of the mode you're viewing the page in.

```
*:focus-visible {
  outline: 3px solid var(--accent-color);
  outline-offset: 3px;
  border-radius: 0.125rem;
}
```

## Further reading

There are loads of great articles on the web regarding focus indicators, but if you want to read a little bit deeper into managing custom focus states, I'd highly recommend taking a look at <a href="https://www.erikkroes.nl/blog/the-universal-focus-state/" target="_blank" rel="noopener noreferrer">Erik Kroes' article on universal focus indicators</a>, which takes things to a whole other level.
