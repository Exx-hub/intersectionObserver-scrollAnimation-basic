const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

// tell observer to observe each element
hiddenElements.forEach((el) => observer.observe(el));

const cards = document.querySelectorAll(".card");

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting); // same as if else above
    });
  },
  {
    threshold: 1,
    // rootMargin: "-100px",
    // root:
  }
);

cards.forEach((card) => observer.observe(card));
