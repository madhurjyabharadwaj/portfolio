---
title: "Where should an AI materials company go first?"
subtitle: "Market entry for a generative-AI materials discovery platform"
name: "Entalpic"
type: "case-study"
category: "GTM strategy"
year: 2026
order: 1
problem: "When your technology applies to a dozen industries, the hard question stops being 'can we' and becomes 'which one, and why that one first'."
role: "Market analysis and go-to-market recommendation"
outcome: "Mapped data centre cooling into a five-layer value chain, narrowed twelve materials opportunities to one through three filters and a weighted scorecard (PFAS-free direct-to-chip coolants, 4.7 out of 5), and showed why Entalpic can't sell it directly and has to route through hardware vendors and fluid OEMs instead."
tags: ["Go-to-market", "Market sizing", "Deep tech", "Channel strategy"]
cover: "../../assets/work/entalpic.png"
coverAlt: "Bar chart of the weighted scorecard: PFAS-free direct-to-chip coolants at 4.7, inhibitor packages at 4.0, high-temperature secondary-loop fluids at 3.9."
# TODO: replace with the real path once the cleaned deck is uploaded to public/decks/.
deck: "/decks/entalpic-opportunity-assessment.pdf"
---

Entalpic is a French startup, founded in 2025, around 25 people with ten-plus PhDs in AI and chemistry. They've built a generative AI platform that finds and ranks new materials, cutting discovery cycles from years down to months. The platform works across energy storage, carbon capture, critical materials, coatings, catalysis. That range is the problem. When your technology applies to a dozen industries, the hard question stops being "can we" and becomes "which one, and why that one first".

I was asked to assess AI data centre cooling and come back with a specific entry point.

## Why cooling was worth looking at

Two things are happening at once. GPU racks are now pulling 40 to 120 kW, and cooling already accounts for 30 to 50% of a data centre's energy use. Air cooling has run out of headroom. At the same time, PFAS restrictions in the EU from 2025 and state-level bans in the US through 2024 to 2026 are quietly making the standard fluorinated coolants unusable. So there's a performance problem and a regulatory deadline arriving together, which is usually when incumbents get displaced.

## The part that took the work

You can't enter "data centre cooling". It isn't a market, it's a value chain running from the silicon to the building. So I mapped it into layers, chip and package, inside the server loop, rack and row, facility and heat reuse, plus monitoring, and built a longlist of twelve materials-level opportunities across them. For each one I wrote down what it actually is, why a buyer would care, what Entalpic's specific play would be, and roughly how fast it could get to a pilot.

Twelve went to five on three filters. Is this genuinely a materials problem, so that Entalpic's platform is central rather than helpful at the edges? Is the buyer's pain live today rather than expected in three years? And can it be piloted quickly?

The five survivors were scored on a weighted framework: business attractiveness and adoption at 45%, scientific and technical feasibility at 35%, environmental impact at 20%. Each criterion scored one to five.

The weighting is the part I'd defend hardest. Putting business at 45% over feasibility says something specific about Entalpic's situation. Their binding constraint isn't whether the chemistry can be made to work, because they have the PhDs for that. It's whether a customer will run a pilot this year. So adoption risk outranks technical elegance.

## What came out

PFAS-free single-phase direct-to-chip dielectric coolants scored 4.7, clear of inhibitor packages at 4.0 and high-temperature secondary-loop fluids at 3.9. It was the only option scoring five on both business attractiveness and environmental impact.

## The bit I think actually mattered

Picking the use case was the easy half. The harder question was how a company like Entalpic sells it, and the honest answer is that it can't. They don't manufacture. They don't hold the safety data sheets, the QA, or the distribution. And no data centre operator is going to buy a coolant from an AI company.

So the route has to run through other people. Co-develop with the direct-to-chip hardware vendors, because they own the cold plates, the test rigs, and the approved-fluid lists that gate everything. License the formulation and the compatibility dataset to a fluid OEM who can actually manufacture at scale. Keep Entalpic upstream as the discovery and data partner, selling three things: discovery projects, compatibility data packages, and co-development support during testing.

That reframes what Entalpic is selling. Not a coolant. A shortlist of candidates plus the compatibility evidence that gets those candidates through an OEM lab, which is the step that normally eats months.

## The number I'm least sure about

The market sizing puts the total data centre cooling market at $18.78B, liquid cooling at $5.51B, and the serviceable slice, PFAS-free single-phase direct-to-chip dielectric fluids, at roughly $17M in 2025. That last figure is small, and it rests on two assumptions I couldn't validate from public sources: direct-to-chip taking 20% of the dielectric fluids market, and PFAS-free taking 40% within that.

If either is off by half, the wedge looks very different. I put both assumptions on the slide rather than in a footnote, because a $17M number derived from two estimates should be argued with, not accepted. Before anyone committed real budget I'd want three or four conversations with direct-to-chip vendors to firm it up.
