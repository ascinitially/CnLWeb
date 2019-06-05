var modal1 = document.getElementById("myModal1");

                // Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("img1");
var modal1Img = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img1.onclick = function(){
modal1.style.display = "block";
modal1Img.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
modal1.style.display = "none";
}

var modal2 = document.getElementById("myModal2");

                // Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("img2");
var modal2Img = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img2.onclick = function(){
    console.log("clicked")
modal2.style.display = "block";
modal2Img.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
    console.log("clicked span 2");
modal2.style.display = "none";
}

var modal3 = document.getElementById("myModal3");

                // Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("img3");
var modal3Img = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img3.onclick = function(){
    console.log("clicked")
modal3.style.display = "block";
modal3Img.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
modal3.style.display = "none";
}

var modal4 = document.getElementById("myModal4");

                // Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("img4");
var modal4Img = document.getElementById("img04");
var captionText = document.getElementById("caption4");
img4.onclick = function(){
    console.log("clicked")
modal4.style.display = "block";
modal4Img.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span4.onclick = function() { 
modal4.style.display = "none";
}

var modal5 = document.getElementById("myModal5");

                // Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("img5");
var modal5Img = document.getElementById("img05");
var captionText = document.getElementById("caption5");
img5.onclick = function(){
    console.log("clicked")
modal5.style.display = "block";
modal5Img.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the modal
span5.onclick = function() { 
modal5.style.display = "none";
}
