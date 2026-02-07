
var man = [
    {
        id: 1,
        name: "The Cosmo (Đen) Quần short khaki",
        price: "250.000",
        image: "https://znews-photo.zadn.vn/w660/Uploaded/ycmvjvi/2018_04_16/9_2.jpg"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng QQ",
        price: "398.000",
        image: "https://www.celeb.vn/wp-content/uploads/2017/10/ao-phong-thoi-trang-nam-4-554x800.jpg"
    },
    {
        id: 3,
        name: "The Cosmo (Đen) Quần short khaki",
        price: "300.000",
        image: "https://toplist.vn/images/800px/4men-shop-175469.jpg"
    },
    {
        id: 4,
        name: "The Cosmo (Đen) Quần short khaki",
        price: "300.000",
        image: "https://cdn.nhanh.vn/cdn/store/3138/albumCT/7046/dsc_3135.jpg"
    }
];

var woment = [
    {
        id: 1,
        name: "Váy Fashion",
        price: "250.000",
        image: "https://luzy.vn/wp-content/uploads/2019/02/1zd9078-3.jpg"
    },
    {
        id: 2,
        name: "Áo thun phối váy ngắn",
        price: "398.000",
        image: "https://gumac.vn/image/thang919/at75-do050920191344211605.jpg?width=220"
    },
    {
        id: 3,
        name: "Áo khoác",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6Ytt2NITTyvN8NhtufxJmusBY2ehUhQkNLzQOTss_JACc9RB"
    },
    {
        id: 4,
        name: "Áo thun",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcO6uZzcUSHh9GEO8zvgMWIbdugSLHInfa3gJdGhGpbHCQ0FWSK9"
    }
];


function initPage() {
    document.getElementById("women-section").style.display = "block";
    document.getElementById("men-section").style.display = "none";
    listProducts();
}


function listProducts() {

    document.getElementById("men").innerHTML = "";
    document.getElementById("woment").innerHTML = "";


    for (let i = 0; i < man.length; i++) {
        var html = `
        <div class="col-md-3">
            <div class="card">
                <img src="${man[i].image}" class="card-img-top">
                <div class="card-body text-center">
                    <h5 class="card-title">${man[i].name}</h5>
                    <p class="price">${man[i].price} VND</p>
                    <button class="btn btn-primary" onclick="order()">Đặt mua</button>
                </div>
            </div>
        </div>`;
        document.getElementById("men").innerHTML += html;
    }

    
    for (let i = 0; i < woment.length; i++) {
        var html = `
        <div class="col-md-3">
            <div class="card">
                <img src="${woment[i].image}" class="card-img-top">
                <div class="card-body text-center">
                    <h5 class="card-title">${woment[i].name}</h5>
                    <p class="price">${woment[i].price} VND</p>
                    <button class="btn btn-danger" onclick="order()">Đặt mua</button>
                </div>
            </div>
        </div>`;
        document.getElementById("woment").innerHTML += html;
    }
}


function showMen() {
    document.getElementById("men-section").style.display = "block";
    document.getElementById("women-section").style.display = "none";
}

function showWomen() {
    document.getElementById("women-section").style.display = "block";
    document.getElementById("men-section").style.display = "none";
}


function order() {
    alert("Cảm ơn bạn đã đặt hàng!");
}
