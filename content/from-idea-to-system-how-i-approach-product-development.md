---
id: "12"
title: "From Idea to System: How I Approach Product Development"
date: "18-03-2026"
description: "Turning vague ideas into maintainable products through clear boundaries, data models, and a focus on risk."
---

Ideas are cheap. Systems are what separate a demo from something you can operate for years. When I say system, I mean a structure with coherent boundaries, predictable behavior, and enough room to evolve without breaking everything. This is how I move from a loose concept like we should build X to a structure that can survive contact with the real world.

I am not here to sell you a methodology deck. These are the moves that have saved me from my own optimism over the years. Building software is easy, but building the right software that actually works and stays working is hard. It requires a level of discipline that usually goes against our instinct to just start typing code.

![An abstract illustration of a blueprint morphing into a complex network of lines and nodes, representing the transition from idea to system](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200)

## Start with the job, not the screen

The first artifact I want is never a Figma file. If you start with the UI, you start with the surface. You end up arguing about button colors and placement before you even know if the underlying engine makes sense. Instead, I start with a short statement of who does what, when, and why that matters.

If I cannot write this without reaching for buzzwords, the idea is still liquid. It is not ready for a compiler. I prefer blunt language. For example: A contractor uploads a receipt so their client can approve it before payroll. That single sentence implies actors, objects, and a sequence of events. It already suggests the data you will need to store and the permissions you will need to enforce. 

Many ideas die at this stage because they collapse into a feature list with no spine. If you cannot explain the core loop in plain English, you probably do not understand the problem well enough yet. I spend a lot of time poking at these sentences. Is it a contractor or an employee? Is it an approval or a verification? These distinctions might seem like semantics, but they change the entire architecture.

## Model the domain before you polish the UI

Once the job is clear, I sketch the domain model. I do not do this as UML for its own sake. I do it as a check on language. The goal is to ensure that everyone is talking about the same things. Inconsistency in nouns becomes inconsistency in code and, eventually, inconsistency in the database.

Do Project and Client mean the same thing in every part of the app? Does an Invoice belong to a project, a contract, or both? If you do not answer these questions now, you will end up with a database schema that looks like a bowl of spaghetti. I bias toward fewer tables with explicit relationships over many shallow ones. Every extra entity is something you will have to migrate, explain, and debug later. 

When machine learning or advanced analytics enters the picture later, a clean domain model is the difference between useful metrics and garbage joins. It is much easier to add a feature to a solid model than it is to fix a broken model once it is full of production data.

I also take this time to decide what is configurable versus what is coded. Configuration feels flexible early on, but it becomes expensive forever. Code feels rigid early on, but it is testable and predictable forever. I default to code for core workflows and reserve configuration for things like branding, limits, and feature flags.

## Risk order: what can kill you first?

Not all risks are equal. I try to identify and kill the scary ones as early as possible. If I spend three weeks building a beautiful login screen only to find out that the core third-party API we need has a two-second latency, I have wasted three weeks. 

I categorize risks into three main buckets:

1. Integration risk: If the product depends on a flaky API or a regulated flow, I prototype that path first. I use real credentials and real failure modes. I want to see how it breaks before I build a system around it.
2. Performance risk: If the promise of the product is fast search across repositories, I measure that on non-toy data before I even think about the UI.
3. Adoption risk: If nobody will change their behavior without a complex migration, I validate that path with a script or a manual runbook before I automate anything.

Beauty and animation come after the spine survives. That order is how I avoid polishing a foundation that was doomed from the start. It is better to fail on day three with a ugly script than on day thirty with a beautiful app.

![A top-down view of a hand placing a chess piece on a board, with the background blurred, symbolizing strategic planning and risk management](https://images.unsplash.com/photo-1529697210530-8c4bb1358ce5?auto=format&fit=crop&q=80&w=1200)

## Interfaces are contracts

APIs and CLI flags are contracts with your future self and with your users. I design them to be boring. Boring is good in systems. It means consistent naming, explicit errors, and idempotent operations where possible. 

Developer experience is not a skin that you put on top of a product. It is determined by whether someone can script your product without having to read your source code. If your API is unpredictable, people will hate using it, even if the underlying logic is brilliant.

For web apps, the same idea applies to components. I want predictable loading states, empty states that explain what to do next, and errors that actually say what failed. A message like Something went wrong is useless. I want to know why it went wrong and what I can do to fix it.

## Iterate where feedback is cheap

I ship small slices to real environments as soon as I can. Staging environments are fine, but they are not the real world. Dogfooding my own tools is better, but getting a friendly pilot user is better still. The goal is to learn where the system cracks under pressure. 

Is there an auth edge case I missed? Are the permissions ambiguous? These are not just bugs to fix later. They are design feedback. When I work with founders, I push for one measurable outcome per milestone. It could be time to first value or conversion on a single step. Without a metric, iteration becomes a debate about personal taste, and that never ends well.

## Dealing with complexity

As a system grows, complexity is inevitable. The trick is to keep it manageable. I use a concept called the complexity budget. Every time I add a new library or a new architectural layer, I am spending some of that budget. I try to be very stingy with it.

If a problem can be solved with a simple cron job and a Postgres table, I will do that before I reach for a distributed message queue. Simple systems are easier to reason about, easier to test, and much easier to fix when they inevitably break at 3 AM.

## ML and smart features

If a product has a machine learning angle, I separate offline quality from online behavior. Training curves and accuracy scores are not user experience. Latency, explainability, and fallback mechanisms when the model is uncertain are user experience. 

I wire these concerns in early, even if the first version of the feature uses simple heuristics. If the architecture assumes a magic box that always gives the right answer, it will fail when the box is slow or wrong. You need to design for the uncertainty of the model from day one.

## What done really means

A system is not done when it launches. It is done when you can answer four questions: Who is on call if it breaks? How do you roll back a bad deployment? How do you migrate the data to a new version? What are you measuring to know the system is healthy?

That sounds like operations because it is. Software that cannot be operated is just a prototype that happened to get a URL. I build for operations from the start because I know that I am usually the one who will be maintaining it.

![A clean, minimalist workspace with a single laptop and a notebook, representing the clarity and focus needed for successful product development](https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200)

## Documentation as part of the system

I write documentation for two audiences. The first is the user who is just trying to finish their job. The second is the engineer who will have to change this code in six months. Often, that engineer is me, and I have forgotten everything about why I made certain decisions.

If the documentation drifts from the actual behavior of the system, it is worse than having no documentation at all. For internal tools, a short truth table of commands and flags is often enough. For products, examples that can be copied and pasted matter more than an exhaustive list of every possible parameter.

## When to stop designing and start building

Analysis has diminishing returns. I timebox discovery when the unknowns are social, like whether people will actually pay for the product. For technical unknowns, I use spikes. A spike is a throwaway branch where I try to answer one specific question. 

The biggest mistake is mixing the spike with the production branch. You end up shipping accidental complexity because it already works. Once the spike has answered the question, I delete it and write the production version from scratch with the knowledge I gained.

If you take one thing away from this, it is that product development is the progressive reduction of ambiguity. You are reducing ambiguity about the problem, the domain, and your own constraints until the only thing left to argue about is how fast you can execute. Everything before that is where the wrong ideas hide.
