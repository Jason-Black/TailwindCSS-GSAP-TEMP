document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

    tl.from("#main-heading", { y: -50, opacity: 0 })
      .from("#sub-heading", { y: 50, opacity: 0 }, "-=0.5")
      .from("#box1", { x: -100, opacity: 0 }, "-=0.5")
      .from("#box2", { x: 100, opacity: 0 }, "-=0.5")
      .from("#box3", { y: 100, opacity: 0 }, "-=0.5");

    gsap.to("#main-heading", {
        duration: 1,
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
    });
});
