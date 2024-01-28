// DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//SOLUTION:
function bmi(weight, height) {
    const qw = weight / Math.pow(height, 2)
    return qw <= 18.5 ? 'Underweight' : qw <= 25 ? 'Normal' : qw <= 30 ? 'Overweight' : 'Obese'
  }

  console.log(bmi(80, 1.8))