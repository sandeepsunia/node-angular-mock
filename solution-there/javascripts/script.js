var list;
$.ajax({
  type: "GET",
  url: '/users',
  async: false,
  success: function(data){
    list = data
  }
});

function Delete(object){
  var id = object.id
  $.ajax({
    type: "DELETE",
    url: '/users/'+ id,
    success: function(data){
      location.reload()
    }
  });
}

function Edit(object){
  var id = object.name
  var age = $(object).parent().parent().children("td:nth-child(2)").children().val()
  var name = $(object).parent().parent().children("td:nth-child(3)").children().val()
  var date = new Date()
  $.ajax({
    type: "PUT",
    url: '/users/'+ id,
    data:{
      id:id,
      name: name,
      age: age,
      date: date
    },
    success: function(data){
      location.reload()
    }
  });
}
function createNew() {
  var data = {name: $('#name').val(), age: $('#age').val()}
  $.ajax({
    type: "POST",
    url: '/users',
    data: data,
    success: function(data){
       location.reload()
    }
  });
}

function dateFormat(a){
  var d=new Date(a);
  var day = d.getDate();
  var monthIndex = d.getMonth();
  var year = d.getFullYear();
  return monthNames[monthIndex] + ' ' + day + ' ' + year
}

var monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "June", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];

function handleSearch() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
