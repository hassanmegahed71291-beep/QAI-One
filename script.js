const translations = {

ar: {

dashboard:"🏠 الرئيسية",
members:"👥 الأعضاء",
ai:"🤖 خبير الجودة",
defects:"📸 مكتبة العيوب",
measurements:"📏 القياسات",
quality:"✅ ثقافة الجودة",
cleanliness:"🧹 النظافة",
suggestions:"💡 الاقتراحات",
profile:"👤 الملف الشخصي",
admin:"👨‍💼 لوحة الإدارة",

login:"تسجيل الدخول",
memberCreated:"✅ تم إنشاء العضو بنجاح",

aiReply:"خبير QAI جاهز للمساعدة في الجودة والتصنيع والتحسين المستمر."

},

en: {

dashboard:"🏠 Dashboard",
members:"👥 Members",
ai:"🤖 QAI Expert AI",
defects:"📸 Defect Library",
measurements:"📏 Measurements",
quality:"✅ Quality Culture",
cleanliness:"🧹 Cleanliness",
suggestions:"💡 Suggestions",
profile:"👤 Profile",
admin:"👨‍💼 Admin Panel",

login:"Login",
memberCreated:"✅ Member Created Successfully",

aiReply:"QAI Expert AI is ready to help with quality, manufacturing and continuous improvement."

}

};

let currentLanguage = "ar";

langBtn?.addEventListener("click",()=>{

if(currentLanguage==="ar"){

currentLanguage="en";

document.documentElement.lang="en";
document.documentElement.dir="ltr";

langBtn.innerHTML="AR";

document.querySelector('[data-page="dashboard"]').innerHTML = translations.en.dashboard;
document.querySelector('[data-page="members"]').innerHTML = translations.en.members;
document.querySelector('[data-page="ai"]').innerHTML = translations.en.ai;
document.querySelector('[data-page="defects"]').innerHTML = translations.en.defects;
document.querySelector('[data-page="measurements"]').innerHTML = translations.en.measurements;
document.querySelector('[data-page="quality"]').innerHTML = translations.en.quality;
document.querySelector('[data-page="cleanliness"]').innerHTML = translations.en.cleanliness;
document.querySelector('[data-page="suggestions"]').innerHTML = translations.en.suggestions;
document.querySelector('[data-page="profile"]').innerHTML = translations.en.profile;
document.querySelector('[data-page="admin"]').innerHTML = translations.en.admin;

}else{

currentLanguage="ar";

document.documentElement.lang="ar";
document.documentElement.dir="rtl";

langBtn.innerHTML="EN";

document.querySelector('[data-page="dashboard"]').innerHTML = translations.ar.dashboard;
document.querySelector('[data-page="members"]').innerHTML = translations.ar.members;
document.querySelector('[data-page="ai"]').innerHTML = translations.ar.ai;
document.querySelector('[data-page="defects"]').innerHTML = translations.ar.defects;
document.querySelector('[data-page="measurements"]').innerHTML = translations.ar.measurements;
document.querySelector('[data-page="quality"]').innerHTML = translations.ar.quality;
document.querySelector('[data-page="cleanliness"]').innerHTML = translations.ar.cleanliness;
document.querySelector('[data-page="suggestions"]').innerHTML = translations.ar.suggestions;
document.querySelector('[data-page="profile"]').innerHTML = translations.ar.profile;
document.querySelector('[data-page="admin"]').innerHTML = translations.ar.admin;

}

});
