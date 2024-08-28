// JavaScript to add simple interactivity

// Example: Change background color on button click
document.addEventListener('DOMContentLoaded', function () {
    const changeColorButton = document.getElementById('changeColor');
    
    if (changeColorButton) {
        changeColorButton.addEventListener('click', function () {
            document.body.style.backgroundColor = '#e0f7fa';
        });
    }
});
