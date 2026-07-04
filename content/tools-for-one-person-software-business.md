---
id: "17"
title: "The Tools I Actually Use to Run a One-Person Software Business"
date: "08-05-2026"
description: "Not a sponsored list. Just what I've ended up with after trying a lot of things, and why each one is still here."
---

Every few months I see a new version of the "tools I use" post, usually with affiliate links and a suspiciously positive assessment of everything on the list. This is not that. These are the things I actually use, why I use them, and where they fall short.

I'm a solo builder. I design apps, build them, ship them, and handle the business side on my own. The stack I've landed on reflects that context.

## For building

**Xcode** for iOS and macOS development, obviously. There is no alternative. The simulator has gotten better. The build times have not gotten better as quickly as I'd like. I've made peace with this.

**VS Code** for everything else. Flutter, web projects, the occasional Rust or Python work. I've tried Zed and liked it. I've tried JetBrains products and found them heavy for what I need. VS Code is fine. Most things are fine if you configure them properly.

**Figma** for design. I've used Sketch, I've used Adobe XD, I've tried Framer. Figma won and it deserved to. The ability to open a design file on any machine without syncing is something I didn't appreciate until I was living without it.

## For deploying and hosting

I self-host more than most people would recommend. Cairnly, Botttle, OpenConduit, Trelay all run on my own servers. This is partly philosophy and partly cost, but it requires a willingness to spend time on infrastructure that other approaches would abstract away.

**Hetzner** for VPS hosting. Much cheaper than AWS or DigitalOcean for equivalent specs. The European data center options are good for GDPR-adjacent concerns. The interface is not pretty but it works.

**Docker** for all my self-hosted services. Everything runs in containers. This has saved me from environment problems so many times that I can't imagine going back to bare-metal deploys.

**Coolify** as a self-hosted PaaS layer. This is something I added more recently and it's reduced the operational overhead of managing multiple services significantly. It handles the proxy configuration, SSL certificates, and deployment pipelines so I don't have to.

**Vercel** for projects where I want zero infrastructure thinking. Some projects don't need to be self-hosted, and Vercel's free tier is generous enough that a portfolio site or a small web app costs nothing to keep running.

## For the business side

**Stripe** for payments. The developer experience is significantly better than the alternatives I've tried. The documentation is thorough. The dashboard is usable. The fees are not the lowest available but they're acceptable for the convenience.

**Notion** for notes, project planning, and anything that needs to be written down but doesn't fit in code. I've tried to replace Notion with simpler tools multiple times and always come back. It's not perfect but it's flexible enough to bend to however I'm thinking about a problem at a given moment.

**Linear** for issue tracking when a project gets complex enough to need it. For solo work it's often overkill, but for anything that involves other people or spans more than a couple of months, it's the best issue tracker I've used.

**Plausible** for analytics. Privacy-respecting, simple, self-hostable if you want. I don't need to know which city most of my users are in. I need to know which pages people visit and where they come from. Plausible tells me that without the overhead of a full Google Analytics setup.

## For communication and client work

I handle client communication almost entirely through email. Not because I think it's optimal but because it creates a paper trail, it's asynchronous in the right way, and it doesn't require a client to install anything.

For more complex client projects I use **Loom** for video walkthroughs instead of live calls when I can. A recorded walkthrough can be paused, rewatched, and shared. A live demo requires scheduling and gives the client no time to think before responding.

**Letterbird** for a public inbox, which lets people email me without me putting my email address everywhere and inviting spam.

## What I've tried and stopped using

**Jira.** Too heavy for solo work, and the interface makes me genuinely unhappy to look at.

**Slack.** I don't have a team, so the main use case doesn't apply. When I've used it on client projects it's been fine, but it adds a real cognitive overhead and the notification model trains you to be reactive.

**Webflow.** I like it conceptually. In practice I'm fast enough in code that it doesn't save me time, and I always end up wanting to do something it makes awkward.

**Various time tracking apps.** I've tried maybe six of them. None of them captured my actual behavior accurately and all of them required more friction than the insight was worth. I now estimate time by project scope and adjust after the fact.

## The pattern I notice

The tools I've kept share a few properties. They do one thing well rather than many things adequately. They don't require significant ongoing configuration to stay useful. They're cheap or free for the scale I'm operating at. And they get out of the way.

The tools I've dropped were usually dropped because they created more work than they saved. A task manager that requires you to groom it is not saving you time. An analytics platform that requires a dedicated morning to interpret is not giving you useful information.

One of the underrated benefits of running a one-person operation is that your tooling choices are entirely your own. You're not constrained by what the team already uses or what was decided before you joined. If something isn't working, you can replace it next week without a migration meeting.

The downside is that there's no one to tell you that the tool you're evaluating is actually terrible. That's what posts like this are for.
