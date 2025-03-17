function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (id === "burgerForm") {
        setupForm();
      }
    });
}

loadComponent("header", "/components/header.html");
loadComponent("burgerForm", "/components/form.html");

function setupForm() {
  const form = document.getElementById("burgerFormMain");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const patty = document.getElementById("patty").value;
    const amount = document.getElementById("amount").value;
    const doneness = document.getElementById("doneness").value;

    const toppings = [];
    document
      .querySelectorAll('input[name="topping"]:checked')
      .forEach((el) => toppings.push(el.value));

    const cheese =
      document.querySelector('input[name="cheese"]:checked')?.value || "None";
    const bun = document.getElementById("bun").value;
    const sauce = document.getElementById("sauce").value;
    const extra = document.getElementById("extra").value;

    const summary = `
🍔 Your Burger Order:
- Protein: ${patty}
- Number of Patties: ${amount}
- Doneness Level: ${doneness}
- Toppings: ${toppings.join(", ") || "None"}
- Cheese: ${cheese}
- Bun Type: ${bun}
- Sauce: ${sauce}
- Extra Notes: ${extra || "None"}
    `;

    alert(summary);
  });
}
