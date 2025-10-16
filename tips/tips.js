document.addEventListener("DOMContentLoaded", () => {
  const randomTipDisplay = document.getElementById("random-tip-display");
  const randomBtn = document.getElementById("random-tip-btn");

  let allTips = [];

  // Fetch saveta iz API-ja
  fetch("https://vebdizajn-4.onrender.com/api/vebdizajn/saveti-za-pisanje-knjiga")
    .then(response => response.json())
    .then(tips => {
      allTips = tips;
      // Ne prikazuj ništa odmah!
    })
    .catch(error => {
      console.error("Greška pri dohvatanju saveta:", error);
      randomTipDisplay.textContent = "Nije moguće učitati savete.";
      randomTipDisplay.style.display = "block";
    });

  // Klik na dugme - prikaz random saveta
  randomBtn.addEventListener("click", () => {
    if (allTips.length === 0) return;

    const randomIndex = Math.floor(Math.random() * allTips.length);
    const tip = allTips[randomIndex];

    randomTipDisplay.textContent = tip;
    randomTipDisplay.style.display = "block";
  });
});
