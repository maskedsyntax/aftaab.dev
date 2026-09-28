---
id: "29"
title: "What Resume Scoring Should Explain to the User"
date: "28-09-2026"
description: "Rezumate's score is useful only when it shows the evidence, the limits, and an honest next edit."
---

It is easy to make a resume app return a number. The harder question is what a person should do with it. If Rezumate says a resume scored 68, that number alone does not explain whether the issue is a missing skill, a parsing problem, a weak bullet, or a job description that does not match the person's experience.

I wanted the score to open a conversation with the document, not end it.

## Show the parts behind the total

Rezumate parses PDF and DOCX files on the iPhone, compares the resume with a job description, and checks keyword match, structure, and formatting risks. The results call out matched and missing terms, weak wording, and issues that could make the document harder to read. A score is a summary of those checks; the checks are the useful part.

This also means being precise about the claim. There is no single universal applicant tracking system and no way for an app to promise how every employer will process a resume. Rezumate gives an ATS-style assessment, based on rules it can explain. It cannot guarantee that a resume will pass an employer's screening process or that a particular edit will win an interview.

## An edit should remain true

A missing keyword can be a useful prompt if the applicant actually has that skill and simply did not name it. It should never become an invitation to invent experience. Rezumate lets a person choose which missing skill they really have and where to add it. The score can then update, but the person remains responsible for the claim.

The same rule applies to writing suggestions. Stronger language is valuable when it clarifies work that happened. Fabricated metrics or responsibilities would make a resume more polished and less honest at the same time. That is a bad trade.

## The privacy model follows the document

A resume contains a name, contact details, career history, and often information about employers and colleagues. The current iPhone app runs parsing, scoring, suggestions, and PDF export locally. It does not need to upload the document to a resume-analysis server to produce feedback.

That has a product consequence: the app has to do useful work within the device's limits. The result is a deterministic assessment rather than a remote service that can improvise an answer. For this kind of document, I prefer an explanation a person can question over a confident paragraph they cannot trace.

If a scoring tool cannot show why a number changed, the number is decoration. The useful product is the set of honest, specific edits someone can make after seeing it.
