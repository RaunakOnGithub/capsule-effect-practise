// gsap.registerPlugin(SplitText);

// document.fonts.ready.then(() => {

//   function createSplitText(elements) {
//     const splits = {};
//     elements.forEach(({ key, selector, type }) => {
//       const config = { type, mask: type };
//       if (type === "chars") config.charsClass = "char";
//       if (type === "lines") config.linesClass = "line";
//       splits[key] = SplitText.create(selector, config);
//     });
//     return splits;
//   }

//   const splitElements = [
//     { key: "logoChars", selector: ".preloader-logo h1", type: "chars" },
//     { key: "footerLines", selector: ".preloader-footer p", type: "lines" },
//     { key: "headerChars", selector: ".header h1", type: "chars" },
//     { key: "heroFooterH3", selector: ".hero-footer h3", type: "lines" },
//     { key: "heroFooterP", selector: ".hero-footer p", type: "lines" },
//     { key: "btnLabels", selector: ".btn-label span", type: "lines" },
//   ];

//   const splits = createSplitText(splitElements);

//   // Set initial states
//   gsap.set(splits.logoChars.chars, { x: "100%" });
//   gsap.set(
//     [
//       splits.footerLines.lines,
//       splits.headerChars.chars,
//       splits.heroFooterH3.lines,
//       splits.heroFooterP.lines,
//       splits.btnLabels.lines,
//     ],
//     { y: "100%" }
//   );

//   gsap.set(".btn-icon", { clipPath: "circle(0% at 50% 50%)" });
//   gsap.set(".btn", { scale: 0 });

//   // Progress animation
//   function animateProgress(duration = 4) {
//     const tl = gsap.timeline();
//     const counterSteps = 5;
//     let currentProgress = 0;
//     for (let i = 0; i < counterSteps; i++) {
//       const finalStep = i === counterSteps - 1;
//       const targetProgress = finalStep
//         ? 1
//         : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9);
//       currentProgress = targetProgress;
//       tl.to(".preloader-progress-bar", {
//         scaleX: targetProgress,
//         duration: duration / counterSteps,
//         ease: "power2.out",
//       });
//     }
//     return tl;
//   }

//   // Master timeline
//   const tl = gsap.timeline({ delay: 0.5 });

//   tl.to(splits.logoChars.chars, {
//     x: "0%",
//     stagger: 0.05,
//     duration: 1,
//     ease: "power4.inOut",
//   })
//     .add(animateProgress(), "<")
//     .to(splits.logoChars.chars, {
//       y: "-100%",
//       stagger: 0.1,
//       duration: 1,
//       ease: "power4.inOut",
//     })
//     .to(".preloader-progress", {
//       opacity: 0,
//       duration: 0.5,
//       ease: "power4.inOut",
//     })
//     .to(".preloader-mask", {
//         scale: 20, // scale up enough to fully reveal the hero section
//         duration: 2,
//         ease: "power3.inOut",
//         onComplete: () => {
//           document.querySelector(".preloader-progress").style.display = "none";
//         },
//       }, "<") // <-- *** THIS IS THE FIX *** (no semicolon)
      
//     .to(".hero-img", {
//       scale: 1,
//       duration: 1.5,
//       ease: "power3.inOut",
//     }, "<")
//     .to(splits.headerChars.chars, {
//       y: 0,
//       stagger: 0.05,
//       duration: 1,
//       ease: "power4.inOut",
//     }, "-=1.5")
//     .to([splits.heroFooterH3.lines, splits.heroFooterP.lines], {
//       y: 0,
//       stagger: 0.1,
//       duration: 1,
//       ease: "power4.inOut",
//     }, "-=1")
//     .to(".btn", {
//       scale: 1,
//       duration: 1,
//       ease: "power4.inOut",
//       onStart: () => {
//         gsap.to(".btn-icon", {
//           clipPath: "circle(100% at 50% 50%)",
//           duration: 1,
//           ease: "power2.inOut",
//         });
//         gsap.to(splits.btnLabels.lines, {
//           y: 0,
//           duration: 1,
//           ease: "power4.inOut",
//         });
//       },
//     }, "<");
// });

