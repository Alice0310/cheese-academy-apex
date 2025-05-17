const fadeElems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // 一度だけ発火
    }
  });
}, { threshold: 0.1 });

fadeElems.forEach(el => observer.observe(el));