---
id: "33"
title: "Keeping a Tea Timer in Sync Across iPhone and Watch"
date: "28-09-2026"
description: "A timer that spans devices needs a shared idea of when the steep began, not a stream of countdown ticks."
---

Steepr has a simple job: tell you when tea is ready. That job becomes less simple when a steep starts on an iPhone and the next glance happens on an Apple Watch.

I wrote earlier about [designing Steepr for the Watch](/blog/building-for-apple-watch-taught-me-to-design-with-constraints). The interface lesson was to remove almost everything. The engineering lesson was to make the remaining number dependable.

## A countdown is not the state

Imagine the phone starts a three-minute steep and sends the Watch a message saying "180 seconds left." By the time the message arrives, that number is already old. If the Watch app was asleep, it may arrive much later. Sending a new number every second would make the two devices unnecessarily dependent on a live connection.

The more useful state is a start time and a duration. Given those, each device can calculate the remaining time from its own clock. If an update arrives late, it can still reconstruct the current steep. The countdown on screen is a view of that state, not the state itself.

This also gives the timer a better chance of surviving backgrounding and relaunches. The app can return to the same question: when did this steep begin, and how long was it meant to run?

## The Watch should be useful on its own

A Watch companion cannot assume the phone is awake and reachable for every glance. Steepr's Watch screen concentrates on the tea name, remaining time, progress, and a way to stop. It does not need to mirror the entire tea library or history.

That separation lets each device do the part it is good at. The phone holds the fuller brewing context. The Watch makes a brief glance and a quick action possible while someone's hands are occupied.

The hard cases are the transitions: starting on one device, pausing from another surface, resuming after sleep, and deciding which action is the latest one. A timer that looks correct only while both apps are open is not a dependable timer.

## Correctness is part of the feeling

When a tea timer is off by a minute, the user does not care that the animation was smooth. This is one of those products where reliability is the design. Haptics, progress arcs, and a satisfying completion state matter, but they have to describe the same steep that the clock is tracking.

Building the Watch app made me reduce the interface. Keeping the timer coherent across devices made me reduce the data model to the facts that actually matter. Both changes came from the same question: what does someone need to trust in the few seconds they look at their wrist?
