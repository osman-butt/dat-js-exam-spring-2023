"use strict";

window.addEventListener("load", initApp);

let postnumre = [];

async function initApp() {
  console.log("initApp is working!");
  document
    .querySelector("#address-form")
    .addEventListener("submit", addUserClicked);
  document.querySelector("#postnr").addEventListener("keydown", getCity);
  await getPostnumre();
  console.log(postnumre);
}

async function getPostnumre() {
  const res = await fetch("postnumre.json");
  postnumre = await res.json();
  return postnumre;
}

function addUserClicked(event) {
  event.preventDefault();
  const form = event.target;

  const newUser = {
    name: form.navn.value,
    adresse: form.adresse.value,
    postnr: form.postnr.value,
    by: form.by.value,
    email: form.email.value,
    nyhedsbrev: form.nyhedsbrev.checked,
  };

  console.log(newUser);
}

function getCity(event) {
  if (event.key === "Tab") {
    const zip = document.querySelector("#postnr").value;
    const byIndex = postnumre.findIndex(obj => obj.postnr === zip);
    if (byIndex > -1) {
      document.querySelector("#by").value = postnumre[byIndex].by;
      console.log(by);
    } else {
      document.querySelector("#by").value = "";
    }
  }
}
