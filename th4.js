//=========================MAIN================================
window.addEventListener("load", function () {
  const cartHeader = document.querySelector(".cart-shopping");
  //Search
  const fromSearch = document.querySelector(".form-search");
  const inputSearch = document.querySelector(".search-input");
  fromSearch.addEventListener("submit", handleSearch);
  function handleSearch(e) {
    if (inputSearch.value === "") {
      e.preventDefault();
      alert("bạn chưa nhập gì!!");
    }
  }

  cartHeader.addEventListener("click", function (e) {
    window.location.href = "donhang.html";
  });

  function scrollToTop() {
    // Scroll to top logic
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  var scroll = document.querySelector(".scoll");
  scroll.addEventListener("click", scrollToTop);
});

//=========================DANG NHAP================================
//DOMContentLoaded
window.addEventListener("DOMConentLoaded", function () {
  const form = document.querySelector(".login-form");
  const inputEmail = document.querySelector(".email");
  const inputPwd = document.querySelector(".password");

  let isEmail = false;
  let isPassword = false;

  let valuePass;

  function checkForm() {
    inputEmail.addEventListener("input", function (e) {
      const value = e.target.value;
      //console.log(value);
      const regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (regex.test(value.trim())) {
        this.classList.add("valid");
        this.classList.remove("invalid");
        isEmail = true;
      } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
        isEmail = false;
      }
      if (!value) {
        this.classList.remove("invalid");
        isEmail = false;
      }
    });
    inputPwd.addEventListener("change", function (e) {
      valuePass = e.target.value;
      // console.log(valuePass);
      if (valuePass.length > 7) {
        this.classList.add("valid");
        this.classList.remove("invalid");
        isPassword = true;
      } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
        isPassword = false;
      }
      if (!valuePass) {
        this.classList.remove("invalid");
        isPassword = false;
      }
      if (!isPassword) {
        alert("mật khẩu ít nhất 8 kí tự");
      }
    });
  }

  checkForm();
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (isEmail && isPassword) {
      console.log("submit");
      // console.log(valuePass);
      this.submit();
      this.reset();
      alert("đăng nhập thành công");
    } else {
      this.reset();
      alert("đăng nhập thất bại");
    }
  });
});

//=========================DANG KY================================
window.addEventListener("DOMConentLoaded", function () {
  const form = document.querySelector(".register-form");
  const inputEmail = document.querySelector(".email");
  const inputPwd = document.querySelector(".password");
  const inputCpwd = document.querySelector(".c-password");

  //console.log(inputCpwd);

  let isEmail = false;
  let isPassword = false;
  let isPasswordRepeat = false;

  let valuePass;

  function checkForm() {
    inputEmail.addEventListener("input", function (e) {
      const value = e.target.value; 
      //console.log(value);
      const regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (regex.test(value.trim())) {
        this.classList.add("valid");
        this.classList.remove("invalid");
        isEmail = true;
      } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
        isEmail = false;
      }
      if (!value) {
        this.classList.remove("invalid");
        isEmail = false;
      }
    });
    inputPwd.addEventListener("change", function (e) {
      valuePass = e.target.value;
      // console.log(valuePass);
      if (valuePass.length > 7) {
        this.classList.add("valid");
        this.classList.remove("invalid");
        isPassword = true;
      } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
        isPassword = false;
      }
      if (!valuePass) {
        this.classList.remove("invalid");
        isPassword = false;
      }
      if (!isPassword) {
        alert("mật khẩu ít nhất 8 kí tự");
      }
    });
    inputCpwd.addEventListener("input", function (e) {
      const value = e.target.value;
      // console.log(valuePass);

      if (value === valuePass) {
        this.classList.add("valid");
        this.classList.remove("invalid");
        isPasswordRepeat = true;
      } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
        isPasswordRepeat = false;
      }
      if (!value) {
        this.classList.remove("invalid");
        isPassword = false;
      }
    });
  }

  checkForm();
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (isEmail && isPassword && isPasswordRepeat) {
      console.log("submit");
      // console.log(valuePass);
      this.submit();
      this.reset();

      alert("đã đăng kí thành công");
    } else {
      this.reset();
      alert("đã đăng kí thất bại");
    }
  });
});

