---
id: "12"
title: "I Stopped Waiting to Feel Ready and Shipped Anyway"
date: "14-02-2026"
description: "The story of building Steepr, my first native iOS app. Why readiness is something you feel after shipping, never before."
---

The idea for Steepr came from a genuinely embarrassing place. I was making tea, forgot about it, and came back to a cold cup. I thought: I should make an app for this. Then I thought: that's a ridiculous reason to build an app. Then I made it anyway.

It took about four months from that moment to the App Store. Four months for a tea timer. On paper that sounds like too long. In practice it was one of the more important things I've done.

## Why a tea timer took four months

The tea timer part of Steepr took maybe two weeks. There is not much to a timer. You pick a tea, the app counts down, it tells you when you're done. The basic loop was working fast.

What took four months was everything I decided the app needed to be.

It needed iCloud sync so your tea library traveled between your iPhone and your iPad. It needed a Watch app so you could start a steep from your wrist without touching your phone. It needed haptic feedback on the Watch when the timer finished, because fumbling with a phone while your hands are occupied near a hot kettle is not a good experience. It needed WidgetKit support so your most-brewed tea could sit on your Home Screen. It needed a tea library with a sensible data model, not just a list of strings.

Most of these features were genuinely worthwhile. Some of them were scope creep dressed up as product thinking. I couldn't always tell the difference while I was inside it.

The Watch app in particular became its own project. WatchKit has a different mental model from SwiftUI on iPhone. The communication pattern between the phone and the Watch, the way you handle state when the Watch is in the background, the constraints on what you can do from a complication. I went deep into Apple's documentation, hit walls, backed up, tried different approaches. There were days where I made no visible progress and felt like I was building on sand.

But I kept going, partly out of stubbornness and partly because the Watch integration felt like the thing that made Steepr a real product rather than a toy. Anyone can make a countdown timer. Not everyone has a Watch app that knows which tea you're brewing.

## The actual problem with feeling ready

Here is what I noticed about my own psychology during those four months: the feeling of readiness never came. Not once did I think "okay, this is ready to ship." What happened instead was that I ran out of things to improve, and eventually had to choose between shipping an imperfect app or never shipping at all.

This is embarrassing to admit because I had shipped apps before. I knew intellectually that readiness is not a state you arrive at, it's a story you tell yourself to justify shipping. But knowing a thing and feeling a thing are two separate operations, and the feeling kept asking for more.

More polish on the empty state. A better onboarding screen. The icon needed another revision. The app description wasn't hitting right. Every time I cleared one item off the list, I found two more to add.

What broke the cycle was a friend asking me to show them the app. I gave them my phone. They used it. They said it was good. They asked when it was coming out. I said I was still working on it. They looked at me with the particular expression that communicates "you're overthinking this" without saying it.

I submitted for App Store review the next day.

## What happened after it went live

Steepr went live quietly. No launch strategy, no Product Hunt post, no press outreach. I told some people, posted it on my socials, and watched the install numbers go nowhere interesting.

What I did not expect was the quality of the people who did find it. Tea people, it turns out, are enthusiastic. I got messages from people in Japan talking about their gongfu cha practice. Someone in the UK told me they'd tried eight different tea timer apps and Steepr was the only one that didn't feel like a stopwatch with branding applied. Someone asked me to add a specific temperature for white tea from a specific region.

None of this would have happened if I'd waited until I felt ready, because I would still be waiting.

## The pattern I've noticed since

Every app I've shipped since Steepr has gone through the same arc. A period where the thing comes together fast and feels exciting. A middle period where the obvious work is done and the remaining work is ambiguous. A late period where I find reasons to not ship, which are usually framed as quality concerns but are actually closer to fear.

The middle period is where most things die. You've lost the novelty of starting but you haven't hit the satisfaction of finishing. The work is hard to describe to people because nothing is visually different yet, just better. Progress is invisible. It's the phase where being a solo builder is most isolating.

What I've learned to do in that phase is reduce scope aggressively. Not because the features I cut aren't good ideas, but because shipping a smaller thing now is almost always better than shipping a larger thing later. You learn more from a shipped app in a week than from six more weeks of building in private.

Steepr did not have everything I wanted it to have on launch day. It still doesn't. There are features I've been thinking about adding for months. But it's in people's hands, doing what it does, which is something my private Xcode project could never do.

Readiness is a feeling that shows up after you ship, when you see the thing working in someone else's life. Before that, you're just waiting.
