---
title: 'Guidance on Headings'
description: 'Master accessible heading structures with practical guidance on hierarchy, semantics, WCAG compliance, screen reader navigation, and developer best practices. Learn how to create clear, structured content that works for everyone.'
pubDate: '2026-07-16'
tags: ['Accessibility']
---

Headings are more than just design elements; they are the primary navigation tool for screen reader users and a roadmap for all visitors. To ensure our products are accessible and WCAG-compliant, please follow these five core principles:

1. **Structure over Style**: Never choose a heading level (h1–h6) based on how it looks. Use the tag that matches the content’s hierarchy and use CSS to handle the visual appearance.
2. **The "Exactly One H1" Rule**: Every page must have one (and only one) `<h1>` that describes the page’s primary purpose.
3. **Strict Numerical Order**: Always move through heading levels sequentially (e.g., `<h2>` followed by `<h3>`). Never skip levels (e.g., jumping from `<h2>` to `<h4>`), as this breaks the "Table of Contents" for assistive technology.
4. **Component Flexibility**: Developers should avoid hard-coding heading levels into reusable components. Use props to ensure a component’s heading fits the hierarchy of the specific page it's placed on.
5. **Descriptive & Functional**: Headings must clearly describe the content that follows. Avoid using empty headings for spacing, and use "visually hidden" headings when a section needs a label that isn't shown in the UI.

Never choose a heading level based on its font size. If you need a small heading for a major section, use an `<h2>` and apply a "small" CSS class. If a line of text doesn't label a section (like a decorative shout-out), use a `<p>` tag. **Headings are for structure; CSS is for style.**

<blockquote>
TL;DR: Don’t let style determine heading use. Design does not equate to Semantics.
</blockquote>

## Definitions

### H1: The Page Title

There must be exactly one h1 element on a page. This is because h1 headings tell users whereabouts they are within a site. They should be the most prominent headings on the page.

### H2: Main Content

h2 elements hold the core information of your pages, and can be thought of as markers that indicate the start of sections.

### H3 to H6: Sub-sections

h3 through h6 break up content and sections with clear and obvious "sub-headings" that nest within h2 elements.

## Guidance

### Follow the logical hierarchy

Heading levels range from h1 to h6 (though h5 and h6 are very rarely used), and should be used in a strictly numerical order: h1 > h2 > h3, etc.. Using a h5 or a h6 is usually an indication that the content of the page is becoming too complex. Consider breaking up the page more succinctly.

### Don't skip heading levels

If the last heading used was a h3, subsequent headings should be one of:

- h3: to signify more content of equal importance to the current/previous content
- h4: to signify content which enhances the current/previous content
- h2: to start an entirely new section

### Don't let style determine heading use

One heading level should not be used over another just because the styling suits the design requirements (e.g. smaller font, bolder text, better spacing). If a piece of text looks like a heading but doesn't act as a label for a section of content , don't use a heading; use a `<p>` tag and style it. Headings are tags, not style.

### Don't use empty headings as spacers

Screen reader users will use additional tools provided by the software to quickly navigate between headings. Empty headings will confuse and disorientate users reliant on this functionality given the lack of content.

### Use hidden headings if appropriate

Headings may not be visually appropriate for use within a screen's layout. However, non-visual users will still benefit from them as they aid in navigation, etc. In such cases, consider using "visually hidden" CSS classes to hide it from visual users whilst keeping it available for non-visual users.

### Don't hard-code heading levels

When building custom, reusable components, heading levels should be configurable to allow usage anywhere within the structure. For example, a Card component with a heading element may appear after a h1 on some pages but after a h3 on another. In code, this is often achieved by passing a level or tag prop to the component (e.g., `<Card headingLevel="h3"/>`).

### Sense-check headings by disabling CSS

Viewing a page with CSS disabled is a great way to ensure that heading levels make sense. Users should be able to grasp a sense of the document and its outline clearly and easily.

### Use extensions or bookmarklets to highlight any common errors

Extensions such as WAVE (https://wave.webaim.org/) and bookmarklets such as the ones found on https://accessibility-bookmarklets.org/install.html are great ways to automatically check and highlight errors.

## WCAG Success Criteria

Incorrect heading level use can potentially result in the failure of an accessibility audit against the following success criteria:

### 1.3.1 Info and Relationships (A)

#### Explanation:

Visual information and relationships (like labels, headings, or groupings) must also be conveyed in the code using semantic HTML (e.g. `<label for="">`, `<ul>`, `<h1>`) or ARIA attributes (e.g. `<aria-describedby>`, `<role="group">`) so that assistive technologies can understand the structure.

#### Why it might fail:

People who use screen readers or other assistive tech rely on the underlying structure of the code to understand what's on the page. If the content only looks structured visually, but isn't built that way in code, it's harder to follow, and sometimes even impossible to understand.

### 1.3.2 Meaningful Sequence (A)

#### Explanation:

Content must follow a logical and meaningful order in the code so it can be understood correctly by assistive technologies even if the visual layout differs.

#### Why it might fail:

People with vision impairment or cognitive disabilities often rely on screen readers or other assistive technology to help them access content on a webpage. Providing content without a linear order (when needed) makes it difficult for assistive technology to convey the meaning of the content properly. It affects the user’s overall understanding of the information on the page. People who cannot perceive visual content will miss out on important information included in content that requires a meaningful sequence. Making sure all the elements on a page follow a linear and intuitive order makes it so that a screen reader or refreshable braille display can process the information.

### 2.4.6 Headings and Labels (AA)

#### Explanation:

Headings must describe what follows. Labels and buttons must clearly communicate what information is needed or what action will happen.

#### Why it might fail:

People with limited vision often use screen readers, which rely on clear headings for easy navigation. Screen readers typically offer a feature where they read out the headings to users and allow them to skip there. Without descriptive headings, navigating the page would be frustrating for users who have to listen to all the headings. People with reading and learning disabilities benefit from descriptive headings that make sections predictable and easier to follow. Vague labels can also create confusion, making tasks like filling out forms more challenging. People with physical disabilities often rely on assistive technology such as keyboard or voice navigation, and these tools use headings and labels to help users move through a page or select specific sections and actions.
