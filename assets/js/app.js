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

  this.employeeToTable = function (empData) {
    let months = Math.max(moment().diff(empData.startDate, "months"), 0)
    var tabr = $("<tr>"),
      tabd1 = $("<td>"),
      tabd2 = $("<td>"),
      tabd3 = $("<td>"),
      tabd4 = $("<td>"),
      tabd5 = $("<td>"),
      tabd6 = $("<td>");
    tabd1.text(empData.name);
    tabd2.text(empData.role);
    tabd3.text(empData.startDate);
    tabd4.text(months);
    tabd5.text(empData.rate);
    tabd6.text(months * parseInt(empData.rate));
    tabr.append(tabd1).append(tabd2).append(tabd3).append(tabd4).append(tabd5).append(tabd6);
    $(".table").append(tabr);
  };

  $('#addEmployee').on('click', function (event) {
    event.preventDefault()
    self.storeData()
  })

  database.ref().once("value").then(function (snapshot) {
    $('#tableData').empty()
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();
      self.employeeToTable(childData)
    });
  })

  // This function allows you to update your page in real-time when the firebase database changes.
  database.ref().orderByChild('dateAdded').limitToLast(1).on('child_added', function (snapshot) {

    let childData = snapshot.val()
    self.employeeToTable(childData)

    // If any errors are experienced, log them to console.
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

}
