document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================
       MARIAM MAHMOUD
       Psychology • Coaching • Personal Growth
       Arabic / English Language System
    ========================================= */

    const html = document.documentElement;
    const body = document.body;

    /* =========================================
       Mobile Menu
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("show");

            const isOpen =
                navbar.classList.contains("show");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });


        navbar.querySelectorAll("a").forEach((link) => {

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
       Header Scroll
    ========================================= */

    const header =
        document.querySelector(".header");

    const handleHeaderScroll = () => {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );

    handleHeaderScroll();


    /* =========================================
       Language Switcher
    ========================================= */

    const languageSwitcher =
        document.getElementById(
            "languageSwitcher"
        );

    const langAr =
        document.querySelector(".lang-ar");

    const langEn =
        document.querySelector(".lang-en");


    /*
       Translation data
    */

    const translations = {

        ar: {

            title:
                "مريم محمود | علم النفس والتطور الشخصي",

            description:
                "مريم محمود — مساحة هادئة لفهم الذات، الوعي، النمو الشخصي والتوازن النفسي.",


            nav: [
                "الرئيسية",
                "الفلسفة",
                "المجالات",
                "الرحلة",
                "عن مريم",
                "الأسئلة",
                "تواصل"
            ],


            headerButton:
                "ابدأ محادثة",


            heroLabel:
                "MARIAM MAHMOUD",

            heroTitle:
                `مساحة أهدأ<br><em>لعقل أوضح.</em>`,

            heroDescription:
                "مساحة مخصصة للتأمل، فهم الذات، النمو الشخصي وبناء علاقة أكثر وعيًا مع نفسك وحياتك.",

            heroPrimary:
                "اكتشف المساحة",

            heroSecondary:
                "تعرف على مريم",


            heroMeta: [
                "Psychology",
                "Coaching",
                "Personal Growth"
            ],


            visualSmall:
                "A SPACE TO",

            visualWords: [
                "Understand",
                "Reflect",
                "Grow"
            ],


            philosophyLabel:
                "THE PHILOSOPHY",

            philosophyTitle:
                `Sometimes,<br><em>understanding</em><br>yourself is the beginning of everything.`,

            philosophyText1:
                "لا نبحث عن نسخة مثالية منك. نبحث عن مساحة تسمح لك أن تفهم نفسك بشكل أعمق، ترى أفكارك ومشاعرك بوضوح أكبر، وتتحرك في حياتك بوعي.",

            philosophyText2:
                "لأن التغيير الحقيقي لا يبدأ دائمًا بخطوة كبيرة؛ أحيانًا يبدأ بلحظة صادقة مع نفسك.",


            exploreLabel:
                "WHAT WE EXPLORE",

            exploreTitle:
                `مجالات نقترب منها<br><em>بهدوء ووعي.</em>`,


            explore: [

                {
                    title: "Mental Wellness",
                    text:
                        "الوعي بالصحة النفسية وفهم المشاعر والاحتياجات الداخلية."
                },

                {
                    title: "Self Awareness",
                    text:
                        "الاقتراب من نفسك وفهم أنماط التفكير والمشاعر بشكل أعمق."
                },

                {
                    title: "Personal Growth",
                    text:
                        "تطوير الوعي والمهارات التي تساعدك على النمو بطريقة متوازنة."
                },

                {
                    title: "Life Coaching",
                    text:
                        "مساحة للتفكير في أهدافك واتجاهك والخطوات القادمة في حياتك."
                },

                {
                    title: "Emotional Balance",
                    text:
                        "فهم العلاقة بين أفكارك ومشاعرك وطريقة تعاملك مع المواقف."
                },

                {
                    title: "Mindfulness",
                    text:
                        "العودة إلى اللحظة الحالية وملاحظة ما يحدث بداخلك بوعي أكبر."
                }

            ],


            quote:
                `You don't need to<br>become someone else.<br><em>You need to understand yourself.</em>`,

            quoteAuthor:
                "— Mariam Mahmoud",


            journeyLabel:
                "THE JOURNEY",

            journeyTitle:
                `رحلتك لا تحتاج<br><em>إلى استعجال.</em>`,

            journey: [

                {
                    title: "Understand",
                    text:
                        "افهم ما يحدث بداخلك وما الذي تحتاجه فعلًا."
                },

                {
                    title: "Reflect",
                    text:
                        "توقف قليلًا، راقب، واسأل نفسك الأسئلة الصحيحة."
                },

                {
                    title: "Grow",
                    text:
                        "حوّل الوعي إلى خطوات حقيقية تناسب حياتك."
                }

            ],


            aboutLabel:
                "ABOUT MARIAM",

            aboutTitle:
                `مساحة تبدأ<br><em>من الإنسان.</em>`,

            aboutText: [
                "أنا مريم محمود.",

                "هذا المكان صُمم ليكون مساحة هادئة للحوار، التأمل، فهم الذات والنمو الشخصي.",

                "ومع إضافة المعلومات المهنية المعتمدة، سيتم عرضها هنا بشكل واضح وشفاف حتى تعرف بالضبط من تقابل وما الذي يمكن أن تتوقعه."
            ],

            aboutButton:
                "ابدأ محادثة",


            quietTitle:
                `Pause.<br>Reflect.<br><em>Begin again.</em>`,


            faqLabel:
                "FAQ",

            faqTitle:
                `أسئلة<br><em>قد تدور في ذهنك.</em>`,

            faq: [

                {
                    question:
                        "ما طبيعة المساحة؟",

                    answer:
                        "مساحة للحوار وفهم الذات والنمو الشخصي، مع توضيح طبيعة الخدمة المهنية قبل بدء أي جلسة."
                },

                {
                    question:
                        "هل الجلسات نفسية أم Coaching؟",

                    answer:
                        "يعتمد ذلك على طبيعة الخدمة المقدمة، وسيتم توضيح الفرق بين الدعم النفسي والـCoaching بشكل واضح قبل البدء."
                },

                {
                    question:
                        "هل يمكن التواصل أولًا قبل الحجز؟",

                    answer:
                        "نعم. يمكنك إرسال رسالة أولية لمعرفة الخدمة المناسبة وطرح أي سؤال قبل اتخاذ أي خطوة."
                },

                {
                    question:
                        "هل المعلومات الشخصية سرية؟",

                    answer:
                        "يجب توضيح سياسة الخصوصية والسرية المعتمدة في الموقع قبل الإطلاق النهائي."
                }

            ],


            contactLabel:
                "START A CONVERSATION",

            contactTitle:
                `ربما البداية<br><em>مجرد محادثة.</em>`,

            contactText:
                "لو حابب تعرف أكثر، اسأل، أو تعرف المساحة المناسبة لك، يمكنك التواصل معنا."
        },


        /* =====================================
           ENGLISH
        ===================================== */

        en: {

            title:
                "Mariam Mahmoud | Psychology & Personal Growth",

            description:
                "Mariam Mahmoud — A quiet space for self-awareness, personal growth and emotional balance.",


            nav: [
                "Home",
                "Philosophy",
                "Explore",
                "The Journey",
                "About Mariam",
                "FAQ",
                "Contact"
            ],


            headerButton:
                "Start a Conversation",


            heroLabel:
                "MARIAM MAHMOUD",

            heroTitle:
                `A quieter space<br><em>for a clearer mind.</em>`,

            heroDescription:
                "A thoughtful space for self-awareness, personal growth and building a more conscious relationship with yourself and your life.",

            heroPrimary:
                "Explore the Space",

            heroSecondary:
                "Meet Mariam",


            heroMeta: [
                "Psychology",
                "Coaching",
                "Personal Growth"
            ],


            visualSmall:
                "A SPACE TO",

            visualWords: [
                "Understand",
                "Reflect",
                "Grow"
            ],


            philosophyLabel:
                "THE PHILOSOPHY",

            philosophyTitle:
                `Sometimes,<br><em>understanding</em><br>yourself is the beginning of everything.`,

            philosophyText1:
                "We are not looking for a perfect version of you. We are creating a space where you can understand yourself more deeply, see your thoughts and emotions with greater clarity, and move through life with awareness.",

            philosophyText2:
                "Because real change does not always begin with a big step. Sometimes, it begins with an honest moment with yourself.",


            exploreLabel:
                "WHAT WE EXPLORE",

            exploreTitle:
                `Areas we explore<br><em>with awareness.</em>`,


            explore: [

                {
                    title: "Mental Wellness",
                    text:
                        "Understanding emotional wellbeing, inner needs and the relationship we have with ourselves."
                },

                {
                    title: "Self Awareness",
                    text:
                        "Looking inward and understanding your patterns of thoughts, emotions and reactions."
                },

                {
                    title: "Personal Growth",
                    text:
                        "Developing awareness and practical skills that support meaningful personal growth."
                },

                {
                    title: "Life Coaching",
                    text:
                        "A space to reflect on your goals, direction and the next steps in your life."
                },

                {
                    title: "Emotional Balance",
                    text:
                        "Understanding the relationship between your thoughts, emotions and responses."
                },

                {
                    title: "Mindfulness",
                    text:
                        "Returning to the present moment and noticing what is happening within you."
                }

            ],


            quote:
                `You don't need to<br>become someone else.<br><em>You need to understand yourself.</em>`,

            quoteAuthor:
                "— Mariam Mahmoud",


            journeyLabel:
                "THE JOURNEY",

            journeyTitle:
                `Your journey doesn't need<br><em>to be rushed.</em>`,

            journey: [

                {
                    title: "Understand",
                    text:
                        "Understand what is happening within you and what you truly need."
                },

                {
                    title: "Reflect",
                    text:
                        "Pause, observe and ask yourself the questions that matter."
                },

                {
                    title: "Grow",
                    text:
                        "Turn awareness into meaningful steps that fit your life."
                }

            ],


            aboutLabel:
                "ABOUT MARIAM",

            aboutTitle:
                `A space that begins<br><em>with the person.</em>`,

            aboutText: [

                "I am Mariam Mahmoud.",

                "This space was created as a calm environment for conversation, reflection, self-awareness and personal growth.",

                "Verified professional information will be presented clearly and transparently, so you know exactly who you are speaking with and what to expect."
            ],

            aboutButton:
                "Start a Conversation",


            quietTitle:
                `Pause.<br>Reflect.<br><em>Begin again.</em>`,


            faqLabel:
                "FAQ",

            faqTitle:
                `Questions<br><em>you may have.</em>`,

            faq: [

                {
                    question:
                        "What is this space about?",

                    answer:
                        "A space for conversation, self-awareness and personal growth, with the nature of each professional service explained before starting."
                },

                {
                    question:
                        "Are the sessions psychological or coaching?",

                    answer:
                        "It depends on the service being provided. The distinction between psychological support and coaching will be explained clearly before starting."
                },

                {
                    question:
                        "Can I contact you before booking?",

                    answer:
                        "Yes. You can send an initial message to ask questions and understand which type of support may be appropriate."
                },

                {
                    question:
                        "Is my personal information private?",

                    answer:
                        "The website's privacy and confidentiality policy should be clearly provided before the final launch."
                }

            ],


            contactLabel:
                "START A CONVERSATION",

            contactTitle:
                `Maybe the beginning<br><em>is simply a conversation.</em>`,

            contactText:
                "If you would like to learn more, ask a question or understand which space may be right for you, you can reach out."
        }

    };


    /* =========================================
       Apply Language
    ========================================= */

    function setLanguage(language) {

        const data =
            translations[language];

        if (!data) return;


        /* HTML direction */

        if (language === "ar") {

            html.setAttribute(
                "lang",
                "ar"
            );

            html.setAttribute(
                "dir",
                "rtl"
            );

            body.classList.remove(
                "english-mode"
            );

        } else {

            html.setAttribute(
                "lang",
                "en"
            );

            html.setAttribute(
                "dir",
                "ltr"
            );

            body.classList.add(
                "english-mode"
            );
        }


        /* Page title */

        document.title = data.title;


        /* Meta description */

        const description =
            document.querySelector(
                'meta[name="description"]'
            );

        if (description) {
            description.setAttribute(
                "content",
                data.description
            );
        }


        /* Navigation */

        const navLinks =
            document.querySelectorAll(
                ".navbar a"
            );

        data.nav.forEach(
            (text, index) => {

                if (navLinks[index]) {
                    navLinks[index].textContent =
                        text;
                }

            }
        );


        /* Header button */

        const headerButton =
            document.querySelector(
                ".header-button"
            );

        if (headerButton) {

            headerButton.innerHTML =
                `${data.headerButton}
                <i class="fas fa-arrow-left"></i>`;
        }


        /* Hero */

        const heroLabel =
            document.querySelector(
                ".hero-label"
            );

        if (heroLabel) {
            heroLabel.textContent =
                data.heroLabel;
        }


        const heroTitle =
            document.querySelector(
                ".hero-content h1"
            );

        if (heroTitle) {
            heroTitle.innerHTML =
                data.heroTitle;
        }


        const heroDescription =
            document.querySelector(
                ".hero-description"
            );

        if (heroDescription) {
            heroDescription.textContent =
                data.heroDescription;
        }


        const heroButtons =
            document.querySelectorAll(
                ".hero-buttons a"
            );

        if (heroButtons[0]) {

            heroButtons[0].innerHTML =
                `${data.heroPrimary}
                <i class="fas fa-arrow-left"></i>`;
        }

        if (heroButtons[1]) {

            heroButtons[1].innerHTML =
                `${data.heroSecondary}
                <i class="fas fa-arrow-left"></i>`;
        }


        const heroMeta =
            document.querySelectorAll(
                ".hero-meta span"
            );

        data.heroMeta.forEach(
            (text, index) => {

                if (heroMeta[index]) {
                    heroMeta[index].textContent =
                        text;
                }

            }
        );


        /* Hero visual */

        const visualSmall =
            document.querySelector(
                ".visual-small"
            );

        if (visualSmall) {
            visualSmall.textContent =
                data.visualSmall;
        }


        const visualWords =
            document.querySelectorAll(
                ".hero-image-content strong"
            );

        data.visualWords.forEach(
            (text, index) => {

                if (visualWords[index]) {
                    visualWords[index].textContent =
                        text;
                }

            }
        );


        /* Philosophy */

        const philosophyLabel =
            document.querySelector(
                ".philosophy .section-label"
            );

        if (philosophyLabel) {
            philosophyLabel.textContent =
                data.philosophyLabel;
        }


        const philosophyTitle =
            document.querySelector(
                ".philosophy-title h2"
            );

        if (philosophyTitle) {
            philosophyTitle.innerHTML =
                data.philosophyTitle;
        }


        const philosophyParagraphs =
            document.querySelectorAll(
                ".philosophy-text p"
            );

        if (philosophyParagraphs[0]) {
            philosophyParagraphs[0].textContent =
                data.philosophyText1;
        }

        if (philosophyParagraphs[1]) {
            philosophyParagraphs[1].textContent =
                data.philosophyText2;
        }


        /* Explore */

        const exploreLabel =
            document.querySelector(
                ".explore .section-label"
            );

        if (exploreLabel) {
            exploreLabel.textContent =
                data.exploreLabel;
        }


        const exploreTitle =
            document.querySelector(
                ".explore .section-heading h2"
            );

        if (exploreTitle) {
            exploreTitle.innerHTML =
                data.exploreTitle;
        }


        const exploreItems =
            document.querySelectorAll(
                ".explore-item"
            );

        data.explore.forEach(
            (item, index) => {

                if (!exploreItems[index]) return;

                const title =
                    exploreItems[index]
                        .querySelector("h3");

                const text =
                    exploreItems[index]
                        .querySelector("p");

                if (title) {
                    title.textContent =
                        item.title;
                }

                if (text) {
                    text.textContent =
                        item.text;
                }

            }
        );


        /* Quote */

        const quote =
            document.querySelector(
                ".quote-inner h2"
            );

        if (quote) {
            quote.innerHTML =
                data.quote;
        }


        const quoteAuthor =
            document.querySelector(
                ".quote-author"
            );

        if (quoteAuthor) {
            quoteAuthor.textContent =
                data.quoteAuthor;
        }


        /* Journey */

        const journeyLabel =
            document.querySelector(
                ".journey .section-label"
            );

        if (journeyLabel) {
            journeyLabel.textContent =
                data.journeyLabel;
        }


        const journeyTitle =
            document.querySelector(
                ".journey .section-heading h2"
            );

        if (journeyTitle) {
            journeyTitle.innerHTML =
                data.journeyTitle;
        }


        const journeySteps =
            document.querySelectorAll(
                ".journey-step"
            );

        data.journey.forEach(
            (step, index) => {

                if (!journeySteps[index]) return;

                const title =
                    journeySteps[index]
                        .querySelector("h3");

                const text =
                    journeySteps[index]
                        .querySelector("p");

                if (title) {
                    title.textContent =
                        step.title;
                }

                if (text) {
                    text.textContent =
                        step.text;
                }

            }
        );


        /* About */

        const aboutLabel =
            document.querySelector(
                ".about-content .section-label"
            );

        if (aboutLabel) {
            aboutLabel.textContent =
                data.aboutLabel;
        }


        const aboutTitle =
            document.querySelector(
                ".about-content h2"
            );

        if (aboutTitle) {
            aboutTitle.innerHTML =
                data.aboutTitle;
        }


        const aboutParagraphs =
            document.querySelectorAll(
                ".about-content p"
            );

        data.aboutText.forEach(
            (text, index) => {

                if (aboutParagraphs[index]) {
                    aboutParagraphs[index]
                        .textContent = text;
                }

            }
        );


        const aboutButton =
            document.querySelector(
                ".about-link"
            );

        if (aboutButton) {

            aboutButton.innerHTML =
                `${data.aboutButton}
                <i class="fas fa-arrow-left"></i>`;
        }


        /* Quiet section */

        const quietTitle =
            document.querySelector(
                ".quiet-content h2"
            );

        if (quietTitle) {
            quietTitle.innerHTML =
                data.quietTitle;
        }


        /* FAQ */

        const faqLabel =
            document.querySelector(
                ".faq .section-label"
            );

        if (faqLabel) {
            faqLabel.textContent =
                data.faqLabel;
        }


        const faqTitle =
            document.querySelector(
                ".faq .section-heading h2"
            );

        if (faqTitle) {
            faqTitle.innerHTML =
                data.faqTitle;
        }


        const faqItems =
            document.querySelectorAll(
                ".faq-item"
            );

        data.faq.forEach(
            (item, index) => {

                if (!faqItems[index]) return;

                const question =
                    faqItems[index]
                        .querySelector(
                            ".faq-question span"
                        );

                const answer =
                    faqItems[index]
                        .querySelector(
                            ".faq-answer p"
                        );

                if (question) {
                    question.textContent =
                        item.question;
                }

                if (answer) {
                    answer.textContent =
                        item.answer;
                }

            }
        );


        /* Contact */

        const contactLabel =
            document.querySelector(
                ".contact-content .section-label"
            );

        if (contactLabel) {
            contactLabel.textContent =
                data.contactLabel;
        }


        const contactTitle =
            document.querySelector(
                ".contact-content h2"
            );

        if (contactTitle) {
            contactTitle.innerHTML =
                data.contactTitle;
        }


        const contactText =
            document.querySelector(
                ".contact-content p"
            );

        if (contactText) {
            contactText.textContent =
                data.contactText;
        }


        /* Language button state */

        if (langAr) {

            langAr.classList.toggle(
                "active",
                language === "ar"
            );
        }

        if (langEn) {

            langEn.classList.toggle(
                "active",
                language === "en"
            );
        }


        /* Footer language */

        document
            .querySelectorAll(".footer-lang")
            .forEach((button) => {

                button.classList.toggle(
                    "active",
                    button.dataset.lang === language
                );

            });


        /* Save selected language */

        localStorage.setItem(
            "mariam_language",
            language
        );
    }


    /* =========================================
       Language Button
    ========================================= */

    if (languageSwitcher) {

        languageSwitcher.addEventListener(
            "click",
            () => {

                const currentLanguage =
                    html.getAttribute("lang");

                const newLanguage =
                    currentLanguage === "ar"
                        ? "en"
                        : "ar";

                setLanguage(newLanguage);

            }
        );
    }


    /* =========================================
       Footer Language Buttons
    ========================================= */

    document
        .querySelectorAll(".footer-lang")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset.lang;

                    if (language) {
                        setLanguage(language);
                    }

                }
            );

        });


    /* =========================================
       Load Saved Language
    ========================================= */

    const savedLanguage =
        localStorage.getItem(
            "mariam_language"
        );

    setLanguage(
        savedLanguage === "en"
            ? "en"
            : "ar"
    );


    /* =========================================
       Smooth Scrolling
    ========================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#" ||
                        targetId.length <= 1
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) return;

                    event.preventDefault();

                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;

                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.pageYOffset -
                        headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =========================================
       FAQ Accordion
    ========================================= */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );

    faqItems.forEach((item) => {

        const question =
            item.querySelector(
                ".faq-question"
            );

        const answer =
            item.querySelector(
                ".faq-answer"
            );

        if (!question || !answer) return;


        question.addEventListener(
            "click",
            () => {

                const isActive =
                    item.classList.contains(
                        "active"
                    );


                faqItems.forEach(
                    (otherItem) => {

                        otherItem.classList.remove(
                            "active"
                        );

                        const otherAnswer =
                            otherItem.querySelector(
                                ".faq-answer"
                            );

                        if (otherAnswer) {
                            otherAnswer.style.maxHeight =
                                null;
                        }

                    }
                );


                if (!isActive) {

                    item.classList.add(
                        "active"
                    );

                    answer.style.maxHeight =
                        answer.scrollHeight + "px";
                }

            }
        );

    });


    /* =========================================
       Reveal Animation
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );

    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "revealed"
                                );

                                observer.unobserve(
                                    entry.target
                                );
                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "revealed"
                );

            }
        );

    }


    /* =========================================
       Back To Top
    ========================================= */

    const backToTop =
        document.querySelector(
            ".back-to-top"
        );


    const handleBackToTop = () => {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }
    };


    window.addEventListener(
        "scroll",
        handleBackToTop
    );

    handleBackToTop();


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =========================================
       Active Navigation
    ========================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            '.navbar a[href^="#"]'
        );


    const updateActiveNavigation =
        () => {

            if (!sections.length) return;

            let currentSection = "";


            sections.forEach(
                (section) => {

                    const sectionTop =
                        section.offsetTop - 160;

                    const sectionHeight =
                        section.offsetHeight;


                    if (
                        window.scrollY >= sectionTop &&
                        window.scrollY <
                            sectionTop +
                            sectionHeight
                    ) {

                        currentSection =
                            section.getAttribute(
                                "id"
                            );
                    }

                }
            );


            navigationLinks.forEach(
                (link) => {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) ===
                        `#${currentSection}`
                    ) {

                        link.classList.add(
                            "active"
                        );
                    }

                }
            );
        };


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =========================================
       Service / Explore Hover
    ========================================= */

    document
        .querySelectorAll(
            ".explore-item"
        )
        .forEach((item) => {

            item.addEventListener(
                "mouseenter",
                () => {

                    item.classList.add(
                        "hovered"
                    );

                }
            );


            item.addEventListener(
                "mouseleave",
                () => {

                    item.classList.remove(
                        "hovered"
                    );

                }
            );

        });


    /* =========================================
       Current Year
    ========================================= */

    const currentYear =
        document.getElementById(
            "currentYear"
        );

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =========================================
       Empty Links
    ========================================= */

    document
        .querySelectorAll(
            'a[href="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    /*
                       Keep contact links available
                       for real URLs later.
                    */

                    if (
                        link.classList.contains(
                            "whatsapp"
                        ) ||
                        link.closest(
                            ".contact-actions"
                        )
                    ) {
                        return;
                    }

                    event.preventDefault();

                }
            );

        });


    /* =========================================
       Page Loaded
    ========================================= */

    body.classList.add(
        "page-loaded"
    );

});
