---
title: "What does a Paris flat actually return once the rent cap applies?"
subtitle: "A pipeline that joins sale prices to legal rent ceilings"
name: "Investing in Paris under rent control"
type: "case-study"
category: "Data product"
year: 2026
order: 2
problem: "An investor can find out what a flat costs in about ten seconds and can’t find out what it returns at all."
role: "Product concept, data pipeline and investor tool"
outcome: "Shows what a Paris flat actually returns once rent control applies, which no property portal publishes. 112 official zone files become one 8,960-row rent-control table, each flat’s return is computed from the legally capped rent rather than a market guess, and the results rank on a map filtered by rooms, budget and arrondissement."
tags: ["Geospatial data", "Python", "Open data", "Investor tool"]
cover: "../../assets/work/paris-rent-control.png"
coverAlt: "Diagram of the pipeline: DVF sale prices, DPE energy ratings and DRIHL rent zones joined into 8,960 zone records, then a capped cash-on-cash return per flat."
links:
  - label: "Repo"
    href: "https://github.com/madhurjyabharadwaj/Paris-real-estate-ROI-under-rent-control-data-pipeline-and-investor-tool"
---

Paris publishes what properties sell for. It doesn’t publish what they earn. Rent here is legally capped under *l’encadrement des loyers*, and the cap depends on which neighbourhood polygon the flat sits inside, how big it is, how many rooms it has, when the building went up, and its energy rating. All of that exists publicly. None of it exists in one place.

So an investor can find out what a flat costs in about ten seconds and can’t find out what it returns at all. That gap is the whole project.

## How I closed it

Three open French datasets, joined. DVF from the tax authority gives every recorded transaction with price, address, surface, rooms and coordinates. DPE from ADEME gives the energy class and construction year. The rent zones come from DRIHL as 112 separate KML files, which is seven validity periods times four room counts times four construction eras, and I parse all of them into one geospatial table of 8,960 zone records carrying their legal thresholds.

DVF and DPE are joined on a standardised address key built from both datasets. Each transaction is then spatially joined into whichever rent zone it falls inside, the legal cap is applied, and a cash-on-cash return is calculated using the capped rent instead of a market estimate. That last choice is the one that makes the number honest, because a market-rate assumption in a rent-controlled city is fiction.

## What you can do with it

Three inputs: rooms, budget, arrondissement. Out comes a ranked table of the best-returning properties and a clustered map where the marker colour tells you the return band. Click any property and you get its price, surface, computed return, postal code, and the specific rent zone it sits in.

## Why it matters beyond property

Rent control is public, precise, and effectively unreadable to the people it governs: 112 separate geographic files nobody outside the administration will assemble by hand. A pipeline makes it legible, so an individual can benchmark a market that normally needs a broker. The same pattern fits anywhere a rule is technically public but practically opaque.
