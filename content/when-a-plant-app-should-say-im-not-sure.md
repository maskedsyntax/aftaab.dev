---
id: "26"
title: "When a Plant App Should Say 'I'm Not Sure'"
date: "28-09-2026"
description: "Designing Cambium's plant results around uncertainty, useful next steps, and the limits of a photograph."
---

Point a camera at a plant and an identification app can give you a name in seconds. The difficult part comes after the name. If it is wrong, the care advice that follows may be wrong too. A polished result screen can make a weak guess look like a fact.

In Cambium, I wanted the uncertainty to be visible where the decision is made, not buried in a disclaimer.

## A result needs context

Cambium's identification response includes a confidence value. The iPhone result screen turns that into language such as "Strong match" or "Likely match" and changes the guidance for a weaker result. It also shows the value so people can see why the wording changed.

That number is a model's estimate, not a guarantee that the plant has been identified correctly. A close-up of one damaged leaf may omit the features that would distinguish two similar species. The useful instruction in that case is to compare the result with the full plant, or take a clearer image, before acting on detailed care guidance.

I would rather show a tentative answer that invites a second look than a confident sentence the interface cannot justify.

## Plant health is a different question

An identification score should not be reused as proof of a disease. Cambium's relay treats visible-health checks separately and asks for cautious, probabilistic language. A photo may support "damage consistent with" a problem; it does not establish everything happening in the soil, roots, light, and watering routine.

The same distinction matters for care plans. A fixed watering schedule inferred from a single image would sound precise while ignoring the pot, season, and room. Condition-based advice gives the person something to observe. If toxicity information is uncertain, the app should make that limit clear rather than offer false reassurance.

## Useful uncertainty still offers a next step

Saying "I don't know" and stopping there is honest but not very helpful. Cambium tries to pair uncertainty with an action: inspect another part of the plant, compare symptoms, follow a practical care step, or re-check its condition later. Its recovery flow is built around that last idea: one image is a snapshot; progress needs comparison over time.

The broader design problem is familiar outside plant care. AI outputs arrive with fluent language and neat layouts. Those qualities can hide weak evidence. The interface has to carry the limits of the answer as carefully as it carries the answer itself. Otherwise, the most polished screen is also the most misleading one.
