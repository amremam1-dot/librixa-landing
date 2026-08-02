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
        heroMainImg.src = 'assets/hero-main-light.webp';
      } else {
        heroMainImg.src = 'assets/hero-main.webp';
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
      "footer-dev": "Designed and Developed by",
      "footer-privacy": "Privacy Policy",
      "differentiation-text": "Unlike conventional audiobook apps that require monthly subscriptions or remote server setups, Librixa offers direct Google Drive streaming and local-first privacy with zero recurring fees.",
      "why-built-title": "Why I Built Librixa",
      "why-built-desc": "I built Librixa because I wanted a clean, hassle-free way to listen to my personal audiobook collection stored on Google Drive and local storage without subscriptions or cloud lock-in. Existing players either locked features behind monthly fees or lacked direct cloud streaming for large audio files. Librixa is built local-first and privacy-focused, giving you complete control over your own audiobooks.",
      "privacy-eyebrow": "PRIVACY & DATA PROTECTION",
      "privacy-title": "Privacy Policy",
      "privacy-date": "Last Updated: July 2026",
      "privacy-s1-title": "1. Introduction & Local-First Architecture",
      "privacy-s1-desc": "Librixa is an Android audiobook player and personal library manager built around a strict local-first philosophy. We firmly believe that your personal media, reading history, and listening habits belong entirely to you. Librixa operates as a standalone client utility: it requires no account creation, no registration, and no connection to proprietary central servers.",
      "privacy-s2-title": "2. Device Permissions & Operational Purpose",
      "privacy-s2-desc": "Librixa requests Android system permissions strictly to perform offline playback and library management on your device:",
      "privacy-s2-l1": "<strong>Audio & File Access:</strong> Required to scan local directories for user-supplied audiobook files (e.g., MP3, M4B, M4A, WAV) and extract embedded chapter information.",
      "privacy-s2-l2": "<strong>Network State & Internet Access:</strong> Used exclusively to connect directly to Google Drive APIs when you explicitly trigger cloud audiobook streaming or downloading.",
      "privacy-s2-l3": "<strong>Foreground Service & Playback Controls:</strong> Allows continuous audio playback when the screen is turned off or when switching between applications.",
      "privacy-s3-title": "3. Google Drive Integration & Cloud Privacy",
      "privacy-s3-desc": "When you choose to link your personal Google Drive storage inside Librixa:",
      "privacy-s3-l1": "<strong>Read-Only Scope:</strong> Access is limited exclusively to read-only permissions for the specific audio files and directories you select for streaming or caching.",
      "privacy-s3-l2": "<strong>Direct OAuth Authentication:</strong> Authentication takes place directly between your device and Google's official authorization servers. Librixa never sees, handles, or stores your Google account password.",
      "privacy-s3-l3": "<strong>Zero Intermediate Server Interception:</strong> All cloud audio requests travel directly from Google Drive endpoints to your Android device with no intermediate proxy or proprietary server involved.",
      "privacy-s4-title": "4. Absolute Reading Privacy & Local Data Ownership",
      "privacy-s4-desc": "We respect your absolute right to private reading. Librixa operates under strict isolation principles:",
      "privacy-s4-l1": "<strong>Zero Reading Tracking:</strong> Librixa does not track, log, transmit, monitor, or report what book titles, authors, or audio content you listen to. We have zero knowledge of your library contents.",
      "privacy-s4-l2": "<strong>Local Storage Only:</strong> All playback positions, custom bookmarks, sleep timer preferences, listening streak statistics, and library categories remain stored 100% locally on your device.",
      "privacy-s5-title": "5. Zero Analytics, Tracking, or Advertising",
      "privacy-s5-desc": "Librixa is completely free of commercial tracking mechanisms:",
      "privacy-s5-l1": "<strong>No Advertising SDKs:</strong> Librixa contains no ad networks, promotional banners, or targeted marketing components.",
      "privacy-s5-l2": "<strong>No Behavioral Telemetry:</strong> We do not collect device identifiers, usage metrics, or behavioral telemetry. Your interaction with the player remains completely offline and private.",
      "privacy-s6-title": "6. Data Control, Export & Local Backups (.lxb)",
      "privacy-s6-desc": "You retain full authority over your data at all times:",
      "privacy-s6-l1": "<strong>Local Backup Export:</strong> You can export your listening history, bookmarks, and settings into an offline configuration file (<code>.lxb</code>) to restore or transfer your library on another device.",
      "privacy-s6-l2": "<strong>Complete Erasure:</strong> Clearing app data or uninstalling Librixa permanently removes all local database records and settings from your device.",
      "privacy-s7-title": "7. Third-Party Services",
      "privacy-s7-desc": "The only external service interactions initiated by Librixa are direct user-triggered connections to Google APIs for Google Drive streaming. These connections are governed by <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">Google's Privacy Policy</a>.",
      "privacy-s8-title": "8. Children's Privacy",
      "privacy-s8-desc": "Librixa does not collect personal information from any user, including children under the age of 13. Because the application functions locally without account creation, it complies with global digital privacy standards (including COPPA and GDPR).",
      "privacy-s9-title": "9. Updates & Developer Contact",
      "privacy-s9-desc": "This Privacy Policy may be updated periodically to reflect new features or platform requirements. Any updates will be published on this page. If you have questions regarding this policy, feel free to reach out:",
      "privacy-btn-back": "Back to Main Page",
      "del-eyebrow": "USER DATA CONTROL & PRIVACY",
      "del-title": "Account & Data Deletion Request",
      "del-app-info": "Librixa Audiobook Player • Developer: Amr Emam",
      "del-intro": "At Librixa, we prioritize your data ownership and privacy rights. As a Librixa user, you have full control over your account and synced information. You can request the complete and permanent deletion of your account and all associated personal data at any time.",
      "del-method1-title": "Option 1: Instant In-App Deletion (Recommended)",
      "del-method1-desc": "You can delete your account and clear all local & cloud synced data instantly inside the Librixa mobile app:",
      "del-method1-s1": "Open <strong>Librixa</strong> on your Android phone or Wear OS watch.",
      "del-method1-s2": "Navigate to <strong>Settings (الإعدادات)</strong> > <strong>Account & Sync (الحساب والمزامنة)</strong>.",
      "del-method1-s3": "Tap <strong>\"Delete Account & Clear Data\"</strong>.",
      "del-method1-s4": "Confirm your request. All synced listening progress, bookmarks, and account metadata will be purged immediately.",
      "del-method2-title": "Option 2: Online Deletion Request Form",
      "del-method2-desc": "If you no longer have access to the app, submit a deletion request directly using the form below:",
      "del-form-email-label": "Registered Account Email Address *",
      "del-form-reason-label": "Reason for Request (Optional)",
      "del-form-checkbox": "I confirm that I am requesting permanent deletion of my Librixa account, synced playback progress, bookmarks, and cloud preferences.",
      "del-form-submit": "Submit Account Deletion Request",
      "del-success-title": "Request Received Successfully!",
      "del-success-desc": "Your deletion ticket reference has been logged. All account records and synced metadata will be completely purged within 24 to 72 hours.",
      "del-table-title": "Types of Data Deleted vs. Retained",
      "del-table-intro": "In compliance with Google Play Developer Policies and data protection regulations (GDPR/CCPA), here is the exact breakdown of data handling upon deletion:",
      "del-th-category": "Data Category",
      "del-th-status": "Deletion Status",
      "del-th-retention": "Retention Period & Details",
      "del-tr1-cat": "Account Credentials & Profile",
      "del-tr1-stat": "Permanently Deleted",
      "del-tr1-ret": "Purged immediately from cloud servers within 24-72 hours.",
      "del-tr2-cat": "Synced Playback Progress & Timestamps",
      "del-tr2-stat": "Permanently Deleted",
      "del-tr2-ret": "All position markers, chapter progress, and playback stats removed permanently.",
      "del-tr3-cat": "Bookmarks, Notes & Favorites",
      "del-tr3-stat": "Permanently Deleted",
      "del-tr3-ret": "All user-created audio bookmarks, favorite tags, and categories erased completely.",
      "del-tr4-cat": "Google Drive Authorization Tokens",
      "del-tr4-stat": "Revoked & Erased",
      "del-tr4-ret": "OAuth tokens are revoked and cleared from database. You can also revoke access anytime at myaccount.google.com/permissions.",
      "del-tr5-cat": "Downloaded Audio Files (Local Device)",
      "del-tr5-stat": "User Controlled (Device Storage)",
      "del-tr5-ret": "Audio files stored on your Android device storage remain under your local control until deleted via the app or file manager.",
      "del-tr6-cat": "Security & Abuse Prevention Logs",
      "del-tr6-stat": "Temporary Retention (Max 30 Days)",
      "del-tr6-ret": "Anonymous request timestamps retained for up to 30 days solely to prevent fraud and satisfy legal compliance obligations, then automatically purged.",
      "del-contact-title": "Need Support or Have Questions?",
      "del-contact-desc": "You can also email your deletion request directly to developer <strong>Amr Emam</strong> at:"
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
      "footer-dev": "تصميم وتطوير بواسطة",
      "footer-privacy": "سياسة الخصوصية",
      "differentiation-text": "بخلاف تطبيقات الكتب الصوتية التقليدية التي تتطلب اشتراكات شهرية أو إعداد سيرفرات خارجية، يوفر Librixa بثاً مباشراً من Google Drive وخصوصية محلية بالكامل دون أي رسوم متكررة.",
      "why-built-title": "لماذا قمت ببناء Librixa",
      "why-built-desc": "قمت ببناء Librixa لأنني أردت وسيلة بسيطة ومباشرة للاستماع إلى مجموعتي الشخصية من الكتب الصوتية المخزنة على Google Drive والذاكرة المحلية دون اشتراكات شهرية أو قيود سحابية. معظم التطبيقات إما تشترط اشتراكات أو تفتقر إلى البث المباشر للكتب الصوتية. تم بناء Librixa ليكون محلياً بالكامل ويحترم خصوصيتك، ليتيح لك التحكم الكامل في مكتبتك الصوتية.",
      "privacy-eyebrow": "الخصوصية وحماية البيانات",
      "privacy-title": "سياسة الخصوصية",
      "privacy-date": "آخر تحديث: يوليو 2026",
      "privacy-s1-title": "1. نظرة عامة وفلسفة التخزين المحلي أولاً",
      "privacy-s1-desc": "تم تصميم ليبريكسا ليكون منظماً ومشغلاً محلياً ومستقلاً لمكتبتك الصوتية. نحن نؤمن بأن سجل استماعك وملفاتك الصوتية وعادات قراءتك ملك لك وحدك. يعمل ليبريكسا كأداة مستقلة بدون تسجيل حسابات أو الحاجة لخوادم سحابية إجبارية.",
      "privacy-s2-title": "2. صلاحيات الجهاز والغرض التشغيلي",
      "privacy-s2-desc": "يطلب ليبريكسا صلاحيات النظام في الأندرويد حصرياً لأداء وظائف تشغيل وإدارة مكتبتك محلياً:",
      "privacy-s2-l1": "<strong>الوصول للملفات والصوتيات:</strong> مطلوب لقراءة المجلدات المحلية واستخراج بيانات الفصول للكتب الصوتية (مثل MP3, M4B, M4A, WAV).",
      "privacy-s2-l2": "<strong>الاتصال بالإنترنت والشبكة:</strong> يُستخدم حصرياً للاتصال المباشر بخدمات Google Drive عند طلبك للبث أو التحميل.",
      "privacy-s2-l3": "<strong>خدمات الخلفية وعناصر التحكم:</strong> تسمح باستمرار تشغيل الصوت عند إغلاق الشاشة أو التنقل بين التطبيقات.",
      "privacy-s3-title": "3. المزامنة والوصول إلى Google Drive",
      "privacy-s3-desc": "عند اختيار ربط حسابك على جوجل درايف داخل ليبريكسا:",
      "privacy-s3-l1": "<strong>صلاحية قراءة فقط:</strong> تقتصر الصلاحيات حصرياً على قراءة المجلدات والملفات الصوتية التي تختارها أنت بنفسك للبث أو التخزين المؤقت.",
      "privacy-s3-l2": "<strong>تفويض مباشر وآمن:</strong> تتم عملية التسجيل مباشرة بين جهازك وخوادم تفويض جوجل (OAuth 2.0). لا يطلع ليبريكسا على كلمة سر حسابك ولا يخزنها.",
      "privacy-s3-l3": "<strong>بدون خوادم وسيطة:</strong> تنتقل طلبات الصوت مباشرة من خوادم Google Drive إلى جهازك دون المرور بأي سيرفرات جانبية أو خوادم تحليلية.",
      "privacy-s4-title": "4. الخصوصية المطلقة للاستماع والملكية الكاملة",
      "privacy-s4-desc": "نحن نحترم حقك التام في قراءة واستماع آمن ومستقل:",
      "privacy-s4-l1": "<strong>عدم معرفة أو تتبع الكتب:</strong> لا يقوم ليبريكسا بتتبع أو تسجيل أو نقل أو تحليل أسماء الكتب أو المؤلفين أو المحتوى الذي تستمع إليه. لا نملك أي معرفة بمحتويات مكتبتك.",
      "privacy-s4-l2": "<strong>تخزين محلي 100%:</strong> تُحفظ مواضع التوقف، العلامات المرجعية، إحصائيات الاستماع، ومؤقت النوم محلياً بالكامل على ذاكرة جهازك.",
      "privacy-s5-title": "5. خلو التطبيق من أدوات التحليل والتتبع والإعلانات",
      "privacy-s5-desc": "ليبريكسا خالي تماماً من أي برمجيات تتبع تجارية:",
      "privacy-s5-l1": "<strong>بدون إعلانات:</strong> لا يحتوي ليبريكسا على أي شبكات إعلانية أو بنرات ترويجية.",
      "privacy-s5-l2": "<strong>بدون برمجيات تتبع السلوك:</strong> لا نجمع أي معرفات للجهاز أو بيانات تحليلية لسلوكك أثناء استخدام المشغل.",
      "privacy-s6-title": "6. إدارة البيانات وتصدير النسخ الاحتياطية (.lxb)",
      "privacy-s6-desc": "تتمتع بالتحكم الكامل في بياناتك في أي وقت:",
      "privacy-s6-l1": "<strong>تصدير النسخ الاحتياطية:</strong> يمكنك تصدير سجل استماعك وإعداداتك كملف محلي (.lxb) لاستعادته أو نقله لأي جهاز آخر بحرية.",
      "privacy-s6-l2": "<strong>المسح الكامل:</strong> مسح بيانات التطبيق أو إلغاء تثبيته يحذف تماماً جميع بيانات قاعدة البيانات المحلية والإعدادات من جهازك.",
      "privacy-s7-title": "7. الخدمات الخارجية والطرف الثالث",
      "privacy-s7-desc": "الاتصال الخارجي الوحيد الذي يتم يكون مباشرة بين جهازك وخدمات Google APIs عند استخدامك ميزة المزامنة السحابية وفقاً لـ <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">سياسة خصوصية جوجل</a>.",
      "privacy-s8-title": "8. خصوصية الأطفال والامتثال للقوانين",
      "privacy-s8-desc": "لا يجمع ليبريكسا أي بيانات شخصية من أي مستخدم، بما في ذلك الأطفال. يعتمد التطبيق على التشغيل المحلي الكامل ويمتثل لمعايير الخصوصية الرقمية العالمية (مثل COPPA و GDPR).",
      "privacy-s9-title": "9. التحديثات وتواصل المطور",
      "privacy-s9-desc": "قد يتم تحديث سياسة الخصوصية هذه دورياً لمواكبة الميزات الجديدة. يُنشر أي تحديث على هذه الصفحة. لأي استفسارات، يمكنك التواصل من خلال القنوات الرسمية:",
      "privacy-btn-back": "العودة للصفحة الرئيسية",
      "del-eyebrow": "التحكم بالبيانات الشخصية والخصوصية",
      "del-title": "طلب حذف الحساب والبيانات",
      "del-app-info": "تطبيق ليبريكسا للكتب الصوتية • المطور: عمرو إمام",
      "del-intro": "في ليبريكسا، نضع خصوصيتك وملكيتك لبياناتك في مقدمة أولوياتنا. كمستخدم لليبريكسا، لديك الحق والتحكم الكامل في حذف حسابك وكافة البيانات المرتبطة بك نهائياً في أي وقت.",
      "del-method1-title": "الخيار 1: الحذف المباشر من داخل التطبيق (موصى به)",
      "del-method1-desc": "يمكنك حذف حسابك ومسح كافة البيانات المحلية والسحابية المتزامنة فوراً من داخل تطبيق ليبريكسا:",
      "del-method1-s1": "افتح تطبيق <strong>ليبريكسا</strong> على هاتفك أو ساعتك الذكية.",
      "del-method1-s2": "انتقل إلى <strong>الإعدادات</strong> > <strong>الحساب والمزامنة</strong>.",
      "del-method1-s3": "اضغط على <strong>\"حذف الحساب ومسح البيانات\"</strong>.",
      "del-method1-s4": "أكد طلبك. سيتم مسح كافة علامات المزامنة والتقدم والعلامات المرجعية فوراً.",
      "del-method2-title": "الخيار 2: نموذج تقديم طلب الحذف عبر الإنترنت",
      "del-method2-desc": "إذا لم يعد بإمكانك الوصول للتطبيق، يمكنك تقديم طلب الحذف المباشر باستخدام النموذج أدناه:",
      "del-form-email-label": "البريد الإلكتروني المسجل بالحساب *",
      "del-form-reason-label": "سبب الطلب (اختياري)",
      "del-form-checkbox": "أؤكد رغبتي في حذف حسابي بـ ليبريكسا نهائياً مع كافة بيانات تقدم الاستماع والعلامات المرجعية والإعدادات السحابية.",
      "del-form-submit": "إرسال طلب حذف الحساب",
      "del-success-title": "تم استلام الطلب بنجاح!",
      "del-success-desc": "تم تسجيل رقم المرجعية لطلبك. سيتم مسح كافة سجلات الحساب والبيانات المتزامنة نهائياً خلال 24 إلى 72 ساعة.",
      "del-table-title": "تفاصيل البيانات المحذوفة مقابل المحتفظ بها",
      "del-table-intro": "امتثالاً لسياسات مطوري جوجل بلاي ولوائح حماية البيانات العالمية (GDPR/CCPA)، إليك التفاصيل الدقيقة للتعامل مع بياناتك عند الحذف:",
      "del-th-category": "فئة البيانات",
      "del-th-status": "حالة الحذف",
      "del-th-retention": "مدة الحفظ والتفاصيل",
      "del-tr1-cat": "بيانات الحساب والملف الشخصي",
      "del-tr1-stat": "حذف نهائي ودائم",
      "del-tr1-ret": "تُمحى فوراً من السيرفرات السحابية خلال 24 إلى 72 ساعة.",
      "del-tr2-cat": "تقدم الاستماع والمتزامنات والوقت",
      "del-tr2-stat": "حذف نهائي ودائم",
      "del-tr2-ret": "تُمحى كافة علامات تقدم التشغيل وإحصائيات الاستماع بشكل دائم.",
      "del-tr3-cat": "العلامات المرجعية والملاحظات والمفضلة",
      "del-tr3-stat": "حذف نهائي ودائم",
      "del-tr3-ret": "تُمحى جميع العلامات المرجعية والتصنيفات التي أنشأها المستخدم كلياً.",
      "del-tr4-cat": "رموز تصريح Google Drive",
      "del-tr4-stat": "إلغاء ومسح كامل",
      "del-tr4-ret": "تُلغى رموز OAuth وتُمحى من قاعدة البيانات. يمكنك أيضاً إلغاء الوصول في أي وقت عبر myaccount.google.com/permissions.",
      "del-tr5-cat": "الملفات الصوتية المحملة (الذاكرة المحلية)",
      "del-tr5-stat": "تحت تحكم المستخدم (ذاكرة الجهاز)",
      "del-tr5-ret": "تظل الملفات الصوتية على ذاكرة هاتفك تحت تصرفك المحلي حتى تقوم بحذفها بنفسك عبر مدير الملفات.",
      "del-tr6-cat": "سجلات الأمان ومنع الاحتيال",
      "del-tr6-stat": "حفظ مؤقت (30 يوماً كحد أقصى)",
      "del-tr6-ret": "تُحفظ الطوابع الزمنية المجهولة لمدة 30 يوماً فقط لأغراض منع الاحتيال والامتثال القانوني، ثم تُمحى تلقائياً.",
      "del-contact-title": "هل تحتاج لمساعدة أو لديك استفسار؟",
      "del-contact-desc": "يمكنك أيضاً مراسلة المطور <strong>عمرو إمام</strong> مباشرة بطلب الحذف عبر البريد:"
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
    player: 'assets/showcase-player.webp',
    stats: 'assets/showcase-stats.webp',
    settings: 'assets/showcase-settings.webp'
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
