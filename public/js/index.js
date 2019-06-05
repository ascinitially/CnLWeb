var $submitBtn = $("#submitMessage");
// var $delteBtn = $(".deleteDeal");
// var $acceptBtn = $('.acceptDeal');
// var $completeBtn = $(".completeDeal");
// var $uploadImg = $('#uploadImage');

// The API object contains methods for each kind of request we'll make
var API = {
  saveContact: function (contact) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/contacts",
      data: JSON.stringify(contact)
    });
  },

  // updateDeal: function (id, status) {
  //   return $.ajax({
  //     url: "api/deals",
  //     type: "PUT",
  //     data: {
  //       id: id,
  //       status: status
  //     }
  //   });
  // },

  // deleteDeal: function (id) {
  //   return $.ajax({
  //     url: "api/delete/" + id,
  //     type: "DELETE"
  //   });
  // },

  // uploadImage: function(username, image){
  //   return $.ajax({
  //     url: 'api/upload',
  //     type: 'POST',
  //     data: {
  //       username: username,
  //       file: image
  //     }
  //   })
  // }
};

// empties input form
var refreshInputs = function () {
  $('#nameInput').val('');
  $('#emailInput').val('');
  $('#messageInput').val('');
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  // event.preventDefault();

  console.log('submitted')
  //TODO replace userID with the users' ID
  var newObj = {
    // UserId: 2,
    name: $('#nameInput').val(),
    email: $('#emailInput').val(),
    message: $('#messageInput').val(),
    // asked: $('#asked').val(),
    // askedQTY: $('#askedQTY').val(),
    // askedUnits: $('#askedUnits').val(),
    // status: 'open'
  };

  API.saveContact(newObj).then(function () {
    console.log('contact saved!');
    refreshInputs();
    $("#hiddenThanks").show();
    //TODO add modal to let user know the deal was saved


  });
  // location.reload()
};

// var deleteOffer = function (event) {
//   event.preventDefault();
//   console.log('deleting...');

//   // Get the ID from the button.
//   // This is shorthand for $(this).attr("data-planid")
//   var id = $(this).data("dealid");

//   API.deleteDeal(id).then(() => {
//     console.log('deal deleted!');
//     location.reload()
//   })

// }

// var acceptOffer = function () {
//   console.log('updating...');

//   var id = $(this).data("dealid");

//   API.updateDeal(id, 'pending').then(() => {
//     console.log('deal updated!');
//     location.reload()
//   })

// }

// var completeOffer = function () {
//   console.log('updating...');

//   var id = $(this).data("dealid");

//   API.updateDeal(id, 'closed').then(() => {
//     console.log('deal updated!');
//     location.reload()
//   })

// }

// var handleUpload = function (event){
//   event.preventDefault()
//   console.log('uploading...');
//   var image = document.getElementById('image').files[0];

//   const username = $('#username').val();

//   console.log(image);
//   API.uploadImage(username, image).then(() => {
//     console.log('image of ' + username + ' uploaded!');
//   })
// }

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $delteBtn.on("click", deleteOffer);
// $acceptBtn.on("click", acceptOffer);
// $completeBtn.on("click", completeOffer);
// $uploadImg.on("click", handleUpload)
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
