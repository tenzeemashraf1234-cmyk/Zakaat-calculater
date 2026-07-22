const button = document.querySelector("button");

button.addEventListener("click", function () {
    const cash = Number(document.querySelector("#cash").value);
const gold = Number(document.querySelector("#gold").value);
const silver = Number(document.querySelector("#silver").value);


const totalAssets = cash + gold + silver;
const zakat = totalAssets * 0.025;
document.querySelector("#result").textContent =
    "Zakat Rate: 2.5% | Your Zakat is: Rs. " + zakat.toLocaleString();
});