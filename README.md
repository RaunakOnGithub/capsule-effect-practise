# capsule-effect-practise
# 🧠 Capsule Preloader Issue Fix

This project replicates the **Capsule landing page** preloader animation using **GSAP** and **CSS masks**.  
However, the preloader had a **visual bug** — the **mask animation played backward** (in reverse direction).  
This README explains the problem, the cause, and how to fix it properly.

---

## 🚨 Issue Description

The **preloader-mask effect** was working in reverse.

- Instead of the mask expanding outward (revealing the hero section),
  it appeared to **shrink backward**.
- The **preloader** didn’t disappear cleanly after completion.
- This happened even though GSAP animations were running correctly.

---

## 🔍 Root Cause

The issue came from how **CSS mask-composite** interacts with the
`transform: scale()` animation.

- The mask was defined using `mask-composite: subtract` or `xor`
  which **inverts visibility**.
- So when GSAP scaled the mask from `scale: 1` → `scale: 20`,  
  it appeared **backward** — hiding instead of revealing.
- Additionally, the `transform-origin` was not explicitly set,
  leading to inconsistent expansion direction.

