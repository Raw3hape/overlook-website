# Инструкция по деплою на GitHub Pages

## 🚀 Шаги для развертывания

### 1. Создайте новый репозиторий на GitHub
Название: `overlook-website` (или любое другое)

### 2. Инициализируйте Git и добавьте файлы
```bash
cd /Users/nikita/Desktop/Apps/Camera\ RAW/overlook-website-new
git init
git add .
git commit -m "Initial commit - new Overlook website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/overlook-website.git
git push -u origin main
```

### 3. Настройте GitHub Pages
1. Перейдите в Settings → Pages
2. Source: выберите "GitHub Actions"
3. Сохраните настройки

### 4. Добавьте кастомный домен (если есть)
1. В Settings → Pages → Custom domain
2. Введите: `overlook.app`
3. Настройте DNS записи у вашего регистратора домена:
   - A запись на: 185.199.108.153
   - A запись на: 185.199.109.153
   - A запись на: 185.199.110.153
   - A запись на: 185.199.111.153
   - CNAME запись: www → YOUR_USERNAME.github.io

### 5. Деплой произойдет автоматически
После пуша в main ветку, GitHub Actions автоматически:
- Соберет статический сайт
- Развернет его на GitHub Pages
- Сайт будет доступен по адресу overlook.app

## 📁 Важные файлы

- `.github/workflows/deploy.yml` - конфигурация GitHub Actions
- `public/CNAME` - кастомный домен
- `public/.nojekyll` - отключает Jekyll обработку
- `next.config.ts` - настройки для статического экспорта

## 🖼️ Добавление изображений

Поместите изображения в папку `public/images/`:
- `/images/hero-bg.jpg` - фон для hero секции
- `/images/iphone-hero.png` - iPhone с приложением
- `/images/feature-*.jpg` - изображения для функций
- `/images/gallery/*.jpg` - фотографии для галереи
- `/images/blog/*.jpg` - обложки статей
- `/images/testimonials/*.jpg` - аватары пользователей

## 🔧 Локальная проверка

```bash
# Сборка статического сайта
npm run build

# Проверка собранного сайта
npx serve out
```

## ⚡ Обновления

Для обновления сайта просто пушьте изменения в main ветку:
```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions автоматически пересоберет и развернет сайт.