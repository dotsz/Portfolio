window.addEventListener('scroll', function() {
    var topNav = document.getElementById('top');
    var sideNav = document.getElementById('sideNav');
    var mainContent = document.querySelector('main');
    var topNavPosition = topNav.getBoundingClientRect();

    if (topNavPosition.top < 0) {
        // Top navigation is out of view, show side navigation
        sideNav.classList.remove('side-nav-hidden');
        sideNav.classList.add('side-nav-visible');
    } else {
        // Top navigation is in view, hide side navigation
        sideNav.classList.remove('side-nav-visible');
        sideNav.classList.add('side-nav-hidden');
        mainContent.style.marginLeft = '0';  // Reset margin
    }
});
