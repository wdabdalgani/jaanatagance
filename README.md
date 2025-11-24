# Jannat Systems - iOS Style Interface

## 📱 نظرة عامة
تطبيق ويب بأسلوب Apple الرسمي متوافق 100% مع iOS Human Interface Guidelines.

## ✨ المميزات الرئيسية

### 🎨 تصميم iOS الأصلي
- **San Francisco Font**: استخدام خط Apple الرسمي
- **نظام الألوان**: ألوان iOS الرسمية (Light & Dark Mode)
- **Safe Areas**: دعم كامل لمناطق الأمان في الأجهزة الحديثة
- **Blur Effects**: تأثيرات الضبابية الزجاجية المميزة لـ iOS

### 🧭 التنقل
- **Navigation Bar**: شريط تنقل علوي بأسلوب iOS
- **Tab Bar**: شريط تبويب سفلي للأقسام الرئيسية (44px touch targets)
- **Large Titles**: عناوين كبيرة بأسلوب iOS 11+

### 🌓 الوضع الليلي
- دعم تلقائي للوضع الليلي
- تبديل سلس بين الأوضاع
- ألوان متوافقة مع معايير Apple

### 🎯 التفاعل
- **Touch Targets**: جميع الأزرار 44×44px (معيار Apple)
- **Haptic Feedback**: ردود فعل لمسية (للأجهزة الداعمة)
- **Smooth Animations**: حركات انتقال سلسة (200-300ms)
- **Active States**: حالات نشطة واضحة عند اللمس

### 🌍 دعم اللغات
- العربية (RTL)
- الإنجليزية (LTR)
- الفرنسية (LTR)
- Segmented Control بأسلوب iOS

### ♿ إمكانية الوصول
- دعم كامل لـ ARIA labels
- تنقل بلوحة المفاتيح
- دعم Reduced Motion
- Semantic HTML

## 📐 معايير التصميم

### المسافات (Spacing)
```css
--spacing-xs: 8px
--spacing-sm: 12px
--spacing-md: 16px
--spacing-lg: 20px
--spacing-xl: 24px
```

### أحجام الخطوط (Typography)
```css
--font-size-large-title: 34px
--font-size-title1: 28px
--font-size-title2: 22px
--font-size-title3: 20px
--font-size-body: 17px
--font-size-callout: 16px
--font-size-subhead: 15px
--font-size-footnote: 13px
--font-size-caption1: 12px
--font-size-caption2: 11px
```

### الحواف (Border Radius)
```css
--radius-sm: 10px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 20px
```

### الحركات (Transitions)
```css
--transition-fast: 200ms
--transition-normal: 300ms
--transition-slow: 400ms
```

## 🎨 نظام الألوان

### الوضع النهاري (Light Mode)
- **Background**: #f2f2f7
- **Secondary Background**: #ffffff
- **Label**: #000000
- **Blue (Accent)**: #007aff
- **Separator**: #3c3c4349

### الوضع الليلي (Dark Mode)
- **Background**: #000000
- **Secondary Background**: #1c1c1e
- **Label**: #ffffff
- **Blue (Accent)**: #0a84ff
- **Separator**: #54545899

## 📱 المكونات الرئيسية

### 1. Navigation Bar
- ارتفاع: 44px (+ Safe Area)
- Blur effect: 20px
- Border: 0.5px solid separator

### 2. Tab Bar
- 4 تبويبات رئيسية
- أيقونات 28px
- نصوص 11px
- حالة نشطة بلون أزرق iOS

### 3. System Cards
- حد أدنى للارتفاع: 140px
- Border radius: 16px
- Padding: 20px
- تأثير hover: scale(1.05)
- تأثير active: scale(0.96)

### 4. Segmented Control
- ارتفاع: 32px
- Border radius: 10px
- Shadow على العنصر النشط

## 🔗 الروابط

### الأنظمة المتاحة
1. **نظام الإدارة**: https://manger.jannatagence.com
2. **نظام العملاء**: https://clint.jannatagence.com
3. **الإيصالات**: https://print.jannatagence.com

### الدومين الرئيسي
- **jannatagence.com**

## 🚀 الاستخدام

### فتح التطبيق
ببساطة افتح `index.html` في المتصفح

### تغيير اللغة
استخدم Segmented Control في الأعلى للتبديل بين:
- العربية
- English
- Français

### الوصول إلى الأنظمة
انقر على أي بطاقة نظام للانتقال إلى الرابط المخصص

## 📱 التوافق

### المتصفحات
- ✅ Safari (iOS & macOS)
- ✅ Chrome
- ✅ Firefox
- ✅ Edge

### الأجهزة
- ✅ iPhone (جميع الأحجام)
- ✅ iPad
- ✅ Desktop

### الميزات
- ✅ Dark Mode
- ✅ Safe Areas
- ✅ RTL Support
- ✅ Touch Events
- ✅ Keyboard Navigation

## 🎯 أفضل الممارسات المطبقة

### iOS Human Interface Guidelines
- ✅ Clarity (الوضوح)
- ✅ Deference (احترام المحتوى)
- ✅ Depth (العمق البصري)
- ✅ 44×44 Touch Targets
- ✅ Safe Areas
- ✅ Natural Motion
- ✅ Consistency

### Performance
- ✅ CSS Variables
- ✅ Hardware Acceleration
- ✅ Optimized Animations
- ✅ Minimal JavaScript

### Accessibility
- ✅ ARIA Labels
- ✅ Keyboard Support
- ✅ Reduced Motion
- ✅ Semantic HTML
- ✅ Color Contrast

## 📝 الملفات

```
auth/
├── index.html      # الملف الرئيسي
├── styles.css      # الأنماط (اختياري)
├── app.js          # JavaScript (اختياري)
└── README.md       # التوثيق
```

## 🎨 التخصيص

### تغيير الألوان
عدّل متغيرات CSS في `:root`:
```css
:root {
  --ios-blue: #007aff; /* لون الأكسنت */
}
```

### إضافة أنظمة جديدة
أضف بطاقة جديدة في `.systems-grid`:
```html
<div class="system-card" onclick="openLink('URL')">
  <div class="system-icon">🎯</div>
  <div class="system-title">اسم النظام</div>
  <div class="system-subtitle">Subtitle</div>
</div>
```

### إضافة لغة جديدة
أضف اللغة في `texts` object:
```javascript
const texts = {
  // ...
  de: {
    navTitle: "Systeme",
    // ...
  }
};
```

## 🔧 التطوير المستقبلي

### مقترحات
- [ ] إضافة Pull to Refresh
- [ ] Context Menus (Long Press)
- [ ] Swipe Actions
- [ ] Search Bar
- [ ] Notifications Badge
- [ ] Settings Panel
- [ ] Favorites System
- [ ] Recent History

## 📄 الترخيص
جميع الحقوق محفوظة © Jannat Agency

## 👨‍💻 المطور
تم التطوير باستخدام معايير Apple Human Interface Guidelines

---

**ملاحظة**: هذا التصميم متوافق 100% مع iOS Human Interface Guidelines ويوفر تجربة مستخدم مطابقة لتطبيقات iOS الأصلية.
