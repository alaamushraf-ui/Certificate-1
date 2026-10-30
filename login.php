<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>وثق شهادتك - تسجيل الدخول</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="logo">وثق شهادتك</div>
        <nav>
            <a href="index.html">الرئيسية</a>
            <a href="about.html">عن الموقع</a>
            <a href="contact.html">اتصل بنا</a>
            <a href="login.php" class="active btn-login">تسجيل الدخول</a>
        </nav>
    </header>

    <main class="hero">
        <div class="login-container">
            <h2>تسجيل الدخول إلى حسابك</h2>
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="email">البريد الإلكتروني:</label>
                    <input type="email" id="email" name="email" required placeholder="أدخل بريدك الإلكتروني">
                </div>
                
                <div class="form-group">
                    <label for="password">كلمة المرور:</label>
                    <input type="password" id="password" name="password" required placeholder="أدخل كلمة المرور">
                </div>

                <button type="submit" class="cta-btn">دخول</button>
            </form>
        </div>
    </main>

</body>
</html>
