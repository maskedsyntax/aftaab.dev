---
id: "16"
title: "SwiftUI Made Me a Better Flutter Developer"
date: "22-04-2026"
description: "Going deep on native platform constraints taught me things about UI architecture that cross-platform abstractions kept hidden. Here's what transferred."
---

I started with Flutter. For a couple of years it was essentially my primary mobile toolkit. I could build fast, the widget system made sense to me, and the ability to ship to iOS and Android from one codebase was genuinely useful for the kind of small-scope projects I was doing.

Then I wanted to build a Watch app. WatchKit does not have a Flutter path. So I learned Swift and SwiftUI to build Steepr, and spent several months living in a completely different mental model for building mobile UIs.

When I came back to Flutter after that, something had changed. Not the code I wrote, exactly, but my understanding of why the code I wrote worked or didn't work. SwiftUI had made things visible that Flutter's abstractions had been hiding.

## What SwiftUI forces you to understand

SwiftUI is opinionated in a way that Flutter is not. Flutter gives you a widget tree and trusts you to make sensible decisions about layout. SwiftUI gives you a more constrained set of primitives and has stronger opinions about how certain things should be done.

The layout system in particular has a different philosophy. In Flutter, you typically size things explicitly or use flex-style layout. In SwiftUI, views participate in a layout negotiation. A parent offers a child space. The child decides how much of that space it wants. The parent places the child based on what the child requested. This sounds similar to Flutter's constraint propagation but the mental model you develop from working with it is slightly different.

In SwiftUI you learn to think about view size as a conversation between parent and child rather than a set of rules being applied top-down. This sounds abstract, but once it clicked I found myself thinking about Flutter layouts differently. I started asking "what is this widget offering its children" and "what is this widget asking its parent for" in a more explicit way, which improved the precision of my layout thinking.

## State management is where the differences are sharpest

Flutter has a rich ecosystem of state management approaches precisely because the framework itself is relatively neutral about how you do it. Riverpod, Bloc, Provider, Cubit, GetX. Each has proponents and each solves the problem in a different way. When I started with Flutter I used Provider, then moved to Riverpod, and formed opinions about both.

SwiftUI has its own approach: the Observation framework (and before that, Combine and ObservableObject). The pattern is tighter and more prescribed. Apple made specific decisions about how data flows through a SwiftUI view hierarchy, and you work within those decisions rather than choosing your own.

Working within a more constrained system made me think harder about the decisions I was making. In Flutter with Riverpod, I could reach for a provider almost anywhere. In SwiftUI, I had to think more carefully about where state lived, who owned it, and how it should flow. The constraints pushed me toward clearer architecture.

When I came back to Flutter, I found myself applying that same discipline voluntarily. Not reaching for a global state provider just because I could, but thinking about what actually needed to be shared and what could stay local. The codebase for Patterns, which I built in Flutter after Steepr, is cleaner than my earlier Flutter work for this reason.

## Platform conventions are not stylistic preferences

This is maybe the most important thing SwiftUI taught me, and it's about something bigger than UI code.

iOS has conventions. The way sheets present and dismiss. The behavior of navigation stacks. The way lists scroll, with their momentum and bounce. The way the keyboard interacts with the content beneath it. These are not arbitrary choices Apple made for aesthetic reasons. They are behaviors users have internalized from years of using iOS devices. They expect them. When they're absent or wrong, users feel it even if they can't articulate why.

Flutter's cross-platform nature means it has to make compromises with these conventions. When you build a Flutter app, you're getting a widget system that can approximate iOS conventions reasonably well, but you're not getting the native implementation of them. The momentum scrolling is close but not the same. The keyboard behavior is handled by the framework in a way that sometimes differs from what a native app would do.

This is not a reason to not use Flutter. For many apps, the difference is small enough that it doesn't matter. Flutter apps can feel great. But the difference exists, and understanding it makes you a better Flutter developer because you know what you need to work harder to preserve versus where the framework handles it for you.

I now invest more attention in the platform-specific details when I'm building Flutter apps. I test on both platforms and treat each one seriously rather than assuming that getting it right on one means it's right on the other. I look specifically for places where the Flutter behavior diverges from native expectations.

## Some things Flutter does better

This is not an argument that Swift/SwiftUI is superior. There are things Flutter does better than native that I genuinely miss when I'm building iOS-only.

Hot reload is the obvious one. Being able to change a widget and see the result immediately without losing application state is legitimately fantastic for UI iteration. Xcode previews exist, but they're more fragile and the feedback loop is slower.

The widget composition model in Flutter is also more flexible in certain ways. The ability to compose arbitrary widgets without worrying about view protocols or type system constraints makes some things easier to build.

And the cross-platform story is real. When I built Patterns for iOS, Android, and macOS from a single Flutter codebase, I was shipping to three platforms with one set of core logic. That is a genuine advantage. Reaching that coverage natively would require Swift for iOS/macOS and Kotlin for Android, and you'd be maintaining two codebases and two UI implementations.

The skill that matters is knowing what each platform trades away and what it gives you back for that tradeoff. SwiftUI taught me what Flutter trades away. That knowledge made me use Flutter more deliberately.

## What I'd tell someone starting out

If you're building mobile apps, I think there's real value in spending meaningful time with both native and cross-platform approaches at some point. Not to pick a winner, but because each teaches you things about mobile UI that the other obscures.

The constraints you encounter in native development give you insight into why cross-platform frameworks make the choices they do. The flexibility of cross-platform development shows you how much of what feels like platform necessity is actually platform convention.

The best mobile engineers I know have done both. They know where the seams are because they've been on both sides of them.
