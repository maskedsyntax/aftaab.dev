---
id: "14"
title: "I Used to Hand Off Designs to Myself and It Was Still Broken"
date: "18-03-2026"
description: "Being the designer and the engineer on the same product doesn't automatically mean the two sides talk to each other. Here's what I had to unlearn."
---

There is a version of the designer-developer handoff problem that nobody talks about, which is when the designer and the developer are the same person and the handoff is still terrible.

I went through a phase early in my building practice where I would design something carefully in Figma, get it looking exactly right, and then sit down to implement it and immediately start making compromises I hadn't thought through. The spacing was slightly off. The font size that looked right in the design file looked too large in code. The interaction I'd designed assumed a tap target size that was too small for a real finger on a real phone. The component hierarchy I'd drawn didn't map cleanly onto how SwiftUI actually wants to be structured.

None of this happened because I was bad at design or bad at engineering. It happened because I was treating them as sequential phases instead of simultaneous ones.

## The handoff problem in its original form

The classical version of this problem is a designer spending weeks on a perfect Figma file and then passing it to an engineer who immediately sees fifteen things that won't work the way the design implies. The engineer implements a compromise, the designer looks at the result and feels their work wasn't respected, and both of them are a little bit right.

The designer made something beautiful without thinking enough about how it works. The engineer solved the implementation problem without fighting hard enough to preserve the design intent. The product ends up worse than either person wanted.

The usual fix people reach for is better communication. More Slack threads, more design reviews, more dev-ready handoff tooling. And those things help. But they're working around the root problem, which is that designing and building are being treated as separate activities done in sequence.

## Why being solo doesn't automatically solve it

When I started building on my own, I thought this was one of the problems I'd escaped. No handoff needed. I'm both people. The designer and the developer can just talk to each other continuously.

What I found instead was that I had internalized the same sequential thinking. I would put on my designer hat, make decisions, and then put on my developer hat to implement them without challenging those decisions enough. The gap between the roles still existed, just inside my own head.

And in some ways it was harder to navigate than the multi-person version. When a designer and an engineer disagree, there's at least a conversation. When I was disagreeing with my past self, it felt more like a failure than a disagreement. I'd made a decision, I should implement it, why was I now questioning it?

## What actually helped

The shift that helped most was stopping the notion that design comes before code. I now do both at the same time, constantly moving between them.

I'll sketch out an idea in Figma, then jump into Xcode or a Flutter project and try to actually build it. Not a polished prototype, just enough to feel how the real constraints push back. Then I go back and adjust the design based on what I learned. Then I refine the code. They inform each other in a tight loop rather than a long sequence.

This is slower in the short term and faster in the long term. Slower because you're context-switching more. Faster because you're not spending days on designs that will require significant renegotiation once you hit the implementation.

The other thing that helped was learning to notice which design decisions were load-bearing and which were decorative. Some things I designed were essential to the experience I was trying to create and worth the engineering cost to get right. Some things were preferences that felt important while I was in the design file but would look fine if slightly adjusted in code. Learning to tell the difference meant I could be stubborn about the right things and flexible about the rest.

## The specific things that fall apart in translation

A few patterns I've seen consistently cause problems when moving from design to implementation:

**Spacing.** Spacing that looks proportional at Figma's 1x zoom often feels wrong at device scale. I now design at a scale closer to actual device size and check against real screenshots more frequently.

**Typography at small sizes.** A font that reads beautifully at display size can become illegible at 11px in a UI label. I keep a running list of sizes that have caused problems and avoid them by default.

**Interaction assumptions.** Designs are static. They don't capture what a transition feels like, what a long press looks like, how a scroll behaves when the list is empty. I've started annotating designs with these notes even though I'm the only person reading them, because the annotation forces me to think through the interaction rather than leaving it unresolved.

**Platform component behavior.** When you use a native component, it behaves the way the platform expects it to behave, not the way your design assumes. The iOS keyboard appearance, the Android back gesture, the way a macOS sheet dismisses. Designing around native components rather than against them is something I had to learn through friction.

## What this taught me about working with other designers

I later worked with a couple of external designers on client projects, and the time I'd spent wrestling with my own handoff problem made me a much better collaborator.

I knew which design decisions were going to cost the most to implement. I could explain exactly why something needed to change without making the designer feel like their work was being dismissed, because I'd been on both sides of that conversation with myself. And I had a better intuition for when a compromise was worth making versus when the engineering cost of doing it right was worth paying.

Being your own designer and developer doesn't make you immune to the handoff problem. But it does give you an unusually complete understanding of it, which turns out to be useful in ways you don't expect.
