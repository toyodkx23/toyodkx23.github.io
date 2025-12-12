(function () {
  const input = document.getElementById("birthYearInput");
  const ageDisplay = document.getElementById("ageDisplay");

  if (!input || !ageDisplay) return; 

  input.addEventListener("input", function () {
  
    const raw = this.value.trim();
    const digits = raw.replace(/\D/g, ""); 
    const currentYear = 2025;


    if (digits.length === 4) {
      const year = parseInt(digits, 10);
      if (year >= 1900 && year <= currentYear) {
        const age = currentYear - year;
        ageDisplay.textContent = "Your age: " + age;
        return;
      }
    }

 
    ageDisplay.textContent = "";
  });
})();
