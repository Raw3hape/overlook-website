# 📱 Инструкция по деплою сайта Overlook на GitHub Pages

## ✅ Что уже сделано:
1. Создан полноценный вебсайт с главной страницей, Privacy Policy и Terms of Service
2. Инициализирован Git репозиторий
3. Созданы все необходимые файлы для GitHub Pages
4. Добавлен CNAME файл для домена overlook.app
5. Настроен GitHub Actions для автоматического деплоя

## 🚀 Что нужно сделать вам:

### Шаг 1: Создайте репозиторий на GitHub
1. Зайдите на https://github.com
2. Нажмите кнопку "New" (зеленая кнопка)
3. Назовите репозиторий: `overlook-website` (или любое другое имя)
4. Сделайте его публичным (Public)
5. НЕ инициализируйте с README (у нас уже есть файлы)
6. Нажмите "Create repository"

### Шаг 2: Загрузите код на GitHub
Скопируйте и выполните эти команды в терминале:

```bash
cd "/Users/nikita/Desktop/Apps/Camera RAW/overlook-website"
git remote add origin https://github.com/ВАШ_ЮЗЕРНЕЙМ/overlook-website.git
git push -u origin main
```

Замените `ВАШ_ЮЗЕРНЕЙМ` на ваш username на GitHub.

### Шаг 3: Включите GitHub Pages
1. Откройте ваш репозиторий на GitHub
2. Перейдите в Settings (вкладка справа)
3. Прокрутите до секции "Pages" в левом меню
4. В разделе "Build and deployment":
   - Source: выберите "GitHub Actions"
5. Сохраните изменения

### Шаг 4: Дождитесь деплоя
1. Перейдите во вкладку "Actions" в вашем репозитории
2. Вы увидите workflow "Deploy static content to Pages"
3. Подождите пока он завершится (зеленая галочка)
4. Ваш сайт будет доступен по адресу: https://ВАШ_ЮЗЕРНЕЙМ.github.io/overlook-website/

### Шаг 5: Настройте кастомный домен (когда купите overlook.app)
1. Купите домен overlook.app на Namecheap/GoDaddy/Google Domains
2. В настройках домена добавьте записи:
   - Тип: A, IP: 185.199.108.153
   - Тип: A, IP: 185.199.109.153
   - Тип: A, IP: 185.199.110.153
   - Тип: A, IP: 185.199.111.153
   - Тип: CNAME, Name: www, Value: ВАШ_ЮЗЕРНЕЙМ.github.io
3. В настройках GitHub Pages введите overlook.app в поле "Custom domain"
4. Включите "Enforce HTTPS"

## 📝 Обновление контента
Чтобы обновить сайт в будущем:
1. Отредактируйте нужные файлы
2. Выполните в терминале:
```bash
cd "/Users/nikita/Desktop/Apps/Camera RAW/overlook-website"
git add .
git commit -m "Описание изменений"
git push
```

## 🎯 Важные замечания:
- Не забудьте обновить App Store ID в index.html (сейчас там id6738952360)
- Email support@overlook.app должен быть рабочим
- GitHub Pages бесплатен для публичных репозиториев
- HTTPS включается автоматически

## 🔗 Полезные ссылки:
- GitHub Pages документация: https://pages.github.com
- Проверка DNS: https://dnschecker.org
- Статус GitHub Pages: https://www.githubstatus.com

Удачи с запуском! 🚀