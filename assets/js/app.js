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

  function monthsWorked(startDate){
    var arr = startDate.split("/");
    var startMonth=parseInt(arr[0]);
    var startYear=parseInt(arr[2]);
    var today = new Date();
    return ((today.getFullYear()-startYear)*12)+Math.abs(((today.getMonth()+1)-startMonth));
  }

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
    var tabr=$("<tr>"),
        tabd1=$("<td>"),
        tabd2=$("<td>"),
        tabd3=$("<td>"),
        tabd4=$("<td>"),
        tabd5=$("<td>"),
        tabd6=$("<td>");
    tabd1.text(snapshot.name);
    tabd2.text(snapshot.role);
    tabd3.text(snapshot.startDate);
    tabd4.text(monthsWorked(snapshot.startDate));
    tabd5.text(snapshot.rate);
    tabd6.text(monthsWorked(snapshot.startDate)*parseint(snapshot.rate));
    tabr.append(tabd1).append(tabd2).append(tabd3).append(tabd4).append(tabd5).append(tabd6);
    $(".table").append(tabr);
  };


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


  this.employeesToTable = function (childSnap) {

    // Clear the table
    // Get from firebase
    console.log(childSnap)

  }

  $('#addEmployee').on('click', function (event) {
    event.preventDefault()
    self.storeData()
  })

  // This function allows you to update your page in real-time when the firebase database changes.
  database.ref().on('child_added', function (snapshot) {

    let childSnap = snapshot.val()
    self.employeesToTable(childSnap)

    // If any errors are experienced, log them to console.
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

}
