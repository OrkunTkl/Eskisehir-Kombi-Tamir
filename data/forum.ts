import type { Faq } from "@/data/seo-content";

// Soru-Cevap merkezi içeriği. Cevapları platform yazar; kullanıcı yorumu değildir.
// Yeni soru eklemek için listeye { q, a } ekleyin.
export const forum: Faq[] = [
  {
    q: "Kombi ısıtmıyorsa önce ne kontrol edilir?",
    a: "Önce kombi ekranındaki basınca bakın; soğukken çoğu kombide 1 ile 1,5 bar arası beklenir. Oda termostatını yüksek bir değere alın, pilliyse pilini değiştirin. Kombinin ısıtma modunda olduğundan ve doğalgaz ile elektriğin açık olduğundan emin olun. Bunlar normalse hava, pompa ya da üç yollu vana kaynaklı olabilir ve usta gerekir.",
  },
  {
    q: "Kombi basıncı neden sürekli düşer?",
    a: "Tesisatta küçük bir kaçak, genleşme tankı sorunu ya da emniyet ventilinden su gelmesi basıncı düşürür. Peteklerin havası alındıktan sonra basınç düşmesi normaldir; doldurmanıza rağmen sık sık düşüyorsa sebebi bulunmalıdır. Basıncı tekrar tekrar doldurmak yerine ustaya haber verin.",
  },
  {
    q: "Kombi bakımı yılda kaç kez yapılmalı?",
    a: "Çoğu üretici yılda bir bakım önerir; ısıtma sezonu başlamadan önce yaptırmak en uygunudur. Bakımda yanma, eşanjör, filtre ve emniyet parçaları kontrol edilir. Markanızın kılavuzundaki aralığa da bakın.",
  },
  {
    q: "Kombi hata kodu verirse ne yapmalıyım?",
    a: "Kodu ve kombinin markasını not alın. Kombi kullanım kılavuzunda varsa belirtilen şekilde bir kez yeniden başlatmayı deneyin. Kod geri geliyorsa ustaya kodu söyleyin; ayrıca sitedeki hata kodları sayfasından markanıza göre kodun genel anlamına bakabilirsiniz.",
  },
  {
    q: "Kombiden gaz kokusu gelirse ne yapmalıyım?",
    a: "Cihazı ve kıvılcım çıkarabilecek her şeyi (ışık düğmesi, çakmak) kullanmayın, pencereleri açın, binadan çıkın ve 187 Doğalgaz Acil hattını arayın. Yangın ya da rahatsızlık varsa 112'yi arayın. Bu durumda WhatsApp'tan yazmak beklemeyin.",
  },
  {
    q: "Petekler üstten sıcak altta soğuk kalıyorsa sorun ne olabilir?",
    a: "Genelde tesisatta hava birikmesi ya da pislik/çamur birikmesi söz konusudur. Havayı almak bazen yeterli olur; çamur birikmişse petek temizliği gerekir. Basıncı düşürmemeye dikkat edin ve sorun sürerse ustaya danışın.",
  },
  {
    q: "Kombi çalışıyor ama sıcak su gelmiyorsa neden olabilir?",
    a: "Yaz/kış ayarının, sıcak su sıcaklık ayarının ve su basıncının kontrol edilmesi gerekir. Kombi ısıtmayı yapıp sıcak suyu yapmıyorsa üç yollu vana ya da eşanjör gibi parçalarda sorun olabilir. Bu parçalar için usta gerekir.",
  },
  {
    q: "Eskişehir'de kombi ustası nasıl bulunur ve fiyat nasıl belirlenir?",
    a: "Sorununuzu WhatsApp'tan yazarsınız; talebi ilçenize ve işin türüne göre uygun bağımsız servis sağlayıcıya aktarırız ve servis sağlayıcı sizi arar. Fiyatı ve işin kapsamını usta arızayı gördükten sonra sizinle netleştirir. Platform hizmeti kendisi vermez ve hiçbir markanın yetkili servisi değildir.",
  },
];