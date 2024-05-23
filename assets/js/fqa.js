const faqItemHeads = document.querySelectorAll('.faq-item-head');

faqItemHeads.forEach((head) => {
    head.addEventListener('click', () => {
        let icon = head.querySelector('.faq-item-icon i');
        let body = head.nextElementSibling;

        if (body.classList.contains('show')) {
            body.classList.remove('show');
            icon.className = 'bx bx-chevron-down';
        } else {
            body.classList.add('show');
            icon.className = 'bx bx-chevron-up';
        }
    });
});
