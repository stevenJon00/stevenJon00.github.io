// 獲取所有按鈕元素
var buttons = document.querySelectorAll("#sidebar button");

// 為每個按鈕元素添加單擊事件監聽器
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // 獲取 data-target 屬性的值
    var target = this.getAttribute("data-target");
    
    // 顯示目標 main 部分，隱藏其他 main 部分
    var contents = document.querySelectorAll("#main .content");
    for (var j = 0; j < contents.length; j++) {
      if (contents[j].id === target) {
        contents[j].style.display = "block";
      } else {
        contents[j].style.display = "none";
      }
    }
  });
}

var loginBtn = document.querySelector("header button");
loginBtn.addEventListener("click", function() {
  var username = document.querySelector("header input[type='text']").value;
  var password = document.querySelector("header input[type='password']").value;
  // TODO: 將用戶輸入的帳號和密碼進行驗證，並執行相應操作
});

var dropdownBtns = document.querySelectorAll("#sidebar button");
for (var i = 0; i < dropdownBtns.length; i++) {
  dropdownBtns[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("show");
  });
}
