$(document).ready(function () {
  // Mobile Responsive Button
  const sidemenu = document.querySelector("aside");
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  menuBtn.addEventListener("click", () => {
    sidemenu.style.display = "block";
  });

  $("img").attr("loading", "lazy");

  closeBtn.addEventListener("click", () => {
    sidemenu.style.display = "none";
  });

  // setting Active class on sidebar
  navigation(window.location.href);

  // // Lazy Load All Images
  // const observer = lozad();
  // observer.observe();

  $(".dropdown-menu").hide();

  // Scroll Reviel JS
  // ScrollReveal().reveal(".card");

  // Adding Autocomplete off to All Form
  // $("form").attr("autocomplete","off");
});

function navigation(current_link) {
  // console.log(current_link);
  // let web = window.location.protocol + "//" + window.location.host; @http://localhost
  let last = current_link.split("/");
  console.log(last[last.length - 2]);
  current_link = last[last.length - 2];
  if (current_link === "home") {
    $("#home").addClass("active");
  } else if (current_link === "weather") {
    $("#weather").addClass("active");
  } else if (current_link == "account") {
    $("#account").addClass("active");
  } else if (current_link == "krishi-book") {
    $("#krishi-books").addClass("active");
  } else if (current_link == "settings") {
    $("#settings").addClass("active");
  } else if (current_link == "faq") {
    $("#faq").addClass("active");
  } else if (current_link == "donate") {
    $("#donate").addClass("active");
  } else {
    $("#home").addClass("active");
  }
}
// document.getQuerySelector("bod")
// window.addEventListener('click', (e)=>{
//   // console.log(e.target, e.target != document.getElementById("notificationToggle"));
//   if(e.target != document.getElementById("notificationToggle")){
//     if ($(".dropdown-menu").css("display") == "block")
//       $(".dropdown-menu").css("display", "none");
//     else
//       $(".dropdown-menu").css("display", "block");
//   }
//   else {
//     $(".dropdown-menu").css("display", "block");
//   }
// })

window.addEventListener("click", (e) => {
  if (
    e.target === document.querySelector("span.material-icons-sharp.bell-icon")
  ) {
    $(".dropdown-menu").toggle();
  } else {
    $(".dropdown-menu").attr("style", "display: none");
  }
});

// Ajax Loading Scree
$(document).ajaxStart(function () {
  $("#loading").show();
});
$(document).ajaxStop(function () {
  $("#loading").hide();
});

// turning Off Autocomplete in All Form
let form = $("form");
if (form.length >= 1) {
  $(form).attr("autocomplete", "off");
} else {
  // console.log("Form not Exist");
}
