<<<<<<< HEAD

function Application() {
  let self = this

  let config = {
    apiKey: "AIzaSyDX29jSmkMwtwc0n9-8gOIY-IPXtrAQbkM",
    authDomain: "my-project-94dab.firebaseapp.com",
    databaseURL: "https://my-project-94dab.firebaseio.com",
    projectId: "my-project-94dab",
    storageBucket: "my-project-94dab.appspot.com",
    messagingSenderId: "905981696191"
  };
  firebase.initializeApp(config);

  let database = firebase.database()

  this.storeData = function () {
    let name = $('#nameInput').val().trim()
    let role = $('#roleInput').val().trim()
    let startDate = $('#startDateInput').val().trim()
    let rate = $('#rateInput').val().trim()

    // Store to firebase
    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      rate: rate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
  }

  this.employeesToTable = function (snapshot) {
    console.log(snapshot)
    // Clear the table
    // Get from firebase

    dbEmployees.forEach(data => {

    });

  }

  $('#addButton').on('click', function () {
    self.storeData()
  })

  // This function allows you to update your page in real-time when the firebase database changes.
  database.ref().on('child_added', function (snapshot) {

    

    // If any errors are experienced, log them to console.
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

}
=======
function Application() {
  let self = this

  let config = {
    apiKey: "AIzaSyDX29jSmkMwtwc0n9-8gOIY-IPXtrAQbkM",
    authDomain: "my-project-94dab.firebaseapp.com",
    databaseURL: "https://my-project-94dab.firebaseio.com",
    projectId: "my-project-94dab",
    storageBucket: "my-project-94dab.appspot.com",
    messagingSenderId: "905981696191"
  };
  firebase.initializeApp(config);
  let database = firebase.database()

  this.storeData = function () {
    let name = $('#nameInput').val().trim()
    let role = $('#roleInput').val().trim()
    let startDate = $('#startDateInput').val().trim()
    let rate = $('#rateInput').val().trim()

    // Store to firebase
    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      rate: rate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
  }

  this.employeesToTable = function (snapsot) {

    // Clear the table
    // Get from firebase

    dbEmployees.forEach(data => {

    });

  }

  $('#addButton').on('click', function () {
    self.storeData()
  })

  // This function allows you to update your page in real-time when the firebase database changes.
  database.ref().on('child_added', function (snapshot) {

    self.employeesToTable(snapshot)

    // If any errors are experienced, log them to console.
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

}
>>>>>>> d942641cd52cf7f012b476d0e40b5537abc74f5a
