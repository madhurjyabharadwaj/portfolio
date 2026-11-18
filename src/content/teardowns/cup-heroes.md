---
title: "Cup Heroes: a player's teardown"
summary: "A full event tracking plan for a live mobile game: what I would track, what I would test, and why."
standfirst: "What I would track, what I would test, and why."
subtitle: "A full event tracking plan for a live mobile game, built from playing it and reading what its players say."
date: "October 2026"
readTime: "10 min read"
featured: true
order: 1
tags: ["Event tracking", "A/B testing", "Retention", "Mobile games"]
cover: "../../assets/teardowns/cup-heroes.png"
coverAlt: "Title card: Cup Heroes, a player's teardown, with the five stages of the Cup Race tracking plan and their events."
seoTitle: "Cup Heroes teardown | Madhurjya Bharadwaj"
description: "A player's teardown of Cup Heroes with a full event tracking plan: 11 events for the weekend Cup Race, two A/B tests with their events, and 620 store reviews analysed."
disclaimer: "Independent teardown. I have no connection with Voodoo, the publisher, or the Cup Heroes team. Everything here comes from my own play (to Chapter 10, plus one live Cup Race weekend) and 620 public store reviews, as of October 2026. The game may have changed since."
toc:
  - { id: "game", label: "1. The game in 60 seconds" }
  - { id: "reviews", label: "2. What players say" }
  - { id: "cup-race-tracking-plan", label: "3. Cup Race tracking plan" }
  - { id: "quick-win", label: "4. The quick win" }
  - { id: "streak", label: "5. A daily play streak" }
  - { id: "whole-plan", label: "6. The whole plan on one page" }
downloads:
  - label: "Download the deck"
    href: "/teardowns/cup-heroes/cup-heroes-teardown.pdf"
---

<div class="tldr">

<h2 id="tldr">TL;DR</h2>

### What I found

1. **Ads feel optional early, then forced at the wall.** In the first chapters, skipping ads costs nothing. Once the difficulty jumps in the mid-game, rewarded ads become the only way through. 35% of negative reviews complain about ads, and 13% name ads and the wall in the same review.
2. **When you are stuck, nothing brings you back.** Losing a chapter gives you nothing to show for it, so there is no reason to open the game tomorrow.
3. **The Cup Race changed my behaviour, but I could barely see it.** I started watching the x2 ad after almost every run to double my race balls. Yet the race gave no tier-up moment and no alert when I was overtaken: I dropped from 1st to about 18th without knowing.

### How I would measure it: the tracking plan

- **Cup Race:** 11 events that follow the player from first sight to reward, plus race context on 5 events the game already sends. Judged on extra revenue per eligible player against a holdout, with day-7 retention as the guardrail.
- **Every idea gets its own events:** 7 for the quick win, 6 for the streak, all on one naming convention and one set of common parameters.
- **Every open question became a parameter**, so the plan works whatever the answer.

### What I would build

- **Quick win:** give every new player their first "take all three perks" for free, so they feel what the ad is worth.
- **Retention:** a daily play streak that keeps progress moving even when a chapter does not.

