
var arr = JSON.parse(localStorage.getItem("productList")) || [];

function save() {
    var name = document.getElementById("name").value.trim();
    var id = document.getElementById("id").value.trim();
    var prdname = document.getElementById("prdname").value.trim();
    var qty = document.getElementById("qty").value.trim();
    var price = document.getElementById("price").value.trim();

    
    if (name === "" || id === "" || prdname === "" || qty === "" || price === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (isNaN(qty) || isNaN(price)) {
        alert("Quantity and Price must be numbers!");
        return;
    }

    var product = {
        name: name,
        id: id,
        prdname: prdname,
        qty: parseFloat(qty),
        price: parseFloat(price)
    };

    arr.push(product);

    
    localStorage.setItem("productList", JSON.stringify(arr));

    alert("Saved successfully!");
    reset();
}


function show() {
    var html = "";

    for (var i = 0; i < arr.length; i++) {
        var amount = arr[i].qty * arr[i].price;

       
        var discount = amount * 0.15;
        var total = amount - discount;

        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + arr[i].name + "</td>";
        html += "<td>" + arr[i].id + "</td>";
        html += "<td>" + arr[i].prdname + "</td>";
        html += "<td>" + arr[i].qty + "</td>";
        html += "<td>" + arr[i].price + "</td>";
        html += "<td>" + discount.toFixed(1) + "</td>";
        html += "<td>" + amount.toFixed(1) + "</td>";
        html += "<td>" + total.toFixed(1) + "</td>";
        html += "</tr>";
    }

    document.getElementById("tbl").innerHTML = html;
}


function reset() {
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("prdname").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
}


window.onload = function () {
    show();
};