//=========================LIEN HE================================
window.addEventListener("DOMConentLoaded", function () {
  const form = document.querySelector(".contact__form");
  const inputEmail = document.querySelector(".email");
  const inputName = document.querySelector(".name-cus");
  const content = document.querySelector(".content");

  //console.log(inputCpwd);

  let isEmail = false;
  let isPassword = false;
  let isContent = false;

  let valuePass;

  function checkForm() {
    inputEmail.addEventListener("input", function (e) {
      const value = e.target.value;
      //console.log(value);
      const regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (regex.test(value.trim())) {
        this.classList.add("valid");
        this.classList.remove("invalid");
        isEmail = true;
      } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
        isEmail = false;
      }
      if (!value) {
        this.classList.remove("invalid");
        isEmail = false;
      }
    });
    inputName.addEventListener("change", function (e) {
      valuePass = e.target.value;
      console.log(valuePass);
      if (valuePass.length > 7) {
        this.classList.add("valid");
        this.classList.remove("invalid");
        isPassword = true;
      } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
        isPassword = false;
      }
      if (!valuePass) {
        this.classList.remove("invalid");
        isPassword = false;
      }
      if (!isPassword) {
        alert("tên ít nhất 7 kí tự");
      }
    });
    content.addEventListener("change", function (e) {
      const value = e.target.value;
      console.log(value);
      if (value.length >= 20) {
        this.classList.add("valid");
        this.classList.remove("invalid");
        isContent = true;
      } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
        isContent = false;
      }
      if (!valuePass) {
        this.classList.remove("invalid");
        isContent = false;
      }
      if (!isContent) {
        alert("nội dung ít nhất 20 kí tự");
      }
    });
  }

  checkForm();
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (isEmail && isPassword && isContent) {
      console.log("submit");
      this.submit();
      this.reset();

      alert("Gửi phản hồi thành công");
    } else {
      this.reset();
      alert("Gửi phản hồi thất bại");
    }
  });
});

//=========================SAN PHAM================================
const product = document.querySelectorAll(".product-item");

const items = [
  {
    id: 1,
    name: "Sữa Chua Vị Kiwi",
    title:
      "Hương vị thơm ngon của trái Kiwi xanh, nổi tiếng của đất nước New ZeaLand có trong Sữa chua vị Kiwi xanh đem đến một món ăn nhẹ Siêu ngon và tốt cho hệ tiêu hóa.",
    price: 21000,
    photo: "./images/sanpham/kiwi.jpg",
  },
  {
    id: 2,
    name: "Sữa Chua Vị Xoài",
    title:
      "Sữa chua xoài thích hợp cho mọi lứa tuổi, vì vậy hãy để cả gia đình quây quần bên nhau cùng thưởng thức món ăn thơm ngon, bổ dưỡng này.",
    price: 22000,
    photo: "./images/sanpham/mango.jpg",
  },
  {
    id: 3,
    name: "Sữa Chua Vị Dưa Lưới",
    title:
      "Trong dưa lưới chứa rất nhiều vitamin C có tác dụng làm đẹp da hiệu quả. Phụ nữ ăn sinh tố dưa lưới thường xuyên sẽ có làn da mịn màng.",
    price: 23000,
    photo: "./images/sanpham/cantaloupe.jpg",
  },
  {
    id: 4,
    name: "Sữa Chua Vị Mâm Xôi",
    title:
      "Quả mâm xôi là loại quả họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng",
    price: 24000,
    photo: "./images/sanpham/blackberry.jpg",
  },
  {
    id: 5,
    name: "Sữa Chua Vị Dâu Tây",
    title:
      "Dâu tây là một loại cây thân thảo có thân ngắn và các chiếc lá mọc gần với nhau. Lá có nhiều gai, bề mặt lá có nhiều lông tơ và kích thước lá có thể khác nhau ở từng giống.",
    price: 25000,
    photo: "./images/sanpham/strawberry.jpg",
  },
  {
    id: 6,
    name: "Sữa Chua Vị Việt Quất",
    title:
      "Quả việt quất chứa các dưỡng chất tốt cho sức khỏe như chất xơ, kali, folate, vitamin C và vitamin B6 (những chất hỗ trợ rất tốt cho sức khỏe của tim).",
    price: 26000,
    photo: "./images/sanpham/blueberry.jpg",
  },
  {
    id: 7,
    name: "Sữa Chua Vị Bưởi",
    title:
      "Bưởi là một loại quả thuộc chi Cam chanh có nguồn gốc từ Đông Nam Á. Bưởi tiếng Anh gọi là Pomelo, tuy nhiên nhiều từ điển ở Việt Nam lại dịch thành grapefruit.",
    price: 27000,
    photo: "./images/sanpham/grapes.jpg",
  },
  {
    id: 8,
    name: "Sữa Chua Vị Táo Xanh",
    title:
      "Táo xanh có hàm lượng chất xơ cao giúp tăng cường quá trình trao đổi chất của cơ thể. Bên cạnh đó chất xơ còn giúp quá trình giải độc gan và hệ tiêu hóa.",
    price: 28000,
    photo: "./images/sanpham/strawberry.jpg",
  },
  {
    id: 9,
    name: "Sữa Chua Vị Dứa",
    title:
      "Dứa có tên gọi khác như là khóm, thơm, khớm, gai hoặc huyền nương. Đây là một loại quả nhiệt đới. Dứa là cây bản địa của các nước Nam Mỹ.",
    price: 29000,
    photo: "./images/sanpham/kiwi.jpg",
  },
];

