---
name: "Wavelength"
order: 1
links:
  - label: "Repo"
    href: "https://github.com/madhurjyabharadwaj/Wavelength"
---

A music player built like Spotify: library sidebar, home shelves, search, album and artist pages, a persistent player bar, a live queue. There are no audio files in the repository and nothing is streamed. Every track is generated in the browser by a small Web Audio synthesiser that schedules drums, bass, pads and leads from the track's tempo, key and chord progression. Seeking works because every random choice in the generator is a pure hash of the track seed and the step, so a track plays back identically every time. There's a full as-built PRD in the repo, mostly because I wanted to find out whether I'd hold myself to that standard when nobody was checking.
