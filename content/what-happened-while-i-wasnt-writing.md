---
id: "23"
title: "What Happened While I Wasn't Writing Here"
date: "28-09-2026"
description: "A quiet blog did not mean a quiet few months. A look at the apps, revisions, and decisions behind the work since my last post."
---

The last article here was about rewriting the same screen in Patterns four times. Then I stopped writing for a while. The apps did not stop changing.

I have a habit of treating a release as the moment the story is finished. In practice, release is usually when the interesting questions become visible. A feature that made sense in a design file has to survive real devices, app review, updates, and the ordinary routine of someone opening it again tomorrow.

So this is a note from the middle of the work, not a victory lap.

## The products became more specific

Tumble began as a slower camera: twelve shots in a daily roll, no instant review, and a print that develops after you take it. Its later releases added film looks and postcard frames. That changed the question from "How do I make people take fewer photos?" to "What makes one finished photo worth keeping?" The constraint is still there in the current App Store version, but the editing and presentation around it have grown.

Cambium also moved beyond its first question. Naming a plant from a photo is useful, but the next question is usually whether the plant is healthy and what to do about it. The app now presents visible-health checks, care steps, and a way to compare progress over time. A photograph can support an estimate; it cannot make a diagnosis certain. Designing the language around that limit has been as important as designing the scan screen.

Rezumate took a different turn. Resume analysis deals with names, contact details, and a person's work history. The iPhone app now parses, scores, suggests edits, and exports locally. That decision made privacy part of the implementation instead of a sentence on a landing page.

## Revisiting existing work counts too

Some of the most substantial work has been on apps that already existed. Lofikofi has a native Mac rebuild in progress, with migration code for the data people created in the earlier Flutter version. Patterns has kept growing as a private journal and ERP companion. Steepr has accumulated the small platform details that make an iPhone and Watch timer feel dependable.

This is less tidy than a list of launches. It is also closer to what making software feels like: build something, find the part that does not hold up, and change it without making existing users pay for the experiment.

## What I want to write about next

I want this blog to show the decisions inside the products, including the ones I reversed. That means writing about Tumble's limits, the Lofikofi rebuild, how Cambium shows uncertainty, and why Rezumate moved its analysis onto the phone. It also means being clear when something is still being built rather than presenting a repository branch as a shipped feature.

Writing regularly is useful partly because it makes those distinctions harder to blur. A portfolio card can tell you what an app does. A good post should tell you why it ended up that way, what the tradeoff cost, and what I would reconsider next time.
