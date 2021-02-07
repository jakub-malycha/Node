const example = () => {
  const formInput = document.getElementById("example").value;
  document.getElementById("text").innerText = formInput;
};

document.getElementById("action").addEventListener("click", example);
