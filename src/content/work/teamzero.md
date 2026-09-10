---
title: "Finding a co-founder shouldn't come down to who you sat next to"
name: "TeamZero"
type: "project"
order: 3
links:
  - label: "Repo"
    href: "https://github.com/madhurjyabharadwaj/teamzero"
---

People with an early idea usually have a hole in the founding team and no sensible way to fill it. They ask friends, post in a WhatsApp group, message strangers on LinkedIn, or wait for the next event. Each of those fails for its own reason. Your friends are too few and too similar to you. A group post tells you nothing about whether anyone is serious. Cold outreach is slow. Events happen when they happen.

The actual pain is narrower than "I can't find people". It's this:

> I can't quickly find someone who complements me, is serious about it, has time, cares about the same problem, and wants the same kind of arrangement I do.

## The decision the whole thing rests on

Nearly every matching product optimises for similarity, and here that's precisely wrong. Show a founder more people like them and you've handed them someone with their skills and their blind spots. TeamZero scores for complementarity and seriousness instead.

The weights are explicit. Role fit 30%, commitment and intent 25%, skills and proof of work 20%, industry interest 15%, working style 10%. Anything under 55 doesn't get recommended. Hard filters sit above the score, so someone who only wants short-term paid work never surfaces for a founder hunting a co-founder, no matter how well they score on everything else.

## Why rules rather than a model

I wrote this up as an architecture decision record in the PRD. At cohort scale there's no training data worth the name, and a score you can't explain kills the product anyway. Every match card carries the reasons that actually fired:

> 91% match, strong match. Fills your AI/Data builder need, has proof of work in LLM prototyping, available 5 to 10 hours per week, open to a core teammate or co-founder discussion, interested in B2B SaaS.

Someone who can see why they were matched will send the message. Someone handed a bare percentage won't.

## Where it got hard

Cutting things. It would have been easy to let this become a networking app, or a directory, or a job board, and each of those would have been a bigger product and a worse one. It does one thing: create serious founder-teammate conversations. Which is why it tracks whether an intro call actually happened rather than stopping at the invite.

## Where it stands

Live at [teamzero.lovable.app](https://teamzero.lovable.app), running on seeded data. The data model was built for a real pilot rather than as a demo I'd throw away. It hasn't gone out to a full cohort yet, so I've got no usage numbers, and I'd rather say that than dress up numbers I don't have. If it did go out, I'd watch completion rate on the brief, acceptance rate on recommendations, and how many conversations survive the first month.
