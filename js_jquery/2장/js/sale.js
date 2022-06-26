function showPrice(){
    var oPrice = document.querySelector("#originalPrice").value;
    var rate = document.querySelector("#discount").value;
    
    // 두 변수가 0 이상이라면
    if (oPrice > 0 && rate > 0) {
        var savedPrice = oPrice*(rate/100);
        var resultPrice = oPrice - savedPrice;
    }

    document.querySelector("#showResult").innerHTML = "상품의 원래 가격은" + oPrice + "원이고, 할인율은" + rate + "%입니다."
}