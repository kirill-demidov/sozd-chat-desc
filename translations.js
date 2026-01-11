const translations = {
    ru: {
        // Header
        title: "СОЗД-Чат",
        subtitle: "Аналитическая платформа для работы с законодательством Российской Федерации",
        version: "Версия 1.3.17 | 2025",

        // Problem Section
        problemTitle: "Проблема",
        problemCard1Title: "Ограниченный доступ",
        problemCard1Text: "Официальная СОЗД доступна только с территории РФ, нет гарантий постоянной открытости данных",
        problemCard2Title: "Нет аналитики",
        problemCard2Text: "Невозможно получить статистику, тренды, сравнительный анализ законотворческой деятельности",
        problemCard3Title: "Сложный поиск",
        problemCard3Text: "Поиск работает только если известны точные параметры, нет семантического поиска и AI-анализа",
        problemCard4Title: "Поправки не отражены",
        problemCard4Text: "Поправки к законопроектам никак не отражены на официальном сайте, отсутствует машиночитаемый формат",

        // Solution Section
        solutionTitle: "Наше решение",
        solutionText: "Мы создали экосистему из двух платформ: традиционную веб-систему для глубокого анализа с фильтрами и таблицами, и AI-powered платформу для работы с законодательством на естественном языке — каждая для своих задач",

        // Platforms Section
        platformsTitle: "Две платформы для разных задач",
        platformWebTitle: "СОЗД-Web",
        platformWebBadge: "Профессиональная платформа",
        platformWebDesc: "Традиционный веб-интерфейс для детального анализа и работы с большими объемами данных",
        platformWebFeature1: "Таблицы с фильтрами и сортировкой",
        platformWebFeature2: "180,000+ поправок в базе",
        platformWebFeature3: "Графики и статистика",
        platformWebFeature4: "Экспорт в Excel",
        platformWebFeature5: "Стенограммы заседаний",
        platformWebFeature6: "Рейтинги депутатов",
        platformWebLink: "Открыть СОЗД-Web →",

        platformChatTitle: "СОЗД-Chat",
        platformChatBadge: "AI-платформа",
        platformChatDesc: "ChatGPT-like интерфейс для работы с законами на естественном языке без знания SQL",
        platformChatFeature1: "Text-to-SQL (Gemini 2.5 Pro)",
        platformChatFeature2: "ChatGPT анализ законопроектов",
        platformChatFeature3: "Запросы на русском языке",
        platformChatFeature4: "История диалогов",
        platformChatFeature5: "Markdown ответы",
        platformChatFeature6: "Автовыполнение запросов",
        platformChatLink: "Открыть СОЗД-Chat →",

        // Features Section
        featuresTitle: "Детальный обзор возможностей",
        featuresLead: "Полный набор инструментов для работы с законодательством на всех уровнях",

        // Stats Section
        statsTitle: "Данные платформы",
        stat1Number: "180,000+",
        stat1Label: "Поправок",
        stat2Number: "1M+",
        stat2Label: "Документов",
        stat3Number: "40,000+",
        stat3Label: "Законопроектов",
        stat4Number: "20+",
        stat4Label: "Модулей анализа",

        // CTA Section
        ctaTitle: "Начните работать с платформами",
        ctaText: "Выберите инструмент под вашу задачу или используйте обе платформы вместе",
        ctaWebTitle: "СОЗД-Web",
        ctaWebText: "Для профессионального анализа",
        ctaWebButton: "Открыть СОЗД-Web",
        ctaChatTitle: "СОЗД-Chat",
        ctaChatText: "Для запросов на естественном языке",
        ctaChatButton: "Открыть СОЗД-Chat",
        ctaRyndaButton: "Канал \"Рында\"",
        ctaBotButton: "Telegram бот",
        ctaContact: "Или напишите нам:",

        // Footer
        footerText: "СОЗД-Чат. Аналитическая платформа для работы с законодательством РФ",
        footerVersion: "Версия 1.3.17 от 21.08.2025",

        // Features Section - Text-to-SQL
        feature1Title: "Text-to-SQL интерфейс",
        feature1Item1: "Запросы на русском языке:",
        feature1Item1Desc: '"Найди законы про налоги за 2023" → автоматический SQL',
        feature1Item2: "Gemini 2.5 Pro:",
        feature1Item2Desc: "Google AI для понимания сложных запросов и генерации SQL",
        feature1Item3: "Автоматическое выполнение:",
        feature1Item3Desc: "SQL генерируется и выполняется мгновенно",
        feature1Item4: "Таблицы результатов:",
        feature1Item4Desc: "красивое отображение данных с экспортом в CSV",
        feature1Item5: "Подсветка кода:",
        feature1Item5Desc: "показ сгенерированного SQL с форматированием",

        // Features Section - ChatGPT
        feature2Title: "ChatGPT интерфейс для анализа",
        feature2Item1: "ChatGPT-like чат:",
        feature2Item1Desc: "диалоговый интерфейс для работы с законодательством",
        feature2Item2: "Анализ законопроектов:",
        feature2Item2Desc: "автоматическое извлечение основной идеи из пояснительных записок",
        feature2Item3: "GPT-3.5/GPT-4/GPT-4o:",
        feature2Item3Desc: "выбор модели для саммаризации и анализа",
        feature2Item4: "История чатов:",
        feature2Item4Desc: "сохранение всех диалогов с возможностью экспорта",
        feature2Item5: "Markdown поддержка:",
        feature2Item5Desc: "форматированные ответы с кодом и таблицами",

        // Features Section - Amendments
        feature3Title: "Работа с поправками",
        feature3Item1: "180,000+ поправок",
        feature3Item1Desc: "в машиночитаемом формате",
        feature3Item2: "Фильтрация:",
        feature3Item2Desc: "по автору, законопроекту, дате, резолюции",
        feature3Item3: "Классификация:",
        feature3Item3Desc: "технические, косметические, принципиальные",
        feature3Item4: "NLP-анализ:",
        feature3Item4Desc: "выявление паттернов и взаимосвязей между поправками",
        feature3Mockup: "Поправки",

        // Features Section - Analytics
        feature4Title: "Аналитика и статистика",
        feature4Item1: "Сравнение созывов:",
        feature4Item1Desc: "динамика законотворчества по сессиям и годам",
        feature4Item2: "Активность инициаторов:",
        feature4Item2Desc: "рейтинги депутатов, фракций, комитетов",
        feature4Item3: '"Экспресс-законы":',
        feature4Item3Desc: "выявление ускоренных процедур принятия",
        feature4Item4: "Голосования:",
        feature4Item4Desc: "статистика по фракциям и депутатам",
        feature4Item5: "Визуализация:",
        feature4Item5Desc: "интерактивные графики и таблицы",
        feature4Mockup: "Графики",

        // Features Section - Search
        feature5Title: "Расширенный поиск",
        feature5Item1: "Векторный поиск:",
        feature5Item1Desc: "семантический поиск похожих законопроектов через BERT-эмбеддинги",
        feature5Item2: "По стенограммам:",
        feature5Item2Desc: "поиск ключевых слов в выступлениях депутатов",
        feature5Item3: "Фильтры:",
        feature5Item3Desc: "по году, сессии, статусу, инициатору, теме",
        feature5Item4: "Полнотекстовый поиск:",
        feature5Item4Desc: "по названиям и содержимому документов",
        feature5Mockup: "Поиск",

        // Features Section - Documents
        feature6Title: "Хранение документов",
        feature6Item1: "1M+ документов",
        feature6Item1Desc: "в Google Cloud Storage",
        feature6Item2: "Постоянный доступ:",
        feature6Item2Desc: "документы сохраняются, даже если исчезнут с СОЗД",
        feature6Item3: "Без VPN:",
        feature6Item3Desc: "работа из любой точки мира",
        feature6Item4: "Форматы:",
        feature6Item4Desc: "PDF, DOCX, текстовые версии",
        feature6Mockup: "Облако",

        // Features Section - Document Types
        feature8Title: "Типы документов",
        feature8Item1: "Тексты законопроектов и поправок:",
        feature8Item1Desc: "принятые и отклоненные",
        feature8Item2: "Стенограммы заседаний:",
        feature8Item2Desc: "Государственной Думы",
        feature8Item3: "Результаты голосования:",
        feature8Item3Desc: "депутатов",
        feature8Item4: "Тексты принятых документов:",
        feature8Item4Desc: "законы, постановления, резолюции, протоколы",
        feature8Item5: "Доступность:",
        feature8Item5Desc: "все это доступно без ограничений",
        feature8Mockup: "Документы",

        // Features Section - Telegram
        feature7Title: "Telegram экосистема",
        feature7Item1: '"Рында Госдумы РФ"',
        feature7Item1Desc: "- канал с автоматическими уведомлениями в реальном времени",
        feature7Item2: "Новые законопроекты:",
        feature7Item2Desc: "мгновенное оповещение о законопроектах от отслеживаемых депутатов",
        feature7Item3: "Движение законов:",
        feature7Item3Desc: "автоматические обновления о статусах и изменениях",
        feature7Item4: "@dsi_sozd_bot",
        feature7Item4Desc: "- персональный аналитик для запросов по активности депутатов",
        feature7Item5: "Умная фильтрация:",
        feature7Item5Desc: "настраиваемый список отслеживаемых инициаторов",
        feature7Item6: "AI саммари:",
        feature7Item6Desc: "автоматическое извлечение основной идеи законопроекта через ChatGPT",

        // Tech Stack Section
        techTitle: "Технологический стек",
        techBackend: "Backend",
        techAI: "AI/ML",
        techCloud: "Облачные сервисы",
        techIntegrations: "Интеграции",
        techDocs: "Обработка документов",

        // Capabilities Section
        capabilitiesTitle: "Что можно делать с платформой",
        capability1: "Отслеживать все законопроекты конкретного депутата или комитета",
        capability2: 'Анализировать скорость принятия законов и выявлять "экспресс-законы"',
        capability3: "Сравнивать эффективность работы разных созывов и сессий",
        capability4: "Находить законопроекты через чат на естественном языке без знания SQL",
        capability5: "Использовать AI для автогенерации SQL-запросов из русскоязычных вопросов",
        capability6: "Изучать кто и как голосовал по конкретным вопросам",
        capability7: "Анализировать поправки и их влияние на итоговый текст закона",
        capability8: "Отслеживать упоминания ключевых тем в стенограммах заседаний",
        capability9: "Получать краткие саммари законопроектов через ChatGPT",
        capability10: 'Подписаться на канал "Рында Госдумы РФ" для получения уведомлений в реальном времени',
        capability11: "Использовать Telegram бота для быстрого доступа к аналитике депутатов",
        capability12: "Настроить список отслеживаемых депутатов для персонализированных уведомлений",

        // Use Cases Section
        useCasesTitle: "Для кого эта платформа",
        useCase1Title: "Юристы",
        useCase1Desc: "Быстрый поиск релевантных законопроектов, отслеживание изменений законодательства, анализ правовых трендов",
        useCase2Title: "Аналитики",
        useCase2Desc: "Статистика законотворчества, выявление паттернов, сравнительный анализ работы депутатов и комитетов",
        useCase3Title: "Журналисты",
        useCase3Desc: "Мониторинг законодательной деятельности, поиск инсайтов, проверка фактов о голосованиях",
        useCase4Title: "Исследователи",
        useCase4Desc: "Академические исследования законотворческого процесса, доступ к архивам, работа с big data",
        useCase5Title: "НКО и активисты",
        useCase5Desc: "Отслеживание важных законопроектов, участие в общественном обсуждении, адвокация",
        useCase6Title: "Бизнес",
        useCase6Desc: "Мониторинг законодательства в вашей отрасли, оценка регуляторных рисков",

        // Advantages Section
        advantagesTitle: "Преимущества перед официальной СОЗД",
        advantage1Title: "Глобальный доступ",
        advantage1Desc: "Работает из любой точки мира без VPN",
        advantage2Title: "AI-интерфейс",
        advantage2Desc: "ChatGPT-like чат для поиска на естественном языке",
        advantage3Title: "Архив документов",
        advantage3Desc: "Все документы сохранены навсегда",
        advantage4Title: "Развитая аналитика",
        advantage4Desc: "Графики, статистика, тренды, рейтинги",
        advantage5Title: "Умный поиск",
        advantage5Desc: "Семантический и векторный поиск",
        advantage6Title: "База поправок",
        advantage6Desc: "180K поправок в структурированном виде",
        advantage7Title: 'Канал "Рында"',
        advantage7Desc: "Уведомления о новых законах в реальном времени",
        advantage8Title: "Telegram бот",
        advantage8Desc: "Персональная аналитика по депутатам",
        advantage9Title: "Умная фильтрация",
        advantage9Desc: "Следите только за нужными инициаторами"
    },

    en: {
        // Header
        title: "SOZD-Chat",
        subtitle: "Analytical platform for working with Russian legislation",
        version: "Version 1.3.17 | 2025",

        // Problem Section
        problemTitle: "Problem",
        problemCard1Title: "Limited Access",
        problemCard1Text: "Official SOZD is only accessible from Russian territory, no guarantees of permanent data openness",
        problemCard2Title: "No Analytics",
        problemCard2Text: "Impossible to get statistics, trends, comparative analysis of legislative activity",
        problemCard3Title: "Complex Search",
        problemCard3Text: "Search only works if exact parameters are known, no semantic search and AI analysis",
        problemCard4Title: "Amendments Not Displayed",
        problemCard4Text: "Bill amendments are not displayed on the official website, machine-readable format is absent",

        // Solution Section
        solutionTitle: "Our Solution",
        solutionText: "We created an ecosystem of two platforms: a traditional web system for deep analysis with filters and tables, and an AI-powered platform for working with legislation in natural language — each for its own tasks",

        // Platforms Section
        platformsTitle: "Two Platforms for Different Tasks",
        platformWebTitle: "SOZD-Web",
        platformWebBadge: "Professional Platform",
        platformWebDesc: "Traditional web interface for detailed analysis and working with large volumes of data",
        platformWebFeature1: "Tables with filters and sorting",
        platformWebFeature2: "180,000+ amendments in database",
        platformWebFeature3: "Charts and statistics",
        platformWebFeature4: "Export to Excel",
        platformWebFeature5: "Session transcripts",
        platformWebFeature6: "Deputy ratings",
        platformWebLink: "Open SOZD-Web →",

        platformChatTitle: "SOZD-Chat",
        platformChatBadge: "AI Platform",
        platformChatDesc: "ChatGPT-like interface for working with laws in natural language without SQL knowledge",
        platformChatFeature1: "Text-to-SQL (Gemini 2.5 Pro)",
        platformChatFeature2: "ChatGPT bill analysis",
        platformChatFeature3: "Queries in Russian",
        platformChatFeature4: "Chat history",
        platformChatFeature5: "Markdown responses",
        platformChatFeature6: "Query auto-completion",
        platformChatLink: "Open SOZD-Chat →",

        // Features Section
        featuresTitle: "Detailed Feature Overview",
        featuresLead: "Complete set of tools for working with legislation at all levels",

        // Stats Section
        statsTitle: "Platform Data",
        stat1Number: "180,000+",
        stat1Label: "Amendments",
        stat2Number: "1M+",
        stat2Label: "Documents",
        stat3Number: "40,000+",
        stat3Label: "Bills",
        stat4Number: "20+",
        stat4Label: "Analysis Modules",

        // CTA Section
        ctaTitle: "Start Working with Platforms",
        ctaText: "Choose the tool for your task or use both platforms together",
        ctaWebTitle: "SOZD-Web",
        ctaWebText: "For professional analysis",
        ctaWebButton: "Open SOZD-Web",
        ctaChatTitle: "SOZD-Chat",
        ctaChatText: "For natural language queries",
        ctaChatButton: "Open SOZD-Chat",
        ctaRyndaButton: "\"Rynda\" Channel",
        ctaBotButton: "Telegram Bot",
        ctaContact: "Or contact us:",

        // Footer
        footerText: "SOZD-Chat. Analytical platform for working with Russian legislation",
        footerVersion: "Version 1.3.17 from 21.08.2025",

        // Features Section - Text-to-SQL
        feature1Title: "Text-to-SQL Interface",
        feature1Item1: "Queries in Russian:",
        feature1Item1Desc: '"Find tax laws for 2023" → automatic SQL',
        feature1Item2: "Gemini 2.5 Pro:",
        feature1Item2Desc: "Google AI for understanding complex queries and generating SQL",
        feature1Item3: "Automatic execution:",
        feature1Item3Desc: "SQL is generated and executed instantly",
        feature1Item4: "Result tables:",
        feature1Item4Desc: "beautiful data display with CSV export",
        feature1Item5: "Code highlighting:",
        feature1Item5Desc: "display of generated SQL with formatting",

        // Features Section - ChatGPT
        feature2Title: "ChatGPT Interface for Analysis",
        feature2Item1: "ChatGPT-like chat:",
        feature2Item1Desc: "conversational interface for working with legislation",
        feature2Item2: "Bill analysis:",
        feature2Item2Desc: "automatic extraction of main ideas from explanatory notes",
        feature2Item3: "GPT-3.5/GPT-4/GPT-4o:",
        feature2Item3Desc: "model selection for summarization and analysis",
        feature2Item4: "Chat history:",
        feature2Item4Desc: "saving all conversations with export capability",
        feature2Item5: "Markdown support:",
        feature2Item5Desc: "formatted responses with code and tables",

        // Features Section - Amendments
        feature3Title: "Working with Amendments",
        feature3Item1: "180,000+ amendments",
        feature3Item1Desc: "in machine-readable format",
        feature3Item2: "Filtering:",
        feature3Item2Desc: "by author, bill, date, resolution",
        feature3Item3: "Classification:",
        feature3Item3Desc: "technical, cosmetic, fundamental",
        feature3Item4: "NLP analysis:",
        feature3Item4Desc: "identifying patterns and relationships between amendments",
        feature3Mockup: "Amendments",

        // Features Section - Analytics
        feature4Title: "Analytics and Statistics",
        feature4Item1: "Convocation comparison:",
        feature4Item1Desc: "legislative dynamics by sessions and years",
        feature4Item2: "Initiator activity:",
        feature4Item2Desc: "ratings of deputies, factions, committees",
        feature4Item3: '"Express laws":',
        feature4Item3Desc: "identifying accelerated adoption procedures",
        feature4Item4: "Voting:",
        feature4Item4Desc: "statistics by factions and deputies",
        feature4Item5: "Visualization:",
        feature4Item5Desc: "interactive charts and tables",
        feature4Mockup: "Charts",

        // Features Section - Search
        feature5Title: "Advanced Search",
        feature5Item1: "Vector search:",
        feature5Item1Desc: "semantic search for similar bills through BERT embeddings",
        feature5Item2: "By transcripts:",
        feature5Item2Desc: "keyword search in deputy speeches",
        feature5Item3: "Filters:",
        feature5Item3Desc: "by year, session, status, initiator, topic",
        feature5Item4: "Full-text search:",
        feature5Item4Desc: "by document titles and contents",
        feature5Mockup: "Search",

        // Features Section - Documents
        feature6Title: "Document Storage",
        feature6Item1: "1M+ documents",
        feature6Item1Desc: "in Google Cloud Storage",
        feature6Item2: "Permanent access:",
        feature6Item2Desc: "documents are saved even if they disappear from SOZD",
        feature6Item3: "No VPN:",
        feature6Item3Desc: "work from anywhere in the world",
        feature6Item4: "Formats:",
        feature6Item4Desc: "PDF, DOCX, text versions",
        feature6Mockup: "Cloud",

        // Features Section - Document Types
        feature8Title: "Document Types",
        feature8Item1: "Bill texts and amendments:",
        feature8Item1Desc: "adopted and rejected",
        feature8Item2: "Session transcripts:",
        feature8Item2Desc: "State Duma",
        feature8Item3: "Voting results:",
        feature8Item3Desc: "deputies",
        feature8Item4: "Adopted document texts:",
        feature8Item4Desc: "laws, resolutions, decisions, protocols",
        feature8Item5: "Availability:",
        feature8Item5Desc: "all available without restrictions",
        feature8Mockup: "Documents",

        // Features Section - Telegram
        feature7Title: "Telegram Ecosystem",
        feature7Item1: '"Rynda of State Duma"',
        feature7Item1Desc: "- channel with automatic real-time notifications",
        feature7Item2: "New bills:",
        feature7Item2Desc: "instant alerts about bills from tracked deputies",
        feature7Item3: "Bill movement:",
        feature7Item3Desc: "automatic updates on statuses and changes",
        feature7Item4: "@dsi_sozd_bot",
        feature7Item4Desc: "- personal analyst for deputy activity queries",
        feature7Item5: "Smart filtering:",
        feature7Item5Desc: "customizable list of tracked initiators",
        feature7Item6: "AI summaries:",
        feature7Item6Desc: "automatic extraction of bill's main idea via ChatGPT",

        // Tech Stack Section
        techTitle: "Technology Stack",
        techBackend: "Backend",
        techAI: "AI/ML",
        techCloud: "Cloud Services",
        techIntegrations: "Integrations",
        techDocs: "Document Processing",

        // Capabilities Section
        capabilitiesTitle: "What You Can Do with the Platform",
        capability1: "Track all bills from a specific deputy or committee",
        capability2: 'Analyze law adoption speed and identify "express laws"',
        capability3: "Compare the effectiveness of different convocations and sessions",
        capability4: "Find bills through chat in natural language without SQL knowledge",
        capability5: "Use AI to auto-generate SQL queries from Russian-language questions",
        capability6: "Study who voted how on specific issues",
        capability7: "Analyze amendments and their impact on the final text of the law",
        capability8: "Track mentions of key topics in session transcripts",
        capability9: "Get brief summaries of bills via ChatGPT",
        capability10: 'Subscribe to "Rynda of State Duma" channel for real-time notifications',
        capability11: "Use Telegram bot for quick access to deputy analytics",
        capability12: "Configure a list of tracked deputies for personalized notifications",

        // Use Cases Section
        useCasesTitle: "Who This Platform Is For",
        useCase1Title: "Lawyers",
        useCase1Desc: "Quick search for relevant bills, tracking legislative changes, analyzing legal trends",
        useCase2Title: "Analysts",
        useCase2Desc: "Legislative statistics, pattern identification, comparative analysis of deputy and committee work",
        useCase3Title: "Journalists",
        useCase3Desc: "Monitoring legislative activity, finding insights, fact-checking voting records",
        useCase4Title: "Researchers",
        useCase4Desc: "Academic research on legislative process, archive access, big data work",
        useCase5Title: "NGOs and Activists",
        useCase5Desc: "Tracking important bills, participating in public discussion, advocacy",
        useCase6Title: "Business",
        useCase6Desc: "Monitoring legislation in your industry, assessing regulatory risks",

        // Advantages Section
        advantagesTitle: "Advantages Over Official SOZD",
        advantage1Title: "Global Access",
        advantage1Desc: "Works from anywhere in the world without VPN",
        advantage2Title: "AI Interface",
        advantage2Desc: "ChatGPT-like chat for natural language search",
        advantage3Title: "Document Archive",
        advantage3Desc: "All documents saved forever",
        advantage4Title: "Advanced Analytics",
        advantage4Desc: "Charts, statistics, trends, ratings",
        advantage5Title: "Smart Search",
        advantage5Desc: "Semantic and vector search",
        advantage6Title: "Amendment Database",
        advantage6Desc: "180K amendments in structured form",
        advantage7Title: '"Rynda" Channel',
        advantage7Desc: "Real-time notifications about new laws",
        advantage8Title: "Telegram Bot",
        advantage8Desc: "Personal analytics on deputies",
        advantage9Title: "Smart Filtering",
        advantage9Desc: "Track only the initiators you need"
    }
};

// Language switching functionality
let currentLang = localStorage.getItem('lang') || 'ru';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];

        for (const k of keys) {
            translation = translation[k];
        }

        if (translation) {
            element.textContent = translation;
        }
    });

    // Update language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});
