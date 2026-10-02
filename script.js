/* =========================================================
   MindCare Mental Wellness
   Main JavaScript
   Prepared By: Eng Ahmad Ramadan
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const BOOKING_PAGE = "booking.html";

    let currentLanguage =
        localStorage.getItem("mindcare-language") || "ar";

    /* =====================================================
       HELPERS
    ===================================================== */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];


    /* =====================================================
       DOM ELEMENTS
    ===================================================== */

    const languageSwitch = $("#languageSwitch");

    const menuToggle = $(".menu-toggle");
    const mainNav = $(".main-nav");

    const topicModal = $("#topicModal");
    const providerModal = $("#providerModal");
    const bookingModal = $("#bookingModal");
    const assessmentModal = $("#assessmentModal");

    const topicModalContent = $("#topicModalContent");
    const providerModalContent = $("#providerModalContent");

    const bookingForm = $("#bookingForm");
    const bookingProvider = $("#bookingProvider");

    const assessmentButton = $("#assessmentButton");
    const assessmentQuestions = $("#assessmentQuestions");
    const assessmentResult = $("#assessmentResult");
    const calculateAssessment = $("#calculateAssessment");


    /* =====================================================
       TOPIC DATA
    ===================================================== */

    const topics = {

        anxiety: {
            ar: {
                title: "القلق والتوتر",
                description:
                    "القلق شعور طبيعي، لكنه قد يصبح مرهقًا عندما يكون مستمرًا أو يؤثر على الحياة اليومية. الدعم النفسي يمكن أن يساعدك على فهم مصادر القلق وتطوير طرق أكثر توازنًا للتعامل معه.",
                source:
                    "https://www.nimh.nih.gov/health/topics/anxiety-disorders"
            },

            en: {
                title: "Anxiety & Stress",
                description:
                    "Anxiety is a natural response, but it can become overwhelming when it is persistent or interferes with daily life. Psychological support can help you understand its sources and develop healthier coping strategies.",
                source:
                    "https://www.nimh.nih.gov/health/topics/anxiety-disorders"
            }
        },

        depression: {
            ar: {
                title: "الاكتئاب",
                description:
                    "الاكتئاب قد يؤثر على المزاج والطاقة والنوم والتركيز والعلاقات. طلب الدعم النفسي خطوة مهمة لفهم ما تمر به والعمل على تحسين جودة حياتك.",
                source:
                    "https://www.nimh.nih.gov/health/topics/depression"
            },

            en: {
                title: "Depression",
                description:
                    "Depression can affect mood, energy, sleep, concentration and relationships. Seeking psychological support can be an important step toward understanding what you are experiencing and improving your quality of life.",
                source:
                    "https://www.nimh.nih.gov/health/topics/depression"
            }
        },

        panic: {
            ar: {
                title: "نوبات الهلع",
                description:
                    "نوبات الهلع قد تظهر بصورة مفاجئة مع خوف شديد وأعراض جسدية مزعجة. العلاج والدعم المتخصص يمكن أن يساعدا في فهم هذه التجربة والتعامل معها.",
                source:
                    "https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms"
            },

            en: {
                title: "Panic Attacks",
                description:
                    "Panic attacks can appear suddenly with intense fear and uncomfortable physical symptoms. Professional support can help you understand the experience and develop ways to manage it.",
                source:
                    "https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms"
            }
        },

        ocd: {
            ar: {
                title: "الوسواس القهري",
                description:
                    "الوسواس القهري قد يتضمن أفكارًا متكررة ومزعجة أو سلوكيات قهرية يصعب التحكم بها. التقييم والعلاج المتخصص يمكن أن يساعدا في التعامل مع الأعراض.",
                source:
                    "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd"
            },

            en: {
                title: "OCD",
                description:
                    "OCD may involve recurring unwanted thoughts or repetitive behaviors that can feel difficult to control. Professional assessment and treatment can help manage symptoms.",
                source:
                    "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd"
            }
        },

        trauma: {
            ar: {
                title: "الصدمات النفسية",
                description:
                    "التجارب الصعبة أو الصادمة قد تترك آثارًا مستمرة على المشاعر والسلوك والعلاقات. الحصول على مساحة آمنة ودعم متخصص قد يساعد في التعامل مع آثار هذه التجارب.",
                source:
                    "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd"
            },

            en: {
                title: "Trauma",
                description:
                    "Difficult or traumatic experiences can have lasting effects on emotions, behavior and relationships. A safe space and professional support may help with the effects of these experiences.",
                source:
                    "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd"
            }
        },

        sleep: {
            ar: {
                title: "النوم",
                description:
                    "مشكلات النوم قد تؤثر على الطاقة والمزاج والتركيز والصحة النفسية. فهم العوامل المرتبطة بالنوم يمكن أن يكون بداية لتحسين نمط الحياة.",
                source:
                    "https://www.nhlbi.nih.gov/health/sleep"
            },

            en: {
                title: "Sleep",
                description:
                    "Sleep difficulties can affect energy, mood, concentration and mental well-being. Understanding the factors connected to sleep can be a starting point for healthier habits.",
                source:
                    "https://www.nhlbi.nih.gov/health/sleep"
            }
        },

        addiction: {
            ar: {
                title: "الإدمان والسلوكيات القهرية",
                description:
                    "التعامل مع الإدمان أو السلوكيات القهرية يحتاج إلى فهم دون وصم، ودعم مناسب يساعد على بناء خطوات أكثر أمانًا واستقرارًا.",
                source:
                    "https://www.samhsa.gov/find-help/national-helpline"
            },

            en: {
                title: "Addiction & Compulsive Behaviors",
                description:
                    "Addiction and compulsive behaviors require understanding without stigma. Appropriate support can help create safer and more sustainable steps toward recovery.",
                source:
                    "https://www.samhsa.gov/find-help/national-helpline"
            }
        },

        "self-esteem": {
            ar: {
                title: "تقدير الذات",
                description:
                    "تقدير الذات يؤثر على طريقة رؤيتنا لأنفسنا وعلى علاقاتنا وقراراتنا. العمل على فهم الأفكار السلبية وبناء صورة أكثر توازنًا عن الذات قد يكون مفيدًا.",
                source:
                    "MindCare Educational Resource"
            },

            en: {
                title: "Self-Esteem",
                description:
                    "Self-esteem affects how we see ourselves, our relationships and our decisions. Understanding negative thought patterns and developing a more balanced self-image can be helpful.",
                source:
                    "MindCare Educational Resource"
            }
        },

        relationships: {
            ar: {
                title: "العلاقات",
                description:
                    "العلاقات الصحية تحتاج إلى التواصل والحدود والاحترام المتبادل. الدعم النفسي يمكن أن يساعد على فهم أنماط العلاقات وتحسين التواصل.",
                source:
                    "MindCare Educational Resource"
            },

            en: {
                title: "Relationships",
                description:
                    "Healthy relationships involve communication, boundaries and mutual respect. Psychological support can help explore relationship patterns and improve communication.",
                source:
                    "MindCare Educational Resource"
            }
        },

        family: {
            ar: {
                title: "العائلة",
                description:
                    "التحديات العائلية قد تؤثر على المشاعر والاستقرار النفسي. فهم أنماط التواصل ووضع حدود صحية قد يساعد على بناء علاقات أكثر توازنًا.",
                source:
                    "MindCare Educational Resource"
            },

            en: {
                title: "Family",
                description:
                    "Family challenges can affect emotional well-being. Understanding communication patterns and establishing healthy boundaries can support more balanced relationships.",
                source:
                    "MindCare Educational Resource"
            }
        },

        communication: {
            ar: {
                title: "التواصل",
                description:
                    "التواصل الواضح يساعد على التعبير عن الاحتياجات والمشاعر بطريقة أكثر صحة، ويقلل من سوء الفهم والصراعات المتكررة.",
                source:
                    "MindCare Educational Resource"
            },

            en: {
                title: "Communication",
                description:
                    "Clear communication helps people express needs and emotions in healthier ways while reducing misunderstandings and recurring conflicts.",
                source:
                    "MindCare Educational Resource"
            }
        }
    };


    /* =====================================================
       PROVIDERS
    ===================================================== */

    const providers = {

        tasbeh: {
            nameAr: "تسبيح محمد",
            nameEn: "Tasbeh Mohamed",

            roleAr: "أخصائية نفسية إكلينيكية",
            roleEn: "Clinical Psychologist",

            bioAr:
                "أخصائية نفسية إكلينيكية (Clinical Psychologist) متخصصة في تقديم الدعم والتقييم النفسي والعلاج الإكلينيكي. تركز على مساعدة الأفراد في التعامل مع مشاعر القلق، التنظيم الانفعالي، الضغوط النفسية، وتحديات العلاقات، وتطوير مهارات التكيف والنمو الذاتي.",

            bioEn:
                "A Clinical Psychologist specializing in psychological support, assessment, and clinical therapy. Her work focuses on helping individuals manage anxiety, emotional regulation, psychological stress, relationship challenges, coping skills, and personal growth."
        },

        mariam: {
            nameAr: "مريم محمود",
            nameEn: "Mariam Mahmoud",

            roleAr: "أخصائية نفسية إكلينيكية",
            roleEn: "Clinical Psychologist",

            bioAr:
                "أخصائية نفسية إكلينيكية (Clinical Psychologist) تركز على تقديم الدعم النفسي للأفراد لمساعدتهم على التعامل مع التوتر اليومي، رفع تقدير الذات، تجاوز التحديات الحياتية، وبناء علاقات صحية ومتوازنة.",

            bioEn:
                "A Clinical Psychologist focused on supporting individuals in managing daily stress, improving self-esteem, navigating life challenges, and building healthy and balanced relationships."
        }
    };


    /* =====================================================
       PROVIDER SLUG NORMALIZATION
    ===================================================== */

    function normalizeProviderSlug(value) {

        if (!value) {
            return "";
        }

        const normalized = String(value)
            .trim()
            .toLowerCase();

        const map = {

            "tasbeh": "tasbeh",
            "tasbeh-mohamed": "tasbeh",
            "tasbeh mohamed": "tasbeh",
            "تسبيح": "tasbeh",
            "تسبيح محمد": "tasbeh",

            "mariam": "mariam",
            "mariam-mahmoud": "mariam",
            "mariam mahmoud": "mariam",
            "مريم": "mariam",
            "مريم محمود": "mariam"
        };

        return map[normalized] || "";
    }


    /* =====================================================
       FIREBASE BOOKING NAVIGATION
    ===================================================== */

    function goToBooking(provider = "") {

        const providerSlug =
            normalizeProviderSlug(provider);

        let bookingURL = BOOKING_PAGE;

        if (providerSlug) {
            bookingURL +=
                `?provider=${encodeURIComponent(providerSlug)}`;
        }

        window.location.href = bookingURL;
    }


    /* =====================================================
       BOOKING BUTTONS
       IMPORTANT:
       No WhatsApp booking here.
    ===================================================== */

    function bindBookingLinks() {

        $$("[data-open-booking]").forEach(button => {

            button.addEventListener("click", event => {

                event.preventDefault();

                const provider =
                    button.dataset.provider ||
                    button.dataset.providerName ||
                    "";

                if (mainNav) {
                    mainNav.classList.remove("open");
                }

                if (menuToggle) {
                    menuToggle.classList.remove("active");
                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

                goToBooking(provider);
            });

        });
    }


    /* =====================================================
       LEGACY BOOKING FORM COMPATIBILITY
       If old booking modal still exists, it redirects to
       the Firebase booking page instead of WhatsApp.
    ===================================================== */

    if (bookingForm) {

        bookingForm.addEventListener("submit", event => {

            event.preventDefault();

            const provider =
                bookingProvider?.value || "";

            goToBooking(provider);
        });
    }


    /* =====================================================
       LANGUAGE SYSTEM
    ===================================================== */

    function setLanguage(language) {

        currentLanguage =
            language === "en" ? "en" : "ar";

        localStorage.setItem(
            "mindcare-language",
            currentLanguage
        );

        document.documentElement.lang =
            currentLanguage;

        document.documentElement.dir =
            currentLanguage === "ar" ? "rtl" : "ltr";

        document.body.classList.toggle(
            "english-mode",
            currentLanguage === "en"
        );


        /* ---------------------------------------------
           Elements with data-ar / data-en
        --------------------------------------------- */

        $$("[data-ar][data-en]").forEach(element => {

            const value =
                element.getAttribute(
                    `data-${currentLanguage}`
                );

            if (value !== null) {
                element.textContent = value;
            }
        });


        /* ---------------------------------------------
           Language Button
        --------------------------------------------- */

        if (languageSwitch) {

            languageSwitch.textContent =
                currentLanguage === "ar"
                    ? "EN"
                    : "AR";

            languageSwitch.setAttribute(
                "aria-label",
                currentLanguage === "ar"
                    ? "Switch to English"
                    : "التبديل إلى العربية"
            );
        }


        /* ---------------------------------------------
           Navigation
        --------------------------------------------- */

        const navLabels = {

            ar: [
                "الرئيسية",
                "كيف تعمل",
                "الصحة النفسية",
                "المختصون",
                "الأسئلة الشائعة"
            ],

            en: [
                "Home",
                "How It Works",
                "Mental Health",
                "Specialists",
                "FAQ"
            ]
        };

        const navLinks = $$(".nav-link");

        navLinks.forEach((link, index) => {

            const arText =
                link.getAttribute("data-ar");

            const enText =
                link.getAttribute("data-en");

            if (currentLanguage === "ar" && arText) {
                link.textContent = arText;
                return;
            }

            if (currentLanguage === "en" && enText) {
                link.textContent = enText;
                return;
            }

            if (navLabels[currentLanguage][index]) {
                link.textContent =
                    navLabels[currentLanguage][index];
            }
        });
    }


    if (languageSwitch) {

        languageSwitch.addEventListener(
            "click",
            () => {

                setLanguage(
                    currentLanguage === "ar"
                        ? "en"
                        : "ar"
                );
            }
        );
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mainNav.classList.toggle("open");

                menuToggle.classList.toggle(
                    "active",
                    isOpen
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );
            }
        );


        $$(".nav-link", mainNav).forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mainNav.classList.remove("open");

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            );
        });
    }


    /* =====================================================
       MODAL HELPERS
    ===================================================== */

    function openModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );
    }


    function closeModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        if (!$(".modal.active")) {

            document.body.classList.remove(
                "modal-open"
            );
        }
    }


    function closeAllModals() {

        $$(".modal.active").forEach(modal => {

            modal.classList.remove("active");

            modal.setAttribute(
                "aria-hidden",
                "true"
            );
        });

        document.body.classList.remove(
            "modal-open"
        );
    }


    /* =====================================================
       MODAL CLOSE BUTTONS
    ===================================================== */

    $$(".modal-close").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const modal =
                    button.closest(".modal");

                closeModal(modal);
            }
        );
    });


    /* =====================================================
       MODAL OVERLAY CLOSE
    ===================================================== */

    $$(".modal").forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target.classList.contains(
                        "modal-overlay"
                    )
                ) {
                    closeModal(modal);
                }
            }
        );
    });


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeAllModals();
            }
        }
    );


    /* =====================================================
       TOPIC MODAL
    ===================================================== */

    function openTopic(topicKey) {

        if (!topicModal || !topicModalContent) {
            return;
        }

        const topic =
            topics[topicKey];

        if (!topic) {
            return;
        }

        const content =
            topic[currentLanguage] ||
            topic.ar;

        topicModalContent.innerHTML = `

            <div class="topic-modal-inner">

                <span class="section-kicker">
                    ${currentLanguage === "ar"
                        ? "توعية نفسية"
                        : "Mental Health Education"}
                </span>

                <h2>${content.title}</h2>

                <p>
                    ${content.description}
                </p>

                ${
                    content.source.startsWith("http")
                        ? `
                            <a
                                href="${content.source}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="topic-source"
                            >
                                ${
                                    currentLanguage === "ar"
                                        ? "المصدر"
                                        : "Source"
                                }
                            </a>
                          `
                        : `
                            <span class="topic-source">
                                ${content.source}
                            </span>
                          `
                }

            </div>
        `;

        openModal(topicModal);
    }


    /* =====================================================
       TOPIC CARDS
    ===================================================== */

    $$(".topic-card").forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const topic =
                    card.dataset.topic;

                if (topic) {
                    openTopic(topic);
                }
            }
        );
    });


    /* =====================================================
       PROVIDER MODAL
    ===================================================== */

    function openProvider(providerKey) {

        if (!providerModal || !providerModalContent) {
            return;
        }

        const slug =
            normalizeProviderSlug(providerKey);

        const provider =
            providers[slug];

        if (!provider) {
            return;
        }

        const name =
            currentLanguage === "ar"
                ? provider.nameAr
                : provider.nameEn;

        const role =
            currentLanguage === "ar"
                ? provider.roleAr
                : provider.roleEn;

        const bio =
            currentLanguage === "ar"
                ? provider.bioAr
                : provider.bioEn;

        providerModalContent.innerHTML = `

            <div class="provider-modal-inner">

                <span class="section-kicker">
                    ${role}
                </span>

                <h2>${name}</h2>

                <p>
                    ${bio}
                </p>

                <button
                    type="button"
                    class="btn btn-primary provider-booking-btn"
                    data-provider="${slug}"
                >
                    ${
                        currentLanguage === "ar"
                            ? "احجز جلسة"
                            : "Book a Session"
                    }
                </button>

            </div>
        `;

        openModal(providerModal);


        const bookingButton =
            $(".provider-booking-btn", providerModalContent);

        if (bookingButton) {

            bookingButton.addEventListener(
                "click",
                () => {

                    closeModal(providerModal);

                    goToBooking(slug);
                }
            );
        }
    }


    /* =====================================================
       PROVIDER BUTTONS
    ===================================================== */

    $$("[data-provider]").forEach(button => {

        if (
            button.hasAttribute(
                "data-open-booking"
            )
        ) {
            return;
        }

        button.addEventListener(
            "click",
            event => {

                const provider =
                    button.dataset.provider;

                if (!provider) {
                    return;
                }

                /*
                 * If the element is an actual booking CTA,
                 * let bindBookingLinks() handle it.
                 */
                if (
                    button.hasAttribute(
                        "data-open-booking"
                    )
                ) {
                    return;
                }

                event.preventDefault();

                openProvider(provider);
            }
        );
    });


    /* =====================================================
       ASSESSMENT QUESTIONS
    ===================================================== */

    const assessmentData = [

        {
            ar: "خلال الأسبوعين الماضيين، كم مرة شعرت بالتوتر أو القلق؟",
            en: "During the last two weeks, how often have you felt anxious or stressed?"
        },

        {
            ar: "كم مرة شعرت بانخفاض في المزاج أو فقدان الاهتمام بالأشياء؟",
            en: "How often have you experienced low mood or loss of interest?"
        },

        {
            ar: "كم مرة واجهت صعوبة في النوم أو الراحة؟",
            en: "How often have you had difficulty sleeping or resting?"
        },

        {
            ar: "كم مرة شعرت أن مشاعرك أصبحت صعبة التحكم؟",
            en: "How often have your emotions felt difficult to manage?"
        },

        {
            ar: "كم مرة أثرت الضغوط النفسية على حياتك اليومية؟",
            en: "How often have psychological stressors affected your daily life?"
        },

        {
            ar: "كم مرة شعرت أنك تحتاج إلى مساحة آمنة للتحدث مع شخص متخصص؟",
            en: "How often have you felt that you need a safe space to talk to a professional?"
        }
    ];


    /* =====================================================
       RENDER ASSESSMENT
    ===================================================== */

    function renderAssessment() {

        if (!assessmentQuestions) {
            return;
        }

        assessmentQuestions.innerHTML = "";

        assessmentData.forEach(
            (question, index) => {

                const questionNumber =
                    index + 1;

                const text =
                    currentLanguage === "ar"
                        ? question.ar
                        : question.en;

                const questionHTML = `

                    <div
                        class="assessment-question"
                        data-question="${questionNumber}"
                    >

                        <h3>
                            ${questionNumber}.
                            ${text}
                        </h3>

                        <div class="assessment-options">

                            <label>
                                <input
                                    type="radio"
                                    name="assessment-${questionNumber}"
                                    value="0"
                                >

                                <span>
                                    ${
                                        currentLanguage === "ar"
                                            ? "أبدًا"
                                            : "Not at all"
                                    }
                                </span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="assessment-${questionNumber}"
                                    value="1"
                                >

                                <span>
                                    ${
                                        currentLanguage === "ar"
                                            ? "أحيانًا"
                                            : "Sometimes"
                                    }
                                </span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="assessment-${questionNumber}"
                                    value="2"
                                >

                                <span>
                                    ${
                                        currentLanguage === "ar"
                                            ? "غالبًا"
                                            : "Often"
                                    }
                                </span>
                            </label>

                        </div>

                    </div>
                `;

                assessmentQuestions.insertAdjacentHTML(
                    "beforeend",
                    questionHTML
                );
            }
        );
    }


    /* =====================================================
       OPEN ASSESSMENT
    ===================================================== */

    if (assessmentButton) {

        assessmentButton.addEventListener(
            "click",
            () => {

                renderAssessment();

                if (assessmentResult) {
                    assessmentResult.innerHTML = "";
                }

                openModal(assessmentModal);
            }
        );
    }


    /* =====================================================
       CALCULATE ASSESSMENT
    ===================================================== */

    if (calculateAssessment) {

        calculateAssessment.addEventListener(
            "click",
            () => {

                let score = 0;
                let answered = 0;

                assessmentData.forEach(
                    (_, index) => {

                        const selected =
                            document.querySelector(
                                `input[name="assessment-${index + 1}"]:checked`
                            );

                        if (selected) {

                            score += Number(
                                selected.value
                            );

                            answered++;
                        }
                    }
                );


                if (answered < assessmentData.length) {

                    if (assessmentResult) {

                        assessmentResult.innerHTML = `

                            <div class="assessment-result-content">

                                <h3>
                                    ${
                                        currentLanguage === "ar"
                                            ? "يرجى الإجابة عن جميع الأسئلة"
                                            : "Please answer all questions"
                                    }
                                </h3>

                                <p>
                                    ${
                                        currentLanguage === "ar"
                                            ? "أكمل الأسئلة أولًا حتى تحصل على نتيجة أكثر اكتمالًا."
                                            : "Please complete all questions to receive a more complete result."
                                    }
                                </p>

                            </div>
                        `;
                    }

                    return;
                }


                let title = "";
                let message = "";


                if (score <= 3) {

                    title =
                        currentLanguage === "ar"
                            ? "مؤشرات منخفضة حاليًا"
                            : "Low indicators at the moment";

                    message =
                        currentLanguage === "ar"
                            ? "الإجابات الحالية لا تشير إلى مستوى مرتفع من الضيق النفسي. ومع ذلك، يمكنك طلب الدعم في أي وقت إذا شعرت أنك بحاجة إليه."
                            : "Your current responses do not indicate a high level of psychological distress. You can still seek support whenever you feel you need it.";

                } else if (score <= 8) {

                    title =
                        currentLanguage === "ar"
                            ? "قد يكون من المفيد الحصول على دعم"
                            : "Support may be helpful";

                    message =
                        currentLanguage === "ar"
                            ? "تشير إجاباتك إلى وجود بعض الضغوط أو الصعوبات النفسية. الحديث مع متخصص قد يساعدك على فهم ما تمر به بشكل أفضل."
                            : "Your responses suggest some psychological stress or difficulties. Talking with a professional may help you understand what you are experiencing.";

                } else {

                    title =
                        currentLanguage === "ar"
                            ? "قد تحتاج إلى مساحة دعم متخصصة"
                            : "Professional support may be helpful";

                    message =
                        currentLanguage === "ar"
                            ? "تشير إجاباتك إلى وجود مستوى ملحوظ من الضيق النفسي. ننصح بالتحدث مع متخصص نفسي للحصول على تقييم ودعم مناسبين."
                            : "Your responses suggest a noticeable level of psychological distress. Consider speaking with a mental health professional for appropriate assessment and support.";
                }


                if (assessmentResult) {

                    assessmentResult.innerHTML = `

                        <div class="assessment-result-content">

                            <span class="section-kicker">
                                ${
                                    currentLanguage === "ar"
                                        ? "نتيجة أولية"
                                        : "Initial Result"
                                }
                            </span>

                            <h3>
                                ${title}
                            </h3>

                            <p>
                                ${message}
                            </p>

                            <small>
                                ${
                                    currentLanguage === "ar"
                                        ? "هذا الاستبيان توعوي وليس تشخيصًا طبيًا."
                                        : "This questionnaire is educational and is not a medical diagnosis."
                                }
                            </small>

                            <div style="margin-top: 24px;">

                                <button
                                    type="button"
                                    class="btn btn-primary assessment-booking-btn"
                                >
                                    ${
                                        currentLanguage === "ar"
                                            ? "احجز جلسة"
                                            : "Book a Session"
                                    }
                                </button>

                            </div>

                        </div>
                    `;


                    const bookingButton =
                        $(".assessment-booking-btn", assessmentResult);

                    if (bookingButton) {

                        bookingButton.addEventListener(
                            "click",
                            () => {

                                closeModal(assessmentModal);

                                goToBooking();
                            }
                        );
                    }
                }
            }
        );
    }


    /* =====================================================
       FAQ
    ===================================================== */

    $$(".faq-item").forEach(item => {

        const question =
            $(".faq-question", item);

        if (!question) {
            return;
        }

        question.addEventListener(
            "click",
            () => {

                const wasActive =
                    item.classList.contains("active");


                $$(".faq-item").forEach(
                    otherItem => {

                        otherItem.classList.remove(
                            "active"
                        );
                    }
                );


                if (!wasActive) {

                    item.classList.add(
                        "active"
                    );
                }
            }
        );
    });


    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    const siteHeader =
        $(".site-header");

    function handleHeaderScroll() {

        if (!siteHeader) {
            return;
        }

        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 20
        );
    }

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );

    handleHeaderScroll();


    /* =====================================================
       ACTIVE NAVIGATION ON SCROLL
    ===================================================== */

    const sections =
        $$("main section[id]");

    const navLinks =
        $$(".nav-link");


    if (
        sections.length &&
        navLinks.length &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        const id =
                            entry.target.id;

                        navLinks.forEach(link => {

                            const href =
                                link.getAttribute(
                                    "href"
                                );

                            link.classList.toggle(
                                "active",
                                href === `#${id}`
                            );
                        });
                    });
                },
                {
                    rootMargin:
                        "-30% 0px -60% 0px",
                    threshold: 0
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(section);
        });
    }


    /* =====================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                !mainNav ||
                !menuToggle
            ) {
                return;
            }

            if (
                mainNav.classList.contains("open") &&
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                mainNav.classList.remove(
                    "open"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }
    );


    /* =====================================================
       INITIALIZATION
    ===================================================== */

    bindBookingLinks();

    setLanguage(currentLanguage);

});
