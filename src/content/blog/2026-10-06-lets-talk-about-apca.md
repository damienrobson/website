---
title: "Let's talk about APCA"
description: "The most likely replacement for WCAG's colour contrast ratio calculation. But what actually is it?"
pubDate: '2026-10-06'
tags: ['Accessibility']
---

Colour contrast is a lie.

The current model found in WCAG 2.x has been used for years, built at a time when CRT monitors were all the rage. Nowadays, everything runs on LED/OLED screens, yet the mathematical foundation that drives colour contrast calculations has remained largely static. But fret ye not, dear reader, for there is a new kid on the horizon. And it wants to totally change the landscape.

## What's wrong with the current model?

While WCAG 2.x's math was modelled around older screen hardware, its bigger issue is how it ignores human vision biology; there is absolutely no room for variation. Human vision perceives light and contrast in different ways (biology, circumstance, etc.), and yet WCAG's computations treats light-on-dark and dark-on-light equally; there is no consideration for visual bleed (halation).

> Science-y bit: Human vision perceives spatial contrast non-linearly, which WCAG 2.x ignores by treating all font sizes, stroke weights, and polarities as identical luminance ratios. WCAG 2.x’s main flaw isn't just CRT monitor math, but human visual biology.

- The current model does not consider font weights in its calculations when actually, such factors can improve readability. WCAG ignores not only font weight, but also stroke width and visual "frequencies" such as letter serifs.
- Some colour combinations pass WCAG while being nearly unreadable for users with normal vision, astigmatism, or ambient glare.
- Inverting light mode colours creates haloing and eye strain because human cone cells process dark-on-light and light-on-dark differently.

## Introducing Advanced Perceptual Contrast Algorithm (APCA)

Catchy name, huh? Developed in part for WCAG 3.0 (so a long way off yet), APCA considers text size, weight, spacing and foreground/background colour when calculating contrast, and it uses a different score (Lc) to predict visual perception more accurately and with more consistency.

### How it works

APCA is a measure of readability in general, as opposed to the current focus of colour alone. Font size and weight are major factors in determining whether text can be read, as is whether the text is light-on-dark or dark-on-light. Rather than a static ratio, APCA gives a numeric score (Lc) between -108 and 106, and whilst that may seem a little arbitrary, it will all (hopefully) make sense shortly.

### APCA calculation benchmarks

When an APCA calculation runs, you end up with a number between -108 and 106. Whilst that range might seem a tad widely-scoped, there's one key point to bear in mind; negative numbers simply indicate light text on a dark background (i.e. dark mode). As such, higher absolute numbers (numbers without the +/- sign) mean higher perceptual lightness contrast, which generally improves readability.

The benchmarks for APCA measurements are as follows. These thresholds refer to the _absolute Lc value_, so e.g -75 (dark mode) meets the same visual contrast threshold as +75 (light mode):

- **Lc 90 and above:** Preferred for thin text or small body text (12px to 14px).
- **Lc 75:** Minimum required for standard body text (~16px Regular).
- **Lc 60:** Minimum for bold subheadings (~18px Bold) or large text.
- **Lc 45:** Minimum for large headlines (~24px Bold or 36px Regular).
- **Below Lc 45:** Fails for body text; allowed only for decorative or massive display text.

Here's a small example to try and clear all of that up.

> **Foreground Colour:** `#8A99AD`  
> **Background Colour:** `#0F172A`  
> **WCAG Ratio:** `4.8:1` _(Passes AA for all text)_  
> **APCA Score:** `Lc 51`

At a font size of `16px` and a font weight of `300`, the above looks as follows:

<div style="padding: 8px; background-color: #0F172A; color: #8A99AD; font-size: 16px; font-weight: 300; ">16px and 300 weight</div>

This is a fail under APCA with an Lc of `51`. The light stroke width on a low-contrast background causes characters to bleed into the dark background. So let's up the font weight:

<div style="padding: 8px; background-color: #0F172A; color: #8A99AD; font-size: 16px; font-weight: 400; ">16px and 400 weight</div>

Still a fail despite the increase in weight; it's better, but the Lc value is below the required Lc threshold of `75` for standard body text. So one more adjustment:

<div style="padding: 8px; background-color: #0F172A; color: #8A99AD; font-size: 16px; font-weight: 700; ">16px and 700 weight</div>

Because we're now using a bold stroke weight, which increases visual weight and character surface area, a rating of Lc 51 is now sufficient for text such as subheadings.

### Why doesn't the Lc change?

The Lc score acts like a temperature reading for your colours. It only measures how much light contrast exists between the text colour and background colour, so changing the font weight won't change the base score. However, thicker fonts make letters easier to see, meaning you can get away with a lower "temperature" (a lower Lc score) and still have perfectly readable text.

## The key takeaway

If you take nothing else from this article, take this:

> Instead of forcing you to change your colours, APCA gives you a flexible solution: _Keep the colours, but make the font larger or bolder so it remains easy to read._

Finally, consider the following points. Your users will thank you.

- Stop relying purely on automated pass/fail WCAG 2.x colour contrast checkers; while WCAG 3.0 is still in draft, APCA can be used today as a supplementary tool to fix edge cases where WCAG 2.x fails.
- Test design tokens with APCA calculators to catch perceptual edge cases early.
- Always evaluate contrast in real-world environments (e.g., mobile screens under direct sunlight or reduced brightness).
