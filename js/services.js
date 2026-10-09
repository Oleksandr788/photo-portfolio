document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Масив даних послуг (можна змінювати ціни, назви та описи тут) ---
    const servicesData = [
        {
            title: "Portrait Session",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
            description: "Індивідуальна портретна зйомка в студії або на локації. Акцент на природному світлі та вашій індивідуальності.",
            duration: "1.5 години",
            price: "250 $",
            link: "contact.html"
        },
        {
            title: "Family Story",
            image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
            description: "Затишна сімейна фотосесія під час прогулянки або вдома. Збережемо теплі моменти вашої родини.",
            duration: "2 години",
            price: "350 $",
            link: "contact.html"
        },
        {
            title: "Maternity Session",
            image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
            description: "Ніжна та вишукана фотосесія вагітності. Допомога з вибором образів та локації.",
            duration: "1.5 години",
            price: "300 $",
            link: "contact.html"
        },
        {
            title: "Commercial Shoot",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
            description: "Створення візуального контенту для брендів, лукбуків та каталожних зйомок.",
            duration: "За домовленістю",
            price: "Ціна за запитом",
            link: "contact.html"
        }
    ];

    // Відображення послуг на сторінці services.html
    const servicesContainer = document.getElementById('servicesContainer');

    if (servicesContainer) {
        servicesContainer.innerHTML = servicesData.map(service => `
            <div class="service-card">
                <img src="${service.image}" alt="${service.title}" class="service-card__img">
                <div>
                    <h3 class="service-card__title">${service.title}</h3>
                    <p class="service-card__desc">${service.description}</p>
                    <p class="service-card__meta"><strong>Тривалість:</strong> ${service.duration}</p>
                    <p class="service-card__price">${service.price}</p>
                </div>
                <a href="${service.link}" class="btn btn--outline" style="text-align: center; margin-top: 15px;">Book Now</a>
            </div>
        `).join('');
    }

    // --- 2. Валідація контактної форми (contact.html) ---
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Запобігаємо перезавантаженню сторінки

            let isValid = true;

            // Елементи форми
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const serviceSelect = document.getElementById('service');
            const formStatus = document.getElementById('formStatus');

            // Перевірка імені
            if (!nameInput.value.trim()) {
                setError(nameInput);
                isValid = false;
            } else {
                removeError(nameInput);
            }

            // Перевірка Email (за допомогою регулярного виразу)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                setError(emailInput);
                isValid = false;
            } else {
                removeError(emailInput);
            }

            // Перевірка вибору послуги
            if (!serviceSelect.value) {
                setError(serviceSelect);
                isValid = false;
            } else {
                removeError(serviceSelect);
            }

            // Якщо всі обов'язкові поля заповнені вірно
            if (isValid) {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Дякуємо! Ваша заявка успішно сформована та підготовлена до надсилання.';
                bookingForm.reset();
            }
        });
    }

    // Допоміжні функції для показу/приховування помилок
    function setError(element) {
        element.parentElement.classList.add('error');
    }

    function removeError(element) {
        element.parentElement.classList.remove('error');
    }
});