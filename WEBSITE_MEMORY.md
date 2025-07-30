# Overlook Website Memory Document

## Текущее состояние сайта (30 января 2025)

### Что показывается на сайте
- **Hero секция**: Скриншот анализа фото из приложения (Frame 23.png)
- **AI-Powered Analysis**: Изображение прогресса пользователя (6x9_1-1.png) 
- **Photography Challenges**: Экран с челленджами (Frame 22.png)
- **Learn While Shooting**: Основной экран приложения (6x9_1.png)
- **CTA секция**: iPhone мокап с приложением (iPhone.png)

### Что НЕ показывается
- ❌ Фейковые рейтинги App Store (было 4.8)
- ❌ Фейковое количество пользователей (было 10K+)
- ❌ Секция "Track Your Progress" (удалена из How It Works)
- ❌ Стеклянные карточки и желтое свечение на изображениях

### Текущие сообщения
- "Coming soon to the App Store" вместо рейтингов
- "50+ Photo Challenges" - единственная реальная статистика

## История изменений изображений

### Последние изменения (30.01.2025)
1. **Hero Section**: 
   - Было: iPhone.png (мокап телефона)
   - Стало: Frame 23.png (экран анализа)

2. **AI-Powered Analysis**:
   - Было: Frame 23.png 
   - Стало: 6x9_1-1.png (прогресс трекинг)

3. **CTA Section**:
   - Было: пусто
   - Стало: iPhone.png (перенесен из Hero)

4. **How It Works**:
   - Было: 4 шага + секция Track Your Progress с 6x9_1-1.png
   - Стало: только 4 шага (секция удалена)

## Структура изображений на сайте

```
Hero Section
└── Frame 23.png - Экран анализа фотографии с AI feedback

Feature Section (3 features)
├── Photography Challenges
│   └── Frame 22.png - Список челленджей
├── AI-Powered Analysis  
│   └── 6x9_1-1.png - График прогресса пользователя
└── Learn While Shooting
    └── 6x9_1.png - Главный экран приложения

Results Gallery
└── 6 примеров фото (photo1-6.jpg)

CTA Section
└── iPhone.png - iPhone мокап с приложением
```

## Важные пути к изображениям
Все изображения должны использовать полный путь с base path:
- ✅ Правильно: `/overlook-website/images/Frame 23.png`
- ❌ Неправильно: `/images/Frame 23.png`

## Контент который можно обновлять

### Testimonials (отзывы)
Текущие отзывы от:
- Sarah Mitchell - Landscape Photographer
- Michael Chen - Street Photographer  
- Emma Rodriguez - Portrait Photographer

### Results Gallery
6 примеров фото с оценками композиции

### Тексты features
Каждая feature имеет 4 bullet points, которые можно менять

## Что нужно помнить при работе

1. **Никаких фейковых метрик** - только реальные данные
2. **Все изображения с полным путем** - включая /overlook-website/
3. **"Coming soon"** - пока приложение не в App Store
4. **Простой дизайн** - без стеклянных эффектов и свечения
5. **Пользователь понимает русский** - может писать на русском

## Технические детали для обновления

### Чтобы изменить изображение:
1. Загрузить новое в `/public/images/`
2. Обновить путь в соответствующем компоненте
3. Запустить `npm run build`
4. Закоммитить изменения включая папку `/out/`
5. Запушить в GitHub

### Компоненты с изображениями:
- `components/HeroSection.tsx` - главное изображение
- `components/FeatureSection.tsx` - 3 изображения features
- `components/ResultsGallery.tsx` - примеры фото
- `components/CTASection.tsx` - iPhone мокап

## Будущие обновления
- [ ] Добавить реальные ссылки на App Store когда приложение выйдет
- [ ] Обновить отзывы на реальные от пользователей
- [ ] Добавить больше примеров фото в галерею
- [ ] Создать иконки для manifest.json (192x192 и 512x512)