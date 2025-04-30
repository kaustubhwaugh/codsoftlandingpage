document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("availabilityForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const pincode = document.getElementById("pincode").value.trim();
  
      if (!/^\d{6}$/.test(pincode)) {
        alert("Please enter a valid 6-digit pincode.");
        return;
      }
  
      alert(`Service is available in pincode ${pincode}!`);
      form.reset();
    });
  });

  
  