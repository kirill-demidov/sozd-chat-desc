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

> **⚠️ Если домен хостится на GoDaddy:** GoDaddy не поддерживает reverse proxy напрямую. Используйте **Вариант 2** (поддомен `desc.sozd-chat.org`) - это самый простой способ. Подробная инструкция: см. файл [GODADDY-SETUP.md](GODADDY-SETUP.md).

1. **Вариант 1: Через nginx/reverse proxy** (рекомендуется для `/desc`)
   
   Настройте nginx на сервере домена `sozd-chat.org`. Добавьте в конфигурацию nginx:
   
   ```nginx
   location /desc {
       # Убираем /desc из пути и проксируем на GitHub Pages
       rewrite ^/desc/?(.*)$ /sozd-chat-desc/$1 break;
       proxy_pass https://kirill-demidov.github.io;
       proxy_set_header Host kirill-demidov.github.io;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
       proxy_set_header X-Forwarded-Host $host;
       
       # Поддержка WebSocket (если понадобится)
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection "upgrade";
       
       # Кэширование статических файлов
       proxy_cache_valid 200 302 1h;
       proxy_cache_valid 404 1m;
       
       # Обработка redirects
       proxy_redirect https://kirill-demidov.github.io/sozd-chat-desc/ /desc/;
   }
   ```
   
   После изменения конфигурации nginx:
   ```bash
   sudo nginx -t  # Проверить конфигурацию
   sudo systemctl reload nginx  # Перезагрузить nginx
   ```

2. **Вариант 2: Поддомен `desc.sozd-chat.org`** (рекомендуется для GoDaddy)
   
   Настройте поддомен через DNS на GoDaddy:
   
   **Шаги:**
   1. Зайдите в панель управления GoDaddy: https://sso.godaddy.com/
   2. Перейдите в **My Products** → **DNS** для домена `sozd-chat.org`
   3. Добавьте новую **CNAME запись**:
      - **Name/Host**: `desc`
      - **Value/Points to**: `kirill-demidov.github.io`
      - **TTL**: 600 (или оставьте по умолчанию)
   4. Сохраните изменения
   5. Обновите файл `CNAME` в репозитории на `desc.sozd-chat.org`
   6. Подождите 10-30 минут для распространения DNS
   
   Сайт будет доступен на: `https://desc.sozd-chat.org`

3. **Вариант 3: Через Cloudflare** (для поддиректории `/desc`)
   
   Если используете Cloudflare:
   1. Добавьте домен `sozd-chat.org` в Cloudflare
   2. В **Rules** → **Transform Rules** → **Rewrite URL** создайте правило:
      - **When**: `http.host eq "sozd-chat.org" and http.request.uri.path starts_with "/desc"`
      - **Then**: Rewrite to static `/sozd-chat-desc/{{regexp(http.request.uri.path, "^/desc(/.*)$", "\1")}}`
   3. Добавьте **Page Rule** для проксирования на GitHub Pages

4. **Вариант 4: Основной домен на GitHub Pages**
   
   Если весь домен `sozd-chat.org` может быть на GitHub Pages:
   - Настройте DNS на GoDaddy с A-записями на IP GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Обновите `CNAME` на `sozd-chat.org`
   - Разместите контент основного сайта в поддиректории, а этот репозиторий в `/desc`

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