gsap.registerPlugin(SplitText);
gsap.set(".preloader-mask", { transformOrigin: "center" });


document.fonts.ready.then(() => {

  function createSplitText(elements) {
    const splits = {};
    elements.forEach(({ key, selector, type }) => {
      const config = { type, mask: type };
      if (type === "chars") config.charsClass = "char";
      if (type === "lines") config.linesClass = "line";
      splits[key] = SplitText.create(selector, config);
    });
    return splits;
  }

  const splitElements = [
    { key: "logoChars", selector: ".preloader-logo h1", type: "chars" },
    { key: "footerLines", selector: ".preloader-footer p", type: "lines" },
    { key: "headerChars", selector: ".header h1", type: "chars" },
    { key: "heroFooterH3", selector: ".hero-footer h3", type: "lines" },
    { key: "heroFooterP", selector: ".hero-footer p", type: "lines" },
    { key: "btnLabels", selector: ".btn-label span", type: "lines" },
  ];

  const splits = createSplitText(splitElements);

  // Set initial states
  gsap.set(splits.logoChars.chars, { x: "100%" });
  gsap.set(
    [
      splits.footerLines.lines,
      splits.headerChars.chars,
      splits.heroFooterH3.lines,
      splits.heroFooterP.lines,
      splits.btnLabels.lines,
    ],
    { y: "100%" }
  );

  gsap.set(".btn-icon", { clipPath: "circle(0% at 50% 50%)" });
  gsap.set(".btn", { scale: 0 });

  // Progress animation
  function animateProgress(duration = 4) {
    const tl = gsap.timeline();
    const counterSteps = 5;
    let currentProgress = 0;
    for (let i = 0; i < counterSteps; i++) {
      const finalStep = i === counterSteps - 1;
      const targetProgress = finalStep
        ? 1
        : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9);
      currentProgress = targetProgress;
      tl.to(".preloader-progress-bar", {
        scaleX: targetProgress,
        duration: duration / counterSteps,
        ease: "power2.out",
      });
    }
    return tl;
  }

  // Master timeline
  const tl = gsap.timeline({ delay: 0.5 });

  tl.to(splits.logoChars.chars, {
    x: "0%",
    stagger: 0.05,
    duration: 1,
    ease: "power4.inOut",
  })
    .add(animateProgress(), "<")
    .to(splits.logoChars.chars, {
      y: "-100%",
      stagger: 0.1,
      duration: 1,
      ease: "power4.inOut",
    })
    // ----- FIX 2: Fade out both the progress and content -----
    .to([".preloader-progress", ".preloader-content"], {
      opacity: 0,
      duration: 0.5,
      ease: "power4.inOut",
    })
    
    .to(".preloader-mask", {
        scale: 20, 
        duration: 2,
        ease: "power3.inOut",
        onComplete: () => {
          // --- Optional Fix: Hide both elements ---
          document.querySelector(".preloader-progress").style.display = "none";
          document.querySelector(".preloader-content").style.display = "none";
        },
      }, "<") 

    
      // ----- FIX 1: Removed the semicolon here -----
      
    .to(".hero-img", {
      scale: 1,
      duration: 1.5,
      ease: "power3.inOut",
    }, "<")
    .to(splits.headerChars.chars, {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.inOut",
    }, "-=1.5")
    .to([splits.heroFooterH3.lines, splits.heroFooterP.lines], {
      y: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.inOut",
    }, "-=1")
    .to(".btn", {
      scale: 1,
      duration: 1,
      ease: "power4.inOut",
      onStart: () => {
        gsap.to(".btn-icon", {
          clipPath: "circle(100% at 50% 50%)",
          duration: 1,
          ease: "power2.inOut",
        });
        gsap.to(splits.btnLabels.lines, {
          y: 0,
          duration: 1,
          ease: "power4.inOut",
        });
      },
    }, "<");
});