//console.log(items);

function renderItem(item) {
  const template = `
            <div class="item">
            <img class="trad__prod__item__image product__img" data-id=${
              item.id
            } src="${item.photo}" alt="${item.name}">
            <h2 class="trad__prod__item__title brand-color product__header-center">${
              item.name
            }</h2>
            <p class="trad__prod__item__desc product-title">${item.title}
                <a href="">Xem chi tiết</a>
            </p>
            <span>Giá:</span>
            <span class="price" name="price"><strong>${
              Intl.NumberFormat("vi-VN").format(item.price) + " đ"
            }</strong></span>
            <div class="trad__prod__item__qty gradient">
                <label for="">Số Lượng:</label>
                <input type="number" class="number" data-id=${
                  item.id
                } min="1" max="100" size="3" placeholder="1" >
                <button onclick="addCart(${
                  item.id
                })" type="submit" class="submit"> Đặt hàng</button>
            </div>
        `;
  return template;
}

for (let i = 0; i < product.length; i++) {
  const item = items[i];
  product[i].insertAdjacentHTML("afterend", renderItem(item));
  //product[i].innerHTML = renderItem(item);
}

function itemCartObject(id, name, price, photo, number) {
  var itemCart = new Object();
  itemCart.id = id;
  itemCart.name = name;
  itemCart.price = price;
  itemCart.photo = photo;
  itemCart.number = number;
  return itemCart;
}

var key = "itemsCart";
function getItemCart() {
  itemsCart =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem(key)) : [];
  return itemsCart;
}

function saveLocal(list) {
  localStorage.setItem(key, JSON.stringify(list));
}

function addCart(id) {
  var input = document.querySelectorAll(".number");
  var number = 1;
  for (var i = 0; i < input.length; i++) {
    if (input[i].value) {
      number = parseInt(input[i].value);
      if (number > 100 || number < 0) {
        alert("Số lượng từ 1 - 100");
        return;
      }
    }
    input[i].value = "";
  }

  var itemsCart = getItemCart();
  var exsistItem = false;
  for (var i = 0; i < itemsCart.length; i++) {
    var item = itemsCart[i];
    if (item.id == id) {
      item.number += number;
      if (item.number > 100) {
        alert("Số lượng sản phẩm trong giỏ hàng đã hơn 100");
        return;
      }
      exsistItem = true;
    }
  }

  if (exsistItem == false) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].id == id) {
        var itemCart = itemCartObject(
          id,
          items[i].name,
          items[i].price,
          items[i].photo,
          number
        );
      }
    }
    itemsCart.push(itemCart);
  }

  alert("Đặt hàng thành công, sản phẩm đã trong giỏ hàng!!");
  saveLocal(itemsCart);
}

//=========================DON HANG================================

