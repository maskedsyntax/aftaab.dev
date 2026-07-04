---
id: "15"
title: "Why I Always Design in the Same Font I'll Ship In"
date: "02-04-2026"
description: "A small habit that saved me from a recurring problem. Typography decisions that look right in a design file can fall apart completely in code."
---

At some point I started doing something that felt slightly neurotic and turned out to be one of the better habits I've developed: before I design a single screen, I install the typefaces I'm planning to ship with and set them up in Figma. Not placeholder fonts. Not system defaults. The actual fonts.

The reason for this is that I kept designing with fonts I liked and then either discovering that they didn't work in the implementation or that I was approximating something different from what the font actually delivered at small sizes and in real contexts.

## Where this problem starts

When you're designing a mobile app, Figma gives you a smooth, slightly idealized view of your typography. Everything is crisp at whatever resolution your display renders it. The font looks exactly the way the type foundry intended. You can zoom in, tweak the letter-spacing, adjust the line height until it feels perfect.

Then you build it. You put it on a device. And the text looks... close, but not quite the same. Maybe the weight feels lighter than it did in the design. Maybe the line height that looked generous in Figma now feels too loose. Maybe the small-size text that was readable in the design file is now slightly harder to parse on an actual phone screen.

This is not a rendering bug. This is the difference between how type looks in a design tool and how it looks in a real rendering environment, on real hardware, with real subpixel rendering, at real brightness levels, held in a real hand.

You can close some of this gap by designing at accurate device resolutions and testing screenshots constantly. But the most reliable way I've found is to just design with the font you're going to ship, in the sizes you're going to ship it, from the beginning.

## The substitution problem

The other version of this is what I call the substitution problem. You design with a placeholder font, something that looks vaguely like what you want, with the intention of swapping it out later. Inter for a geometric sans, Playfair Display because you want something editorial. Then you build the app, install the real font, swap it in, and discover that it doesn't have the same metrics.

Slightly different cap height. Different character widths. Different letter-spacing defaults. Now your carefully designed layouts are off. Text that fit cleanly in a container now overflows. The heading that sat at a specific size to create a visual relationship with the body text now needs to change. You spend time you didn't budget for adjusting layouts you thought were finished.

If you design with the real font from the start, none of this happens. What you designed is what you get, modulo the rendering differences mentioned above, which you can test for and adjust as you go.

## What this looks like in practice

When I started building Steepr, the first thing I did after setting up the project was license and install the typefaces I wanted to use. I added them to Figma as custom fonts, added them to the Xcode project, and designed the app with both environments pointing at the same files.

Every screen I designed, I could immediately check against the implementation without any mental translation. The font I was looking at in Figma was the font I was rendering in the simulator. When something looked wrong in one, I knew immediately whether it was a design problem or an implementation problem.

For Cairnly, I went through a similar process but with web fonts, which have their own set of rendering considerations. Web fonts render differently across browsers, across operating systems, across display densities. The same font at the same size can look heavier on Windows Chrome than on macOS Safari. Designing with the font loaded via the same CSS stack I'd use in production let me catch some of these discrepancies before they showed up in a browser I hadn't tested.

## The broader principle

The underlying principle is about closing the distance between what you design and what you ship. Every point of translation between design intent and implementation reality is a place where something can get lost. The font is one of the most common and least discussed places where this happens.

The same principle applies to color. A hex value in Figma and the same hex value rendered on an OLED display in a dark room are not the same thing. I test colors on real devices at different brightness levels now, because I've been surprised too many times by how a carefully chosen neutral gray becomes nearly invisible at high brightness or muddy at low brightness.

And it applies to spacing. Spacing values that look proportional at Figma zoom level can feel either cramped or excessive at device scale. I work at a scale that mirrors the physical size of the device I'm targeting, which means my Figma canvas is a specific size, not whatever is convenient for the design.

## A note on custom typefaces for apps

There is a version of this discussion that is about whether to use custom typefaces in mobile apps at all, versus using the platform's system fonts. System fonts (SF Pro on iOS, Roboto on Android) render beautifully, load instantly, support every weight and optical size, and handle edge cases that custom fonts sometimes miss.

I use custom typefaces when they're doing specific design work that the system font can't do. For Steepr, I wanted a slightly warmer, more craft-oriented feel than SF Pro gives you. For Patterns, I wanted something that felt calm and journalistic. For web products, I have more flexibility and usually use a custom pairing.

But when I use a custom typeface, I commit to it fully and test it at every size across multiple devices. Not because I'm obsessive, but because it's faster in the end than discovering problems after you think the design is done.

Type is not something you can fix cheaply at the end. Get it into the real environment early and live with it there.
