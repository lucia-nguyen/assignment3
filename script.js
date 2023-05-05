function handleSubmit() {
  //.value nhận giá trị được điền vào, kiểm tra nếu nhập vào in hoa thì chuyển thành thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  //define lỗi xảy ra
  const emailError = document.getElementById("error-email-format");
  // hàm kiểm tra email (validate email for js) nguồn internet stackoverflow.com
  // const checkEmail =
  //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // Hàm kiểm tra email theo nguồn hướng dẫn
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("check email", emailValue);
  // dùng match kiểm tra có kết nối và đúng các điều kiện bên trên cho email hay không
  const checkEmail = emailValue.match(regex);
  console.log("checking email", checkEmail);

  // lấy thông tin cá nhân
  const personalDetail = document.querySelector("#personal-info .mt-40-info");
  console.log("check personal information", personalDetail);

  //lấy element để kiểm soát nút Submit
  const controlSubmitbtn = document.querySelector("email-submit");
  // console.log(controlSubmitbtn);

  if (checkEmail) {
    personalDetail.style.display = "block";
    controlSubmitbtn.style.display = "none";
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML = "please fill correct your email";
  }
}

// ẨN VÀ HIỆN THỊ THÔNG TIN CHO BUTTON VIEW MORE AND LESS MORE
// trỏ vào phần tử nào thì sẽ lấy phần tử đó
function handleOnMouseOver(mouseover) {
  const viewMore = mouseover.querySelector(".btn-view");
  // trả về trạng thái inlineBlock khi di chuyển chuột lên
  viewMore.querySelector("button").style.display = "inline-block";
}

//khi chuột di chuyển ra ngoài và đặt điều kiện so sánh
function handleOnMouseOut(mouseout) {
  const viewMore = mouseout.querySelector(".btn-view");
  if (viewMore.querySelector("button").style.display === "inline-block") {
    viewMore.querySelector("button").style.display = "none";
  }
}

// Khi chuột click vào View more thì trỏ về phần tử cha để show thông tin chi tiết
function ViewMoreClick(mouseclick) {
  const parentElement = mouseclick.closest(".section-parent");
  const viewMore = parentElement.querySelector(".btn-view button");
  // tìm ra section content
  const sectionContent = parentElement.querySelector(".section-content");

  if (sectionContent.classList.value.includes("d-none")) {
    sectionContent.classList.remove("d-none");
    viewMore.innerHTML = "View less";
  } else {
    sectionContent.classList.add("d-none");
    viewMore.innerHTML = "View more";
  }
}
