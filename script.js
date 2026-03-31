function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

function scrollToCertificates() {
  document.getElementById("certificates").scrollIntoView({ behavior: "smooth" });
}

function scrollToEducation() {
  document.getElementById("education").scrollIntoView({ behavior: "smooth" });
}

function showExperience() {
  const exp = document.getElementById("experience");
  exp.classList.toggle("hidden");
}