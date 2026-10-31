import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

// 1. واجهة عامة للكيانات القابلة للطباعة (Interface)
interface Printable {
    void printCard();
}

// 2. الفئة الأساسية (Base Class)
abstract class Document implements Printable {
    protected String id;
    protected String title;
    protected LocalDate issueDate;

    public Document(String id, String title, LocalDate issueDate) {
        this.id = id;
        this.title = title;
        this.issueDate = issueDate;
    }

    public String getId() { return id; }
    public String getTitle() { return title; }
    public LocalDate getIssueDate() { return issueDate; }
}

// 3. الفئة الفرعية للشهادات الأكاديمية (Inheritance)
class AcademicCertificate extends Document {
    private String studentName;
    private String major;
    private double gpa;
    private boolean isVerified;

    public AcademicCertificate(String id, String studentName, String major, double gpa, LocalDate issueDate, boolean isVerified) {
        super(id, "شهادة تخرج أكاديمية", issueDate);
        this.studentName = studentName;
        this.major = major;
        this.gpa = gpa;
        this.isVerified = isVerified;
    }

    public String getStudentName() { return studentName; }
    public String getMajor() { return major; }
    public double getGpa() { return gpa; }
    public boolean isVerified() { return isVerified; }

    @Override
    public void printCard() {
        System.out.println("╔══════════════════════════════════════════════╗");
        System.out.printf("║ 🎓 %-40s ║\n", title);
        System.out.println("╠══════════════════════════════════════════════╣");
        System.out.printf("║ 🆔 رقم الشهادة : %-27s ║\n", id);
        System.out.printf("║ 👤 اسم الخريج  : %-27s ║\n", studentName);
        System.out.printf("║ 📚 التخصص      : %-27s ║\n", major);
        System.out.printf("║ 📊 المعدل التراكمي: %-25.2f ║\n", gpa);
        System.out.printf("║ 📅 تاريخ الإصدار: %-27s ║\n", issueDate.toString());
        System.out.printf("║ 🔒 حالة التوثيق: %-27s ║\n", (isVerified ? "موثقة رسمياً ✅" : "قيد المراجعة ⏳"));
        System.out.println("╚══════════════════════════════════════════════╝");
    }
}

// 4. الفئة الرئيسية لتشغيل النظام وإدارته (System Controller)
public class AcademicSystemPro {
    public static void main(String[] args) {
        // إنشاء قاعدة بيانات وهمية باستخدام الـ Collections
        List<AcademicCertificate> database = new ArrayList<>();
        
        database.add(new AcademicCertificate("CERT-2026-001", "سارة أحمد", "علوم الحاسب الآلي", 3.85, LocalDate.of(2026, 6, 15), true));
        database.add(new AcademicCertificate("CERT-2026-002", "فاطمة محمد", "التحليل الإحصائي المتقدم", 3.92, LocalDate.of(2026, 7, 20), true));
        database.add(new AcademicCertificate("CERT-2026-003", "مريم خالد", "هندسة البرمجيات", 3.45, LocalDate.of(2026, 9, 10), false));
        database.add(new AcademicCertificate("CERT-2026-004", "آمنة عثمان", "الذكاء الاصطناعي", 3.98, LocalDate.of(2026, 9, 25), true));

        System.out.println("\n==================================================");
        System.out.println("    🌟 النظام الذكي لتوثيق وإدارة الشهادات الأكاديمية  ");
        System.out.println("==================================================\n");

        // 1. عرض كافة الشهادات باستخدام Polymorphism
        System.out.println("📂 [1] استعراض كافة سجلات الشهادات في النظام:\n");
        database.forEach(AcademicCertificate::printCard);

        // 2. استخدام Java Streams للبحث المتقدم عن طالبة برقم الشهادة مع التعامل مع الـ Optional
        String targetId = "CERT-2026-004";
        System.out.println("\n🔍 [2] نتيجة البحث المتقدم عن الشهادة برقم: " + targetId + "\n");
        
        Optional<AcademicCertificate> searchResult = database.stream()
                .filter(c -> c.getId().equalsIgnoreCase(targetId))
                .findFirst();

        searchResult.ifPresentOrElse(
            AcademicCertificate::printCard,
            () -> System.out.println("❌ عذراً، لا يوجد سجل بهذا الرقم.")
        );

        // 3. تصفية وترتيب الطالبات الحاصلات على معدل أعلى من 3.8 باستخدام Stream API & Comparators
        System.out.println("\n✨ [3] قائمة لوحة الشرف (المعدلات العالية المرتب تنازلياً):\n");
        List<AcademicCertificate> honorList = database.stream()
                .filter(c -> c.getGpa() >= 3.8)
                .sorted(Comparator.comparingDouble(AcademicCertificate::getGpa).reversed())
                .collect(Collectors.toList());

        for (int i = 0; i < honorList.size(); i++) {
            AcademicCertificate cert = honorList.get(i);
            System.out.printf("%d. 🏆 %s - التخصص: %s (المعدل: %.2f)\n", 
                (i + 1), cert.getStudentName(), cert.getMajor(), cert.getGpa());
        }

        System.out.println("\n==================================================");
        System.out.println("          تم تنفيذ العمليات البرمجية بنجاح 🚀     ");
        System.out.println("==================================================");
    }
}
