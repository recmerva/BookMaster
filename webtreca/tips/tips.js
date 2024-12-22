// Funkcija koja čuva novi savet
function saveTip() {
    const tipText = document.getElementById('tip-text').value;
    const author = document.getElementById('tip-author').value;
    const date = new Date().toLocaleString();

    if (tipText.trim() === '' || author.trim() === '') {
        alert('Please fill in both fields');
        return;
    }

    // Kreiramo novi savet objekat
    const newTip = {
        text: tipText,
        author: author,
        date: date
    };

    let tips = JSON.parse(localStorage.getItem('tips')) || [];  // Učitavamo postojeće savete iz localStorage

    // Dodajemo novi savet u niz
    tips.push(newTip);

    // Čuvamo ažurirane savete u localStorage
    localStorage.setItem('tips', JSON.stringify(tips));

    // Očistimo formu
    document.getElementById('tip-text').value = '';
    document.getElementById('tip-author').value = '';

    // Ponovo učitavamo savete na stranici
    loadTips();
}

// Funkcija za učitavanje saveta sa localStorage
function loadTips() {
    const tipsList = document.getElementById('tips-list');
    const savedTips = JSON.parse(localStorage.getItem('tips')) || [];  // Učitavamo sačuvane savete

    // Prikazujemo sve savete, uključujući i početne
    const initialTips = [
        { text: "Write every day. The more you write, the better you get.", author: "Stephen King", date: "2024-12-14" },
        { text: "Don’t worry about being good, just start writing.", author: "J.K. Rowling", date: "2024-12-13" },
        { text: "The secret of getting ahead is getting started.", author: "Mark Twain", date: "2024-12-12" },
        { text: "Good writing is like a window pane.", author: "George Orwell", date: "2024-12-11" },
        { text: "There is nothing to writing. All you do is sit down at a typewriter and bleed.", author: "Ernest Hemingway", date: "2024-12-10" },
        { text: "The best time for planning a book is while you're doing the dishes.", author: "Agatha Christie", date: "2024-12-09" },
        { text: "I only write when I am inspired, and I see to it that I am inspired at nine o’clock every morning.", author: "William Faulkner", date: "2024-12-08" }
    ];

    // Kombinujemo početne i sačuvane savete
    const allTips = initialTips.concat(savedTips);

    tipsList.innerHTML = '';  // Brišemo sve trenutne savete na stranici

    // Prikazujemo sve savete (početni + novi)
    allTips.forEach(tip => {
        const tipDiv = document.createElement('div');
        tipDiv.classList.add('tip');
        tipDiv.innerHTML = `
            <p><strong>${tip.author}</strong> - "${tip.text}" - <span class="date">${tip.date}</span></p>
        `;
        tipsList.appendChild(tipDiv);
    });
}

// Pozivamo loadTips funkciju kada stranica učita
window.onload = loadTips;
