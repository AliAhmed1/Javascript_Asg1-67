var modal = document.getElementById('modal');
var modalimg = document.getElementById('modal-img');

var arr = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.png"]
var imgarr = document.getElementsByTagName('img')
var x;
for (var i = 0; i < arr.length; i++) {
    imgarr[i].src = arr[i]
    // imgarr[i].setAttribute('class', 'format')
    // imgarr[i].setAttribute('onclick', 'onimage()')

    var img = imgarr[i];
    img.onclick = function() {
        modal.classList.add('modal-open');
        modal.classList.remove('modal-close');
        modalimg.style.height = "550px"
        modalimg.style.width = "700px"
        modal.style.display = "block"
        modalimg.src = this.src
        
    }
}

function onClosedImagModal() {
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');

    setTimeout(() => { modal.style.display = "none"; }, 550)
}