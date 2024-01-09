window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {

    if (window.scrollY > sticky + 500) {

        header.style = "height: 35px; background-color: rgba(0, 0, 0, 0.801);"

    }
    else {

        header.style = "";

    }
}

function scrollToNextDiv(nextDiv) {

    if (nextDiv) {

        nextDiv.scrollIntoView({ behavior: 'smooth' });

    }
}
