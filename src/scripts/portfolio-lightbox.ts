function initPortfolioLightbox() {
  const gallery = document.getElementById("portfolio-gallery");
  const dialog = document.getElementById(
    "portfolio-lightbox",
  ) as HTMLDialogElement | null;
  const img = document.getElementById(
    "portfolio-lightbox-img",
  ) as HTMLImageElement | null;
  const closeBtn = document.getElementById("portfolio-lightbox-close");

  if (!gallery || !dialog || !img) return;

  const open = (src: string, alt: string) => {
    img.src = src;
    img.alt = alt;
    dialog.showModal();
    closeBtn?.focus();
  };

  dialog.addEventListener("close", () => {
    img.removeAttribute("src");
    img.alt = "";
  });

  gallery.addEventListener("click", (e) => {
    const trigger = (e.target as HTMLElement).closest<HTMLElement>(
      "[data-lightbox-src]",
    );
    if (!trigger) return;
    const src = trigger.dataset.lightboxSrc;
    if (!src) return;
    const alt = trigger.dataset.lightboxAlt ?? "";
    open(src, alt);
  });

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  closeBtn?.addEventListener("click", () => dialog.close());
}

initPortfolioLightbox();
