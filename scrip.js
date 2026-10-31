// ==========================================
// مشروع: وثّق شهادتك (Shihadti Platform)
// الملف: script.js (الملف التفاعلي الرئيسي)
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. تفاعل نموذج تسجيل الدخول (login.html)
    const loginForm = document.querySelector("main form");
    if (loginForm && window.location.pathname.includes("login.html")) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // منع تحديث الصفحة التقليدي
            
            const usernameInput = document.getElementById("username");
            if (usernameInput && usernameInput.value.trim() !== "") {
                alert(`مرحباً بكِ! جاري التحقق من بيانات الاعتماد للحساب: (${usernameInput.value})`);
            } else {
                alert("يرجى إدخال البريد الإلكتروني أو اسم المستخدم.");
            }
        });
    }

    // 2. تفاعل نموذج اتصل بنا (contact.html)
    const contactForm = document.querySelector("main form");
    if (contactForm && window.location.pathname.includes("contact.html")) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // منع تحديث الصفحة التقليدي
            
            const nameInput = document.getElementById("name");
            const name = nameInput ? nameInput.value : "";
            
            alert(`شكراً لتواصلك معنا يا ${name}! تم إرسال استفسارك بنجاح وسيقوم فريق الدعم بالرد عليكِ قريباً.`);
            contactForm.reset(); // تفريغ الحقول بعد الإرسال
        });
    }

    // 3. تأثير حركي عصري عند مرور الفأرة أو اللمس على البطاقات (.card)
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        
        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-6px)";
            card.style.boxShadow = "0 12px 25px rgba(49, 130, 206, 0.15)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
    });

});
