    const themeButton = document.getElementById('themeButton');
    const htmlElement = document.getElementsByTagName('html')[0];
    
    themeButton.addEventListener('click', function() {
        if (htmlElement.getAttribute('data-bs-theme') === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeButton.innerHTML = '<i class="fa-solid fa-sun fa-xl themeButtonIcon text-light"></i>';
        } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeButton.innerHTML = '<i class="fas fa-moon fa-xl themeButtonIcon text-light""></i>';
        }
    });