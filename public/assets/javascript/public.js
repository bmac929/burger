console.log("hello");


$("#form").on("submit", function (event) {
    event.preventDefault();

    var burger_name = $("#burgerName").val();
    var burgerInfo = { burger_name: burger_name }
    $.ajax({ url: "/api/burger", method: "POST", data: burgerInfo })

}).then(function () {
    console.log("worked");

})
