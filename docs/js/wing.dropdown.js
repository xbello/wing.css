document.querySelectorAll("[data-toggle='dropdown']").forEach(element => {
 element.addEventListener("click", function() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("hidden");
 });
});
