export type Faq = { q: string; a: string };
export type ServiceContent = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: { h: string; p: string }[];
  problems: string[];
  services: string[];
  faq: Faq[];
};
const S = (x: ServiceContent) => x;
export const serviceContent: Record<string, ServiceContent> = {
  "kombi-ariza": S({
    title: "Eskişehir Kombi Arıza ve Tamiri | İlk Kontroller",
    description:
      "Kombi ısıtmıyor, ateş almıyor, hata veriyor mu? Ustayı aramadan önce güvenle yapabileceğiniz kontroller ve WhatsApp'tan kombi ustasına yönlendirme.",
    h1: "Kombi arızası: önce ne olduğunu anlayın, sonra ustayı çağırın",
    lead: "Kombi arızaları üç büyük başlığa ayrılır: ısıtma ve sıcak su devresi, gaz ve ateşleme, elektronik ve sensörler. Belirtiyi doğru tarif etmek, ustanın ilk gelişte işi bitirme ihtimalini yükseltir.",
    sections: [
      {
        h: "Arızalar üç grupta toplanır",
        p: "Isıtma ve sıcak su devresi: petekler ısınmıyor, sıcak su ılık geliyor ya da basınç sürekli düşüyor. Burada genellikle pompa, üç yollu vana, eşanjör, tesisattaki hava ya da basınç söz konusudur. Gaz ve ateşleme: kombi çalışmaya başlıyor ama brülör yanmıyor ya da yanıp hemen sönüyor. Elektrotlar, gaz valfi, baca ve hava girişi bu grupta aranır. Elektronik ve sensörler: ekranda hata kodu çıkıyor, kombi kendi kendine kapanıp açılıyor ya da hiç tepki vermiyor. Sıcaklık sensörleri, basınç sensörü ve elektronik kart bu gruba girer. Belirtinin hangi gruba yakın olduğunu bilmek, ustaya doğru bilgiyi vermenizi sağlar.",
      },
      {
        h: "Belirtiyi not edin",
        p: "Hata kodunu, basınç değerini, sesin ne zaman geldiğini ve kombinin en son ne zaman sorunsuz çalıştığını yazın. Sorun yalnızca ısıtmada mı, yalnızca sıcak su alırken mi ortaya çıkıyor, bunu da ekleyin. Ekranın ya da sorunlu bölgenin fotoğrafını çekmek ve varsa sesi kısa bir videoyla kaydetmek, telefonda yapılan ön değerlendirmede çok işe yarar.",
      },
      {
        h: "Güvenle kontrol edebilecekleriniz",
        p: "Basınç göstergesi, kombinin altındaki gaz vanasının açık olması, oda termostatının ayarı ve pili, petek vanalarının açık olması ve kombinin ısıtma modunda olması kullanıcının bakabileceği şeylerdir. Elektrik kesintisi sonrası kombinin kendine gelmesi için bir kez reset gerekebilir; bunu kılavuzda belirtildiği şekilde ve en fazla bir kez deneyin. Kombinin kapağını açmayın, gaz ve elektrik bağlantılarına dokunmayın.",
      },
      {
        h: "Eskişehir'de kış arızaları neden artar?",
        p: "Eskişehir'de kışlar uzun ve soğuktur; kombi bu dönemde daha uzun süre ve daha yüksek yükle çalışır. Yaz boyunca hareketsiz kalmış pompa ve vanalar ilk çalıştırmada sıkışmış çıkabilir, tesisattaki hava ya da küçük kaçaklar ilk soğuk günlerde kendini belli eder. Bu yüzden arızaların büyük kısmı kasım ile şubat arasında yoğunlaşır. Sezon başlamadan önce kombinin ve peteklerin bir kez çalıştırılıp denenmesi, soğuk bir gecede sürpriz yaşama ihtimalini azaltır.",
      },
      {
        h: "Ne zaman beklemeden usta çağırılır?",
        p: "Su sızıntısı, resetten sonra geri gelen hata kodu, ateşleme sırasında patlama benzeri ses ya da yanık kokusu varsa kombiyi kapatın ve destek isteyin. Gaz kokusu varsa usta çağırmadan önce gaz kokusu rehberindeki güvenlik adımlarını uygulayın ve 187 Doğalgaz Acil hattını arayın.",
      },
      {
        h: "Ustayla görüşürken hazır bulundurun",
        p: "Kombinin markası ve modeli (cihaz üzerindeki etiketten ya da kılavuzdan), yaklaşık yaşı, hata kodu, sorunun ne zaman başladığı, daha önce bakım yapılıp yapılmadığı ve bulunduğunuz ilçe (örneğin Odunpazarı ya da Tepebaşı) temel bilgilerdir. İşin kapsamı ustanın cihazı görmesiyle netleşir; ücret ve parça konusunda arızayı gördükten sonra bilgi isteyin.",
      },
      {
        h: "Yönlendirme nasıl işler?",
        p: "Bu platform kombi hizmetini kendisi vermez ve herhangi bir markanın yetkili servisi değildir. Talebinizi WhatsApp veya form ile iletirsiniz; işin türüne ve ilçenize göre uygun bağımsız servis sağlayıcıyla görüşmenizi sağlarız.",
      },
    ],
    problems: ["kombi-isitmiyor", "kombi-ates-almiyor", "kombi-hata-kodu", "kombi-basinc-dusuyor"],
    services: ["kombi-bakim", "kombi-parca-degisimi"],
    faq: [
      { q: "Kombi arızasında önce neye bakmalıyım?", a: "Basınç göstergesine, gaz vanasının açık olmasına, termostat ayarına ve pilinin durumuna, ekranda hata kodu olup olmadığına bakın. Bunlar normalse usta çağırın." },
      { q: "Arıza bildirirken hangi bilgileri vermeliyim?", a: "Kombinin markası ve yaklaşık yaşı, hata kodu, sorunun ne zaman başladığı ve ilçeniz. Mümkünse ekranın fotoğrafını ekleyin." },
      { q: "Hata kodu kendiliğinden gidip geliyorsa sorun yok demek midir?", a: "Hayır. Geçici görünen kodlar çoğu zaman altta yatan bir nedenin, örneğin düşük basıncın, havanın ya da yıpranan bir parçanın işaretidir. Kodun ne zaman geldiğini not edip ustaya iletin." },
      { q: "Kombiyi tekrar tekrar resetlemek zararlı mı?", a: "Kılavuzda belirtilenden fazla reset denemek önerilmez. Özellikle ateşleme sorunlarında tekrarlanan denemeler gaz birikimine yol açabilir. Bir kez deneyip sonuç değişmiyorsa usta çağırın." },
    ],
  }),
  "kombi-bakim": S({
    title: "Eskişehir Kombi Bakımı | Ne Zaman, Nasıl Yapılır?",
    description:
      "Yıllık kombi bakımı ne zaman yapılır, neleri kapsar, ne kadar sürer? Kış başlamadan önce bilmeniz gerekenler ve WhatsApp'tan bakım talebi.",
    h1: "Kombi bakımı: yılda bir, sezondan önce",
    lead: "Düzenli bakım hem arıza ihtimalini düşürür hem de yanma verimini korur. Kış başlamadan önce yaptırmak, soğukta arıza yaşama ihtimalini azaltır.",
    sections: [
      {
        h: "Bakımda ne kontrol edilir?",
        p: "Genellikle brülör ve yanma, eşanjör, sirkülasyon pompası, genleşme tankı basıncı, filtreler, baca ve hava giriş bağlantısı, gaz bağlantılarının sızdırmazlığı ve güvenlik donanımları kontrol edilir. Kapsam servisten servise değişebilir; bakıma başlamadan neyin yapılacağını sorun.",
      },
      {
        h: "Ne zaman yaptırmalı?",
        p: "Isıtma sezonu başlamadan önceki sonbahar ayları idealdir. Eskişehir'de kışın soğuk günlerde kombinin kesintisiz çalışması gerektiği için bakımı ilk ciddi soğuklardan önce yaptırmak mantıklıdır. Bu dönemde servisler yoğun olabileceği için erken plan yapmak işinize yarar.",
      },
      {
        h: "Neden önemlidir?",
        p: "Kireçlenen eşanjör, kirlenen brülör ve eskiyen parçalar verimi düşürür, aynı ısıyı elde etmek için daha fazla yakıt harcanmasına yol açar. Bakım ayrıca baca ve yanma kaynaklı riskleri, küçük kaçakları ve aşınan parçaları arıza büyümeden fark etmeye yardımcı olur.",
      },
      {
        h: "Bakımdan önce hazırlık",
        p: "Kombinin yanındaki alanı ustanın rahat çalışabileceği şekilde boşaltın. Geçen sezon yaşadığınız sorunları (ses, basınç düşmesi, hata kodu) not edin ve ustaya söyleyin. Varsa önceki bakım ya da servis kayıtlarını hazır bulundurun.",
      },
      {
        h: "Garanti ve belge açısından",
        p: "Bazı üreticiler garanti koşulları arasında düzenli bakım şartı koyabilir. Kombinizin garanti belgesine ve kullanma kılavuzuna bakın. Bakımı yapan servis sağlayıcıdan yapılan işlemleri gösteren bir form ya da fiş almak, ileride işinize yarayabilir.",
      },
      {
        h: "Bakım sonrası neye dikkat edilir?",
        p: "Bakımdan sonra basınç değerinin normal aralıkta olduğundan, petek ve musluklardan düzgün ısı ve sıcak su geldiğinden emin olun. Bakım sonrası ilk günlerde ortaya çıkan ses, koku ya da hata kodunu aynı servis sağlayıcıya bildirin.",
      },
    ],
    problems: ["kombi-ses-yapiyor", "kombi-karbonmonoksit", "kombi-surekli-kapaniyor"],
    services: ["kombi-ariza", "petek-temizligi"],
    faq: [
      { q: "Kombi bakımı ne kadar sürer?", a: "Kombinin durumuna göre değişir; çoğu zaman bir saat civarında sürer. Ek temizlik ya da parça gerekiyorsa uzayabilir." },
      { q: "Bakım yaptırmazsam ne olur?", a: "Arıza ihtimali ve yakıt tüketimi artabilir. Baca ve yanma kontrolü yapılmadığı için güvenlik riskleri de fark edilmeyebilir." },
      { q: "Yeni kombi için de bakım gerekir mi?", a: "Evet. Yeni cihazlarda da düzenli kontrol hem verimi korur hem de garanti koşullarını yerine getirmeye yardımcı olur. Üreticinin önerdiği aralığı kılavuzdan kontrol edin." },
      { q: "Bakımda tesisat da temizlenir mi?", a: "Hayır, kombi bakımı cihazın kendisini kapsar. Petek ve boruların iç yüzeyi için ayrı bir petek temizliği işlemi gerekir." },
    ],
  }),
  "kombi-montaj": S({
    title: "Eskişehir Kombi Montajı ve Değişimi | Başlamadan Önce",
    description:
      "Yeni kombi takmak ya da eskisini değiştirmek için neler gerekir? Hazırlık, tesisat ve güvenlik konularında rehber.",
    h1: "Kombi montajı ve değişimi: başlamadan bilinmesi gerekenler",
    lead: "Kombi değişimi yalnızca cihazı sökmek ve takmak değildir. Doğru kapasite, baca uyumu ve gaz bağlantısı güvenlik açısından belirleyicidir.",
    sections: [
      {
        h: "Doğru kapasite",
        p: "Evin metrekaresi, yalıtımı, pencere yapısı, kat konumu ve petek sayısı kombi kapasitesini belirler. Gereğinden büyük cihaz sık açılıp kapanarak verimi ve parça ömrünü düşürür; küçük cihaz ise soğuk günlerde evi yeterince ısıtamaz. Kapasiteyi yalnızca metrekareye bakarak değil, ustanın mekânı görerek yaptığı değerlendirmeyle belirleyin.",
      },
      {
        h: "Yoğuşmalı ve klasik kombi",
        p: "Yoğuşmalı kombiler baca gazındaki ısıyı geri kazanarak daha verimli çalışır, ancak yoğuşma suyunun tahliyesi ve uygun baca bağlantısı gerektirir. Klasik kombilerde bu gereklilik yoktur ama verim daha düşüktür. Mevcut bacanızın hangi tür cihaza uygun olduğunu montajdan önce usta ile netleştirin.",
      },
      {
        h: "Gaz ve baca bağlantısı",
        p: "Gazla ilgili işlerin belgeli ve yetkili kişilerce yapılması gerekir. Hizmeti verecek servis sağlayıcıdan gerekli belge ve garanti bilgilerini isteyin. Doğal gaz dağıtım şirketi ya da bina yönetimi kaynaklı süreçler olabilir; bu konuları servis sağlayıcıya önceden sorun.",
      },
      {
        h: "Tesisat durumu",
        p: "Eski tesisatta biriken tortu ve çamur yeni kombiye zarar verebilir. Değişim öncesinde tesisatın temizlenmesi ya da en azından tortu filtresi takılması gündeme gelebilir. Petekler uzun süredir ısınmıyorsa kombiyi değiştirmeden önce nedenini araştırmak gereksiz masrafı önler.",
      },
      {
        h: "Montaj yeri ve havalandırma",
        p: "Kombinin yerleştirileceği alanın havalandırması, baca çıkışına yakınlığı ve bakım için erişilebilirliği önemlidir. Kapalı ve havasız dolaplara kombi yerleştirmek güvenlik ve verim sorunlarına yol açabilir; ustanın alanı görerek önerisini almanızda fayda var.",
      },
      {
        h: "Değişim günü neler olur?",
        p: "Eski cihaz sökülür, bağlantılar kontrol edilir, yeni cihaz bağlanır, tesisata su verilir ve havası alınır, ardından gaz sızdırmazlık kontrolü ve ilk çalıştırma yapılır. Bu sürede evin ısıtmasız ve sıcak susuz kalacağını hesaba katarak günü soğuk bir döneme denk getirmemeye çalışın.",
      },
    ],
    problems: ["kombi-isitmiyor", "petek-isinmiyor"],
    services: ["petek-temizligi", "isitma-tesisati", "oda-termostati"],
    faq: [
      { q: "Kombiyi kendim takabilir miyim?", a: "Hayır. Gaz bağlantısı ve baca işleri belgeli kişilerce yapılmalıdır. Hatalı montaj güvenlik riski doğurur." },
      { q: "Kombi değişimi için hangi bilgiler gerekir?", a: "Evin yaklaşık metrekaresi, petek sayısı, mevcut kombinin markası ve yaşı, baca türü ve kombinin bulunduğu alanın fotoğrafı ön değerlendirme için yeterlidir." },
      { q: "Montaj sonrası garanti nasıl işler?", a: "Cihaz garantisi üreticiye, işçilik garantisi ise hizmeti veren servis sağlayıcıya bağlıdır. Bu iki bilgiyi işlem öncesinde yazılı olarak istemek yararlıdır." },
    ],
  }),
  "kombi-parca-degisimi": S({
    title: "Kombi Parça Değişimi | Eşanjör, Pompa, Genleşme Tankı",
    description:
      "Eşanjör, sirkülasyon pompası, üç yollu vana ve genleşme tankı gibi parçalarda arıza belirtileri ve değişim süreci.",
    h1: "Kombi parça değişimi: hangi belirti hangi parçayı işaret eder?",
    lead: "Kombideki her ana parçanın kendine özgü bir arıza belirtisi vardır. Belirtiyi bilmek, ustayla konuşurken size zaman kazandırır.",
    sections: [
      {
        h: "Eşanjör",
        p: "Kombide iki tür eşanjör bulunur: ısıtma suyunu ısıtan ana eşanjör ve sıcak kullanım suyunu ısıtan plakalı eşanjör. Sıcak su azalıyor, ılık geliyor ya da kaynama benzeri ses duyuluyorsa kireç tıkanıklığı olabilir. Temizlik yetmezse değişim gerekebilir.",
      },
      {
        h: "Sirkülasyon pompası",
        p: "Pompa çalışmıyorsa su tesisatta dolaşmaz ve petekler ısınmaz. Vızıltı, uğultu ya da yalnızca başlangıçta çalışıp durması aşınmanın işaretidir. Yaz boyunca hareketsiz kalmış pompaların ilk çalıştırmada sıkışması da sık görülür.",
      },
      {
        h: "Üç yollu vana",
        p: "Üç yollu vana, kombinin suyu petek devresine mi yoksa sıcak su devresine mi göndereceğini belirler. Sıkışırsa ya ısıtma ya da sıcak su çalışmaz, bazen ikisi birden karışık davranır.",
      },
      {
        h: "Genleşme tankı ve basınç sensörü",
        p: "Genleşme tankı, ısınan suyun hacim artışını dengeler. Havasını kaybederse basınç ısınınca hızla yükselir, soğuyunca hızla düşer; emniyet ventilinden su gelmesi de bunun belirtisi olabilir. Basınç sensörü bozulduğunda ise gösterge gerçek değeri yansıtmaz.",
      },
      {
        h: "Ateşleme, fan ve elektronik parçalar",
        p: "Ateşleme ve iyonizasyon elektrotları, fan, sıcaklık sensörleri (NTC) ve elektronik kart ateşleme ile kontrol tarafının parçalarıdır. Ateş almama, hata kodu ya da kombinin rastgele kapanması bu parçaların aşınmasından kaynaklanabilir. Elektronik kartın değişimi genellikle diğer parçalara göre daha pahalıdır; değişimden önce başka olasılıkların elendiğinden emin olun.",
      },
      {
        h: "Parça seçimi",
        p: "Parçanın modelinize uygun ve orijinal olup olmadığını, garantisinin bulunup bulunmadığını işlem öncesinde ustadan öğrenin. Muadil parçalar bazı durumlarda uygun olabilir; fiyat farkının nedenini ve garanti kapsamını sorun. Eski parçayı isteyip görmek de kararınızı kolaylaştırır.",
      },
    ],
    problems: ["kombi-sicak-su-vermiyor", "kombi-ses-yapiyor", "kombi-su-damliyor"],
    services: ["kombi-ariza", "kombi-bakim"],
    faq: [
      { q: "Parça değişimi mi yoksa yeni kombi mi mantıklı?", a: "Kombinin yaşı, arızanın kapsamı ve parça maliyetine bağlıdır. Usta, tamirin mi değişimin mi daha uygun olduğunu muayene sonrası söyleyebilir." },
      { q: "Parça değişimi ne kadar sürer?", a: "Parçaya göre değişir. Parça servis aracında varsa genellikle aynı gün tamamlanır; stokta yoksa temin süresi eklenir." },
      { q: "Değiştirilen parçanın garantisi olur mu?", a: "Parça ve işçilik garantisi servis sağlayıcıya ve parçanın türüne göre değişir. İşlem öncesinde süresini ve kapsamını sorun." },
    ],
  }),
  "petek-temizligi": S({
    title: "Eskişehir Petek Temizliği | Isınmayan Petekler İçin",
    description:
      "Üstü sıcak altı soğuk petekler, düşen ısıtma verimi ve tortu birikimi. Petek temizliği ne zaman gerekir, nasıl yapılır?",
    h1: "Petek temizliği: ısıtma verimini geri kazanın",
    lead: "Zamanla peteklerin içinde çamur ve tortu birikir. Bu da suyun dolaşımını azaltır ve peteklerin bazı bölgelerinin soğuk kalmasına yol açar.",
    sections: [
      {
        h: "Ne zaman gerekir?",
        p: "Petek üstten sıcak, alttan soğuksa; ısıtma yıllar içinde gittikçe zayıflıyorsa; kombi sık sık basınç ya da aşırı ısınma hatası veriyorsa ya da bazı odalar diğerlerine göre belirgin biçimde geç ısınıyorsa tortu birikimi olabilir. Yeni kombi takılacaksa öncesinde tesisatın durumuna bakmak da yerinde olur.",
      },
      {
        h: "Tortu nasıl oluşur?",
        p: "Tesisat suyundaki mineraller, boru ve petek metalinin yıllar içindeki korozyonu ve havanın girdiği noktalarda oluşan oksitlenme çamur benzeri bir birikim yaratır. Bu birikim peteğin alt kısmında toplanır ve suyun akışını yavaşlatır.",
      },
      {
        h: "Nasıl yapılır?",
        p: "Genellikle tesisata bağlanan bir cihazla temizleme sıvısı ve su basınçla dolaştırılarak tortu söktürülür, ardından tesisat durulanır. Bu işlem sırasında kombi devre dışı bırakılır ve işlem usta tarafından yapılmalıdır. Kullanılacak sıvının tesisat malzemesine uygun olduğunu sorun.",
      },
      {
        h: "Havalandırma ile temizlik farkı",
        p: "Peteğin üstü soğuk, altı sıcaksa sorun genellikle havadır ve havasını almak yeterlidir. Altı soğuk, üstü sıcaksa tortu birikmiş olabilir ve havalandırma bunu çözmez. İkisini ayırt etmek, gereksiz işlem yaptırmamanızı sağlar.",
      },
      {
        h: "Sonrasında",
        p: "Temizlik sonrasında tesisatın havası alınır ve kombi basıncı kontrol edilir. Peteklerin daha eşit ısındığına ve ısınma süresinin kısaldığına dikkat edin. Temizlik sonrası basınç yine hızla düşüyorsa tesisatta kaçak olabilir.",
      },
      {
        h: "Kombi bakımıyla birlikte düşünün",
        p: "Petek temizliği tesisatı, kombi bakımı ise cihazı kapsar. İkisini aynı dönemde yaptırmak, sezona temiz ve kontrollü bir sistemle girmenizi sağlar.",
      },
    ],
    problems: ["petek-isinmiyor", "kombi-isitmiyor"],
    services: ["isitma-tesisati", "kombi-bakim"],
    faq: [
      { q: "Petek temizliği ile kombi bakımı aynı şey mi?", a: "Hayır. Kombi bakımı cihazın kendisini, petek temizliği ise tesisatı ve peteklerin iç yüzeyini kapsar. Birlikte yaptırmak mantıklı olabilir." },
      { q: "Petek temizliği ne sıklıkla yapılmalı?", a: "Sabit bir süre yoktur; belirtiler ortaya çıktığında ya da tesisat eskidiğinde yapılır. Isınma sorunu yaşamıyorsanız her yıl yaptırmanız gerekmeyebilir." },
      { q: "Temizlik sonrası petekler hâlâ ısınmıyorsa?", a: "Vana arızası, tesisat dengesizliği ya da kırık boru gibi başka nedenler olabilir. Ustadan tesisatın genel kontrolünü isteyin." },
    ],
  }),
  "isitma-tesisati": S({
    title: "Isıtma Tesisatı | Petek, Boru, Vana ve Kolektör İşleri",
    description:
      "Petek ekleme, boru yenileme, vana ve kolektör değişimi gibi ısıtma tesisatı işleri için rehber ve yönlendirme.",
    h1: "Isıtma tesisatı: petek, boru ve vana işleri",
    lead: "Tesisat sorunları kombiden bağımsız olabilir. Ama kombiyi de etkiler: basınç düşer, ısıtma dengesizleşir, parçalar yıpranır.",
    sections: [
      {
        h: "Sık yapılan işler",
        p: "Petek ekleme ve değiştirme, vana ve termostatik vana değişimi, boru yenileme, kolektör düzenlemesi ve tesisat sızıntılarının onarımı en yaygın taleplerdir. Renovasyon yapılan evlerde petek yerinin değiştirilmesi de sık görülür.",
      },
      {
        h: "Petek eklerken dikkat edilecekler",
        p: "Petek eklemek tesisatın dengesini değiştirir. Sisteme eklenen her petek, kombinin kapasitesini ve suyun dağılımını etkiler. İşin kapasite açısından uygun olup olmadığını usta ile kontrol edin.",
      },
      {
        h: "Boru ve malzeme",
        p: "Tesisatta çelik, bakır, PPR ya da çok katmanlı borular kullanılabilir. Malzeme seçimi mekânın durumuna, bütçeye ve işin kapsamına göre ustayla birlikte belirlenir. Kullanılacak malzemenin markasını ve garanti kapsamını yazılı sorun.",
      },
      {
        h: "Kolektör ve vana",
        p: "Kolektör, ısıtma suyunu odalara dağıtan merkezdir. Vanalar ise her odanın ısıtmasını ayrı ayrı kontrol etmeyi sağlar. Bozuk vanalar sızıntıya ve dengesiz ısınmaya yol açar; değişimleri genellikle sistemi boşaltmayı gerektirir.",
      },
      {
        h: "Teklif alırken",
        p: "İşin kapsamını, kullanılacak malzemeyi, süreyi ve garantiyi netleştirin. Fiyat ve kapsam hizmet verecek servis sağlayıcıyla belirlenir; birden fazla teklif almak karşılaştırma yapmanızı kolaylaştırır.",
      },
      {
        h: "Tesisat ile kombi ilişkisi",
        p: "Tesisattaki sızıntı kombi basıncını düşürür, tortu pompaya yük bindirir, hava ise gurultu ve verim kaybına neden olur. Kombi sürekli sorun veriyorsa kaynak kombinin kendisi değil tesisat olabilir.",
      },
    ],
    problems: ["petek-isinmiyor", "kombi-basinc-dusuyor"],
    services: ["petek-temizligi", "kombi-montaj"],
    faq: [
      { q: "Tesisatta sızıntı varsa ne yapmalıyım?", a: "Kombinin ve ilgili hattın vanalarını kapatın, sızıntının fotoğrafını çekin ve usta çağırın." },
      { q: "Petek eklemek kombiyi zorlar mı?", a: "Kapasiteye bağlıdır. Mevcut kombi ek yükü kaldıramıyorsa ısıtma yetersiz kalır. Ekleme öncesinde ustanın değerlendirmesini alın." },
      { q: "Tesisat yenilemesi ne kadar sürer?", a: "İşin kapsamına göre bir günden birkaç güne kadar değişir. Kapsamı görerek süre verecek bir usta ile konuşmak gerçekçi bir takvim sağlar." },
    ],
  }),
  "oda-termostati": S({
    title: "Oda Termostatı | Arıza, Montaj ve Ayar",
    description:
      "Oda termostatı çalışmıyor, yanlış ölçüyor ya da yenisi takılacaksa neye dikkat etmelisiniz?",
    h1: "Oda termostatı: kombiyle konuşan küçük cihaz",
    lead: "Oda termostatı, kombiye evin ne zaman ısınması gerektiğini söyler. Arızalandığında kombi sağlam olsa bile ev ısınmayabilir ya da gereksiz çalışabilir.",
    sections: [
      {
        h: "Sık görülen sorunlar",
        p: "Pil bitmesi, kablosuz bağlantının kopması, yanlış konumlandırma (güneş alan duvar, soba, kapı yakını) ve ayarın yanlış olması en yaygın nedenlerdir. Kablolu modellerde bağlantı kopması ya da gevşemesi de görülür.",
      },
      {
        h: "Doğru yer neresi?",
        p: "Termostat evin gün boyu en çok kullanılan odasında, iç duvarda ve yerden yaklaşık bir buçuk metre yükseklikte durmalıdır. Doğrudan güneş, petek, TV ya da dış kapı yakını ölçümü bozar ve kombinin gereksiz çalışmasına yol açar.",
      },
      {
        h: "Kablolu, kablosuz ve akıllı seçenekler",
        p: "Kablolu termostatlar basit ve güvenilirdir. Kablosuz modeller kablo çekme zahmetini ortadan kaldırır ama pil ve sinyal kontrolü gerektirir. Akıllı termostatlar program ve uzaktan erişim sunar; kombinin termostat girişiyle uyumlu olması şarttır. Bazı kombiler modülasyonlu (OpenTherm benzeri) termostatlarla daha verimli çalışır; kombi modelinizin hangi tür termostatı desteklediğini ustaya sorun.",
      },
      {
        h: "Ayar önerileri",
        p: "Termostatı sürekli çok yüksek bir dereceye çekmek evi daha hızlı ısıtmaz, yalnızca kombinin daha uzun çalışmasına neden olur. Gündüz evde olunmayan saatlerde dereceyi biraz düşürmek ve geri gelmeden önce yükseltmek tasarruf sağlayabilir.",
      },
      {
        h: "Termostat arızası nasıl anlaşılır?",
        p: "Kombi sağlam görünüyor ama ısıtma hiç başlamıyorsa ya da termostat istediğiniz dereceye ulaşılmasına rağmen kombi çalışmaya devam ediyorsa termostattan şüphelenilir. Pil ve ayar kontrolünden sonra düzelme olmazsa usta kombinin termostat girişini ve termostatı ayrı ayrı test edebilir.",
      },
    ],
    problems: ["kombi-isitmiyor", "kombi-surekli-kapaniyor"],
    services: ["kombi-ariza", "kombi-montaj"],
    faq: [
      { q: "Termostat bozulursa kombi çalışır mı?", a: "Kombi çoğu durumda ısıtma talebini termostattan aldığı için ısıtma başlamayabilir. Pil ve ayarı kontrol edin, düzelmezse usta çağırın." },
      { q: "Her kombiye her termostat takılır mı?", a: "Hayır. Kombinin termostat girişi ve desteklediği haberleşme türü modele göre değişir. Satın almadan önce kombinizin uyumluluğunu kontrol edin." },
      { q: "Kablosuz termostatın pili ne sıklıkla değişir?", a: "Modele ve kullanıma bağlı olarak birkaç ayda bir yıllara kadar değişebilir. Pil zayıfladığında bağlantı kopabilir ve ısıtma başlamayabilir." },
    ],
  }),
  "sofben-termosifon": S({
    title: "Şofben ve Termosifon | Arıza, Bakım, Değişim",
    description:
      "Şofben ve termosifonlarda sıcak su gelmiyor, çalışmıyor ya da gaz kokusu var. Güvenlik ve yönlendirme rehberi.",
    h1: "Şofben ve termosifon: sıcak su veren cihazlar",
    lead: "Kombisi olmayan ya da ek sıcak su cihazı kullanan evlerde şofben ve termosifon sorunları sık görülür.",
    sections: [
      {
        h: "Şofben",
        p: "Gazlı şofbenlerde baca ve yanma güvenliği çok önemlidir. Cihaz kapalı ve havasız alanlarda kullanılmamalı, bacası düzenli kontrol edilmelidir. Alev rengi sarıya dönüyorsa, cihaz kurum yapıyorsa ya da sık sık sönüyorsa kullanmayı bırakıp usta çağırın. Gaz kokusu varsa gaz kokusu rehberindeki adımları izleyin ve 187 Doğalgaz Acil hattını arayın.",
      },
      {
        h: "Şofbende sık arızalar",
        p: "Ateşleme pili ya da elektrodu, su akış membranı ve kireçlenen eşanjör en sık karşılaşılan sorunlardır. Suyun az ısınması ya da hiç yanmaması bu parçalarla ilgili olabilir. Gaz bağlantısına ve baca ayarına dokunulmaması gerekir.",
      },
      {
        h: "Termosifon",
        p: "Elektrikli termosifonlarda rezistans, termostat, emniyet ventili ve magnezyum anot sık değişen parçalardır. Suyun ısınmaması, çok yavaş ısınması ya da ısınmayı sürekli sürdürmesi bu parçalardan kaynaklanabilir. Kireç birikimi hem ısınma süresini uzatır hem de rezistans ömrünü kısaltır.",
      },
      {
        h: "Termosifon bakımı",
        p: "Depo içindeki kireç ve tortunun temizlenmesi ve anotun durumunun kontrol edilmesi cihaz ömrünü uzatır. Sert sulu bölgelerde bakım aralığı daha kısa olabilir. Emniyet ventilinden damlama normal olabilir, ancak sürekli akış varsa usta çağırın.",
      },
      {
        h: "Kombi, şofben ve termosifon arasında seçim",
        p: "Kombi hem ısıtma hem sıcak su sağlar. Şofben anlık sıcak su verir, termosifon ise depoda su ısıtıp bekletir. Kullanım alışkanlığınıza ve mevcut tesisatınıza göre uygun olanı ustaya danışarak seçin.",
      },
    ],
    problems: ["kombi-gaz-kokusu", "kombi-karbonmonoksit", "kombi-sicak-su-vermiyor"],
    services: ["kombi-ariza", "kombi-bakim"],
    faq: [
      { q: "Şofbeni banyoda kullanmak güvenli mi?", a: "Kapalı ve havalandırması yetersiz alanlarda gazlı cihaz kullanımı karbonmonoksit riski taşır. Kurulumun ve bacanın uygunluğunu usta ile kontrol ettirin." },
      { q: "Termosifonun suyu ısınmıyorsa ne yapmalıyım?", a: "Önce elektrik bağlantısını ve sigortayı kontrol edin. Sorun sürüyorsa rezistans ya da termostat arızası olabilir; kapağı kendiniz açmayın, usta çağırın." },
      { q: "Şofben ve termosifon için ne sıklıkla bakım gerekir?", a: "Kullanıma ve su sertliğine bağlıdır. Gazlı şofbenlerde yıllık kontrol önerilir; termosifonlarda kireç ve anot durumu birkaç yılda bir gözden geçirilebilir." },
    ],
  }),
};