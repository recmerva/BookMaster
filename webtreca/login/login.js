
const hash = (text) =>
  {
      const hashObj = new jsSHA("SHA-512","TEXT",{numRounds: 1});
      hashObj.update(text);
      const hash = hashObj.getHash("HEX");
      return hash;
  }

  let users=[]
  document.addEventListener("DOMContentLoaded", function () {
    fetch("users.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        users=data
        console.log(users);
        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", async (e) => {
      e.preventDefault(); // Spreči automatsko slanje forme

      const usernameValue = usernameInput.value.trim();
      const passwordValue = passwordInput.value;

      if (!usernameValue || !passwordValue) {
          displayError("Username and password are required.");
          return;
      }
      
      // Hashovanje lozinke
      const hashedPassword =  hash(passwordValue);
      console.log(hashedPassword);

  });




  // Funkcija za prikaz greške
  function displayError(message) {
      const errorElement = document.createElement("div");
      errorElement.textContent = message;
      errorElement.style.color = "#d9534f";
      errorElement.style.marginTop = "10px";
      form.appendChild(errorElement);

      setTimeout(() => {
          errorElement.remove();
      }, 3000);
  }
});

const btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value;
  const successMessage = document.getElementById("successMessage");

  const user=users.find(user=>user.username===usernameValue)
  console.log(user);
  
    if(!user){

      // Čišćenje sadržaja prethodnog elementa
successMessage.innerText = "";

// Kreiranje novog h4 elementa
const newh4 = document.createElement("h4");
newh4.style.color = "red"; // Boja teksta
newh4.style.fontSize = "16px"; // Veličina fonta
newh4.style.fontFamily = "'Cursive', sans-serif"; // Zakrivljen i nežan font
newh4.style.fontWeight = "normal"; // Bez bold stila
newh4.style.margin = "0"; // Uklanjanje margina
newh4.style.display = "inline"; // Tekst u liniji
newh4.style.position = "relative"; // Relativno pozicioniranje
newh4.style.top = "-12px"; // Podizanje teksta prema gore
newh4.innerText = "This username doesn't exist."; // Popravljena poruka

// Dodavanje elementa u successMessage
successMessage.appendChild(newh4);

// Ažuriranje stila roditeljskog elementa
successMessage.style.display = "block"; // Prikaz bloka
successMessage.style.textAlign = "center"; // Centriranje teksta
successMessage.style.padding = "10px"; // Dodatni prostor
successMessage.style.whiteSpace = "nowrap"; // Sprečava prelazak u novi red

console.log(111);

  }
  else if(hash(passwordValue)!==user.password){
    console.log(hash(passwordValue))
      usernameValidationMessageDiv.innerText=""
      passwordValidationMessageDiv.innerText=""
      const newh4 = document.createElement("h4");
      newh4.style.color='red'
      newh4.style.fontSize='16px'
      newh4.style.textAlign='start'
    newh4.style.marginTop='0px'
    newh4.innerText = `Invalid password`;
    successMessage.appendChild(newh4);
  }
  else{
      localStorage.setItem("loggedInUser", usernameValue);
      document.location.href='../correctly/correctly.html'
  }
})
