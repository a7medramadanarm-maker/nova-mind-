/* =========================================================
   MARIAM MAHMOUD
   Luxury Editorial Website
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;
    const siteHeader = document.getElementById("siteHeader");
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    const backToTop = document.getElementById("backToTop");
    const languageSwitcher = document.getElementById("languageSwitcher");
    const currentYear = document.getElementById("currentYear");

    const navLinks = document.querySelectorAll(".nav-link");
    const revealElements = document.querySelectorAll(".reveal");
    const sections = document.querySelectorAll("main section[id]");


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function closeMenu() {
        if (!navbar || !menuToggle) return;

        navbar.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
        if (!navbar || !menuToggle) return;

        navbar.classList.add("active");
        menuToggle.classList.add("active");

        menuToggle.setAttribute("aria-expanded", "true");
    }

    if (menuToggle && navbar) {

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", () => {

            const isOpen = navbar.classList.contains("active");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", event => {

        if (!navbar || !menuToggle) return;

        const clickedInsideMenu = navbar.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (
            navbar.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedToggle
        ) {
            closeMenu();
        }

    });


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    function handleHeaderScroll() {

        if (!siteHeader) return;

        if (window.scrollY > 35) {
            siteHeader.classList.add("scrolled");
        } else {
            siteHeader.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleHeaderScroll, {
        passive: true
    });

    handleHeaderScroll();


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    function handleBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 600) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }

    window.addEventListener("scroll", handleBackToTop, {
        passive: true
    });

    handleBackToTop();


    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight = siteHeader
                ? siteHeader.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                15;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       REVEAL ANIMATIONS
    ===================================================== */

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    function updateActiveNavigation() {

        if (!sections.length) return;

        const scrollPosition =
            window.scrollY +
            (siteHeader ? siteHeader.offsetHeight : 0) +
            120;

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(link => {

            const href = link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === `#${currentSection}`
            );

        });

    }

    window.addEventListener("scroll", updateActiveNavigation, {
        passive: true
    });

    updateActiveNavigation();


    /* =====================================================
       FAQ
       ===================================================== */

    const faqItems = document.querySelectorAll(".faq-list details");

    faqItems.forEach(item => {

        item.addEventListener("toggle", () => {

            if (!item.open) return;

            faqItems.forEach(otherItem => {

                if (otherItem !== item) {
                    otherItem.removeAttribute("open");
                }

            });

        });

    });


    /* =====================================================
       LANGUAGE SYSTEM
    ===================================================== */

    const translations = {

        ar: {

            documentTitle:
                "Mariam Mahmoud | Psychology • Coaching • Personal Growth",

            metaDescription:
                "Mariam Mahmoud — مساحة هادئة لفهم الذات، تطوير الشخصية، وبناء خطوات أكثر وضوحًا نحو الحياة التي تريدها.",

            navHome: "الرئيسية",
            navAbout: "عن مريم",
            navServices: "الخدمات",
            navJourney: "الرحلة",
            navJournal: "المقالات",
            navFaq: "الأسئلة",
            navContact: "تواصل",

            bookSession: "احجز جلسة",

            heroEyebrow:
                "مساحة لفهم الذات والنمو",

            heroTitle1:
                "افهم نفسك",

            heroTitle2:
                "بشكل أعمق.",

            heroDescription:
                "مساحة هادئة تساعدك على التوقف قليلًا، فهم ما بداخلك، وترتيب أفكارك، ثم اتخاذ خطوات أكثر وضوحًا نحو ما تريده.",

            heroBook:
                "احجز جلسة",

            heroAbout:
                "تعرف على مريم",

            heroNote:
                "مساحة خاصة • حوار هادئ • خطوات واضحة",

            floatingPause:
                "Pause",

            floatingUnderstand:
                "Understand",

            scrollExplore:
                "SCROLL TO EXPLORE",

            introTitle:
                "مساحة تبدأ",

            introAccent:
                "منك.",

            introText:
                "أحيانًا لا نحتاج إلى المزيد من الضوضاء، بل نحتاج إلى مساحة نستطيع فيها أن نسمع أنفسنا بوضوح.",

            discoverSpace:
                "اكتشف المساحة",

            aboutKicker:
                "ABOUT MARIAM",

            aboutTitle1:
                "رحلة التغيير",

            aboutTitle2:
                "تبدأ من",

            aboutAccent:
                "الفهم.",

            aboutParagraph1:
                "كل شخص لديه قصة مختلفة، وأفكار مختلفة، وطريقة خاصة في التعامل مع الحياة. لذلك تبدأ الرحلة هنا بالاستماع والفهم، وليس بإعطاء إجابات جاهزة.",

            aboutParagraph2:
                "هذه المساحة مصممة للحوار، التأمل، اكتشاف الذات، وبناء خطوات عملية تناسب احتياجاتك وأهدافك.",

            startConversation:
                "ابدأ محادثتك",

            imageCaption:
                "Portrait / Personal Space",

            servicesKicker:
                "WHAT WE EXPLORE",

            servicesTitle1:
                "مجالات يمكن أن",

            servicesTitle2:
                "نبدأ منها.",

            servicesDescription:
                "ليس الهدف أن تحصل على إجابة جاهزة، بل أن تجد مساحة تساعدك على رؤية الصورة بشكل أوضح.",

            service1Title:
                "الوعي بالذات",

            service1Text:
                "فهم الأفكار والمشاعر والأنماط التي تؤثر على حياتك اليومية.",

            service2Title:
                "التطوير الشخصي",

            service2Text:
                "تحويل الرغبة في التغيير إلى خطوات واضحة وقابلة للتنفيذ.",

            service3Title:
                "التوازن العاطفي",

            service3Text:
                "التعرف على المشاعر والتعامل معها بطريقة أكثر وعيًا وهدوءًا.",

            service4Title:
                "العلاقات والتواصل",

            service4Text:
                "فهم أنماط التواصل والحدود والاحتياجات داخل العلاقات.",

            journeyKicker:
                "THE JOURNEY",

            journeyTitle1:
                "خطوات صغيرة نحو",

            journeyTitle2:
                "وضوح أكبر.",

            journeyDescription:
                "الرحلة ليست سباقًا، بل مساحة تمنحك الوقت لفهم ما تحتاجه والتحرك بإيقاع يناسبك.",

            journey1Title:
                "نتوقف ونستمع",

            journey1Text:
                "نمنح أفكارك ومشاعرك مساحة آمنة للظهور دون حكم أو استعجال.",

            journey2Title:
                "نفهم الصورة",

            journey2Text:
                "نلاحظ الأنماط والاحتياجات والعوامل التي تؤثر في اختياراتك اليومية.",

            journey3Title:
                "نختار خطوة مناسبة",

            journey3Text:
                "نحوّل الفهم إلى ممارسة بسيطة وواقعية يمكن البناء عليها بثبات.",

            journalKicker:
                "JOURNAL",

            journalTitle1:
                "أفكار تساعدك على",

            journalTitle2:
                "رؤية نفسك.",

            journalDescription:
                "مقالات قصيرة للتأمل وفهم الذات والتعامل مع الحياة بوعي وهدوء.",

            article1Title:
                "لماذا نحتاج إلى التوقف أحيانًا؟",

            article1Text:
                "التوقف ليس تراجعًا؛ قد يكون الطريقة التي نسمع بها احتياجاتنا بوضوح.",

            article2Title:
                "كيف نضع حدودًا أكثر صحة؟",

            article2Text:
                "الحدود الواضحة تساعدنا على حماية طاقتنا وبناء علاقات أكثر توازنًا.",

            article3Title:
                "من التفكير الزائد إلى خطوة واحدة",

            article3Text:
                "لا تحتاج دائمًا إلى حل كل شيء اليوم؛ ابدأ بما يمكنك فعله الآن.",

            readArticle:
                "اقرأ المقال",

            article1Full:
                "عندما نمنح أنفسنا لحظة هدوء، يصبح من الأسهل ملاحظة ما نشعر به وما نحتاج إليه بدل الاستمرار في ردود الفعل التلقائية.",

            article2Full:
                "ابدأ بتحديد ما يناسبك وما لا يناسبك، ثم عبّر عن ذلك بلغة واضحة ومحترمة، مع تذكّر أن قول لا لا يعني رفض الآخرين.",

            article3Full:
                "اكتب ما يشغلك، اختر جزءًا واحدًا يمكنك التأثير فيه، وحدد خطوة صغيرة قابلة للتنفيذ خلال اليوم.",

            faqKicker:
                "FAQ",

            faqTitle1:
                "أسئلة",

            faqTitle2:
                "شائعة.",

            faqDescription:
                "إجابات مختصرة تساعدك على معرفة ما يمكن توقعه قبل بدء الرحلة.",

            faq1Question:
                "كيف أعرف أن الجلسة مناسبة لي؟",

            faq1Answer:
                "إذا كنت ترغب في فهم نفسك بشكل أعمق أو ترتيب أفكارك أو التعامل مع تحدٍّ متكرر، فقد تكون الجلسة بداية مناسبة لاستكشاف احتياجاتك.",

            faq2Question:
                "ماذا يحدث في الجلسة الأولى؟",

            faq2Answer:
                "نبدأ بالتعارف وفهم ما دفعك للتواصل، ثم نحدد معًا الموضوعات والأهداف التي ترغب في العمل عليها بإيقاع مريح وواضح.",

            faq3Question:
                "هل الجلسات سرية؟",

            faq3Answer:
                "نعم، تُعامل المعلومات التي تشاركها باحترام وخصوصية، مع توضيح أي استثناءات مهنية أو قانونية عند الحاجة.",

            faq4Question:
                "هل يمكن عقد الجلسات عن بُعد؟",

            faq4Answer:
                "يمكن ترتيب الجلسات عن بُعد بحسب المواعيد المتاحة، وسيتم توضيح التفاصيل عند التواصل.",

            contactKicker:
                "LET'S TALK",

            contactTitle1:
                "مستعد تبدأ",

            contactTitle2:
                "من نفسك؟",

            contactDescription:
                "تواصل معنا لمعرفة المزيد عن الجلسات والمساحة المناسبة لك.",

            contactButton:
                "احجز جلسة",

            footerSubtitle:
                "Psychology • Coaching • Personal Growth",

            footerRights:
                "All rights reserved."

        },


        en: {

            documentTitle:
                "Mariam Mahmoud | Psychology • Coaching • Personal Growth",

            metaDescription:
                "Mariam Mahmoud — A thoughtful space for self-understanding, personal development, and clearer steps toward the life you want.",

            navHome: "Home",
            navAbout: "About",
            navServices: "Services",
            navJourney: "Journey",
            navJournal: "Journal",
            navFaq: "FAQ",
            navContact: "Contact",

            bookSession: "Book a Session",

            heroEyebrow:
                "A space for self-understanding & growth",

            heroTitle1:
                "Understand yourself",

            heroTitle2:
                "more deeply.",

            heroDescription:
                "A thoughtful space to pause, understand what is happening within you, organize your thoughts, and take clearer steps toward what matters to you.",

            heroBook:
                "Book a Session",

            heroAbout:
                "Meet Mariam",

            heroNote:
                "Private space • Thoughtful conversation • Clear steps",

            floatingPause:
                "Pause",

            floatingUnderstand:
                "Understand",

            scrollExplore:
                "SCROLL TO EXPLORE",

            introTitle:
                "A space that starts",

            introAccent:
                "with you.",

            introText:
                "Sometimes we do not need more noise. We need a space where we can finally hear ourselves clearly.",

            discoverSpace:
                "Discover the space",

            aboutKicker:
                "ABOUT MARIAM",

            aboutTitle1:
                "Change begins",

            aboutTitle2:
                "with",

            aboutAccent:
                "understanding.",

            aboutParagraph1:
                "Every person has a different story, different thoughts, and a unique way of moving through life. That is why this journey begins with listening and understanding rather than ready-made answers.",

            aboutParagraph2:
                "This space is designed for conversation, reflection, self-discovery, and building practical steps that fit your needs and goals.",

            startConversation:
                "Start a conversation",

            imageCaption:
                "Portrait / Personal Space",

            servicesKicker:
                "WHAT WE EXPLORE",

            servicesTitle1:
                "Areas we can",

            servicesTitle2:
                "explore together.",

            servicesDescription:
                "The goal is not to give you a ready-made answer, but to create space for seeing your situation with greater clarity.",

            service1Title:
                "Self-Awareness",

            service1Text:
                "Understanding the thoughts, emotions, and patterns that influence your everyday life.",

            service2Title:
                "Personal Growth",

            service2Text:
                "Turning the desire for change into clear and practical steps.",

            service3Title:
                "Emotional Balance",

            service3Text:
                "Recognizing emotions and learning to approach them with greater awareness and calm.",

            service4Title:
                "Relationships & Communication",

            service4Text:
                "Exploring communication patterns, boundaries, and needs within relationships.",

            journeyKicker:
                "THE JOURNEY",

            journeyTitle1:
                "Small steps toward",

            journeyTitle2:
                "greater clarity.",

            journeyDescription:
                "The journey is not a race. It is a space to understand what you need and move at a pace that feels right for you.",

            journey1Title:
                "Pause & Listen",

            journey1Text:
                "Giving your thoughts and emotions space to be expressed without judgment or pressure.",

            journey2Title:
                "Understand the Picture",

            journey2Text:
                "Noticing patterns, needs, and factors that influence your everyday choices.",

            journey3Title:
                "Choose a Meaningful Step",

            journey3Text:
                "Turning understanding into a simple, realistic practice that can be built on over time.",

            journalKicker:
                "JOURNAL",

            journalTitle1:
                "Ideas to help you",

            journalTitle2:
                "see yourself.",

            journalDescription:
                "Short reflections about self-understanding, personal growth, and moving through life with greater awareness.",

            article1Title:
                "Why do we sometimes need to pause?",

            article1Text:
                "Pausing is not moving backward. It can be the way we hear our needs more clearly.",

            article2Title:
                "How can we create healthier boundaries?",

            article2Text:
                "Clear boundaries can help protect our energy and create more balanced relationships.",

            article3Title:
                "From overthinking to one clear step",

            article3Text:
                "You do not always need to solve everything today. Start with what you can do now.",

            readArticle:
                "Read article",

            article1Full:
                "When we give ourselves a quiet moment, it becomes easier to notice what we feel and what we need instead of continuing with automatic reactions.",

            article2Full:
                "Start by identifying what works for you and what does not, then express it clearly and respectfully. Saying no does not mean rejecting other people.",

            article3Full:
                "Write down what is occupying your mind, choose one part you can influence, and define one small step you can take today.",

            faqKicker:
                "FAQ",

            faqTitle1:
                "Frequently",

            faqTitle2:
                "asked questions.",

            faqDescription:
                "Short answers to help you understand what to expect before beginning.",

            faq1Question:
                "How do I know if a session is right for me?",

            faq1Answer:
                "If you want to understand yourself more deeply, organize your thoughts, or explore a recurring challenge, a session can be a starting point for understanding what you need.",

            faq2Question:
                "What happens during the first session?",

            faq2Answer:
                "We begin by getting to know you and understanding what brought you here, then identify the topics and goals you would like to explore at a comfortable and clear pace.",

            faq3Question:
                "Are sessions private?",

            faq3Answer:
                "Information you share is treated with respect and privacy, with any relevant professional or legal exceptions explained when necessary.",

            faq4Question:
                "Are online sessions available?",

            faq4Answer:
                "Online sessions can be arranged depending on availability, and the details can be discussed when you get in touch.",

            contactKicker:
                "LET'S TALK",

            contactTitle1:
                "Ready to begin",

            contactTitle2:
                "with yourself?",

            contactDescription:
                "Get in touch to learn more about the sessions and find the space that fits you.",

            contactButton:
                "Book a Session",

            footerSubtitle:
                "Psychology • Coaching • Personal Growth",

            footerRights:
                "All rights reserved."

        }

    };


    /* =====================================================
       LANGUAGE HELPER
    ===================================================== */

    function setText(selector, text) {

        const element = document.querySelector(selector);

        if (element && text !== undefined) {
            element.textContent = text;
        }

    }


    function applyLanguage(language) {

        const t = translations[language] || translations.ar;

        /* -----------------------------------------------
           HTML direction
        ----------------------------------------------- */

        document.documentElement.lang = language;

        document.documentElement.dir =
            language === "ar"
                ? "rtl"
                : "ltr";

        body.classList.toggle(
            "english-mode",
            language === "en"
        );


        /* -----------------------------------------------
           Page metadata
        ----------------------------------------------- */

        document.title = t.documentTitle;

        const description =
            document.querySelector('meta[name="description"]');

        if (description) {
            description.setAttribute(
                "content",
                t.metaDescription
            );
        }


        /* -----------------------------------------------
           Header
        ----------------------------------------------- */

        setText(".nav-link[href='#home']", t.navHome);
        setText(".nav-link[href='#about']", t.navAbout);
        setText(".nav-link[href='#services']", t.navServices);
        setText(".nav-link[href='#journey']", t.navJourney);
        setText(".nav-link[href='#journal']", t.navJournal);
        setText(".nav-link[href='#faq']", t.navFaq);
        setText(".nav-link[href='#contact']", t.navContact);

        setText(".header-cta", t.bookSession);


        /* -----------------------------------------------
           Hero
        ----------------------------------------------- */

        const heroEyebrow =
            document.querySelector(".hero-eyebrow span:last-child");

        if (heroEyebrow) {
            heroEyebrow.textContent = t.heroEyebrow;
        }

        setText(".hero-title span:first-child", t.heroTitle1);
        setText(".hero-title-accent", t.heroTitle2);

        setText(".hero-description", t.heroDescription);

        const heroButtons =
            document.querySelectorAll(".hero-buttons .btn");

        if (heroButtons[0]) {

            const span =
                heroButtons[0].querySelector("span:first-child");

            if (span) {
                span.textContent = t.heroBook;
            }

        }

        if (heroButtons[1]) {
            heroButtons[1].textContent = t.heroAbout;
        }

        const heroNote =
            document.querySelector(".hero-note span:last-child");

        if (heroNote) {
            heroNote.textContent = t.heroNote;
        }

        setText(".floating-card-top span:last-child", t.floatingPause);
        setText(".floating-card-bottom span:last-child", t.floatingUnderstand);

        setText(".hero-bottom-inner span:first-child", t.scrollExplore);


        /* -----------------------------------------------
           Intro
        ----------------------------------------------- */

        const introTitle =
            document.querySelector(".intro-title h2");

        if (introTitle) {

            introTitle.innerHTML =
                `${t.introTitle}<br><em>${t.introAccent}</em>`;

        }

        setText(".intro-text p", t.introText);
        setText(".intro-text .text-link", t.discoverSpace);


        /* -----------------------------------------------
           About
        ----------------------------------------------- */

        setText(".about-content .section-kicker", t.aboutKicker);

        const aboutTitle =
            document.querySelector(".about-content h2");

        if (aboutTitle) {

            aboutTitle.innerHTML =
                `${t.aboutTitle1}<br>${t.aboutTitle2} <em>${t.aboutAccent}</em>`;

        }

        const aboutParagraphs =
            document.querySelectorAll(".about-content p");

        if (aboutParagraphs[0]) {
            aboutParagraphs[0].textContent = t.aboutParagraph1;
        }

        if (aboutParagraphs[1]) {
            aboutParagraphs[1].textContent = t.aboutParagraph2;
        }

        setText(".outline-link", t.startConversation);
        setText(".image-caption", t.imageCaption);


        /* -----------------------------------------------
           Services
        ----------------------------------------------- */

        setText(".services-preview .section-kicker", t.servicesKicker);

        const servicesTitle =
            document.querySelector(".services-preview .section-heading h2");

        if (servicesTitle) {

            servicesTitle.innerHTML =
                `${t.servicesTitle1}<br><em>${t.servicesTitle2}</em>`;

        }

        setText(
            ".services-preview .section-heading > p",
            t.servicesDescription
        );

        const serviceItems =
            document.querySelectorAll(".service-item");

        const serviceData = [
            [t.service1Title, t.service1Text],
            [t.service2Title, t.service2Text],
            [t.service3Title, t.service3Text],
            [t.service4Title, t.service4Text]
        ];

        serviceItems.forEach((item, index) => {

            if (!serviceData[index]) return;

            const title =
                item.querySelector("h3");

            const paragraph =
                item.querySelector("p");

            if (title) {
                title.textContent = serviceData[index][0];
            }

            if (paragraph) {
                paragraph.textContent = serviceData[index][1];
            }

        });


        /* -----------------------------------------------
           Journey
        ----------------------------------------------- */

        const journeySection =
            document.querySelector(".journey-section");

        if (journeySection) {

            setText(
                ".journey-section .section-kicker",
                t.journeyKicker
            );

            const title =
                journeySection.querySelector(".section-heading h2");

            if (title) {

                title.innerHTML =
                    `${t.journeyTitle1}<br><em>${t.journeyTitle2}</em>`;

            }

            setText(
                ".journey-section .section-heading > p",
                t.journeyDescription
            );

            const journeyItems =
                journeySection.querySelectorAll(".journey-item");

            const journeyData = [
                [t.journey1Title, t.journey1Text],
                [t.journey2Title, t.journey2Text],
                [t.journey3Title, t.journey3Text]
            ];

            journeyItems.forEach((item, index) => {

                if (!journeyData[index]) return;

                setText(
                    `${".journey-item:nth-child(" + (index + 1) + ")"} h3`,
                    journeyData[index][0]
                );

                setText(
                    `${".journey-item:nth-child(" + (index + 1) + ")"} p`,
                    journeyData[index][1]
                );

            });

        }


        /* -----------------------------------------------
           Journal
        ----------------------------------------------- */

        const journalSection =
            document.querySelector(".journal-section");

        if (journalSection) {

            setText(
                ".journal-section .section-kicker",
                t.journalKicker
            );

            const journalTitle =
                journalSection.querySelector(".section-heading h2");

            if (journalTitle) {

                journalTitle.innerHTML =
                    `${t.journalTitle1}<br><em>${t.journalTitle2}</em>`;

            }

            setText(
                ".journal-section .section-heading > p",
                t.journalDescription
            );

            const journalCards =
                journalSection.querySelectorAll(".journal-card");

            const journalData = [
                [t.article1Title, t.article1Text],
                [t.article2Title, t.article2Text],
                [t.article3Title, t.article3Text]
            ];

            journalCards.forEach((card, index) => {

                if (!journalData[index]) return;

                const title =
                    card.querySelector("h3");

                const paragraph =
                    card.querySelector("p");

                const link =
                    card.querySelector(".text-link");

                if (title) {
                    title.textContent = journalData[index][0];
                }

                if (paragraph) {
                    paragraph.textContent = journalData[index][1];
                }

                if (link) {
                    link.innerHTML =
                        `${t.readArticle} <span>←</span>`;
                }

            });


            const fullArticles =
                journalSection.querySelectorAll(".journal-articles article");

            const fullArticleData = [
                [t.article1Title, t.article1Full],
                [t.article2Title, t.article2Full],
                [t.article3Title, t.article3Full]
            ];

            fullArticles.forEach((article, index) => {

                if (!fullArticleData[index]) return;

                const title =
                    article.querySelector("h3");

                const paragraph =
                    article.querySelector("p");

                if (title) {
                    title.textContent =
                        fullArticleData[index][0];
                }

                if (paragraph) {
                    paragraph.textContent =
                        fullArticleData[index][1];
                }

            });

        }


        /* -----------------------------------------------
           FAQ
        ----------------------------------------------- */

        const faqSection =
            document.querySelector(".faq-section");

        if (faqSection) {

            setText(
                ".faq-section .section-kicker",
                t.faqKicker
            );

            const faqTitle =
                faqSection.querySelector(".section-heading h2");

            if (faqTitle) {

                faqTitle.innerHTML =
                    `${t.faqTitle1}<br><em>${t.faqTitle2}</em>`;

            }

            setText(
                ".faq-section .section-heading > p",
                t.faqDescription
            );

            const faqData = [
                [t.faq1Question, t.faq1Answer],
                [t.faq2Question, t.faq2Answer],
                [t.faq3Question, t.faq3Answer],
                [t.faq4Question, t.faq4Answer]
            ];

            const faqItems =
                faqSection.querySelectorAll("details");

            faqItems.forEach((item, index) => {

                if (!faqData[index]) return;

                const question =
                    item.querySelector("summary");

                const answer =
                    item.querySelector("p");

                if (question) {
                    question.textContent =
                        faqData[index][0];
                }

                if (answer) {
                    answer.textContent =
                        faqData[index][1];
                }

            });

        }


        /* -----------------------------------------------
           Contact
        ----------------------------------------------- */

        const contactSection =
            document.querySelector(".contact-section");

        if (contactSection) {

            setText(
                ".contact-section .section-kicker",
                t.contactKicker
            );

            const contactTitle =
                contactSection.querySelector("h2");

            if (contactTitle) {

                contactTitle.innerHTML =
                    `${t.contactTitle1}<br><em>${t.contactTitle2}</em>`;

            }

            setText(
                ".contact-section p",
                t.contactDescription
            );

            const contactButton =
                contactSection.querySelector(".contact-button span:first-child");

            if (contactButton) {
                contactButton.textContent =
                    t.contactButton;
            }

        }


        /* -----------------------------------------------
           Footer
        ----------------------------------------------- */

        setText(".footer-brand span:not(.brand-mark)", t.footerSubtitle);

        const footerCopy =
            document.querySelector(".footer-copy");

        if (footerCopy) {

            const year =
                currentYear
                    ? currentYear.textContent
                    : new Date().getFullYear();

            footerCopy.textContent =
                `© ${year} Mariam Mahmoud. ${t.footerRights}`;

        }


        /* -----------------------------------------------
           Language buttons
        ----------------------------------------------- */

        const arButton =
            document.querySelector(".lang-ar");

        const enButton =
            document.querySelector(".lang-en");

        if (arButton) {
            arButton.classList.toggle(
                "active",
                language === "ar"
            );
        }

        if (enButton) {
            enButton.classList.toggle(
                "active",
                language === "en"
            );
        }


        /* -----------------------------------------------
           Save language
        ----------------------------------------------- */

        try {
            localStorage.setItem(
                "mariam_language",
                language
            );
        } catch (error) {
            /* Local storage may be unavailable */
        }

    }


    /* =====================================================
       LANGUAGE SWITCHER
    ===================================================== */

    if (languageSwitcher) {

        languageSwitcher.addEventListener("click", () => {

            const currentLanguage =
                document.documentElement.lang === "en"
                    ? "en"
                    : "ar";

            const nextLanguage =
                currentLanguage === "ar"
                    ? "en"
                    : "ar";

            applyLanguage(nextLanguage);

        });

    }


    /* =====================================================
       LOAD SAVED LANGUAGE
    ===================================================== */

    let savedLanguage = "ar";

    try {

        const storedLanguage =
            localStorage.getItem("mariam_language");

        if (
            storedLanguage === "ar" ||
            storedLanguage === "en"
        ) {
            savedLanguage = storedLanguage;
        }

    } catch (error) {
        savedLanguage = "ar";
    }

    applyLanguage(savedLanguage);


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    /* =====================================================
       PREVENT BROKEN PLACEHOLDER LINKS
       Only for href="#"
    ===================================================== */

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", event => {
            event.preventDefault();
        });

    });


    /* =====================================================
       INITIAL PAGE STATE
    ===================================================== */

    requestAnimationFrame(() => {

        revealElements.forEach((element, index) => {

            if (
                element.getBoundingClientRect().top <
                window.innerHeight * 0.9
            ) {

                setTimeout(() => {
                    element.classList.add("visible");
                }, index * 100);

            }

        });

    });

});
