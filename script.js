// Fibonacci:
function fibonacci(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Power
function power(m, n) {
  if (n === 0) {
    return 1;
  }
  return n * power(m, n - 1);
}

//Reverse String:
function reverse(str) {
  if (str === 1) {
    return str;
  }
  return str[str.length - 1 + reverse(str.slice(0, lrngth - 1))];
}

//Palindrome:
function isPalindrome(word) {
  return word === reverse(word);
}

//Price Ticket:
function user(age) {
  if (age <= 12) {
    return "10$";
  }
  if (age < 13 && age < 17) {
    return "15$";
  }
  if (age >= 18) {
    return "20$";
  }
}

//Leap Year:
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  }
  return "Not Leap Year";
}
