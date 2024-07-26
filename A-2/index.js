setTimeout(() => {
  console.log("1. Display even numbers from 1 to 100");
  let evenNumbers = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  console.log(`Even numbers from 1 to 100: ${evenNumbers.join(", ")}`);
  console.log("\n");
}, 1000);

setTimeout(() => {
  console.log(
    "2. Function to perform arithmetic operations (add, subtract, multiply, divide)"
  );

  console.log("calculation for 5 and 10:");
  function calculate(num1, num2, operation) {
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  }
  console.log("add" + " " + calculate(10, 5, "add"));
  console.log("subtract" + " " + calculate(10, 5, "subtract"));
  console.log("multiply" + " " + calculate(10, 5, "multiply"));
  console.log("divide" + " " + calculate(10, 5, "divide"));
  console.log("\n");
}, 3000);

setTimeout(() => {
  console.log("3. Function to find tax based on salary");
  function findTax(salary) {
    let tax;
    switch (true) {
      case salary > 0 && salary <= 500000:
        tax = 0;
        break;
      case salary > 500000 && salary <= 1000000:
        tax = 0.1 * salary;
        break;
      case salary > 1000000 && salary <= 1500000:
        tax = 0.2 * salary;
        break;
      case salary > 1500000:
        tax = 0.3 * salary;
        break;
      default:
        tax = "Invalid salary";
    }
    return tax;
  }
  console.log(findTax(450000));
  console.log(findTax(750000));
  console.log(findTax(1250000));
  console.log(findTax(1750000));
  console.log("\n");
}, 6000);

setTimeout(() => {
  console.log(
    "4. Function to find the sum of the products of corresponding digits of two numbers"
  );
  function sumOfProducts(n1, n2) {
    const str1 = n1.toString().split("").reverse();
    const str2 = n2.toString().split("").reverse();

    let sum = 0;
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
      const digit1 = parseInt(str1[i] || 0);
      const digit2 = parseInt(str2[i] || 0);
      sum += digit1 * digit2;
    }
    return sum;
  }
  console.log(sumOfProducts(6, 34));
  console.log(sumOfProducts(123, 456));
}, 9000);
