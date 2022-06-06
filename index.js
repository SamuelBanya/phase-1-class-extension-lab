class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray;
  }

  get countSides() {
    let totalCount = sidesArray.length;

    return totalCount;
  }

  get perimeter() {
    let perimeter = 0;
    sidesArray.forEach((side) => {
      perimeter += side;
    });

    return perimeter;
  }
}

class Triangle {
  constructor(sidesArray) {
    super(sidesArray);
  }
  get isValid() {
    // The sum of the lengths of any two sides of a triangle is greater than the length of the third side.
    // If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal to) the third side.
    // If that is not true, then it is not possible to construct a triangle with the given side lengths.
    let firstCombo = sidesArray[0] + sidesArray[1];
    let secondCombo = sidesArray[0] + sidesArray[2];
    let thirdCombo = sidesArray[1] + sidesArray[2];

    if (firstCombo < sidesArray[2]) {
      return false;
    }
    if (secondCombo < sidesArray[1]) {
      return false;
    }
    if (thirdCombo < sidesArray[0]) {
      return false;
    }
  }
}

class Square extends Polygon {
  constructor(sidesArray) {
    super(sidesArray);
  }
  get isValid() {
    // A square is valid when the lengths of all sides are equal.
    if (sidesArray[0] === sidesArray[1] === sidesArray[2] === sidesArray[3]) {
      return true
    } else {
      return false
    }
  }
  get area() {
    let area = sidesArray[0] * sidesArray[1];

    return area;
  }
}
