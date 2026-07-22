document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Navigation Mobile Toggle & Smooth Scroll
  // =========================================================================
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // =========================================================================
  // 2. Light / Dark Theme Switcher & Hero Image Switcher
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const heroMainImg = document.getElementById('hero-main-img');

  function updateHeroImage(theme) {
    if (heroMainImg) {
      if (theme === 'light-theme') {
        heroMainImg.src = 'assets/hero-main-light.jpg';
      } else {
        heroMainImg.src = 'assets/hero-main.jpg';
      }
    }
  }

  function applyTheme(theme) {
    const activeLang = body.classList.contains('rtl-ar') ? 'rtl-ar' : 'ltr-en';
    body.className = `${theme} ${activeLang}`;
    localStorage.setItem('librixa-theme', theme);
    updateHeroImage(theme);
  }

  // Initial theme check
  const savedTheme = localStorage.getItem('librixa-theme') || 'dark-theme';
  applyTheme(savedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light-theme' : 'dark-theme';
    applyTheme(newTheme);
  });

  // =========================================================================
  // 3. Language Translations (i18n) Handler
  // =========================================================================
  const translations = {
    en: {
      "brand-name": "LIBRIXA",
      "nav-features": "Features",
      "nav-showcase": "Showcase",
      "nav-download": "Get Librixa",
      "nav-faq": "FAQ",
      "nav-web-app": "Web Player",
      "hero-eyebrow": "YOUR AUDIOBOOK LIBRARY",
      "hero-title": "Listen to the books you love. <em>Your way.</em>",
      "hero-lead": "Librixa brings every audiobook into one calm, organized experience — whether it lives on your phone or in your Google Drive storage.",
      "hero-btn-download": "Get Librixa",
      "hero-btn-web-app": "Launch Web Player",
      "hero-trust-local": "Local Files",
      "hero-trust-drive": "Google Drive",
      "hero-trust-offline": "Offline Playback",
      "features-eyebrow": "ONE LIBRARY. NO CLUTTER.",
      "features-title": "A better home for every chapter.",
      "features-lead": "Stop hunting through folders and switching apps. Librixa makes your listening library feel effortless from the first book to the last.",
      "feat1-title": "Find your next listen, fast.",
      "feat1-desc": "Search titles, authors, and folders. Filter your library by what you are currently listening to, what you loved, or what you finished.",
      "feat2-title": "Pick up where you stopped.",
      "feat2-desc": "Librixa automatically remembers your exact playback position. Save unlimited custom bookmarks to revisit key moments at any time.",
      "feat3-title": "Cloud & Local Integration",
      "feat3-desc": "Build your unified library from local audio files or Google Drive storage, then download audiobooks for the road ahead.",
      "showcase-eyebrow": "DESIGNED AROUND YOUR LISTENING",
      "showcase-title": "Everything you need, beautifully organized.",
      "showcase-lead": "Click the tabs below to explore the focused audio player, listen to insights, and toggle configurations tailored to your listening habits.",
      "tab1-title": "Focused Player",
      "tab2-title": "Listening Insights",
      "tab3-title": "Settings Control",
      "cap1-title": "Speed, Sleep Timer and Easy Chapter Controls",
      "cap1-desc": "Skip with absolute confidence. Manage playback settings instantly directly from the notification shade or lock-screen controls, or fine-tune details in the app player view.",
      "cap2-title": "Track Your Listening Momentum",
      "cap2-desc": "Get visually gorgeous reports of your daily and weekly listening activities. Set personal streaks and goals to keep track of your audiobook progress.",
      "cap3-title": "Fine-tune Your Playback App",
      "cap3-desc": "Configure automatic library updates, Google Drive folder sync behavior, local storage scanning paths, theme colors, and download controls.",
      "gallery-eyebrow": "SCREENSHOTS GALLERY",
      "gallery-title": "Real App Interfaces",
      "gallery-lead": "Take a closer look at the actual screens and design of the Librixa app. Clean, modern, and built with utility in mind.",
      "gallery-item1": "Librixa Overview",
      "gallery-item2": "Focused Player",
      "gallery-item3": "Immersive Experience",
      "gallery-item4": "Search & Chapters",
      "gallery-item5": "Cloud & Local Sync",
      "gallery-item6": "Bookmarks & Favorites",
      "gallery-item7": "Light & Drive Mode",
      "gallery-item8": "Dark Night Mode",
      "caps-eyebrow": "ONE APP, COMPLETE CONTROL",
      "caps-title": "Built around every part of audiobook listening.",
      "cap-title-1": "Google Drive Sync",
      "cap-desc-1": "Connect your personal Drive storage, scan directories for audiobooks, and stream files instantly without consuming local disk space.",
      "cap-title-2": "Local Library Support",
      "cap-desc-2": "Scan custom folders on your device. Librixa detects audio file modifications and updates metadata dynamically in the background.",
      "cap-title-3": "Smart Chapters",
      "cap-desc-3": "Parsed metadata lets you easily jump to chapters. Customize chapter headings, keep notes, and mark bookmarks precisely.",
      "cap-title-4": "Offline Downloads",
      "cap-desc-4": "Save audio files directly to device memory. Seamlessly switch between online streaming and offline playback when traveling.",
      "cap-title-5": "Advanced Statistics",
      "cap-desc-5": "Analyze your listening streaks, monthly summaries, and total hours listened with beautiful built-in graphic insights.",
      "cap-title-6": "Data Portability",
      "cap-desc-6": "Export your settings, listening bookmarks, and player history as a `.lxb` configuration file to easily import to other devices.",
      "nav-guide": "User Guide",
      "hero-btn-guide": "User Guide (PDF)",
      "download-eyebrow": "GET THE OFFICIAL APP",
      "download-title": "Start listening to your books today.",
      "download-desc": "Librixa is a personal player. You supply the audio files or connect your Google Drive — we supply the ultimate listening experience.",
      "download-store-lbl": "Get it on",
      "download-store-title": "Google Play",
      "download-guide-lbl": "Documentation",
      "download-guide-title": "User Guide (PDF)",
      "download-youtube-lbl": "Watch on",
      "download-youtube-title": "YouTube",
      "hero-btn-youtube": "YouTube Channel",
      "footer-guide": "User Guide (PDF)",
      "faq-eyebrow": "GOT QUESTIONS?",
      "faq-title": "Frequently Asked Questions",
      "faq-q1": "Does Librixa provide audiobooks?",
      "faq-a1": "No, Librixa is a media library organizer and player. It does not provide, host, sell, or distribute audiobooks. You connect your own audio files (stored locally on your device or in your Google Drive cloud account).",
      "faq-q2": "What audio file formats does Librixa support?",
      "faq-a2": "Librixa supports standard audio file formats, including MP3, M4B, M4A, AAC, and WAV. It also supports parsing chapters from files containing standardized chapter metadata (e.g., M4B files).",
      "faq-q3": "How does the Google Drive integration work?",
      "faq-a3": "You sign in with your Google account and grant Librixa secure read access to select directories on your Drive storage. Librixa parses files and directories dynamically, letting you stream books or download chapters for offline use without uploading anything to secondary servers.",
      "faq-q4": "Is my reading and playback data secure?",
      "faq-a4": "Yes. Librixa keeps all your playback statistics, settings, and book configurations stored locally on your device. It doesn't send your data to any proprietary analytics servers, ensuring total privacy.",
      "faq-q5": "How can I backup or transfer my library?",
      "faq-a5": "You can export a configuration file (`.lxb`) from settings which stores your reading logs, playlists, and bookmarks. Simply import this file on your new device inside Librixa to restore everything.",
      "footer-copyright": "© 2026 Librixa. Your audiobook library, your way.",
      "footer-dev": "Designed and Developed by"
    },
    ar: {
      "brand-name": "لِيبريكسا",
      "nav-features": "الميزات",
      "nav-showcase": "المعرض",
      "nav-download": "تحميل التطبيق",
      "nav-faq": "الأسئلة الشائعة",
      "nav-web-app": "مشغل الويب",
      "hero-eyebrow": "مكتبة الكتب الصوتية الخاصة بك",
      "hero-title": "استمع إلى كتبك المفضلة. <em>بطريقتك الخاصة.</em>",
      "hero-lead": "يجمع ليبريكسا كل كتاب صوتي في تجربة واحدة هادئة ومنظمة — سواء كان مخزناً على هاتفك أو في مساحتك على Google Drive.",
      "hero-btn-download": "احصل على ليبريكسا",
      "hero-btn-web-app": "افتح مشغل الويب",
      "hero-trust-local": "الملفات المحلية",
      "hero-trust-drive": "جوجل درايف",
      "hero-trust-offline": "التشغيل دون إنترنت",
      "features-eyebrow": "مكتبة واحدة. بدون فوضى.",
      "features-title": "مسكن أفضل لكل فصل من فصول كتبك.",
      "features-lead": "توقف عن البحث في المجلدات والتبديل بين التطبيقات. يجعل ليبريكسا الاستماع لمكتبتك الصوتية أمراً سهلاً وممتعاً.",
      "feat1-title": "ابحث عن كتابك التالي بسرعة.",
      "feat1-desc": "ابحث عن العناوين والمؤلفين والمجلدات. صنف مكتبتك حسب ما تستمع إليه حالياً، ما أعجبك، أو ما انتهيت من قراءته.",
      "feat2-title": "أكمل الاستماع من حيث توقفت.",
      "feat2-desc": "يتذكر ليبريكسا تلقائياً موضع التشغيل الدقيق الخاص بك. احفظ علامات مرجعية مخصصة وغير محدودة للعودة إلى اللحظات المهمة في أي وقت.",
      "feat3-title": "ربط السحابي والمحلي",
      "feat3-desc": "ابنِ مكتبتك الموحدة من الملفات الصوتية المحلية أو مساحة تخزين Google Drive، ثم حمّل الكتب الصوتية للاستماع إليها لاحقاً أثناء تنقلك.",
      "showcase-eyebrow": "مصمم خصيصاً ليناسب استماعك",
      "showcase-title": "كل ما تحتاجه، منظم بشكل جميل.",
      "showcase-lead": "اضغط على التبويبات بالأسفل لاستكشاف مشغل الصوت الفعال، إحصائيات الاستماع، وضبط الإعدادات لتناسب عاداتك اليومية.",
      "tab1-title": "مشغل فعال ومميز",
      "tab2-title": "رؤى وإحصائيات الاستماع",
      "tab3-title": "التحكم بالإعدادات",
      "cap1-title": "تحكم بالسرعة ومؤقت النوم والفصول بسهولة",
      "cap1-desc": "تخطي الفصول وأنت بكامل الثقة. تحكم بإعدادات التشغيل فوراً من شريط الإشعارات أو شاشة القفل، أو عدل تفاصيل مشغل التطبيق مباشرة.",
      "cap2-title": "تتبع حماس استماعك اليومي",
      "cap2-desc": "احصل على تقارير ورسوم بيانية خلابة لنشاط استماعك اليومي والأسبوعي. حدد أهدافك وسلسلة أيام استماعك لتتبع تقدم كتبك الصوتية.",
      "cap3-title": "خصص إعدادات تطبيق التشغيل بالكامل",
      "cap3-desc": "اضبط التحديث التلقائي للمكتبة، سلوك مزامنة مجلدات Google Drive، مسارات الفحص والتخزين المحلي، ألوان الثيم، وخيارات التحميل.",
      "gallery-eyebrow": "معرض لقطات الشاشة",
      "gallery-title": "واجهات حقيقية من داخل التطبيق",
      "gallery-lead": "ألقِ نظرة عن قرب على شاشات وتصميم تطبيق ليبريكسا. واجهات نظيفة وعصرية ومصممة بأعلى درجات العملية.",
      "gallery-item1": "نظرة عامة على التطبيق",
      "gallery-item2": "مشغل الصوت الفعال",
      "gallery-item3": "تجربة استماع غامرة",
      "gallery-item4": "البحث الذكي والفصول",
      "gallery-item5": "المزامنة السحابية والمحلية",
      "gallery-item6": "العلامات المرجعية والمفضلة",
      "gallery-item7": "النمط الفاتح ووضع القيادة",
      "gallery-item8": "النمط الليلي الداكن",
      "caps-eyebrow": "تطبيق واحد، تحكم كامل",
      "caps-title": "مصمم ليناسب كل تفاصيل الاستماع للكتب الصوتية.",
      "cap-title-1": "مزامنة Google Drive",
      "cap-desc-1": "اربط حسابك للتخزين السحابي، وافحص المجلدات بحثاً عن الكتب، وشغل ملفاتك مباشرة دون استهلاك مساحة تخزين الهاتف.",
      "cap-title-2": "دعم المكتبة المحلية",
      "cap-desc-2": "افحص مجلدات معينة بجهازك. يكتشف ليبريكسا أي تعديل بالملفات الصوتية ويحدّث البيانات الوصفية تلقائياً بالخلفية.",
      "cap-title-3": "فصول ذكية ومقسمة",
      "cap-desc-3": "تتيح لك البيانات الوصفية المفصلة الانتقال للفصول بسهولة. خصص أسماء الفصول، واكتب ملاحظاتك، وحدد العلامات بدقة.",
      "cap-title-4": "التحميل للاستماع بدون إنترنت",
      "cap-desc-4": "احفظ ملفات الصوت بذاكرة الهاتف مباشرة. تنقل بسلاسة بين التشغيل عبر الإنترنت وبدون إنترنت أثناء السفر والرحلات.",
      "cap-title-5": "إحصائيات متقدمة وممتعة",
      "cap-desc-5": "حلل سلسلة أيام استماعك، والملخصات الشهرية، وإجمالي ساعات الاستماع عبر رسومات بيانية جذابة مدمجة بالتطبيق.",
      "cap-title-6": "نقل وحفظ البيانات",
      "cap-desc-6": "صدر إعداداتك وعلاماتك المرجعية وسجل استماعك كملف تهيئة (.lxb) لتستورده بسهولة على أي جهاز آخر.",
      "nav-guide": "دليل المستخدم",
      "hero-btn-guide": "دليل المستخدم (PDF)",
      "download-eyebrow": "احصل على التطبيق الرسمي",
      "download-title": "ابدأ الاستماع إلى كتبك المفضلة اليوم.",
      "download-desc": "ليبريكسا هو مشغل كتب صوتية شخصي. أنت توفر الملفات الصوتية أو تربط مجلدات سحابية — ونحن نوفر لك أفضل تجربة استماع.",
      "download-store-lbl": "حمل التطبيق من",
      "download-store-title": "جوجل بلاي",
      "download-guide-lbl": "التوثيق والشرح",
      "download-guide-title": "دليل المستخدم (PDF)",
      "download-youtube-lbl": "شاهدنا على",
      "download-youtube-title": "يوتيوب",
      "hero-btn-youtube": "قناة يوتيوب",
      "footer-guide": "دليل المستخدم (PDF)",
      "faq-eyebrow": "لديك استفسار؟",
      "faq-title": "الأسئلة الشائعة",
      "faq-q1": "هل يوفر تطبيق ليبريكسا كتباً صوتية جاهزة؟",
      "faq-a1": "لا، ليبريكسا هو منظم ومشغل لمكتبتك الشخصية. لا يوفر أو يستضيف أو يبيع الكتب الصوتية. تقوم أنت بربط ملفاتك الصوتية الخاصة (المخزنة محلياً على جهازك أو على حساب Google Drive الخاص بك).",
      "faq-q2": "ما هي صيغ الملفات الصوتية التي يدعمها ليبريكسا؟",
      "faq-a2": "يدعم التطبيق الصيغ القياسية الشهيرة مثل MP3 و M4B و M4A و AAC و WAV. كما يدعم قراءة الفصول وعلامات التقسيم من داخل الملفات التي تحتوي على بيانات الفصول الوصفية (مثل ملفات M4B).",
      "faq-q3": "كيف تعمل ميزة ربط Google Drive؟",
      "faq-a3": "تقوم بتسجيل الدخول بأمان بحساب جوجل وتفويض التطبيق بالوصول للمجلدات التي تختارها. يقوم ليبريكسا بقراءة الملفات وتشغيلها مباشرة دون تخزينها على أي خوادم خارجية، مما يضمن أمان وخصوصية بياناتك.",
      "faq-q4": "هل بيانات القراءة والاستماع الخاصة بي آمنة؟",
      "faq-a4": "نعم بالكامل. يحتفظ ليبريكسا بجميع إحصائيات استماعك وسجل القراءة والإعدادات محلياً على جهازك فقط، ولا يتم إرسال أي بيانات إلى أي خوادم تحليلية خارجية.",
      "faq-q5": "كيف يمكنني عمل نسخة احتياطية من مكتبتي؟",
      "faq-a5": "من خلال إعدادات التطبيق، يمكنك تصدير ملف إعدادات بامتداد (.lxb) يحتوي على سجل الاستماع والإشارات المرجعية وقوائم التشغيل. يمكنك ببساطة استيراد هذا الملف على أي جهاز آخر لاستعادة بياناتك في ثوانٍ.",
      "footer-copyright": "© 2026 ليبريكسا. مكتبتك الصوتية، بطريقتك الخاصة.",
      "footer-dev": "تصميم وتطوير بواسطة"
    }
  };

  const langToggleBtn = document.getElementById('lang-toggle');
  const langText = langToggleBtn?.querySelector('.lang-text');
  const htmlTag = document.documentElement;

  // Retrieve saved language setting
  let currentLang = localStorage.getItem('librixa-lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('librixa-lang', lang);

    // Apply translation attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update document settings for RTL/LTR
    if (lang === 'ar') {
      htmlTag.setAttribute('dir', 'rtl');
      htmlTag.setAttribute('lang', 'ar');
      body.classList.add('rtl-ar');
      body.classList.remove('ltr-en');
      if (langText) langText.textContent = 'English';
    } else {
      htmlTag.setAttribute('dir', 'ltr');
      htmlTag.setAttribute('lang', 'en');
      body.classList.add('ltr-en');
      body.classList.remove('rtl-ar');
      if (langText) langText.textContent = 'العربية';
    }

    // Refresh active theme settings to preserve body classes
    const savedTheme = localStorage.getItem('librixa-theme') || 'dark-theme';
    const activeLang = lang === 'ar' ? 'rtl-ar' : 'ltr-en';
    body.className = `${savedTheme} ${activeLang}`;
  }

  // Language button event listener
  langToggleBtn?.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(nextLang);
  });

  // Apply default/saved language
  applyLanguage(currentLang);

  // =========================================================================
  // 4. Interactive Showcase Tabs
  // =========================================================================
  const tabs = document.querySelectorAll('.showcase-tab');
  const captions = document.querySelectorAll('.tab-caption');
  const showcaseImg = document.getElementById('showcase-img');

  const tabImages = {
    player: 'assets/showcase-player.jpg',
    stats: 'assets/showcase-stats.jpg',
    settings: 'assets/showcase-settings.jpg'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      
      // Update Tab State
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update Caption State
      captions.forEach(cap => cap.classList.remove('active'));
      document.getElementById(`caption-${target}`)?.classList.add('active');

      // Update Screen Image with cross-fade
      if (showcaseImg && tabImages[target]) {
        showcaseImg.classList.remove('active');
        setTimeout(() => {
          showcaseImg.setAttribute('src', tabImages[target]);
          showcaseImg.setAttribute('alt', `${tab.innerText} Showcase`);
          showcaseImg.classList.add('active');
        }, 150);
      }
    });
  });

  // =========================================================================
  // 5. FAQ Accordion
  // =========================================================================
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const faqItem = trigger.parentElement;
      const faqPanel = trigger.nextElementSibling;
      const isOpen = faqItem.classList.contains('open');

      // Close all other panels
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        const panel = item.querySelector('.faq-panel');
        if (panel) panel.style.maxHeight = '0';
      });

      // Toggle this panel
      if (!isOpen) {
        faqItem.classList.add('open');
        faqPanel.style.maxHeight = `${faqPanel.scrollHeight}px`;
      }
    });
  });

  // =========================================================================
  // 6. Enhanced Dynamic Scroll-Reveal & Stagger Animations
  // =========================================================================
  // Auto-assign stagger indexes to lists & grid containers
  const staggerContainers = document.querySelectorAll('.features-grid, .capabilities-grid, .gallery-scroll, .faq-accordion-container, .hero-actions, .social-links-row');
  staggerContainers.forEach(container => {
    Array.from(container.children).forEach((child, index) => {
      child.style.setProperty('--stagger-index', index);
      if (!child.classList.contains('reveal') && !child.classList.contains('reveal-scale') && !child.classList.contains('reveal-left') && !child.classList.contains('reveal-right')) {
        child.classList.add('reveal');
      }
    });
  });

  const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
