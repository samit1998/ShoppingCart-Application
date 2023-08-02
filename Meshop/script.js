
// AI LOGIC............................


function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please enter both email and password.");
    } else {
        window.location.href = "shopping.html";
    }
}

function signup() {
    let firstName = document.getElementById("firstName").value;
    let lastName  = document.getElementById("lastName").value;
    let email     = document.getElementById("email").value;
    let password  = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (firstName == "" || lastName == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Please fill all fields.");
    } else if (password != confirmPassword) {
        alert("Passwords do not match.");
    } else {
        window.location.href = "shopping.html";
    }
}


// function logout(){
//     setTimeout(function(){
//         window.location.href="profile.html";

//     },2000);
//     // window.location.href="main.html";
// }


// logout event button........................

let logoutbtn = document.getElementById('logout-btn');
        logoutbtn.addEventListener('click',function(){
            localStorage.clear();
            document.getElementById('message').innerText="logging out";
            setTimeout(function(){
                window.location.href = "main.html";
            },1000);
        })




// profile pae update section.............................

// const form = document.querySelector('form');

// form.addEventListener('click', (event) => {
//   event.preventDefault();

//   const firstName = document.querySelector('#firstName').value;
//   const lastName = document.querySelector('#lastName').value;

// });

// const colorCheckboxes = document.querySelectorAll('input[name="color"]');
// const sizeCheckboxes = document.querySelectorAll('input[name="size"]');
// const ratingRange = document.querySelector('#rating-range');
// const applyFilterButton = document.querySelector('#apply-filter');
// const image = document.querySelector('#product-image');

// applyFilterButton.addEventListener('click', () => {
//   const selectedColors = Array.from(colorCheckboxes)
//     .filter(cb => cb.checked)
//     .map(cb => cb.value);
//   const selectedSizes = Array.from(sizeCheckboxes)
//     .filter(cb => cb.checked)
//     .map(cb => cb.value);
//   const selectedRating = ratingRange.value;
  
//   // Change image color
//   if (selectedColors.includes('red')) {
//     image.src = 'red-product-image.jpg';
//   } else if (selectedColors.includes('green')) {
//     image.src = 'green-product-image.jpg';
//   } else {
//     image.src = 'default-product-image.jpg';
//   }
  
//   // Change image size
//   if (selectedSizes.includes('l')) {
//     image.width = '500';
//   } else if (selectedSizes.includes('m')) {
//     image.width = '400';
//   } else {
//     image.width = '300';
//   }
// });



// product added to cart button................

// Get the "Add to Cart" button element
let addToCartButton = document.getElementById("cart-btn");

// Add a click event listener to the button
addToCartButton.addEventListener('click', function() {
  // Get the product and price from the HTML elements
  let productName = document.getElementById("shirt").innerHTML;
  let productPrice = document.getElementById("rs").innerHTML;

  // Display a success message to the user
  alert("Product added to cart!");
});

let addToCartButton1 = document.getElementById("cart-btn1");

// Add a click event listener to the button
addToCartButton1.addEventListener('click', function() {
  // Get the product and price from the HTML elements
  let productName = document.getElementById("shirt").innerHTML;
  let productPrice = document.getElementById("rs").innerHTML;

  // Display a success message to the user
  alert("Product added to cart!");
});

let addToCartButton2 = document.getElementById("cart-btn2");

// Add a click event listener to the button
addToCartButton2.addEventListener('click', function() {
  // Get the product and price from the HTML elements
  let productName = document.getElementById("shirt").innerHTML;
  let productPrice = document.getElementById("rs").innerHTML;

  // Display a success message to the user
  alert("Product added to cart!");
});

let addToCartButton3 = document.getElementById("cart-btn3");

// Add a click event listener to the button
addToCartButton3.addEventListener('click', function() {
  // Get the product and price from the HTML elements
  let productName = document.getElementById("shirt").innerHTML;
  let productPrice = document.getElementById("rs").innerHTML;

  // Display a success message to the user
  alert("Product added to cart!");
});




// Get the "Remove" button element
var removeButton = document.getElementById("remove-from-cart");

// Add a click event listener to the button
removeButton.addEventListener("click", function() {
  // Get the product ID from the HTML element
  var productId = document.getElementById("shirt").innerHTML.value="";
  var productId1 = document.getElementById("rs").innerHTML.value="";

  // Display a success message to the user
  alert("Product removed from cart!");
});







var payButton = document.getElementById("pay-button");

// Add a click event listener to the button
payButton.addEventListener("click", function() {
  // Redirect the user to the payment page
  window.location.href = "https://example.com/payment";
});


// Get the input fields and the "Save Info" button
var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var saveInfoButton = document.getElementById("save-info-button");

// Add a click event listener to the "Save Info" button
saveInfoButton.addEventListener("click", function() {
  // Get the values of the input fields
  var firstname = firstNameInput.value;
  var lastname = lastNameInput.value;

  // Save the values to the database or do something else with them
  saveUserInfo(firstname, lastname);
  
});

function saveUserInfo(firstname, lastname) {
  // Add code here to save the user's information to the database or do something else with it
  
}


var oldPassword = document.getElementById("old-Password").value;
var newPassword = document.getElementById("new-password").value;
var confirmPassword = document.getElementById("confirm-password").value;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("response").innerHTML = this.responseText;
  }
};

xhttp.open("POST", "changePassword.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("old-password=" + oldPassword + "&new-password=" + newPassword + "&confirm-password=" + confirmPassword);



