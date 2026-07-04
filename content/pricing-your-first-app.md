---
id: "19"
title: "Pricing Your First App When You Have No Data"
date: "05-06-2026"
description: "The exact thought process behind pricing my App Store apps. What I looked at, what I ignored, and what I'd do differently."
---

When Steepr was ready to submit to the App Store, I sat in front of the App Store Connect pricing screen for about forty minutes. I had a strong opinion about quality, about design, about the user experience I wanted to deliver. I had no idea what to charge.

I looked at competing apps. I read blog posts about App Store pricing strategies. I thought about my costs. None of it gave me a clear answer, so I made a decision and shipped it. Since then I've priced several apps, and I've developed a slightly more coherent framework, though I want to be honest that pricing remains one of the harder problems in this work.

## What I looked at first (and why it was only partially useful)

The obvious starting point is the competitive landscape. What are other apps in the same category charging? For a tea timer, I looked at every timer-adjacent app I could find. Most were free with in-app purchases. A few charged $1.99 or $2.99 for a premium tier. A small number were subscription-based.

This gives you a rough range but doesn't tell you much about where you should be within it. An app that charges $0.99 might be underpriced and undervalued. An app that charges $4.99 might have successfully positioned itself as a premium product or might be struggling with discovery. Price in the App Store is not a reliable signal of quality or success.

The other problem with looking at competitors is that it anchors you to the existing market rather than letting you define your own position. If every other timer app is free with ads, that doesn't mean you have to be. It might mean there's space for a well-designed premium option that nobody has taken seriously yet.

## The mistake of pricing by hourly cost

I briefly tried to rationalize a price by estimating my development hours and dividing by expected sales volume. This exercise is almost completely useless.

First, you don't know your sales volume. You have no data. You're estimating a number you have no basis for estimating, and then using that number to justify another number. The math feels rigorous but it's circular.

Second, the value of software is not determined by the labor that went into it. A solo developer spending three months on an app doesn't automatically produce something more valuable than a developer spending two weeks on a different app. Value to the user is what determines price, and value to the user is determined by what the app does for them, not by how long it took you to build.

## What actually matters when you have no data

There are a few things I've found genuinely useful when pricing without any track record.

**What problem does it solve, and how often?** A daily-use app that saves someone time or frustration every day has a different value profile than an occasional-use utility. Steepr is used every time someone makes tea. If someone makes tea twice a day and uses the app for a year, you're looking at 700-something interactions. The price I charge should be reasonable relative to the total value delivered, not just the moment of purchase.

**What is the friction cost of the alternative?** For Steepr, the alternative is using a generic timer and remembering your tea's steep time. It's fine but slightly annoying. The value of replacing that slight annoyance with something designed for the purpose is real but not enormous. This pushed me toward a one-time price rather than a subscription, because the ongoing value delivered doesn't compound in the way that would justify recurring charges.

**Who is the specific person who would pay for this?** This sounds like a marketing exercise but it's actually useful for pricing. A general-purpose app with a large potential audience can support lower prices because you're optimizing for volume. A specialized app serving a specific enthusiast audience can often support higher prices because those people care deeply about the problem and will pay for a good solution.

Tea enthusiasts are a real group with real opinions and real willingness to pay for things they care about. This influenced my thinking more than the competitive landscape did.

**What feels like a fair trade?** This is the least rigorous criterion but I don't think you should ignore it entirely. If you would feel slightly embarrassed charging a certain amount, that's worth noticing. If you feel like you're undervaluing your work at a certain price, that's also worth noticing. Your intuition about fairness is calibrated by all your experience as a buyer and seller of software, which is worth something even if it's not a model.

## What I'd do differently

I priced Steepr at a one-time purchase price that I think was slightly low. The app has features that took significant time to build, particularly the Watch integration and the iCloud sync. The price I chose doesn't reflect that investment.

If I were doing it again, I would start higher. The App Store lets you lower prices but raising them is harder socially, because early adopters feel they got a worse deal. Starting at a price that reflects your confidence in the product and adjusting down if the data suggests it has less traction than expected is a better approach than starting low and hoping to raise later.

I would also think harder about whether a subscription made sense. I defaulted to one-time purchase partly because I have a personal preference for them as a user, but there are products where a subscription is genuinely the right model because the ongoing costs and ongoing value both justify it. Letting my own preferences as a user influence the business model of the product was probably not the right call.

## The honest answer

There is no formula. You're making a decision with limited information, and you'll know if it was wrong only after you've shipped and watched the data for a while. The goal is not to find the perfect price before you launch. The goal is to find a price you can defend, that reflects your confidence in the product, and that gives you information you can act on.

Then you ship, watch what happens, and adjust.
