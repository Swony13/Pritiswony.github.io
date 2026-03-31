// Smooth scroll to sections
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToCertificates() {
  document.getElementById("certificates").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToEducation() {
  document.getElementById("education").scrollIntoView({
    behavior: "smooth"
  });
}

// Show experience section smoothly
function showExperience() {
  let exp = document.getElementById("experience");

  exp.style.display = "block";
  exp.style.opacity = "0";

  setTimeout(() => {
    exp.style.opacity = "1";
  }, 100);

  exp.scrollIntoView({
    behavior: "smooth"
  });
}

// ✨ Fade-in animation on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});
