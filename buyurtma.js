window.addEventListener('load', function (e) {
    var phone = document.querySelector('.phone')
    var phone_btn = document.querySelector('.phone_btn');
    $(phone_btn).click(function (e) {
        console.log(phone);
        tel = phone.value
        e.preventDefault();
        if (tel == Number) {
            alert(true)
        }
        else{
            alert(false)
        }
    });
});