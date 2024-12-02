// Select infographics
const customerImg = document.getElementById("customer-infograph");
const builderImg = document.getElementById("builder-infograph");

// Function to update images based on screen size
const updateImages = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 480) {
    customerImg.src = "images/Updated Icons/mobile/350w/customer.png";
    builderImg.src = "images/Updated Icons/mobile/350w/builder.png";
  } else if (screenWidth <= 768) {
    customerImg.src = "images/Updated Icons/mobile/700w/customer.png";
    builderImg.src = "images/Updated Icons/mobile/700w/builder.png";
  } else if (screenWidth <= 1024) {
    customerImg.src = "images/Updated Icons/Landscape/800w/customer.png";
    builderImg.src = "images/Updated Icons/Landscape/800w/builder.png";
  } else {
    customerImg.src = "images/Jagedo infographics/JPG_Landscape/Customer.jpg";
    builderImg.src = "images/Jagedo infographics/JPG_Landscape/Builder.jpg";
  }
};

// Add event listeners for page load and window resize
window.addEventListener("load", updateImages);
window.addEventListener("resize", updateImages);

// Placeholder for login and signup buttons
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");

signupBtn.addEventListener("click", () => alert("Sign-Up Modal Placeholder"));
loginBtn.addEventListener("click", () => alert("Login Modal Placeholder"));

// Add event listeners to icons
document.querySelectorAll(".icon").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Login Modal Placeholder");
  });
});



// {/* <img src="images/Updated Icons/mobile/350w/customer.png" alt="First">

// <img src="images/Updated Icons/mobile/350w/builder.png" alt=""> */}

// <img src="images/Updated Icons/mobile/700w/customer.png" alt="">

// <img src="images/Updated Icons/mobile/700w/builder.png" alt="">

// <img src="images/Updated Icons/Landscape/800w/customer.png" alt="">

// <img src="images/Updated Icons/Landscape/800w/builder.png" alt="">
