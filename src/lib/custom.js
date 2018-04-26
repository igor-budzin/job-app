export function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 5),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
    },5);
}
