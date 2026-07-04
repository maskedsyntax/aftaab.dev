---
id: "22"
title: "Why I Rewrote the Same Screen Four Times"
date: "01-07-2026"
description: "The entry screen in Patterns went through four complete rewrites. What each one got wrong and what the process taught me about design decisions I thought were resolved."
---

The entry screen in Patterns, the screen you see when you sit down to write a journal entry, has been completely rewritten four times. Not iterated. Not refined. Rewritten from scratch, with a different layout, different components, and in one case a different fundamental model for how the screen worked.

This might sound like a failure of planning. It was, in some ways. But it was also how I found out what the screen actually needed to be, which I could not have known without building and living with each version.

## What the screen is supposed to do

Patterns is a journaling app for people managing OCD-style thinking. The core of OCD therapy (particularly ERP, Exposure and Response Prevention) involves logging intrusive thoughts, noting the anxiety level, tracking the response, and looking for patterns over time.

The entry screen is where all of this happens. It needs to feel calm. It needs to not add friction to what is already a difficult thing (sitting down to write about anxiety). It needs to structure the entry enough to capture useful data without making the user feel like they're filling out a form. And it needs to do all of this on a phone screen, probably while the user is in the middle of a difficult moment.

These requirements sound clear. They were not sufficient to produce a good design on the first try.

## Version one: The form

The first version of the entry screen was a form. A text field for the intrusive thought. A slider for the anxiety level. A dropdown for the exposure type. A text area for notes. A save button at the bottom.

This was the most literal interpretation of the requirements. It captured the data. It worked. Users could fill it out and it would log an entry.

It was also cold and clinical. The experience of filling it out felt like a medical intake form. The thing that was supposed to help you process anxiety introduced a different kind of friction: the feeling of being assessed rather than supported.

I used it myself for two weeks and hated it. Not because it didn't work, but because it didn't feel like something I'd want to open when I was already anxious.

## Version two: The document

The second version tried to go in the opposite direction. Instead of a structured form, it was a blank document with some gentle prompts. Start typing about what you're feeling. Light gray placeholder text suggesting some directions. A minimal toolbar at the bottom for adding the structured data (anxiety level, exposure type) after you'd written.

This felt better to open. The blank page was less intimidating than the form. Some users found it easier to start.

But it produced inconsistent entries. The structured data often wasn't filled in because it lived at the bottom of the screen after the text field and required additional taps. The entries were harder to compare over time because they were less structured. The "patterns" part of Patterns, the ability to look back at trends, required consistent data, and the document version didn't reliably produce it.

## Version three: The conversation

Version three tried to thread the needle. It structured the entry as a conversation, asking questions one at a time in a chat-like interface. What are you experiencing? (Text input.) How intense is it, from one to ten? (A horizontal scale.) What did you do in response? (Multiple choice with a text option.)

This felt natural to many users. Conversational interfaces lower the friction of structured data entry by making it feel like something you're saying rather than something you're filing.

But it was slow. An entry that captured all the useful data took twenty or thirty taps across multiple screens. When someone is in a moment of heightened anxiety, the last thing they want is an extended dialog with an app. The conversation that was supposed to feel supportive started to feel like an interview.

## Version four: What's actually there now

The fourth version came from watching people use version three and noticing where they dropped out. Most people completed the free-text part (writing about what they were experiencing) but skipped the structured questions about anxiety level and exposure type.

This told me something important: the writing was the part that mattered most to users. The structured data was useful for the patterns view but it was secondary to the act of writing itself.

Version four puts the text field first and large, taking up most of the screen. The structured fields (anxiety rating, exposure type) are accessible but not primary, tucked below the text in a way that's easy to fill in but not required before saving. The save action is a single button that captures whatever you've filled in, whether that's everything or just the text.

The result is an entry experience that adapts to the user's state. When they have time and energy, they fill in everything. When they're in a difficult moment and just need to write, they write. Both are valid. Both produce useful data.

## What four rewrites actually taught me

The first lesson is that you cannot design your way out of not having data. I had opinions about how the entry screen should feel. I'd read about journaling app design, I'd thought about the therapeutic context, I'd made what felt like informed decisions. All of it was less useful than watching five people use the thing for a week.

The second lesson is about the difference between what users say and what they do. If I'd asked users whether structured data was important, most would have said yes, because it is important and they understand why. But watching their actual behavior showed that they consistently prioritized the writing over the structure when there was any friction in filling both in.

The third lesson is about the cost of the wrong abstraction. Each of the first three versions built a specific model for how journaling works: the form model, the document model, the conversation model. Each model had real advantages but each also had cases where it actively worked against the user. Version four is less elegant as a model but more flexible as a product, because it doesn't commit the user to a particular way of interacting.

The fourth lesson is the hardest to accept: sometimes you need to throw it away. Not iterate. Throw it away and start again with what you know now. This is expensive in time and slightly defeating in feeling, but it produces better outcomes than continuing to polish something that has a fundamental problem.

I've applied this to other screens since. Not necessarily going through four complete rewrites, but being willing to scrap and restart when iteration isn't moving in the right direction. The willingness to throw away work is one of the more useful things a designer-developer can develop.

Version four isn't the last version. I have ideas about what version five might look like. But it's the first one that I'd describe as genuinely good, and I couldn't have arrived at it without building three versions that weren't.
