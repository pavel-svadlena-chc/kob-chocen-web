function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Zavření modalu kliknutím mimo obrázek
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}