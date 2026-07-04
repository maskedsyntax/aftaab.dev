---
id: "20"
title: "The 3am Details Nobody Notices But Everyone Feels"
date: "12-06-2026"
description: "The micro-decisions that separate an app that feels polished from one that feels assembled. Specific examples from my own work."
---

There is a class of design decisions that users never consciously notice. Nobody opens an app, taps a button, and thinks "the haptic feedback on that was weighted correctly for the action it confirmed." But if you removed the haptic, or made it heavier than it should be, or triggered it at the wrong moment in the animation, people would feel that something was off. They wouldn't know what. They would just know.

This category of detail is one of the things I spend the most time on, partly because I find it genuinely interesting and partly because it's where the difference between a polished app and a merely functional one lives.

## Animation timing is not decoration

When you add an animation to a UI element, you're making a claim about the relationship between cause and effect. The duration and easing curve of the animation communicates something about the weight and importance of what just happened.

A destructive action (deleting a record, canceling a purchase) should feel slower and more deliberate than a constructive one. The animation that accompanies a confirmation of deletion should have more gravity than the animation that appears when you add an item to a list. If both transitions move at the same speed, the interface is failing to reinforce the difference in consequence between those two actions.

This is a small thing. It takes maybe thirty minutes to tune if you're paying attention. But it compounds across every interaction in an app, and the cumulative effect is a product that feels calibrated versus one that feels like the default settings were accepted everywhere.

For Steepr, I spent time on the transition between the timer running and the completion state. The tea is done. That moment should feel satisfying, a small ceremony. The completion state comes in at a different pace than everything else in the app. The Watch haptic fires at exactly the same moment the visual change completes, not before and not after. Getting that right took several iterations.

## Tap target sizes and the physics of fingers

This one is more engineering than design, but the line between them is thin.

Apple's Human Interface Guidelines recommend a minimum tap target of 44x44 points. This is a floor, not a ceiling, and the floor exists because fingers are not pixel-precise input devices. When you design a button at 28x28 points because it fits the layout better, you're trading your user's accuracy for your own aesthetic preference.

I've gone back and expanded tap targets on elements I was originally satisfied with because I watched myself or another person miss the target and had to admit the issue was the target, not the user.

The tricky version of this problem is when the visual element is smaller than the tap target. An icon that appears to be 20x20 points can have an invisible touch area that extends to 44x44 around it. The visual and the interactive area are different things, and you can design them separately. More apps should.

In Patterns, several of the journal entry list items needed invisible tap target extensions because the visible elements were small and the list was dense. The result looks the same as the design but behaves like a larger tap target. Users don't know this is happening. They just find the app easier to use.

## Empty states are not an edge case

Every list, every feed, every data view in an app has an empty state. It's the state the app is in before the user has any data. And in almost every app I've used, the empty state was treated as an afterthought.

A blank white screen with a small gray message in the center. "No items yet." Maybe a button that says "Add your first item." This is not design. This is a developer leaving a note for the user.

The empty state is often the first thing a new user sees. It's the moment before they've made any investment in the product. It's the place where the app needs to do the most to earn engagement, and it's almost universally where the least thought has been applied.

For Patterns, the empty state of the journal list is not an empty screen. It tells you what the app is for, what to do next, and gives you a button that makes the first action obvious. The tone matches the rest of the app. It was designed as carefully as any other screen.

For Cairnly, the empty pipeline state gives you a concrete next step rather than a message about the absence of data. The empty contacts view has context about what a contact is in this system and why you'd add one.

None of these are complicated to implement. They just require deciding that the empty state matters enough to design.

## Keyboard handling on mobile

I have broken keyboards in apps I've shipped. I have shipped apps where the keyboard covered an input field that the user needed to see while typing. I have had keyboards that refused to dismiss when the user tapped outside the input. Both are embarrassing and both are fixable.

Keyboard handling in iOS is one of those things that seems simple until you have a screen with more than one input field, or a scroll view, or both. When the keyboard appears, it changes the usable screen area. Everything beneath the keyboard becomes inaccessible unless you've handled the layout adjustment. In SwiftUI there are ways to handle this that are better than they used to be. In Flutter you have to be deliberate about it.

The experience of having a form's submit button disappear behind the keyboard is universally frustrating. The experience of having the text field you're typing into scroll out of view behind the keyboard is slightly worse. Neither should ship.

I now have a checklist item for every form-heavy screen: test every input field with the keyboard open, on a device with a smaller screen than your default simulator. If anything is hidden or inaccessible, fix it before it ships.

## The cost of getting this right

All of this takes time. Not enormous amounts of time, but meaningful amounts. Time that could theoretically be spent on features or on the next project.

I justify it partly by believing that polish compounds. An app with good haptics, appropriate animation timing, generous tap targets, and thoughtful empty states feels better to use than an app that lacks these things, and better-feeling apps get used more and recommended more. The ROI on polish is diffuse and hard to measure but I believe it's real.

The other justification is more personal. I spend a lot of time using software that could clearly have been 10-15% better with a bit more attention at the end. The animation that would have been right with one more tweak. The tap target that's just a bit too small. The empty state that was clearly an afterthought.

Those experiences accumulate into a general sense that whoever made the thing didn't quite care enough to finish it. I don't want to make things that feel like that. So I spend the extra time.

Most users will never notice specific detail you agonized over. But the aggregate of a hundred such decisions produces something that feels different from something where those decisions were skipped. That difference is felt even when it's not named.
