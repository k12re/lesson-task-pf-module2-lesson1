//Question 1

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase());
{
  console.log("Name is equal");
}

//Question 2

var username = "myusername";
var lengthOfName = username.length;
//console.log(lengthOfName);

if (lengthOfName >= 4 && lengthOfName <= 10) {
  console.log("Accepted username");
} else {
  if (lengthOfName < 4) {
    console.log("Username has too few characters");
  }

  if (lengthOfName > 10) {
    console.log("Username has too many characters");
  }
}

//Question 3

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

//if (invoicePaid === true && productDispatched === true && customerHasSigned === true) {
//  console.log("Order complete");
//} else {
//  if (!invoicePaid) {
//    console.log("Order is NOT paid");
//  }
//
//  if (productDispatched !== true) {
//    console.log("Product is NOT dispatched");
//  }
//
//  if (customerHasSigned === false) {
//    console.log("Customer has NOT signed");
//  }
//}

//Question 4

if (invoicePaid === false || productDispatched === false || customerHasSigned === false) {
  if (!invoicePaid) {
    console.log("The order is NOT paid");
  }

  if (productDispatched === false) {
    console.log("Product is NOT dispatched");
  }

  if (customerHasSigned !== true) {
    console.log("Customer has NOT signed");
  }
} else {
  console.log("Order is complete");
}
