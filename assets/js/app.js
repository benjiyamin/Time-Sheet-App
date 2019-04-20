function Application() {
  let self = this

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
    })
  }

  this.employeesToTable = function () {

    // Clear the table
    // Get from firebase
    
    dbEmployees.forEach(data => {
      
    });

  }

  $('#addButton').on('click', function () {
    self.storeData()
  })


}