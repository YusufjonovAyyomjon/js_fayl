const parent = document.querySelector(".parent");
let arr = [5, 10, 15, 18, 20, 25, 30, 35, 45, 50, 75, 80, 85, 100];

for (let i = 0; i < arr.length; i++) {
    const el = document.createElement("div");
    el.textContent = arr[i];

    if (arr[i] > 50 && arr[i] <= 100) {
        el.style.color = "blue";
    } else if (arr[i] > 20 && arr[i] <= 50) {
        el.style.color = "green";
    } else if (arr[i] > 10 && arr[i] <= 20) {
        el.style.color = "red";
    } else if (arr[i] <= 10) {

        el.style.color = "black";
    }

    parent.appendChild(el);
}

