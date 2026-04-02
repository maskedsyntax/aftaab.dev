---
id: "12"
title: "From Idea to System: How I Approach Product Development"
date: "18-03-2026"
description: "Turning vague ideas into maintainable products—boundaries, data models, and the order I tackle risk."
---

Ideas are cheap. **Systems**—coherent boundaries, predictable behavior, and room to evolve—are what separate a demo from something you can operate for years. This is how I move from “we should build X” to a structure that can survive contact with reality.

I am not selling a methodology deck. These are the moves that have saved me from my own optimism.

## Start with the job, not the screen

The first artifact I want is not a Figma file. It is a short statement of **who** does **what**, **when**, and **why that matters**. If I cannot write that without reaching for buzzwords, the idea is still liquid.

User stories are fine, but I prefer blunt language: “A contractor uploads a receipt so their client can approve it before payroll.” That sentence implies actors, objects, and a sequence. It already suggests data you will need to store and permissions you will need to enforce. Many “ideas” die here because they collapse into a feature list with no spine.

## Model the domain before you polish the UI

Once the job is clear, I sketch the **domain model**—not as UML for its own sake, but as a check on language. Do “Project” and “Client” mean one thing everywhere? Does an “Invoice” belong to a project, a contract, or both? Inconsistency in nouns becomes inconsistency in code and in the database.

I bias toward fewer tables with explicit relationships over many shallow ones. Not because normalization is a religion, but because every extra entity is something you will migrate, explain, and debug. When ML or analytics enters later, a clean model is the difference between useful metrics and garbage joins.

This is also where I decide what is **configurable** versus **coded**. Configuration feels flexible early and expensive forever. Code feels rigid early and testable forever. I default to code for core workflows and config for branding, limits, and feature flags—not the other way around.

## Risk order: what can kill you first?

Not all risks are equal. I try to kill the scary ones early:

- **Integration risk:** If the product depends on a flaky API or a regulated flow, prototype that path with real credentials and real failure modes.
- **Performance risk:** If you promise “fast search across repos,” measure on non-toy data before you argue about button radius.
- **Adoption risk:** If nobody will change behavior without migration, validate that path with a script or a manual runbook before you automate.

Beauty and animation come after the spine survives. That order is how I avoid polishing a wrong foundation.

## Interfaces are contracts

APIs and CLI flags are **contracts** with your future self and with users. I design them to be boring: consistent naming, explicit errors, idempotent operations where possible. “Developer experience” is not a skin on top—it is whether someone can script your product without reading your source.

For web apps, the same idea applies to components: predictable loading states, empty states that explain what to do next, and errors that say what failed—not “Something went wrong” unless you truly cannot know more.

## Iterate where feedback is cheap

I ship small slices to real environments when I can. Staging is not users; dogfooding is better; a friendly pilot is better still. The goal is to learn where the system cracks: auth edge cases, partial failures, ambiguous permissions. Those are not “bugs to fix later.” They are design feedback.

When I work with founders, I push for **one** measurable outcome per milestone: time to first value, conversion on a single step, or support tickets on one flow. Without that, iteration becomes taste-based debate.

## ML and “smart” features

If the product has an ML angle, I separate **offline** quality from **online** behavior. Training curves are not UX. Latency, explainability, and fallback when the model is uncertain are UX. I wire those concerns in early—even if the first version uses heuristics—so the architecture does not assume a magic box later.

## What “done” means

A system is not done when it launches. It is done when you can answer: who is on call, how you roll back, how you migrate data, and what you measure to know it is healthy. That sounds operational because it is. Software that cannot be operated is still a prototype.

## Documentation as part of the system

I write docs for two audiences: the user trying to finish a job, and the engineer who will change this code in six months (often me). If the docs drift from behavior, they are harmful—worse than none. For internal tools, a short “truth table” of commands and flags beats a long narrative. For products, examples that copy-paste matter more than exhaustive parameter lists.

## When to stop designing and start building

Analysis has diminishing returns. I time-box discovery when the unknowns are social (“will they pay?”) rather than technical. For technical unknowns, spikes win: a throwaway branch that answers one question. The mistake is mixing the spike with the production branch—then you ship accidental complexity because it “already works.”

If you take one line from this: **product development is the progressive reduction of ambiguity**—about the problem, the domain, and your own constraints—until the only thing left to argue about is execution speed. Everything before that is where wrong ideas hide.
