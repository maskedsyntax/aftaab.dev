---
id: "21"
title: "Building for Apple Watch Taught Me to Design with Constraints"
date: "24-06-2026"
description: "The WatchKit experience building Steepr's watch app. What extreme constraints teach you that abundant screen space hides."
---

When I decided Steepr needed a Watch app, I had never written a line of WatchKit code. I had a general understanding of SwiftUI and the basic architecture of iOS apps, but the Watch platform has different rules, different mental models, and in some ways a completely different philosophy about what an app is supposed to do.

Building Steepr's Watch companion changed how I think about interface design. Not just for Watch apps, but for all of them.

## What a Watch app actually is

The first thing to understand about Watch apps is that they are not small phone apps. This sounds obvious but it is easy to fall into the trap of treating them that way, and the results of falling into that trap are bad.

A phone app can afford to present options. It has screen space for navigation, for secondary information, for a settings panel accessible from a gear icon in the corner. Users of phone apps can explore. They can tap around to find things. The cost of a wrong tap is low because recovery is usually just a back button away.

A Watch app is used while your hands are doing something else. You glance at it for a few seconds. You make one decision, maybe two. Then you put your wrist down. The interaction model is so constrained that many things that work fine on a phone simply don't belong on a Watch at all.

For Steepr, this meant the Watch app had exactly one job. Tell the user what tea they're currently steeping and how much time is left. Let them start and stop a steep. Notify them when the steep is done. That's it.

No library browsing on the Watch. No settings. No history. All of that lives on the phone, where it belongs.

## The design process is mostly subtraction

My first mockup of the Watch UI had too much on it. A tea name, a timer, a temperature readout, a progress ring, a steeping stage indicator. It looked reasonable in Figma. On the actual Watch face it was overwhelming.

The Watch screen is approximately 40 by 40 millimeters. This is not a lot of space. Text that is readable on an iPhone at 12 points is essentially invisible on a Watch at the same size. Everything has to be larger than feels comfortable in design tools.

I stripped back the interface iteratively, removing things I'd convinced myself were useful and testing the result each time. The temperature readout went first. The user had already selected the tea and therefore already knew the temperature. Showing it again was just noise.

The steeping stage indicator went next. Steepr's tea library includes multi-stage steeping for things like gongfu cha, but watching a stage indicator on a Watch while your hands are over a kettle is not the right way to follow a steeping sequence. That belongs on the phone.

What remained was: the tea name, the timer, a circular progress arc, and a button to stop the steep. Four elements. Clear hierarchy. Readable at a glance.

This is most of what Watch design is: removing things until what remains is exactly what the user needs for the next few seconds, and nothing else.

## Communication between the phone and the Watch

WatchKit and SwiftUI for watchOS use a communication architecture that's different from anything in typical iOS development. The Watch and the phone are separate devices running separate processes. They share data through a combination of the Watch Connectivity framework and shared CloudKit containers, and getting the data sync right is one of the harder parts of building a Watch companion.

The specific problem I spent the most time on was this: the user starts a steep on their iPhone, puts the phone in their pocket, and glances at their Watch. The Watch needs to know a steep is in progress, which tea is steeping, and how much time has passed. If the Watch app was in the background when the steep started, it might not have received the update yet.

Handling this gracefully required thinking carefully about what the Watch app needed to be able to show in the absence of live data from the phone. The answer was that it should always be able to reconstruct the current steep state from a timestamp and a duration, even without a live connection. If the phone said "I started this steep at 14:32:00 and it runs for 180 seconds," the Watch can compute the current time remaining without needing an ongoing connection.

This kind of defensive architecture is something that phone apps can sometimes get away with ignoring. The Watch forces it on you.

## Complications are a different medium entirely

A Watch complication is the small data element that appears on the watch face when the user has configured it. It might show the current temperature, the next calendar event, or (in Steepr's case) the current steep's time remaining.

Complications have even more constraints than the Watch app itself. Some complication sizes give you a single number. Some give you a number and a small label. Some give you a number, a label, and a small circular progress indicator.

Designing for complications is a useful exercise in data hierarchy. If you can only show one number, which number is it? If you can show a number and three words, which three words? These constraints force you to have a clear opinion about what your app is fundamentally doing and what information is most valuable at a glance.

Steepr's complication shows the remaining time in the current steep, with a circular progress arc. When there's no active steep, it shows the name of the last-brewed tea. The decision about what to show in the inactive state took longer than you might expect, because it required a clear opinion about what "useful" looks like when the user isn't actively using the app.

## What this taught me about design more broadly

The lesson from Watch development that transferred most directly to other work is this: the right amount of information on a screen is usually less than you think.

When you have abundant space (a phone screen, a tablet, a desktop browser), it's easy to justify adding things. There's room for it. The user can ignore it if they don't need it. The feature isn't hidden.

When you have no space, you have to make hard decisions. And making hard decisions about what matters produces clearer interfaces than making permissive decisions about what can fit.

I now apply a version of the Watch constraint to every screen I design, even ones that will never run on a Watch. I ask: if I could only show three things on this screen, what would they be? The answer is usually the same three things that should be most prominent anyway. The other things often deserve to be secondary or removed entirely.

The Watch didn't give me this question. The Watch made it impossible to avoid.

## One thing I'd tell someone starting Watch development

The Watch simulator is useful for checking layouts but it's not a substitute for a real device. The experience of glancing at your wrist, seeing the information you need in context, raising your wrist and having the screen activate, these are things you can only properly evaluate on hardware.

I bought a used Watch specifically for Steepr development. It was worth it for the number of decisions that went differently once I was testing on the actual device instead of a simulator window on my laptop.

The device has a weight, a position on your wrist, a brightness in different lighting conditions. The tap area responds differently than a mouse click. The haptics feel different from what you imagine in a simulator. Build on the real thing as early as you can.
