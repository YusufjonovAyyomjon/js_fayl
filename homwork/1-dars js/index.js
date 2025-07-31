// let year = Number(prompt("1500 dan katta 2025 dan kichik yil kiriting"))
// let kun = 365;
// const names = ["John Doe", "Mike Tyson"];
    
function getInitials(name) {
  const parts = name.split(" ");
  return parts.map(part => part[0].toUpperCase()).join(".");
}

const resultDiv = document.getElementById("result");

names.forEach(name => {
  const get = getInitials(name);
  const p = document.createElement("p");
  p.textContent = get;
  resultDiv.appendChild(p);
});
