const searchButton = document.querySelector(".search-button");
const contactName = document.querySelector(".input-search");

const contacts = [
    { name: "Alexandre", phone: "(94) 98425-4300" },
    { name: "João", phone: "(93) 99158-6984" },
    { name: "Marcela", phone: "(62) 97845-8962" },
    { name: "Iury", phone: "(94) 98425-4300" },
    { name: "Guilherme", phone: "(94) 98425-4300" },
    { name: "Lidia", phone: "(94) 98425-4300" },
    { name: "Milena", phone: "(94) 98425-4300" },
];

function searchContact() {
  const mensageResult = document.querySelector(".mensage-result");

  for (i = 0; i < contacts.length; i++) {
    if (contactName === "") {
      mensageResult.innerHTML = "Digite um nome de contato";
    } else if (contactName.value.toLowerCase() === contacts[i].name.toLowerCase()) {
      mensageResult.innerHTML = `Nome: ${contacts[i].name} <br> Contato: ${contacts[i].phone}`;
      break
    } else {
        mensageResult.innerHTML = 'Contato não encontrado'
    }
  }
}

searchButton.addEventListener("click", searchContact);
