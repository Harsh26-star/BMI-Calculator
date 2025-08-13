const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const result = document.querySelector("#result");
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight";
  } else if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height";
  } else {
    result.innerHTML = bmi;
  }

  if (bmi < 18.5) {
    document.querySelector("#under-weight").innerHTML = "Eat more!!";
    document.querySelector("#normal-weight").innerHTML = "";
    document.querySelector("#over-weight").innerHTML = "";
  } else if (bmi >= 18.5 && bmi < 25) {
    document.querySelector("#under-weight").innerHTML = "";
    document.querySelector("#normal-weight").innerText =
      "Keep doing what you are doing!!";
    document.querySelector("#over-weight").innerHTML = "";
  } else if (bmi >= 25 && bmi < 30) {
    document.querySelector("#under-weight").innerHTML = "";
    document.querySelector("#normal-weight").innerHTML = "";
    document.querySelector("#over-weight").innerText =
      "Put down the food and start running!!";
  } else {
    document.querySelector("#under-weight").innerHTML = "";
    document.querySelector("#normal-weight").innerHTML = "";
    document.querySelector("#over-weight").innerHTML =
      "Obese — consult a doctor!";
  }
});
