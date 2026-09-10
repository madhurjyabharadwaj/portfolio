---
title: "What does a Paris flat actually return once the rent cap applies?"
name: "Investing in Paris under rent control"
type: "case-study"
order: 2
links:
  - label: "Repo"
    href: "https://github.com/madhurjyabharadwaj/Paris-real-estate-ROI-under-rent-control-data-pipeline-and-investor-tool"
---

Paris publishes what properties sell for. It doesn't publish what they earn. Rent here is legally capped under *l'encadrement des loyers*, and the cap depends on which neighbourhood polygon the flat sits inside, how big it is, how many rooms it has, when the building went up, and its energy rating. All of that exists publicly. None of it exists in one place.

So an investor can find out what a flat costs in about ten seconds and can't find out what it returns at all. That gap is the whole project.

## How I closed it

Three open French datasets, joined. DVF from the tax authority gives every recorded transaction with price, address, surface, rooms and coordinates. DPE from ADEME gives the energy class and construction year. The rent zones come from DRIHL as 112 separate KML files, which is seven validity periods times four room counts times four construction eras, and I parse all of them into one geospatial table of 8,960 zone records carrying their legal thresholds.

DVF and DPE join on a standardised address key at about a 58% match rate. Every transaction then gets spatially joined into whichever rent zone it falls inside, the legal cap is applied, and a cash-on-cash return is calculated using the capped rent instead of a market estimate. That last choice is the one that makes the number honest, because a market-rate assumption in a rent-controlled city is fiction.

## What you can do with it

Three inputs: rooms, budget, arrondissement. Out comes a ranked table of the best-returning properties and a clustered map where the marker colour tells you the return band. Click any property and you get its price, surface, computed return, postal code, and the specific rent zone it sits in.

## Where it's weak

That 58% match rate is the soft spot, and the tool doesn't surface it. Somebody looking at a ranked table has no way to tell which rows sit on a matched energy rating and which ones fall back to an assumption. It's in the README, which is the wrong place for it. Each row needs a confidence flag.
