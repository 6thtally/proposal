document.getElementById("proposalForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your proposal has been received. We'll get back to you shortly.");
  this.reset();
});
