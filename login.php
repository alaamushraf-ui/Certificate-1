<?php
// ==========================================
// مشروع: وثّق شهادتك - معالجة تسجيل الدخول
// الملف: login.php
// ==========================================

// التحقق من أن الطلب أُرسل عبر طريقة POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // تنظيف وحماية مدخلات اسم المستخدم من الثغرات
    $username = htmlspecialchars(trim($_POST['username'] ?? ''));
    $password = trim($_POST['password'] ?? ''); // كلمة المرور لا تُنظّف بـ htmlspecialchars لتجنب تغيير رموزها الخاصة، بل تُفحص مباشرة

    // التحقق من عدم ترك الحقول فارغة
    if (!empty($username) && !empty($password)) {
        
        // محاكاة للتحقق من قاعدة البيانات (كمثال توضيحي احترافي)
        // لاحقاً يمكنك ربط هذا الشرط بقاعدة بيانات MySQL حقيقية
        if ($username === "admin" && $password === "12345") {
            
            // نجاح تسجيل الدخول
            echo "<div style='text-align: center; margin-top: 50px; font-family: Cairo, sans-serif;'>";
            echo "<h2 style='color: #3182ce;'>مرحباً بكِ مجدداً يا " . $username . "! 🚀</h2>";
            echo "<p style='color: #2d3748;'>تم التحقق من بيانات الاعتماد بنجاح وتم توجيهك إلى لوحة التحكم الأكاديمية.</p>";
            echo "<br><a href='login.html' style='background: #3182ce; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>تسجيل الخروج</a>";
            echo "</div>";

        } else {
            // فشل التحقق من البيانات
            echo "<div style='text-align: center; margin-top: 50px; font-family: Cairo, sans-serif;'>";
            echo "<h2 style='color: #e53e3e;'>خطأ في تسجيل الدخول ❌</h2>";
            echo "<p style='color: #2d3748;'>عذراً، اسم المستخدم أو كلمة المرور غير صحيحة.</p>";
            echo "<br><a href='login.html' style='background: #e53e3e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>العودة لمحاولة أخرى</a>";
            echo "</div>";
        }

    } else {
        echo "<p style='color: red; text-align: center; font-family: Cairo;'>يرجى إدخال اسم المستخدم وكلمة المرور في الحقول المخصصة.</p>";
    }

} else {
    // منع الوصول المباشر للملف بدون إرسال النموذج
    header("Location: login.html");
    exit();
}
?>
