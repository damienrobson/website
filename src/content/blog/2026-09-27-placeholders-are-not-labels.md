---
title: 'Placeholders are not labels'
description: 'Placeholder text as a label substitute remains one of the most widespread UX anti-patterns across the web.'
pubDate: '2026-09-27'
tags: ['Accessibility']
---

Placeholders are everywhere. Look at any web form (even the simpler ones like stand-alone search inputs); input purpose and instruction are contained in placeholder text. It's been common practice for years, and we've grown accustomed to it. But what if I told you it was actually providing a worse experience for some users?

## Why it's a thing

Placeholders help to create slick-looking forms that take up minimal space in your UI. The temptation to make a pretty user interface always takes precedence over an accessible one (unfortunately); after all, people are more likely to notice edgy layouts and styling over how considerate your website or app is, right?

Well, yes and no. In reality, people tend to remember **good experiences**. If that just so happens to link into a shiny UI, then you must be doing something right. This doesn't translate to users with certain types of impairment, however; users with visual or cognitive conditions are potentially going to have a hard time understanding what you want them to enter into forms and simply walk away in search of a better experience that accommodates for them.

## The definition and (mis-)use of placeholders

Put simply, placeholders are designed to provide **additional** context to inputs. Commonly, placeholders are used to tell a user what the expected format of an input should be. This is fine for simple, basic inputs such as email addresses, where a placeholder can remind a user what an email address might look like. All of the heavy lifting will still be done by the input's attached label, which will probably read something like **_E-mail address_**, but you get the picture.

On the flip side of the coin, consider an account creation form that requests users enter a password. If the requirements for the password are complex, then a placeholder is the wrong place to disclose them; you're effectively asking your user to remember potentially complicated sequences (for example, "_Must be at least 8 characters with 1 number, 1 special character and one uppercase letter_").

## The problems they cause

### Increased cognitive load

As soon as the user starts typing, any placeholder text disappears. If the user is then interrupted, makes a typo, or fills out a long form, they lose the context of what the field was asking for and have to clear their text to re-read the prompt. This adds unnecessary mental gymnastics for neurodivergent users or anyone with short-term memory impairments.

### Decreased legibility

Most placeholders are rendered using a low-contrast grey, which more often than not falls well below the WCAG 4.5:1 contrast ratio threshold. Of course, you could just up the contrast with a bit of CSS, but that then leads to another problem; users misinterpret the placeholder as actual text and skip the field entirely.

### Assistive technology quirks

Screen readers treat `<label>` elements and placeholder attributes differently. Some screen readers ignore placeholders entirely, and some read them in inconsistent orders alongside labels. If your form supports auto-completion, there's also the risk that it will remove the placeholder text before the user even reads it.

## What to do (and what to avoid)

Avoid:

- Relying on a placeholder with no `<label>` element.
- Visually hiding the label (e.g. via `class="sr-only"`) while expecting the placeholder to do the heavy lifting.
- Putting critical instructions or format rules inside placeholder text.

Do:

- Use a visible, programmatically linked `<label>` for every field.
- Provide persistent hint text linked via `aria-describedby`.
- Approach floating labels with extreme caution; they often introduce new contrast and screen reader issues.

To round out the article, here's a small snippet to demonstrate the above points.

```html
<label for="account-id">Account ID</label>
<p id="id-hint" class="hint">Includes the 2-letter prefix (e.g. UK-12345).</p>
<input type="text" id="account-id" aria-describedby="id-hint" />
```
