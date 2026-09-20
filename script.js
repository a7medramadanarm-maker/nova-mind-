Enterdocument.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================
       Nova Mind
       Main JavaScript
    ========================================= */

    /* =========================================
       Mobile Menu
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("show");

            const isOpen = navbar.classList.contains("show");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // Close menu after clicking a navigation link
        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navbar.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.innerHTML =
                    '<i class="fas fa-bars"></i>';
            });
        });
    }


    /* =========================================
       Header Scroll Effect
    ========================================= */

    const header = document.querySelector(".header");

    const handleHeaderScroll = () => {
        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleHeaderScroll);

    handleHeaderScroll();


    /* =========================================
       Smooth Scrolling
    ========================================= */

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId.length <= 1
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });


    /* =========================================
       FAQ Accordion
    ========================================= */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) return;

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            // Close all FAQ items
            faqItems.forEach((otherItem) => {
                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }
            });

            // Open selected item
            if (!isActive) {
                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";
            }
        });
    });


    /* =========================================
       Reveal Animation
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("revealed");
        });

    }


    /* =========================================
       Back To Top Button
    ========================================= */

    const backToTop =
        document.querySelector(".back-to-top");

    const handleBackToTop = () => {

        if (!backToTop) return;

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    };

    window.addEventListener(
        "scroll",
        handleBackToTop
    );

    handleBackToTop();

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       Active Navigation Link
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(
            '.navbar a[href^="#"]'
        );

    const updateActiveNavigation = () => {

        if (!sections.length) return;

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 160;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {
                currentSection =
                    section.getAttribute("id");
            }

        });

        navigationLinks.forEach((link) => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });
    };

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =========================================
       Service Cards
    ========================================= */

    const serviceCards =
        document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });

    });


    /* =========================================
       Package Buttons
    ========================================= */

    const packageButtons =
        document.querySelectorAll(
            ".package-button"
        );

    packageButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const packageCard =
                button.closest(".package-card");

            if (!packageCard) return;

            const packageTitle =
                packageCard.querySelector(
                    ".package-title"
                );

            const packageName =
                packageTitle
                    ? packageTitle.textContent.trim()
                    : "الباقة المختارة";

            console.log(
                `Selected package: ${packageName}`
            );

        });

    });


    /* =========================================
       WhatsApp Buttons
    ========================================= */

    const whatsappButtons =
        document.querySelectorAll(
            ".whatsapp"
        );

    whatsappButtons.forEach((button) => {

        button.addEventListener("click", () => {

            // WhatsApp number can be added later
            // when the final business number is available.

        });

    });


    /* =========================================
       Contact Form
    ========================================= */

    const contactForm =
        document.querySelector(
            "#contactForm"
        );

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const formData =
                    new FormData(contactForm);

                console.log(
                    "Contact form submitted:",
                    Object.fromEntries(formData)
                );

                alert(
                    "تم استلام طلبك بنجاح، وسنتواصل معك قريبًا."
                );

                contactForm.reset();

            }
        );

    }


    /* =========================================
       Current Year
    ========================================= */

    const currentYear =
        document.querySelector(
            "#currentYear"
        );

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =========================================
       Prevent Empty Hash Navigation
    ========================================= */

    document
        .querySelectorAll('a[href="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {
                    event.preventDefault();
                }
            );

        });


    /* =========================================
       Page Loaded
    ========================================= */

    document.body.classList.add("page-loaded");

});
