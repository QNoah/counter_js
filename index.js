let count = 0;

function increaseCount() {
  count += 1;
  document.getElementById("count").textContent = `Count: ${count}`;
}

function decreaseCount() {
  if (count == 0) {
    alert("Number can not be lower than 0");
  } else {
    count -= 1;
    document.getElementById("count").textContent = `Count: ${count}`;
  }
}
