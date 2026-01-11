# Презентационный сайт СОЗД-Чат

Это презентационная страница аналитической платформы СОЗД-Чат.

## Описание

Современный одностраничный сайт (single-page website) с описанием возможностей платформы для работы с законодательством РФ.

## Структура

- `index.html` - основная HTML-страница
- `style.css` - стили оформления
- `README.md` - этот файл

## Технологии

- Чистый HTML5/CSS3
- Адаптивный дизайн (responsive design)
- CSS Grid и Flexbox
- CSS анимации
- Vanilla JavaScript для плавной прокрутки и анимаций

## Локальный запуск

Для локального просмотра:

```bash
cd desc
python3 -m http.server 8000
```

Затем откройте в браузере: `http://localhost:8000`

## Деплой на GitHub Pages

Сайт настроен для работы по адресу: `sozd-chat.org/desc`

### Настройка GitHub Pages:

1. Откройте Settings репозитория на GitHub
2. Перейдите в раздел "Pages"
3. В "Source" выберите "GitHub Actions" (вместо ветки)
4. Файл `.github/workflows/deploy.yml` автоматически настроит деплой
5. После первого push в ветку `main` или `master`, GitHub Actions автоматически задеплоит сайт

### Автоматический деплой:

- При каждом push в ветку `main` или `master` автоматически запускается деплой
- GitHub Actions использует новый метод деплоя (Pages API)
- Сайт будет доступен по адресу: `https://kirill-demidov.github.io/sozd-chat-desc/`

### Настройка для работы на `sozd-chat.org/desc`:

Для размещения сайта на поддиректории основного домена `sozd-chat.org/desc`:

1. **Вариант 1: Через nginx/reverse proxy**
   - Настройте nginx на сервере домена `sozd-chat.org` для proxy на GitHub Pages
   - Пример конфигурации nginx:
   ```nginx
   location /desc {
       proxy_pass https://kirill-demidov.github.io/sozd-chat-desc/;
       proxy_set_header Host kirill-demidov.github.io;
   }
   ```

2. **Вариант 2: Через DNS и CNAME**
   - Файл `CNAME` содержит `sozd-chat.org`
   - Настройте DNS для основного домена `sozd-chat.org`:
     - A-записи на IP GitHub Pages: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Или используйте поддомен `desc.sozd-chat.org` с CNAME на `kirill-demidov.github.io`

### Файлы для GitHub Pages:

- `.nojekyll` - отключает обработку Jekyll для статических файлов
- `CNAME` - настройка кастомного домена
- `.github/workflows/deploy.yml` - автоматический деплой через GitHub Actions

## Обновление контента

Для обновления информации на сайте:

1. Отредактируйте `index.html` для изменения контента
2. Отредактируйте `style.css` для изменения стилей
3. Закоммитьте и запушьте изменения в репозиторий
4. GitHub Pages автоматически обновит сайт в течение нескольких минут

## Версия

Текущая версия платформы: **1.3.17** (21.08.2025)

При обновлении версии не забудьте изменить номер версии в `index.html` в двух местах:
- В секции hero: `<div class="version">Версия X.X.X | 2025</div>`
- В footer: `<p class="version-footer">Версия X.X.X от ДД.ММ.ГГГГ</p>`
