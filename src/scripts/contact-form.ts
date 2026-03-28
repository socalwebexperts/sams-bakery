const residentialOpts = [
  { value: "", label: "Select scope" },
  { value: "addition", label: "Addition" },
  { value: "adu", label: "ADU" },
  { value: "remodel", label: "Remodel" },
];

const commercialOpts = [
  { value: "", label: "Select scope" },
  { value: "addition", label: "Addition" },
  { value: "remodel", label: "Remodel" },
];

export function setupFormLogic(prefix: string) {
  const form = document.getElementById(`${prefix}-contact-form`) as HTMLFormElement;
  const success = document.getElementById(`${prefix}-form-success`)!;
  const errorDiv = document.getElementById(`${prefix}-form-error`)!;
  const submitBtn = document.getElementById(`${prefix}-submit-btn`) as HTMLButtonElement;
  const btnText = document.getElementById(`${prefix}-btn-text`)!;
  const btnArrow = document.getElementById(`${prefix}-btn-arrow`)!;
  const btnSpinner = document.getElementById(`${prefix}-btn-spinner`)!;
  const typeSelect = document.getElementById(`${prefix}-projectType`) as HTMLSelectElement;
  const subWrap = document.getElementById(`${prefix}-subcategory-wrap`)!;
  const subSelect = document.getElementById(`${prefix}-subcategory`) as HTMLSelectElement;

  function showSub(opts: { value: string; label: string }[]) {
    subSelect.innerHTML = "";
    opts.forEach((o) => {
      const el = document.createElement("option");
      el.value = o.value;
      el.textContent = o.label;
      el.className = "bg-stone-900";
      subSelect.appendChild(el);
    });
    subWrap.classList.remove("opacity-0", "max-h-0", "pointer-events-none");
    subWrap.classList.add("opacity-100", "max-h-24");
  }

  function hideSub() {
    subWrap.classList.add("opacity-0", "max-h-0", "pointer-events-none");
    subWrap.classList.remove("opacity-100", "max-h-24");
    subSelect.value = "";
  }

  typeSelect?.addEventListener("change", () => {
    const v = typeSelect.value;
    if (v === "residential") showSub(residentialOpts);
    else if (v === "commercial") showSub(commercialOpts);
    else hideSub();
  });

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorDiv.classList.add("hidden");
    errorDiv.textContent = "";
    submitBtn.disabled = true;
    btnText.textContent = "Sending...";
    btnArrow.classList.add("hidden");
    btnSpinner.classList.remove("hidden");

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        form.style.display = "none";
        success.classList.remove("hidden");
      } else {
        errorDiv.textContent = json.error || "Something went wrong. Please try again.";
        errorDiv.classList.remove("hidden");
      }
    } catch {
      errorDiv.textContent = "Network error. Please check your connection and try again.";
      errorDiv.classList.remove("hidden");
    } finally {
      submitBtn.disabled = false;
      btnText.textContent = "Send Message";
      btnArrow.classList.remove("hidden");
      btnSpinner.classList.add("hidden");
    }
  });
}
