const BMI_USC = document.querySelector("#bmi-usc");
const BUT_FIRST = document.querySelector("#calc-btn-first");
const CALC_BTN = document.querySelector("#calc-btn");
const CLR_BTN = document.querySelector("#clr-btn");
const text = document.querySelector("#par");

BUT_FIRST.addEventListener("click", function () {
  BMI_USC.style.display = "block";
  BUT_FIRST.style.display = "none";
  CALC_BTN.style.display = "block";
  text.style.display = "none";
});

CALC_BTN.addEventListener("click", calculateBmi);

function calculateBmi() {
  let age = document.querySelector("#age1").value;
  let height = document.querySelector("#feet").value;
  let inches = document.querySelector("#inches").value;
  let newhight = parseFloat(height) * 12 + parseFloat(inches);
  let weight = document.querySelector("#pounds").value;

  let bmi = ((weight / (newhight * newhight)) * 703).toFixed(1);

  CLR_BTN.style.display = "block";
  CALC_BTN.style.display = "none";
  document.getElementById("bmi-value").innerHTML = "Your BMI is";
  document.getElementById("bmi-value").innerHTML = bmi;

  if (isNaN(age, height, weight, inches)) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Insert NUMBERS, please",
    });

    document.getElementById("bmi-category").style.display = "none";
    document.getElementById("bmi-value").innerHTML = "";
  } else if (
    age === "" ||
    age <= 0 ||
    height === "" ||
    height <= 0 ||
    weight === "" ||
    weight <= 0
  ) {
    CALC_BTN.style.display = "block";
    CLR_BTN.style.display = "none";
    document.getElementById("bmi-value").innerHTML = "";
    Swal.fire({
      icon: "error",
      iconColor: "#990000",
      title: "Please enter your INFO!",
    });

    return false;
  }

  let bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obesity";
  }

  document.getElementById("bmi-category").innerHTML = `${bmiCategory}`;
}

CLR_BTN.addEventListener("click", function () {
  let forms = [...document.forms];
  forms.forEach((form) => form.reset());
  clearBmi();
});
function clearBmi() {
  document.getElementById("bmi-value").innerHTML = "";
  document.getElementById("bmi-category").innerHTML = "";
  document.getElementById("bmi-gender").innerHTML = "";

  CLR_BTN.style.display = "none";
  CALC_BTN.style.display = "block";
}
