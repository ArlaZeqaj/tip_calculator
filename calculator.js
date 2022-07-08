function myFunction() {
  let bill = prompt("Enter your bill: ");
  let tip;

  if (bill >= 100) {
    tip = bill * 0.1;
    document.getElementById("demo").innerHTML = "You should tip " + tip + "$";
  }
  if (bill >= 300) {
    tip = bill * 0.05;
    document.getElementById("demo").innerHTML = "You should tip " + tip + "$";
  }
  if (bill >= 500) {
    tip = bill * 0.03;
    document.getElementById("demo").innerHTML = "You should tip " + tip + "$";
  } else if (bill < 100) {
    document.getElementById("demo").innerHTML = "Your bill is too low to tip";
  }
}
