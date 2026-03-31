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

function showExperience() {
  let exp = document.getElementById("experience");
  exp.style.display = "block";

  exp.scrollIntoView({
    behavior: "smooth"
  });
}
