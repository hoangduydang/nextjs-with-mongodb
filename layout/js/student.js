$(document).ready(function () {
    loadData();
})

function loadData() {
    $.ajax({
        url: "http://localhost:3000/api/v1/students",
        method: "GET",
        // data: "",
        // contentType: "application/json",
        // dataType: ""
    }).done(function (response) {
        alert("here");
        $('.grid-data').empty();
        $.each(response, function (index, item) {
            var trHTML = $(`<tr>
                                <th scope="row">${index + 1}</th>
                                <td>${item._id}</td>
                                <td>${item.name}</td>
                                <td>${item.birthDate}</td>
                                <td>
                                    <a href="update.html">Edit</a>
                                    <a>Delete</a>
                                </td>
                            </tr>`)
            $('.grid-data').append(trHTML);
        })
    }).fail(function (response) {
        alert("error");
    })
}

// function loadData(){
//     var request = new XMLHttpRequest();
//     var params = "action=something";
//     request.open('POST', 'http://localhost:3000/api/v1/students', true);
//     request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
//     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     request.setRequestHeader("Content-length", params.length);
//     request.setRequestHeader("Connection", "close");
//     request.send(params);
// }

// function loadData(){
//     const userAction = async () => {
//         const response = await fetch('http://localhost:3000/api/v1/students');
//         const myJson = await response.json(); //extract JSON from the http response
//         // do something with myJson
//       }
// }

// function loadData()  {
//     // Call fetch(url) with default options.
//     // It returns a Promise object:
//     var aPromise = fetch('http://localhost:3000/api/v1/students');
  
//     // Work with Promise object:
//     aPromise
//       .then(function(response) {
//           console.log("OK! Server returns a response object:");
//           console.log(response);
//           if(!response.ok) {
//              throw new Error("HTTP error, status = " + response.status);
//           }
//           // Get JSON Promise from response object:
//           var myJSON_promise = response.json();
  
//           // Work with Promise object:
//           myJSON_promise.then(function(myJSON)  {
//             console.log("OK! JSON:");
//             console.log(myJSON);
//           })
//       })
//       .catch(function(error)  {
//           console.log("Noooooo! Something error:");
//           console.log(error);
//       });
//   }



