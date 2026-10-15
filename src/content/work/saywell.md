---
title: "Why is typing still the slowest part of the working day?"
subtitle: "Hold a hotkey, speak, and finished text lands where the cursor is"
name: "Saywell"
type: "project"
category: "Desktop app"
year: 2026
order: 6
problem: "Half my day goes into typing things I could say in a quarter of the time, and dictation leaves me editing a transcript instead of sending a message."
role: "Product, build and release"
outcome: "Takes the typing out of the parts of the day that are just writing: hold a hotkey, speak, and finished text appears in whatever app has focus, whether that’s Slack, an email, a ticket or a terminal. A cleanup pass removes filler and applies spoken corrections, so what lands is sendable rather than a raw transcript, and every dictation stays on the machine in a searchable local history."
tags: ["Desktop app", "Speech to text", "Windows", "Python"]
cover: "../../assets/work/saywell.png"
coverAlt: "The spoken sentence with its filler struck through, a cleanup pass, and the tidied sentence landing at the cursor in the app you were already typing in, with Saywell’s floating bar listening below."
links:
  - label: "Repo"
    href: "https://github.com/madhurjyabharadwaj/saywell"
  - label: "Download for Windows"
    href: "https://github.com/madhurjyabharadwaj/saywell/releases/latest"
---

A product manager’s day is mostly writing: a Slack reply, a ticket, a paragraph in a PRD, a note in a tracker. Almost none of it is hard to compose. It’s just slow to type, and it interrupts whatever you were doing to type it.

Dictation should solve that, and mostly it doesn’t. The text arrives as a transcript, with every “um”, every false start, every “no, sorry, make that Thursday” preserved exactly. You still have to read it and fix it, which costs back the time you saved.

## The product decision: cleanup is the feature

Transcription is the part everyone focuses on, and it’s the part that is already solved. The thing that decides whether dictation is usable is what happens between the transcript and the text box. Saywell runs a cleanup pass that strips filler, fixes the punctuation and applies spoken corrections, so “move it to 3, no actually 4” arrives as “move it to 4”. What appears is what you’d have typed.

## Fitting into the work, not beside it

The gesture is hold, speak, release: it records while you hold your dictation shortcut, transcribes when you let go, and pastes wherever the cursor already is. Tap Space while holding and it keeps recording hands-free. There is no window to switch to and nothing to paste out of, because the moment you leave the thing you were writing in, dictation stops being faster than typing.

Three details carry more weight than they look. It reads the focused app so the text matches where it is going. It skips password fields entirely. And it restores whatever was on your clipboard, keeping dictations out of the clipboard history. Every dictation is saved to a local, searchable history, so a paragraph you dictated last week is one search away.

## Shipping it to other people

It is packaged as a Windows app: unzip, paste a key, click “Add to Desktop and Start menu”. Python and every dependency are bundled, so the person installing it needs none of that, and v0.2.0 is published as a release.
