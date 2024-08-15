document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const row = this.getAttribute('data-row');
        const side = this.classList.contains('left-btn') ? 'left-btn' : 'right-btn';
        
        // Deselect the opposite side's button on the same row
        const oppositeSide = side === 'left-btn' ? 'right-btn' : 'left-btn';
        const oppositeButton = document.querySelector(`.${oppositeSide}[data-row='${row}']`);
        oppositeButton.classList.remove('selected');
        
        // Toggle selection on the clicked button
        this.classList.toggle('selected');
    });
});
