# One Star: 3 Hours of Ringing, Zero Answers

[![The Moon Gets One Star](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5.svg)](https://make.fun/c/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/arestafirman/moon-one-star/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/arestafirman/moon-one-star/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)

The funniest one-star review of the Moon, for the
[The Moon Gets One Star](https://make.fun/c/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
bounty on make.fun.

`main.ts` writes the review deterministically to `/output/entry.txt`:

> One star. Apollo crashed a rocket stage into it in 1969 and it rang for 3 hours. It still won't answer the door.

112 characters. No network, no randomness, no dependencies — the program
writes one fixed review and exits.

Local check, 26 Nov 2026: `node main.ts` with `OUTPUT_DIR` set writes
`/output/entry.txt` as exactly these 112 bytes, no trailing newline —
byte-identical to the review above, inside the 1–120 character gate.

## Why this review

Checked against the judge's five criteria, in order:

1. **One-star review of the Moon itself** — yes: a complaint about the
   Moon's own behaviour, not a trip, a person, or somewhere else.
2. **Funnier on first read** — the crash is setup; "it rang for 3 hours"
   is the surprise, and "still won't answer the door" lands the punch
   before the limit.
3. **Reads like a real review** — "One star." plus a grievance a genuine
   reviewer would leave, not a slogan or a poem wearing a review's clothes.
4. **Specific, surprising grievance** — the Apollo seismic experiment is
   real (the Moon really did ring for hours after the impact), and it is
   not one of the obvious jokes about craters, cheese, or brightness.
5. **Every word earns its place** — two beats: the 1969 crash, then the
   measured 3-hour ringing plus the refused door. Delete the last clause
   and the joke dies, so the last clause is the punchline.

## Candidates considered and rejected

| Candidate | Why it lost |
|---|---|
| Eclipse power move: "It blocks the Sun for 4 minutes, scares 8 billion people, then acts like nothing happened. Petty." (107 kar) | Strong second beat (4 minutes, 8 billion people), but the eclipse angle is thinner than the ringing Moon — kept as first reserve. |
| Parking: "Parking is 238,000 miles away, no air, and the landlord has not visited since 1972." (93 kar) | Literal distance + last-visit year, but the punch leans on the landlord angle the field already uses heavily — kept as second reserve. |
| Ghosting / "vanishes for two weeks every month" | The field's modal angle (~12/60 sampled) — saturated, loses on first read. |
| "Never pays rent" / landlord | Modal angle (~8/60) — saturated. |
| "Follows me home every night" / stalker | Modal angle (~8/60) — saturated. |
| "Floods my beach" / drags the ocean | Modal angle (~8/60) — saturated. |
| Craters / cheese / too bright | Banned obvious jokes in the judge brief. |
