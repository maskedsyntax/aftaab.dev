---
id: "17"
title: "Why I Prefer Monoliths Over Microservices (For Now)"
date: "20-04-2026"
description: "A pragmatic look at the hidden costs of microservices and why a well-structured monolith is often the better choice for most teams."
---

If you read any tech blog or attend any software conference today, you would be forgiven for thinking that microservices are the only way to build modern software. We are told that monoliths are legacy, that they are difficult to scale, and that they lead to spaghetti code. Microservices, on the other hand, are presented as the ultimate solution for agility, scalability, and developer productivity.

But after years of building and maintaining systems of all sizes, I have come to a different conclusion. For most startups and small to medium-sized teams, a well-structured monolith is almost always the better choice. Microservices are not a free lunch. They come with a massive amount of operational complexity and overhead that can easily outweigh their benefits.

In this post, I want to talk about why I prefer monoliths and why I believe the industry's obsession with microservices is often a case of premature optimization.

![A large, solid stone block standing alone in a desert, representing the strength and simplicity of a monolithic architecture](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200)

## The Hidden Cost of Distributed Systems

The moment you move from a monolith to microservices, you are moving from a single system to a distributed system. And distributed systems are hard. Very hard.

Suddenly, you have to deal with things like network latency, partial failures, and data consistency across multiple services. You have to implement service discovery, load balancing, and centralized logging. You have to worry about how to handle a situation where service A is up but service B is down.

In a monolith, a function call is reliable and near-instant. In a microservices architecture, a request between services can fail for a dozen different reasons. To make your system robust, you have to implement complex patterns like retries, circuit breakers, and sagas. All of this is extra code that has nothing to do with your business logic.

## The Operational Tax

Microservices also impose a significant operational tax. Instead of managing one deployment pipeline, you are managing dozens. Instead of monitoring one application, you are monitoring an entire fleet. 

You need sophisticated infrastructure to manage this complexity. You need container orchestration like Kubernetes, service meshes like Istio, and distributed tracing like Jaeger. These are powerful tools, but they require a lot of expertise to set up and maintain. 

For a small team, this operational burden can be overwhelming. Instead of spending your time building features for your users, you find yourself spending half your time managing your infrastructure. You have built a system that is infinitely scalable, but you don't have enough developers to actually build the features that would require that scale.

## The Problem of Data Consistency

One of the most difficult parts of microservices is managing data. In a monolith, you typically have a single database with strong ACID (Atomicity, Consistency, Isolation, Durability) guarantees. You can use transactions to ensure that your data is always in a consistent state.

In microservices, each service should own its own data. This means that a single business process might involve updating data in multiple different databases. Maintaining consistency across these databases is a massive challenge. You often have to settle for eventual consistency, which introduces a lot of cognitive load for both developers and users.

Solving this usually involves complex event-driven architectures with message brokers like Kafka or RabbitMQ. Again, this is more infrastructure to manage and more failure modes to worry about. For most applications, the complexity of managing distributed transactions is simply not worth the benefit.

![A complex network of glowing lines and nodes, representing the intricate and often overwhelming nature of a microservices architecture](https://images.unsplash.com/photo-1558494949-ef0109124dd9?auto=format&fit=crop&q=80&w=1200)

## The Monolith is Not the Problem

The problems that people associate with monoliths—spaghetti code, tight coupling, and slow build times—are not inherent to monolithic architecture. They are the result of poor design and a lack of discipline.

You can build a messy, unmaintainable mess with microservices just as easily as you can with a monolith. In fact, a messy microservices architecture (often called a distributed monolith) is much worse than a messy monolith because it is much harder to debug and fix.

A well-structured monolith, sometimes called a modular monolith, is a beautiful thing. It uses clear boundaries and internal APIs to keep different parts of the system decoupled. It is easy to develop, easy to test, and easy to deploy. And if you ever reach a point where you truly need to split a part of the system off into a separate service, it is much easier to do so if you already have clean internal boundaries.

## When Microservices Make Sense

I am not saying that microservices are never the right choice. They make a lot of sense for very large organizations with hundreds or thousands of developers. In those environments, the main bottleneck is not technical, but social. Microservices allow different teams to work independently and deploy at their own pace without stepping on each other's toes.

They also make sense when you have very different scaling requirements for different parts of your system. If one part of your app needs a massive amount of CPU while the rest is mostly idle, it might be worth splitting that part off so you can scale it independently.

But these are problems of scale. If you are a startup trying to find product-market fit, or a small team building a new product, you don't have these problems yet. Your biggest risk is not that your system won't scale; it is that you won't build something that people actually want before you run out of money.

## The Power of Simplicity

As a developer, I value simplicity above all else. Simplicity means fewer bugs, faster development, and easier maintenance. A monolith is fundamentally simpler than a microservices architecture.

By starting with a monolith, you can iterate faster and get your product in front of users more quickly. You can focus on the core value of your application rather than the plumbing of your infrastructure. 

When I work with clients, I almost always recommend starting with a monolith. I help them build a clean, modular system that can grow with their business. We focus on getting the domain model right and building a solid foundation. If and when they reach the scale where microservices are necessary, they will be in a much better position to make that transition.

![A minimalist workspace with a single laptop and a notebook, representing the focus on simplicity and core business value](https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200)

## Conclusion

Microservices are a powerful tool, but they are not a silver bullet. They are a solution to a specific set of problems that most teams don't have. For the vast majority of applications, a well-structured monolith is the more pragmatic and effective choice.

Don't let the hype cycle dictate your architecture. Think deeply about your own constraints, your team's expertise, and your business goals. Choose the simplest path that allows you to deliver value to your users. Most of the time, that path starts with a monolith.
