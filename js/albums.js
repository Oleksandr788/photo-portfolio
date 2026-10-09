// Обробка форми доступу до приватних альбомів
document.addEventListener('DOMContentLoaded', () => {
    const accessForms = document.querySelectorAll('.album-card__access-form');

    accessForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Запобігаємо стандартній відправці форми

            const input = form.querySelector('.album-card__input');
            const messageDiv = form.nextElementSibling; // Блок для виводу повідомлень
            const correctPin = form.getAttribute('data-pin'); // Отримуємо PIN із атрибута

            // Перевірка введеного PIN-коду
            if (input.value === correctPin) {
                messageDiv.className = 'album-card__message success';
                messageDiv.textContent = 'Доступ надано! Перенаправлення до галереї...';
                
                // Симуляція переходу до приватного альбому
                setTimeout(() => {
                    alert('Успішний вхід! У реальному проєкті тут відкриється приватна галерея клієнта.');
                }, 500);
            } else {
                messageDiv.className = 'album-card__message error';
                messageDiv.textContent = 'Невірний PIN-код. Спробуйте ще раз.';
            }
        });
    });
});