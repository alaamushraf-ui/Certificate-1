<?php
// ==========================================
// مشروع: وثّق شهادتك - معالجة نموذج الاتصال
// الملف: contact.php
// ==========================================

// التحقق من أن الطلب تم إرساله عبر طريقة POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // تنظيف وحماية البيانات المدخلة من ثغرات الحقن
    $senderName = htmlspecialchars(trim($_POST['name'] ?? ''));
    $senderEmail = htmlspecialchars(trim($_POST['email'] ?? ''));
    $senderMessage = htmlspecialchars(trim($_POST['message'] ?? ''));

    // التحقق من عدم ترك الحقول فارغة
    if (!empty($senderName) && !empty($senderEmail) && !empty($senderMessage)) {
        
        // عرض رسالة نجاح منسقة وأنيقة للزائر
        echo "<div style='text-align: center; margin-top: 50px; font-family: Cairo, sans-serif;'>";
        echo "<h2 style='color: #3182ce;'>شكراً لكِ يا " . $senderName . "! 🌟</h2>";
        echo "<p style='color: #2d3748;'>تم استلام رسالتك واستفسارك بنجاح عبر نظام PHP.</p>";
        echo "<p style='color: #718096;'>سيقوم فريق الدعم الأكاديمي بالرد على بريدك (" . $senderEmail . ") قريباً.</p>";
        echo "<br><a href='contact.html' style='background: #3182ce; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>العودة لصفحة الاتصال</a>";
        echo "</div>";

    } else {
        echo "<p style='color: red; text-align: center; font-family: Cairo;'>عذراً، يرجى ملء كافة الحقول المطلوبة قبل الإرسال.</p>";
    }
} else {
    // في حال محاولة الوصول للملف مباشرة بدون إرسال النموذج
    header("Location: contact.html");
    exit();
}
?>
