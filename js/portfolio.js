document.addEventListener('DOMContentLoaded', () => {
    // Елементи для фільтрації
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Елементи модального вікна Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    // --- 1. Фільтрація за категоріями ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Видаляємо клас active з усіх кнопок і додаємо на натиснуту
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // --- 2. Відкриття Lightbox при кліку на фото ---
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgElement = item.querySelector('.gallery-img');
            if (imgElement) {
                lightboxImg.src = imgElement.src;
                lightboxImg.alt = imgElement.alt;
                lightbox.classList.add('active');
            }
        });
    });

    // --- 3. Закриття Lightbox ---
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    // Закриття при кліку поза зображенням
    if (lightbox) {
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }
});