// Funkcja do inicjalizacji mega-menu
function initMegaMenu() {
    const menuItems = document.querySelectorAll('.menu-item');

    // Dodajemy obsługę zdarzeń dla każdego elementu menu
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (event) => {
            event.stopPropagation();

            const currentMenuItem = event.currentTarget;
            const isActive = currentMenuItem.classList.contains('active');

            // Zwijamy wszystkie aktywne elementy menu
            menuItems.forEach((item) => {
                item.classList.remove('active');
                item.classList.remove('active-parent');
            });

            // Jeśli aktualny element menu nie jest aktywny, oznaczamy go jako aktywny
            if (!isActive) {
                currentMenuItem.classList.add('active');

                // Oznaczamy wszystkie rodzicowskie elementy aktualnego elementu menu jako aktywne
                let parentMenuItem = currentMenuItem.parentElement.parentElement;
                while (parentMenuItem.classList.contains('menu-item')) {
                    parentMenuItem.classList.add('active-parent');
                    parentMenuItem = parentMenuItem.parentElement.parentElement;
                }
            }
        });
    });
}

// Wywołujemy funkcję inicjalizacji mega-menu po załadowaniu strony
document.addEventListener('DOMContentLoaded', initMegaMenu);


