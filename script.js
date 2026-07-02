// ملف script.js
// إضافة وظائف تفاعلية للمنصة QUALIO

// مثال: رسالة ترحيب عند تحميل الصفحة
window.onload = function() {
  console.log("مرحبًا بك في منصة QUALIO 🚀");
  alert("أهلاً بك في منصة QUALIO - رحلة الجودة من الصفر إلى القمة!");
};

// مثال: نظام نقاط بسيط
let userPoints = 0;

function addPoints(points) {
  userPoints += points;
  alert("🎉 لقد حصلت على " + points + " نقطة! إجمالي نقاطك الآن: " + userPoints);
}

// مثال: تغيير اللغة (عربي / إنجليزي)
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  if (currentLang === "ar") {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    alert("Language switched to English 🌐");
  } else {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    alert("تم تغيير اللغة إلى العربية 🌐");
  }
}

// مثال: محاكاة تدريبية بسيطة
function simulationScenario(type) {
  if (type === "client") {
    alert("📞 محاكاة: عميل غاضب يشتكي من المنتج. كيف سترد؟");
  } else if (type === "manager") {
    alert("👔 محاكاة: المدير يطلب تقرير عاجل خلال 10 دقائق. ما خطوتك الأولى؟");
  }
}
