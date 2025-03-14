const searchField = document.getElementById("search");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent.trim();
    if (value === "AC") {
      searchField.value = "";
    } else if (value === "C") {
      searchField.value = searchField.value.slice(0, -1);
    } else if (value === "=") {
      evaluateExpression();
    } else {
      searchField.value += value;
    }
  });
});

function evaluateExpression() {
  try {
    searchField.value = eval(searchField.value);
  } catch {
    searchField.value = "Error";
  }
}
