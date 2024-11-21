function toggleMenu() {
    var menu = document.querySelector('.options');
    var overlay = document.querySelector('.overlay');

    if (menu.style.left === '0px') {
        menu.style.left = '-250px';
        overlay.style.display = 'none';
    } else {
        menu.style.left = '0px';
        overlay.style.display = 'block';
    }
}


function closeMenu() {
    var menu = document.querySelector('.options');
    var overlay = document.querySelector('.overlay');

    menu.style.left = '-250px';
    overlay.style.display = 'none';
}



function openMenuItem(menuId, cardIndex) {
    // Hide all menus
    document.querySelectorAll('.menu').forEach(function(menu) {
        menu.style.display = 'none';
    });

    // Remove 'clicked' class from all image-cards
    document.querySelectorAll('.image-card.clicked').forEach(function(card) {
        card.classList.remove('clicked');
    });

    // Close the options menu
    closeMenu();

    // Show the selected menu
    var selectedMenu = document.getElementById(menuId);
    if (selectedMenu) {
        selectedMenu.style.display = 'block';

        // Delay the scroll to ensure the menu is displayed before scrolling
        setTimeout(function() {
            // Determine the correct row and card index
            var totalImages = 14; // Change this number based on your actual total images
            var clickedCardIndex = (cardIndex % totalImages + totalImages) % totalImages; // Ensure the index is within the range

            var rowNumber = Math.floor(clickedCardIndex / 7) + 1;
            var cardIndexInRow = clickedCardIndex % 7;

            // Select the correct row and card based on the calculated indices
            var clickedRow = 'row' + rowNumber;
            var clickedCard = document.querySelector('#' + clickedRow + ' .image-card:nth-child(' + (cardIndexInRow + 1) + ')');
            clickedCard.classList.add('clicked');

            // Automatically scroll to the opened menu section
            selectedMenu.scrollIntoView({ behavior: 'smooth' });
        }, 1000); // You can adjust the delay if needed
    }
}





function showMenu(menuId, cardIndex) {
    // Hide all menus
    document.querySelectorAll('.menu').forEach(function(menu) {
        menu.style.display = 'none';
    });

    // Remove 'clicked' class from all image-cards
    document.querySelectorAll('.image-card.clicked').forEach(function(card) {
        card.classList.remove('clicked');
    });

    // Show the selected menu
    var selectedMenu = document.getElementById(menuId);
    selectedMenu.style.display = 'block';

    // Add 'clicked' state to the current card
    var totalImages = 14; // Change this number based on your actual total images
    var clickedCardIndex = (cardIndex % totalImages + totalImages) % totalImages; // Ensure the index is within the range

    // Determine the correct row and card index
    var rowNumber = Math.floor(clickedCardIndex / 7) + 1;
    var cardIndexInRow = clickedCardIndex % 7;

    // Select the correct row and card based on the calculated indices
    var clickedRow = 'row' + rowNumber;
    var clickedCard = document.querySelector('#' + clickedRow + ' .image-card:nth-child(' + (cardIndexInRow + 1) + ')');
    clickedCard.classList.add('clicked');

    // Automatically scroll to the opened menu section
    selectedMenu.scrollIntoView({ behavior: 'smooth' });
}




//JavaScript for automatic background image rotation

document.addEventListener("DOMContentLoaded", function () {
    var images = ['images/image1.jpeg', 'images/image2.jpeg' , 'images/image3.jpeg' ,'images/image4.jpeg','images/image5.jpeg','images/image6.jpeg']; // Replace with your actual image URLs
    var currentIndex = 0;
    var backgroundContainer = document.getElementById('background-container');

    function changeBackground() {
        var img = new Image();
        img.src = images[currentIndex];
        img.onload = function () {
            backgroundContainer.classList.add('zoom-effect');
            setTimeout(function () {
                backgroundContainer.style.backgroundImage = 'url(' + img.src + ')';
                currentIndex = (currentIndex + 1) % images.length;
                backgroundContainer.classList.remove('zoom-effect');
            }, currentIndex === 0 ? 300 : 1000); // Change background every 3 seconds for the first image, and 5 seconds for others
        };
    }

    // Preload the first image
    var firstImage = new Image();
    firstImage.src = images[0];

    // Set initial background image to 'images/img1.jpg' immediately
    backgroundContainer.style.backgroundImage = 'url(/static/images/img5.jpeg)';

    // Start the image-changing process after a short delay
    setTimeout(function () {
        setInterval(changeBackground, 5000); // Change background every 5 seconds for subsequent images
        changeBackground(); // Load the first image immediately
    }, 500); // Wait for 0.5 seconds before starting the image change effect
});





