let header;

function init() {
    header = document.querySelector(".before");
    setTimeout(() => {
        header.className = "header after";
        setTimeout(() => {
            headerScroll();
        }, 500);
    }, 500)

}

function headerScroll() {
    if (window.scrollY == 0) {
        header.className = "header after";
    } else {
        header.className = "header before";
    }

    setTimeout(() => {
        headerScroll();
    }, 50);
}