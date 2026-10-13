function pilihSuit(id) {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function kembali() {
  document.getElementById("bgk").classList.add("hidden");
  document.getElementById("gos").classList.add("hidden");
  document.getElementById("jari").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function mainSuit(kamu, pilihan, aturan) {
  let komputer = pilihan[Math.floor(Math.random() * pilihan.length)];

  if (kamu === komputer) {
    alert("Kamu: " + kamu + "\nKomputer: " + komputer + "\nSeri!");
  } else if (aturan[kamu] === komputer) {
    alert("Kamu: " + kamu + "\nKomputer: " + komputer + "\nKamu menang!");
  } else {
    alert("Kamu: " + kamu + "\nKomputer: " + komputer + "\nKamu kalah!");
  }
}

function suitBatuGuntingKertas(kamu) {
  mainSuit(kamu, ["batu", "gunting", "kertas"],
    { batu: "gunting", gunting: "kertas", kertas: "batu" });
}

function suitGajahOrangSemut(kamu) {
  mainSuit(kamu, ["gajah", "orang", "semut"],
    { gajah: "orang", orang: "semut", semut: "gajah" });
}

function suitJari(kamu) {
  mainSuit(kamu, ["jempol", "telunjuk", "kelingking"],
    { jempol: "telunjuk", telunjuk: "kelingking", kelingking: "jempol" });
}