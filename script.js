//Script for BacktoTop Button Fade

window.onscroll = function () {
    toggleButtonVisibility();
    };

    function toggleButtonVisibility() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {        
        document.getElementById("totop").classList.add("visible");
    } else {
        document.getElementById("totop").classList.remove("visible");
    }
    };