window.addEventListener("load", function () {
  const tbody = document.querySelector(".tbody");
  const total = document.querySelector(".money-total");
  const moneyDis = document.querySelector(".money-dis");
  const moneyTax = document.querySelector(".money-tax");
  const moneyOrder = document.querySelector(".money-order");

  function formatMoney(num) {
    return Intl.NumberFormat("vi-VN").format(num) + " đ";
  }

  function renderItem(item) {
    var template = "";
    template += `
      <tr rowspan="3">
          <td class="col-1 td">
              <img src="${item.photo}" alt="">
          </td>
          <td class="col-2 td ">${item.name}</td>
          <td class="col-2 td">${item.number}</td>
          <td class="col-2 td">${formatMoney(item.price)}</td>
          <td class="col-2 td">${formatMoney(item.number * item.price)}</td>
          <td class="col-2 td" data-id=${
            item.id
          }><i class="icon fas fa-trash-alt"></i></td>
      </tr>
    `;
    if(tbody)
      tbody.innerHTML += template;
  }

  window.onstorage = () => {
    renderCart();
  };

  function renderCart() {
    itemsCart = getItemCart();
    //console.log(itemsCart);
    if(tbody) 
      tbody.innerHTML = "";
    if (Array.isArray(itemsCart) && itemsCart.length > 0) {
      [...itemsCart].forEach((item) => {
        renderItem(item);
        Money();
      });
    }
  }
  renderCart();

  function Money() {
    if (Array.isArray(itemsCart) && itemsCart.length > 0) {
      let sum = 0;
      [...itemsCart].forEach((item) => {
        sum += item.number * item.price;
        //console.log(item);
      });

      total.textContent = formatMoney(sum);
      moneyDis.textContent = formatMoney(sum * 0.1);
      moneyTax.textContent = formatMoney(0.1 * (sum - sum * 0.1));
      moneyOrder.textContent = formatMoney(
        sum - sum * 0.1 + 0.1 * (sum - sum * 0.1)
      );
    } else if (itemsCart.length < 1) {
      total.textContent = "0 đ";
      moneyDis.textContent = "0 đ";
      moneyTax.textContent = "0 đ";
      moneyOrder.textContent = "0 đ";
    }
  }

  tbody.addEventListener("click", function (e) {
    if (e.target.matches(".icon")) {
      // console.log(e.target.parentNode.parentNode);
      //remove DOM
      const item = e.target.parentNode.parentNode;

      this.removeChild(item);

      //remove localstroge
      let indexItem = +e.target.parentNode.dataset.id;

      const index = itemsCart.map((item) => item.id === indexItem);
      //console.log(itemsCart);
      itemsCart.splice(index, 1);
      saveLocal(itemsCart);
      Money();
    }
  });
});

//=========================JQUERY================================
$(function () {
  //console.log($("main").position().left);
  var d = new Date();
  var ads =
    "Khách hàng có ngày sinh trong tháng " +
    d.getMonth() +
    " sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng.";

  $("footer").append(
    "<div id='adscontainer'><span id='adstext'><h2>" +
      ads +
      "</h2></span></div>"
  );

  var W = $(window).width() - $("main").width();

  function adsVerEffect() {
    $("#adscontainer").addClass(["adsvercontainer", "container"]);
    $("#adscontainer").css("width", function () {
      return W;
    });
    $("#adstext").addClass(["adsvertext", "adstext"]);
    $("#adstext").css("top", $("#adscontainer").height());
    $("#adstext").animate(
      { top: $("#adscontainer").width() },
      10000,
      function () {
        adsVerEffect();
      }
    );
  }

  function adsHorEffect() {
    $("#adscontainer").addClass(["adshorcontainer", "container"]);
    $("#adscontainer").css("left", function () {
      return $("main").position().left;
    });
    $("#adstext").css("left", function () {
      return $("main").position().left;
    });
    $("#adscontainer").css("width", function () {
      return $("main").width();
    });
    $("#adstext").addClass(["adsvertext", "adstext"]);
    $("#adstext").animate(
      { left: $("#adscontainer").width() },
      10000,
      function () {
        adsHorEffect();
      }
    );
  }

  if (W >= 200) {
    adsVerEffect();
  } else {
    adsHorEffect();
  }

  const headlineContent = [
    {
      title: "Bánh flan sữa chưa - sự kết hợp hoàn hảo",
      photo: "./images/headline1.jpg",
    },
    {
      title: "Sữa chua làm từ sữa dê - đậm đà hương vị khó quên",
      photo: "./images/headline2.jpg",
    },
    {
      title: "Thưởng thức sữa chua theo cách của bạn",
      photo: "./images/headline3.jpg",
    },
  ];

  function renderTemplate(item) {
    var headline = document.querySelector("#headline");
    var template = "";
    template += `
        <div id="content">
        <img src="${item.photo}" alt="">
        <span title="">
            <h3>${item.title}</h3>
        </span>
      </div>
    `;
    headline.innerHTML += template;
  }

  function renderHeadline() {
    //console.log(itemsCart);
    if (Array.isArray(headlineContent) && headlineContent.length > 0) {
      [...headlineContent].forEach((item) => {
        renderTemplate(item);
      });
    }
  }

  renderHeadline();

  //console.log($("#headline div:first-child"));
   // $("#headline div:first-child").hide(0);
    $("#headline div:first-child + div").hide(0)
    $("#headline div:last-child").hide(0);

  var myFnc = function () {
      $("#headline div:first-child").fadeOut(1500, function(){
          $("#headline div:first-child + div").fadeIn(1500);
      });
  };
  setInterval(myFnc, 3000);
});