// Mobile navigation, current year and copy-email button.

const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');

if (menu && nav) {

    menu.addEventListener('click', () => {

        const open =
            menu.getAttribute('aria-expanded') !== 'true';

        menu.setAttribute(
            'aria-expanded',
            String(open)
        );

        nav.classList.toggle(
            'open',
            open
        );

    });

    nav.querySelectorAll('a').forEach((link) => {

        link.addEventListener('click', () => {

            menu.setAttribute(
                'aria-expanded',
                'false'
            );

            nav.classList.remove('open');

        });

    });

}


// Automatic copyright year

const year =
    document.getElementById('year');

if (year) {
    year.textContent =
        new Date().getFullYear();
}


// Copy email address

const copyEmail =
    document.getElementById('copy-email');

const copyStatus =
    document.getElementById('copy-status');

if (copyEmail && copyStatus) {

    copyEmail.addEventListener(
        'click',
        async () => {

            const email =
                'malikmanas001@gmail.com';

            try {

                await navigator.clipboard.writeText(
                    email
                );

                copyStatus.textContent =
                    'Email address copied.';

            } catch {

                copyStatus.textContent =
                    `Email: ${email}`;

            }

        }
    );

}
