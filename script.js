 
// For Gallery //
  function image(source, details){
    var imagearea = document.getElementById("imgtarget");
    var maincontent = document.getElementById("dim");
    var navigation = document.getElementById("navigation");
    var image = document.getElementById("imagearea");
    var description = document.getElementById("img_details");
    maincontent.style.opacity = 0.1;
    navigation.style.opacity = 0.1;
    image.src = source;
    description.innerHTML = details;
    if(imagearea.classList == "invisibleimg"){
      imagearea.classList.remove("invisibleimg");
      imagearea.classList.add("visibleimg");
    };
  }

  function clos(){
    var imagearea = document.getElementById("imgtarget");
    var maincontent = document.getElementById("dim");
    var navigation = document.getElementById("navigation");
    maincontent.style.opacity = 1;
    navigation.style.opacity = 1;
    if(imagearea.classList == "visibleimg"){
      imagearea.classList.remove("visibleimg");
      imagearea.classList.add("invisibleimg");
    };
  }

  // index.html//
      // code for transition effects in home page
    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      };
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      };
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    };


// contact info
function submit(){
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if(fname==""){
    alert("Please Enter Your first name");
  }else if(lname==""){
    alert("Please Enter Your Last Name");
  }else if(email==""){
    alert("Please Enter Your Email Address");
  }else{
 alert("Thank You " + fname + " For your feedback");
  }
}

function cancel(){
  confirm("Cancel this form.");
}