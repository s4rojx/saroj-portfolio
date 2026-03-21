---
title: "On Writing Clean Code"
date: "2026-02-20"
tags: ["tech", "opinion"]
description: "Thoughts on why simplicity in code matters more than cleverness."
---

Clean code is not about following rules. It is about empathy — writing code that the next person can read without decoding.

When you write code, you are not just instructing a machine. You are communicating with another developer — and very often, that developer is your future self. Clean code respects that person’s time and attention.

---

## Naming Things

The hardest part of programming is naming things. A good name tells you what something does without reading the implementation. A bad name forces you to dig through the entire function just to understand one line.

Compare:

- `x` vs `userAge`  
- `fn` vs `calculateTotalPrice`  
- `data` vs `activeUsersList`  

A well-chosen name removes the need for explanation. A poor name creates constant friction. Over time, that friction compounds and makes the code harder to work with.

Naming is not just a detail — it is a core part of writing readable systems.

---

## Less is More

Every line of code is a liability.

It can break. It can introduce bugs. It can become outdated. More code does not mean better code — it means more surface area for problems.

Clean code is not about writing clever one-liners. It is about being deliberate:

- Write only what is necessary  
- Remove what is not  
- Avoid premature abstractions  
- Keep functions small and focused  

A function should do one thing well. If it starts doing more, it becomes harder to reason about, harder to test, and harder to maintain.

Simplicity is not laziness. It is discipline.

---

## The Test

If you come back to your own code after three months and cannot understand it, it was not clean.

Time removes context. What remains is only what you wrote — your naming, your structure, and your clarity of thought.

Clean code survives this. It remains readable even when the original intent is forgotten.

Messy code does not. It becomes something you hesitate to touch.

---

## Code as Communication

We often think of code as instructions for a computer. But in reality, code is a medium of communication between humans.

The compiler only cares about correctness. Humans care about clarity.

This changes how you write code:

- You choose clarity over cleverness  
- You prefer explicitness over shortcuts  
- You structure code to explain, not to impress  

Good code reads like an explanation, not a puzzle.

---

## A Personal Note

I try to write code the same way I try to write poems — with nothing unnecessary left in.

Not for aesthetics, but for clarity. Every line should have a purpose. Every name should carry meaning.

Clean code is not about perfection. It is about intention.

And over time, that intention compounds — into systems that are easier to build, easier to change, and easier to trust.