**The rule I worked by:** every event feeds a metric, and every metric drives a decision. [Jump to the tracking plan](#cup-race-tracking-plan)

</div>

<h2 id="approach">How I approached it: questions before events</h2>

| Step | What I do | Example: the daily streak |
|---|---|---|
| 1. Play and read | Play the game and read what players say, before any data | Chapters 1 to 10, a live Cup Race weekend, 620 store reviews |
| 2. Name the problem | One player problem, in the player's words | "I'm stuck at the wall, and nothing brings me back tomorrow" |
| 3. Pick the idea | Weigh the options, choose one, state the bet | A daily play streak that moves even when the chapter does not |
| 4. Define the events | Only the events the metric needs, with the parameters that explain it | `streak_day_completed`, `streak_broken`, `streak_repaired` |
| 5. Set metric and decision | Primary metric, guardrails and the decision rule, written before the test | Day-14 retention vs control. Ship if it rises and ads per player hold |

<h2 id="game">1. The game in 60 seconds</h2>

**The core loop.** Each chapter is a run of about 15 waves with a boss at the end. Enemies drop white balls, the in-run currency you spend on perks. After some waves, a cup-pour mini game multiplies your balls through x2, x3 and x4 gates. Win the chapter and you earn card packs to upgrade your heroes. Lose and you start the chapter again.

**How it makes money.** Three ways, all of which I met in my first hour:

- **Rewarded ads** that you choose to watch: take all three perks instead of one, revive at the boss, double your rewards at the end of a run.
- **Interstitial ads**, the forced full-screen ads between runs.
- **In-app purchases**: a No Ads purchase, card packs and a paid Cup Pass with bonus rewards.

**Where you hit the wall.** The first chapters are easy: I cleared each one on the first try. From around Chapter 6 onwards the difficulty jumps. Each later chapter took me two to three attempts, and at one point I had maxed every upgrade I could afford and still could not beat the boss without rewarded ads.

**Live ops.** On top of the campaign there is a weekly **Cup Race**: a weekend competition in leagues of 50 players, covered in section 3 with its full tracking plan.

**My pace, for context:** sessions of about 20 minutes, about one chapter a day once the game got hard, 6 to 8 ads per chapter.

<h2 id="reviews">2. What players say: 620 store reviews</h2>

**How I did it.** I collected the 500 newest Google Play reviews (all countries and languages) and 120 US App Store reviews, from 24 August to 24 October 2026. I read every review and tagged each complaint it made. One review can carry several tags.

<ul class="stats">
<li><strong>2.42 / 5</strong><span>average rating across the 620 reviews</span></li>
<li><strong>61%</strong><span>of reviews are 1 or 2 stars</span></li>
<li><strong>35%</strong><span>of negative reviews complain about too many or forced ads</span></li>
<li><strong>13%</strong><span>of negative reviews blame ads and the wall in the same review</span></li>
</ul>

<figure class="chart">
<figcaption>
<span class="chart-title">Beyond bugs, ads and the progression wall drive the complaints</span>
<span class="chart-note">Share of 376 negative (1 and 2 star) reviews mentioning each theme. One review can mention several.</span>
</figcaption>
<ol class="bars">
<li><span class="bar-label">Bugs, crashes, lost progress</span><span class="bar-track"><span class="bar" style="--v: 42"></span><span class="bar-value">42%</span></span></li>
<li class="hi"><span class="bar-label">Too many / forced ads</span><span class="bar-track"><span class="bar" style="--v: 35"></span><span class="bar-value">35%</span></span></li>
<li class="hi"><span class="bar-label">Pay-to-win / prices</span><span class="bar-track"><span class="bar" style="--v: 19"></span><span class="bar-value">19%</span></span></li>
<li class="hi"><span class="bar-label">Too hard / wall</span><span class="bar-track"><span class="bar" style="--v: 19"></span><span class="bar-value">19%</span></span></li>
<li><span class="bar-label">Update made it worse</span><span class="bar-track"><span class="bar" style="--v: 14"></span><span class="bar-value">14%</span></span></li>
<li><span class="bar-label">Lost progress / purchases</span><span class="bar-track"><span class="bar" style="--v: 13"></span><span class="bar-value">13%</span></span></li>
<li><span class="bar-label">Game does not match its ads</span><span class="bar-track"><span class="bar" style="--v: 7"></span><span class="bar-value">7%</span></span></li>
<li><span class="bar-label">Ad crashed the run</span><span class="bar-track"><span class="bar" style="--v: 7"></span><span class="bar-value">7%</span></span></li>
<li><span class="bar-label">No Ads did not skip rewarded ads</span><span class="bar-track"><span class="bar" style="--v: 5"></span><span class="bar-value">5%</span></span></li>
</ol>
</figure>

<figure class="chart">
<figcaption>
<span class="chart-title">Bugs were fixed, ad and wall complaints stayed</span>
<span class="chart-note">Share of all 620 reviews by three-week period.</span>
</figcaption>
<div class="trend">
<div class="trend-panel hi">
<p class="trend-name">Ad complaints</p>
<ol class="bars stacked">
<li><span class="bar-label">24 Aug to 13 Sep</span><span class="bar-track"><span class="bar" style="--v: 26"></span><span class="bar-value">26%</span></span></li>
<li><span class="bar-label">14 Sep to 4 Oct</span><span class="bar-track"><span class="bar" style="--v: 44"></span><span class="bar-value">44%</span></span></li>
<li><span class="bar-label">5 Oct to 24 Oct</span><span class="bar-track"><span class="bar" style="--v: 36"></span><span class="bar-value">36%</span></span></li>
</ol>
</div>
<div class="trend-panel hi">
<p class="trend-name">Wall or pay-to-win</p>
<ol class="bars stacked">
<li><span class="bar-label">24 Aug to 13 Sep</span><span class="bar-track"><span class="bar" style="--v: 21"></span><span class="bar-value">21%</span></span></li>
<li><span class="bar-label">14 Sep to 4 Oct</span><span class="bar-track"><span class="bar" style="--v: 17"></span><span class="bar-value">17%</span></span></li>
<li><span class="bar-label">5 Oct to 24 Oct</span><span class="bar-track"><span class="bar" style="--v: 27"></span><span class="bar-value">27%</span></span></li>
</ol>
</div>
<div class="trend-panel">
<p class="trend-name">Bugs and crashes</p>
<ol class="bars stacked">
<li><span class="bar-label">24 Aug to 13 Sep</span><span class="bar-track"><span class="bar" style="--v: 42"></span><span class="bar-value">42%</span></span></li>
<li><span class="bar-label">14 Sep to 4 Oct</span><span class="bar-track"><span class="bar" style="--v: 20"></span><span class="bar-value">20%</span></span></li>
<li><span class="bar-label">5 Oct to 24 Oct</span><span class="bar-track"><span class="bar" style="--v: 22"></span><span class="bar-value">22%</span></span></li>
</ol>
</div>
</div>
</figure>

### What it tells me

- **Ads plus the wall is the core frustration.** It is also exactly what I felt. The player hits the wall and the only way through is an ad, so the ad gets the blame for the wall.
- **Stability improved; design did not.** The August spike was mostly one bug in version 4.2.1 (heroes vanishing mid-run), and it eased after patches. Ad and wall complaints did not ease. The bigger opportunity is in design.
- **A broken ad costs twice.** 7% of negative reviews say an ad crashed the run or lost the reward. The game loses the player's goodwill and the very moment that makes them want to watch again. Ad stability is a revenue lever, not just a bug fix.
- **Players who pay to remove ads still want to skip the rewarded ones.** 5% bought No Ads and were disappointed it did not cover rewarded ads. That is a signal of demand for a broader premium offer.
- **Returning players leave again.** Lost progress (13%) and "the update ruined it" (14%) come mostly from lapsed players who came back. A comeback reward speaks directly to them.

**Read with care.** Unhappy players write more reviews, so I use these numbers to rank problems, not to size how many players are unhappy. Google Play was capped at the newest 500 reviews, the App Store sample is US only, and hand tagging involves judgement.

<div class="callout">

**Why it matters.** Lifetime ad revenue = ads per active day × days a player stays. A player who quits on day 1 or at the wall watches no more ads, so keeping players is itself a revenue lever.

</div>

<h2 id="cup-race-tracking-plan">3. The Cup Race: teardown and tracking plan</h2>

### What it is, as I played it (24 to 26 October 2026)

- A weekend race in a **league of 50 players**, on top of a **tier ladder** that keeps growing: about 18 tiers by day 2, with gaps that widen as you climb (a few hundred balls early, 1,500 to 2,000 later).
- You race with **coloured balls** (red, yellow, green). They drop from enemies in normal campaign runs, the cup-pour mini game multiplies them, and the end-of-run screen offers a rewarded ad to **double them** (sometimes x2.5).
- A **shared reward pool** (card packs, scrolls and more) grows every time a player in the league reaches a new tier.
- When the race ends, you claim your rewards on your next app open. I finished around 18th and still received a pack, coins and gear items.

### What I noticed as a player

1. **I was racing without joining.** I never saw a badge or tapped to join, yet I was in a league. Either enrolment is automatic or the opt-in is very easy to miss.
2. **One ad doubles the balls, and I took it almost every run.** I rarely watched end-of-run ads before. The race changed that.
3. **Progress is invisible.** No tier-up moment, no visible pool growth, no "you've been overtaken" alert, no push notification. I fell from 1st to about 18th without knowing.
4. **After claiming, the race disappears.** Two screens (claim, pack opening), then nothing until the next race. No teaser to bring me back.

**Why I think it exists.** A weekend race gives players a reason to come back on Saturday and Sunday and to play more runs. More runs mean more rewarded ads, because doubling the race balls costs one ad. Weekend tournaments are standard in top casual games such as Royal Match and Clash Royale.

### Four questions the tracking must answer

| # | Question | Area |
|---|---|---|
| 1 | Do players see it and join? | Reach |
| 2 | Do they race all weekend? | Engagement |
| 3 | Is the race close and fair? | Competition |
| 4 | Does it add revenue and retention? | Impact, measured against a holdout |

### The plan: 11 events from first sight to reward

<ol class="stages">
<li><span class="stage-name">1. See</span><span class="stage-when">Before the race starts</span><span class="stage-events"><code>entry_point_shown</code> <code>entry_point_clicked</code> <code>info_viewed</code></span></li>
<li><span class="stage-name">2. Join</span><span class="stage-events"><code>joined</code></span></li>
<li><span class="stage-name">3. Earn</span><span class="stage-events"><code>balls_earned</code></span></li>
<li><span class="stage-name">4. Compete</span><span class="stage-events"><code>tier_reached</code> <code>leaderboard_snapshot</code> <code>screen_viewed</code></span></li>
<li><span class="stage-name">5. Collect</span><span class="stage-events"><code>ended</code> <code>results_shown</code> <code>reward_claimed</code></span></li>
</ol>

*All event names start with `cup_race_` (shown without it).*

<details class="more">
<summary>The 11 events in detail</summary>

| # | Event | Fires when | Sent by | Key parameters | Question it answers |
|---|---|---|---|---|---|
| 1 | `entry_point_shown` | The main menu shows the race badge or countdown, once per visit | Client | badge_state (teaser, live_not_joined, live_joined, reward_ready), seconds_to_race_start, is_first_impression | How many eligible players see the race, and when |
| 2 | `entry_point_clicked` | The player taps the badge | Client | badge_state, impressions_before_click | Does the badge make players curious |
| 3 | `info_viewed` | The "How it works" screen opens | Client | trigger (auto_first_open, help_button), view_duration_s | Do players read the rules |
| 4 | `joined` | The server places the player in a league | Server | enrollment_method (badge_tap, auto, popup), hours_since_race_start, league_size_at_join, real_players_at_join, bots_at_join, matchmaking_bucket | Opt-in, join timing, how leagues are built |
| 5 | `balls_earned` | The end-of-run screen closes, after the ad choice. One event per run, win or lose | Client, checked by server | run_id, chapter_id, is_replay, run_result, balls_from_drops, balls_from_minigame, ad_multiplier_offered, ad_multiplier_used, balls_from_ad, balls_total_after, tier_after | How balls are earned, and how much comes from ads |
| 6 | `tier_reached` | A player's ball total crosses a tier threshold | Server | tier_from, tier_to, balls_total, tier_threshold, hours_since_join, runs_since_join, pool_contribution, pool_total_after, rank_at_tier_up | Are tiers well set; how fast the pool grows |
| 7 | `leaderboard_snapshot` | Every hour for every league, and once at the close. One row per member | Server | rank, tier, tier_count, next_tier_threshold, balls_total, balls_last_hour, is_bot, last_active_ts | Rank swings, close finishes, runaway leaders, bots |
| 8 | `screen_viewed` | The Cup Race screen opens | Client | source (badge, main_menu, results_popup), rank, tier, balls_to_next_tier, rank_change_since_last_view, view_duration_s | How often players check their standing |
| 9 | `ended` | The race closes. One row per participant | Server | final_rank, final_tier, balls_total, reward_share_pct, rewards, pool_total, active_players_in_league, bots_in_league, balls_gap_to_rank_above, runs_during_race | Final outcome, payout fairness, close finishes |
| 10 | `results_shown` | The results and claim popup appears, often on the next app open | Client | final_rank, hours_since_race_end, is_first_session_after_end | Do players come back for their result |
| 11 | `reward_claimed` | The player taps Claim and rewards are granted | Client and server | rewards (item type, id, quantity), balance_after per currency, seconds_popup_to_claim | Reward delivery and what it adds to the economy |

**Every event also carries:** user and session ids, client and server timestamps, app version, platform, country, days since install, highest chapter, player power, payer and Cup Pass status, A/B test groups, race_id, league_id.

</details>

### Five existing events get race context

This is where the race's real effect shows up:

| Core event | Add | Why |
|---|---|---|
| `session_started` | cup_race_status | Weekend daily active users and sessions by race status |
| `run_started` / `run_ended` | cup_race_active, is_replay | Does the race change what players play, for example replaying easy chapters to farm balls |
| `rewarded_ad_offered` / `_result` | placement, cup_race_active, colored_balls_at_stake, multiplier_value, outcome | Tests the main hypothesis: the race lifts rewarded ad views |
| `resource_changed` | currency, flow (source or sink), source, amount, balance_after | Economy health: what the race adds to circulation |
| `iap_purchased` | cup_race_active, offer_context | Does the race drive purchases, such as the Cup Pass |

### Design choices I made, and why

- **Questions before events.** Every event feeds a metric. Nothing is tracked "just in case".
- **One naming convention:** object_action, snake_case, past tense, one prefix. Anyone can guess a name.
- **One event, many parameters.** One `tier_reached` with tier_to, not one event per tier, so it survives when the number of tiers changes.
- **Aggregate what repeats.** Balls logged once per run, not per drop; ranks as hourly snapshots, not every change. Lean and complete.
- **The server owns the truth.** Rank, tier, pool and payouts are logged server-side: no cheating, no lost events.
- **Sources and sinks.** Every ball and reward logged with where it came from and the balance after, to watch for inflation.

**If I could only keep five:** `joined`, `balls_earned`, `screen_viewed`, `ended`, `reward_claimed`. Together they tell you who raced, how much of the race runs on ads, whether players followed it, how it ended and whether they came back.

### How I would judge it

- **Primary metric:** extra net revenue per *eligible* player (ads + 70% of purchases) over the race weekend and the 7 days after, compared with a **holdout**: 5 to 10% of eligible players who never see the race. Compare everyone eligible, not only those who joined, because joiners are already the most engaged players.
- **Must not break:** day-7 retention (overall and for ranks 31 to 50, the players who "lose"), weekly play (no shift away from weekdays), session length (ad fatigue), reward inflation in the economy.
- **Keep it if** revenue per eligible player beats the holdout and day-7 retention holds.

### What else to watch, and the decision each drives

| Area | Metrics | Decision |
|---|---|---|
| Reach | Badge reach and click rate; join rate (or race screen visits if enrolment is automatic) | Is the teaser seen, and does the badge work? |
| Engagement | Runs per player vs their normal weekend; share reaching each tier; active on both days | Do players race all weekend? Are tiers set right? |
| Competition | Hourly rank changes; close finishes; leader dominance; bot share; payers' final rank vs non-payers | Is the race alive and fair to the end? Does money buy rank? |
| Monetisation | x2 ad acceptance, race vs normal weekend; share of balls from ads; purchases per daily user vs holdout | How much does the race earn through ads? |
| Retention | Weekend return rate; return to see results; joining the next race | New play or moved from weekdays? A habit? |
| Economy | Packs, scrolls and coins granted per player and race | Is the race inflating the economy? |

### Reading them together

- High reach, low click rate → fix the badge.
- Tier funnel collapses early → thresholds are too steep.
- High ad share, flat retention → it earns now but builds no habit.
- Day-7 retention falls for ranks 31 to 50 → improve consolation rewards.

### Four tests I would run next

| Test | Why | Metric |
|---|---|---|
| Show progress in the moment: a tier-up moment and visible pool growth on the end-of-run screen | Progress is invisible today | Runs per player, active on both days |
| Push notifications: "you've been overtaken" and "race ending soon" | I fell from 1st to about 18th without knowing | Weekend return rate, rank volatility |
| Show the payout curve before and during the race | I was rewarded at about rank 18, but nothing told me lower ranks pay | Join rate, day-7 retention by rank band |
| Tease the next race at the claim screen | After claiming, the race vanishes until next time | Share of players joining the next race |

<h2 id="quick-win">4. Opportunity 1, the quick win: make the first "take all three" free</h2>

> **The bet.** New players skip the "take all three perks" ad because they have never felt what it gives. Let them feel it once, for free, and they will choose to watch for it later.

| | Today | Test |
|---|---|---|
| Rule | Taking all three perks needs a rewarded ad, from the very first offer | A new player's first take-all-three is free. After that it needs an ad, as today |

### How I would judge it

- **Primary metric:** revenue per new player in their first 7 days (ad revenue + 70% of in-app purchase revenue, after the store's 30% fee). The gift costs up to one ad per player, so later ads must pay it back.
- **What should move:** opt-in on later take-all-three offers (the proof the bet works), rewarded ads per player in week 1, day-1 retention (up, or at least flat), runs played on day 1.
- **Must not break:** day-3 and day-7 retention, total ad revenue (forced ads included), purchase conversion, early win rate (the game must not become too easy).

**Setup.** New installs only, split 50/50, about 16,000 players per group, 2 weeks (7 days to enrol, 7 more to read day-7 results), results split by country tier. Ship if revenue per player rises and retention holds.

**Sample size.** I assumed a 35% day-1 retention baseline (a typical figure for the genre; to replace with the real one) and sized the test to detect a rise of 1.5 points, at 95% confidence and 80% power:
n = 2 × (1.96 + 0.84)² × 0.35 × 0.65 ÷ 0.015² ≈ 16,000 per group.
Almost every new player meets a take-all-three offer in their first runs, so nearly the whole sample is treated.

### Reading the result

| Result | Decision |
|---|---|
| Revenue up, retention holds | Ship |
| Opt-in up, revenue flat | Ads moved, not added. Don't ship as is |
| Revenue up, retention down | Investigate before deciding |
| No change | Drop it, keep the learning |

**Two traps to watch.** *Novelty:* read opt-in day by day, not only in total. *Anchoring:* players may expect it to be free again; opt-in on later offers catches that. Forced ads are tracked too, so we can see if ad views simply moved from one type to another.

### Events to track

*My proposal, not the game's live tracking.*

| Event | Fires when | Key parameters |
|---|---|---|
| `perk_offer_shown` | A perk choice appears | run_no, chapter, wave, balls_held, all_three_cost (free or ad) |
| `take_all_three_claimed` | Player takes all three | method (free or ad), offer_no |
| `perk_picked` | Player picks one perk | perk_id, price, offer_no |
| `rewarded_ad_result` | A rewarded ad ends | placement, outcome (watched, declined, failed) |
| `interstitial_shown` | A forced ad plays | placement, run_no |
| `run_ended` | A run ends | chapter, result, waves_cleared |
| `session_started` | The app opens | days_since_install, session_no |

<h2 id="streak">5. Opportunity 2, retention: a daily play streak</h2>

> **The gap.** When I was stuck at the wall, nothing pulled me back. A streak keeps moving even when the chapter does not.

### Options I weighed

| Idea | How it works | Verdict |
|---|---|---|
| Pre-run boost | Every run starts with a free perk | A session tweak, not a reason to come back |
| Second boss revive | One more ad revive on the boss wave | Few players ever reach that exact moment |
| One strong free perk | Every perk offer includes one strong perk for free | Removes the game's main ad moment |
| Guild help | Guildmates help players who are stuck | Guilds unlock too late to save early quitters |
| **Daily play streak** | **Play one run a day to grow rewards; miss a day and it resets** | **Chosen: builds a habit from day 1, even when stuck** |

### Why the streak

- **It fixes the gap I felt.** Progress keeps moving even when the chapter does not.
- **It rewards playing.** Earned tokens replace ad-gated boosts.
- **It builds on the quick win.** Once players know what take-all-three is worth, a token for it is a reward they want.
- **It is proven.** Royal Match gives free boosters for win streaks; Duolingo is built around its streak.

### Reward ladder (first 30 days)

| Day | Reward | Why it is there |
|---|---|---|
| 1 to 2 | Coins | An easy first win starts the habit |
| 3 | Free take-all-three token | The boost the quick win taught them to value |
| 4 to 6 | A card pack each day | Keeps upgrades moving |
| 7 | Streak chest + boost token | Weekly peak: the next run starts with a free perk |
| 8 to 13 | Same weekly cycle, bigger chests | Two tokens every week |
| 14 | Hero cards | A long-term goal to chase |
| 30 | Big chest | A month-long streak is hard to give up |

**Rules.** A day counts when the player finishes one run, win or lose. A token replaces one take-all-three or perk ad; players hold at most 3. One free freeze a week. A broken streak can be repaired within 24 hours with a rewarded ad or gems. The paid Cup Pass doubles streak rewards. Unlike a 30-day login calendar, the streak needs a run and can be lost. That is what makes it pull.

### Does it pay for itself?

*All inputs to confirm in the test.*

- I watched about 7 ads per active day (6 to 8 per chapter, about one chapter a day).
- 2 tokens a week replace about 0.3 ads a day.
- That is 0.3 ÷ 7, about **4% of ads lost** per active day.
- Since lifetime ads = ads per active day × active days, **4% more active days pays for every token given away.** Anything above is a gain, before counting streak-repair ads or Cup Pass upsell.

**How I would test it.** New installs, 50/50, 30 days. Primary metric: day-14 retention. Also: active days per player, day-30 retention and revenue per player at day 30.

### Events to track for the streak

*Same rules as the Cup Race plan: object_action, snake_case, one prefix.*

| Event | Fires when | Key parameters | Question it answers |
|---|---|---|---|
| `streak_day_completed` | The first finished run of the day, win or lose | streak_length, run_result, hours_since_last_day | Are players building the habit? |
| `streak_reward_granted` | A ladder reward is given | streak_day, reward_type, quantity, cup_pass_doubled | What does the streak add to the economy? |
| `streak_token_used` | A token replaces a perk or take-all-three ad | token_type, placement, chapter | How many ads do tokens replace (the cost side)? |
| `streak_freeze_used` | A free freeze saves the streak | streak_length, freezes_left | Is one freeze a week enough? |
| `streak_broken` | A day passes with no finished run | streak_length_before, freeze_available, highest_chapter | Where and when do habits break? |
| `streak_repaired` | A broken streak is saved within 24 hours | method (rewarded_ad, gems), streak_length_restored | Do repairs earn back the tokens? |

Core events get streak context too: streak_length on `session_started`, and placement = streak_repair on `rewarded_ad_result`. **Ship if day-14 retention rises and the ads lost stay under the 4% break-even.**

<h2 id="whole-plan">6. The whole plan on one page</h2>

Every idea ships with its events, its metric and its decision rule.

| Idea | Events | Primary metric | Guardrails | Decision |
|---|---|---|---|---|
| Cup Race | 11 `cup_race_` events, plus race context on 5 core events | Extra net revenue per eligible player vs a holdout | Day-7 retention, overall and for ranks 31 to 50 | Keep if revenue beats the holdout and retention holds |
| Free first take-all-three | 7 events, from `perk_offer_shown` to `session_started` | Net revenue per new player, first 7 days | Day-3 and day-7 retention, total ad revenue | Ship if revenue rises and retention holds |
| Daily play streak | 6 `streak_` events, plus streak context on 2 core events | Day-14 retention vs control | Ads per player, revenue at day 30 | Ship if retention rises and ads lost stay under 4% |

**Shared across all three:** one naming convention (object_action, snake_case, one prefix per feature), one set of common parameters (ids, time, app version, country, highest chapter, payer status, A/B groups), and one money metric (net revenue per player: ads + 70% of purchases).

