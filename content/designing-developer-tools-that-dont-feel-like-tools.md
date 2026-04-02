---
id: "13"
title: "Designing Developer Tools That Don’t Feel Like Tools"
date: "22-03-2026"
description: "Respect, defaults, and error design—what makes CLI and API workflows feel inevitable instead of fiddly."
---

Developer tools fail in predictable ways. They expose every option on day one. They print stack traces when a user mistypes a flag. They assume you have read the docs—then punish you for not memorizing section 7.2. The best tools feel less like “software you operate” and more like **an extension of intent**: you state what you want; the tool gets out of the way.

I spend a lot of time on tools—CLIs, search interfaces, APIs—where the user is another engineer. Here is what I optimize for.

## Respect the user’s mental model

Developers do not wake up wanting to “use your product.” They want to **finish a job**: ship a fix, find a symbol, shorten a URL, grep across repos. The interface should map to that job, not to your internal architecture.

That means naming that matches how people talk (`link create` not `resource_post`), defaults that match the common case, and advanced features that stay discoverable without blocking the happy path. If your help text is longer than the command, the command is probably wrong.

## Defaults are a moral position

Every default encodes an opinion: safe versus fast, verbose versus quiet, local versus remote. Silence on defaults is not neutrality—it is an abdication. I pick defaults that protect users from footguns (destructive operations require confirmation; destructive *sounding* operations are explicit), then document how to opt into speed when they know what they are doing.

For APIs, the same applies to pagination, rate limits, and error bodies. Predictable behavior beats clever behavior.

## Errors are part of the UX

A tool “does not feel like a tool” when failure is **actionable**. That includes:

- **What** failed (with enough context to distinguish “bad input” from “server down”).
- **Why** it might have happened, when that is knowable without leaking internals.
- **What to do next**—a flag, a URL, a retry window—not “contact support” as the first suggestion.

Stack traces belong in logs, not in stdout for common mistakes. If your CLI prints a Python traceback because someone passed `--formt` instead of `--format`, you have chosen theatrics over craft.

## Latency and honesty

Fast tools feel honest. Slow tools feel broken—even when they are doing real work. Where I cannot make work cheaper, I make **progress visible**: streaming output, incremental results, or an explicit “this may take a minute” with a spinner that does not lie.

For search and indexing, perceived performance often beats raw milliseconds—until it does not. Then the user needs truth: index freshness, partial results, or a clear “still building.”

## Consistency across surfaces

When a product has a dashboard, a CLI, and an API—as several of mine do—**parity** matters. Not identical features on day one, but consistent nouns, compatible auth stories, and the same mental model for core objects. Nothing erodes trust faster than “the API can do it but the UI cannot.”

I treat parity as a backlog item with teeth, not a nice-to-have. Gaps become documentation debt and support debt immediately.

## Aesthetic minimalism is not the goal

“Doesn’t feel like a tool” is sometimes misread as “pretty.” Minimal UI helps, but the feeling comes from **low cognitive load**: fewer irrelevant choices, fewer surprises, fewer moments where the user wonders if they are holding it wrong.

Typography and spacing matter because they reduce noise. Motion matters when it communicates state—not when it decorates. I would rather ship a plain panel with correct behavior than a beautiful panel that lies about errors.

## Testing and observability for tools

Automated tests for CLIs and APIs are not optional if you want a stable contract. I focus on golden snapshots for help output, contract tests for critical paths, and integration tests that run against a real dependency when feasible—not only mocks. For server-side tools, structured logs with correlation IDs turn “it broke on my machine” into something actionable.

Observability is part of UX when failures are rare but expensive. You need enough telemetry to see patterns without turning every user into a telemetry subject without consent.

## Closing

The bar for developer tools has risen. People compare your CLI to `git`, your search to their editor, your API to Stripe’s docs. You will not win on features alone—you win on **trust**: predictable contracts, respectful defaults, and failures that feel like guidance.

If your tool feels like a machine that fights you, it is not because developers are picky. It is because you trained them to expect better.
