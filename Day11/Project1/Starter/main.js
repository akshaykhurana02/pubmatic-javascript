function calculate() {
  let weight, height, result, bmi;

  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;

  /*

    BMI = (weight / (height * height / 100));

    height /= 100; // height = height / 100;
    height *= height; // height = height * 100;
    bmi = weight / height;

  */

  bmi = weight / ((height / 100) * (height / 100));
  bmi = bmi.toFixed(2);

  result = `Your BMI is ${bmi}. `;

  if (bmi > 40) {
    result += "You are obese!";
  } else if (bmi > 30) {
    result += "You are over-weight!";
  } else if (bmi > 20) {
    result += "You are normal!";
  } else {
    result += "You are under-weight!";
  }

  document.getElementById("results").innerHTML = result;

  event.preventDefault();
}
