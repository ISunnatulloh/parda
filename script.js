window.addEventListener('load', function (e) {
    var left_button = document.querySelector('.btn .left');
    var right_button = document.querySelector('.btn .right');
    var box = document.querySelectorAll('.box');
    var i = 0
    left_button.addEventListener('click', function () {
        box[i].style.display = 'none'
        i++
        if (i >= box.length) {
            i = 0
        }
        box[i].style.display = 'flex'
    })
    right_button.addEventListener('click', function () {
        box[i].style.display = 'none'
        i--
        if (i < 0) {
            i = box.length - 1
        }
        box[i].style.display = 'flex'
    })

});