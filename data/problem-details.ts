// Arıza merkezi sayfalarına eklenen ayrıntılı bölümler.
// Anahtar: data/problems.ts içindeki slug. Sayfa şablonu bu bölümleri "Olası nedenler"
// listesinden sonra, SSS'den önce gösterir.
export type DetailSection = { h: string; p: string };

export const problemDetails: Record<string, DetailSection[]> = {
  "kombi-isitmiyor": [
    {
      h: "Sıcak su var ama petek soğuk: ne anlama gelir?",
      p: "Kombi musluktan sıcak su veriyor ama petekler ısınmıyorsa sıcak su devresi çalışıyor, ısıtma devresi çalışmıyor demektir. Bu durum çoğunlukla düşük basınç, peteklerde hava, termostatın ısıtma talebi göndermemesi ya da üç yollu vananın ısıtma konumuna geçememesinden kaynaklanır. Tersi durumda, yani petekler ısınıp sıcak su gelmiyorsa plakalı eşanjör ya da su akış sensörü şüphelidir.",
    },
    {
      h: "Eskişehir'de ilk soğukta neden sık görülür?",
      p: "Yaz boyunca durmuş bir sistem sonbaharda ilk kez çalıştırıldığında pompa ve vanalar sıkışmış olabilir, tesisatta toplanan hava ilk ısıtmada ortaya çıkar. Eskişehir'de ilk soğuklar geldiğinde servis çağrılarının artmasının nedeni de budur. Sezon başlamadan kombiyi kısa süre çalıştırıp petekleri denemek bu sürprizleri azaltır.",
    },
    {
      h: "Ustaya ne söylemelisiniz?",
      p: "Sıcak suyun gelip gelmediğini, peteklerin hiç mi yoksa kısmen mi ısındığını, basınç değerini, termostat türünü ve hata kodunu belirtin. Bu bilgiler arızanın hangi devrede olduğunu daraltır ve ustanın doğru parçayla gelme ihtimalini yükseltir.",
    },
  ],
  "kombi-basinc-dusuyor": [
    {
      h: "Basınç düşüşünün hızı ne söyler?",
      p: "Basınç birkaç saat içinde belirgin biçimde düşüyorsa tesisatta ya da kombide aktif bir kaçak olabilir. Birkaç günde yavaşça düşüyorsa küçük bir sızıntı, genleşme tankı sorunu ya da havalandırma sonrası doğal düşüş söz konusudur. Basıncı doldurduktan sonra ne kadar sürede düştüğünü not etmek ustanın işini kolaylaştırır.",
    },
    {
      h: "Basınç doldurmanın sınırları",
      p: "Basıncı kılavuzda belirtilen yöntemle ve soğukken tamamlayın. Aşırı doldurmak emniyet ventilinden su gelmesine yol açabilir. Basıncı sık sık doldurmak zorunda kalıyorsanız bu bir bakım işi değil, nedenin araştırılması gereken bir belirtidir.",
    },
    {
      h: "Genleşme tankı belirtisi",
      p: "Basınç kombi ısınırken hızla yükselip soğuyunca hızla düşüyorsa genleşme tankının havası kaçmış olabilir. Bu durumda basınç doldurmak kalıcı çözüm olmaz; tankın kontrol edilmesi ya da değişmesi gerekir.",
    },
  ],
  "kombi-su-damliyor": [
    {
      h: "Suyun yerine göre neden anlaşılır?",
      p: "Su kombinin alt kısmında bağlantı noktalarından damlıyorsa gevşemiş ya da eskimiş conta ve rakorlar şüphelidir. Emniyet ventilinden gelen su genellikle yüksek basınca işaret eder. Gövdenin içinden geliyorsa eşanjör ya da iç bağlantılarda sorun olabilir. Suyun hangi noktadan geldiğini fotoğraflamak ustaya büyük kolaylık sağlar.",
    },
    {
      h: "Damlayan su ne kadar acildir?",
      p: "Hızlı akış ya da elektrik aksamına değen su acildir: giriş vanalarını kapatın, kombinin sigortasını panodan kapatın ve usta çağırın. Çok yavaş damlayan bir bağlantı daha az acildir ama bekletmek hem basınç düşmesine hem de kombi içinde korozyona yol açabilir.",
    },
    {
      h: "Altta kalan hasarı önleyin",
      p: "Kombinin altına geçici olarak bir kap ya da bez koyun, zemini kuru tutun. Kombi altında kalan su zemine ve mobilyalara zarar verebilir; özellikle daireler arası sızıntı riski olan binalarda hızlı davranmak komşuluk sorunlarını da önler.",
    },
  ],
  "kombi-ses-yapiyor": [
    {
      h: "Ses türüne göre ipuçları",
      p: "Gurultu ve çıtırtı genellikle havaya ya da düşük basınca işaret eder. Vızıltı ve uğultu pompanın aşınmasıyla ilgili olabilir. Tıkırtı ve kaynama sesi eşanjörde kireçlenme belirtisidir. Titreme ve uğultu fan ya da baca bağlantısı sorununa işaret edebilir. Sesin ısıtmada mı yoksa sıcak su alırken mi geldiğini ayırt etmek tanıyı hızlandırır.",
    },
    {
      h: "Kendi başınıza deneyebileceğiniz kontroller",
      p: "Petekleri havalandırın, basıncı kontrol edin, kombinin üzerindeki objeleri kaldırın ve sesin devam edip etmediğine bakın. Sesin kaydını almak ustaya tarif etmekten çok daha açıklayıcıdır.",
    },
    {
      h: "Ses ihmal edilmeli mi?",
      p: "Hafif ve geçici sesler çoğu zaman havadan kaynaklanır, ancak tok, metalik ya da giderek artan sesler parçanın aşındığını gösterir. Bakım zamanı gelmiş bir kombide ses artıyorsa arızanın büyümesini beklemeden kontrol ettirmek parça masrafını sınırlayabilir.",
    },
  ],
  "kombi-sicak-su-vermiyor": [
    {
      h: "Isıtma çalışıyor mu?",
      p: "Isıtma çalışıp sıcak su gelmiyorsa plakalı eşanjör, üç yollu vana ya da su akış sensörü şüphelidir. Hem ısıtma hem sıcak su yoksa sorun daha çok ateşleme, gaz ya da elektronik tarafındadır. Bu ayrım ustaya vereceğiniz ilk önemli bilgidir.",
    },
    {
      h: "Tek musluk mu, tüm musluklar mı?",
      p: "Yalnızca bir musluktan sıcak su gelmiyorsa sorun o musluğun bataryasında ya da hattında olabilir. Tüm musluklarda sıcak su yoksa kombi ya da ana sıcak su hattı kaynaklıdır. Birden fazla musluğu denemek gereksiz kombi servisi çağırmanızı önleyebilir.",
    },
    {
      h: "Kireç ve filtre",
      p: "Kireçli sularda plakalı eşanjörde birikim zamanla sıcak su verimini düşürür. Soğuk su giriş filtresinin tıkanması da akışı azaltarak kombinin sıcak su moduna geçmesini engelleyebilir. Bu parçaların temizliği ya da değişimi usta işidir.",
    },
  ],
  "kombi-ates-almiyor": [
    {
      h: "Ateşleme nasıl çalışır?",
      p: "Kombi ısıtma talebi aldığında fan çalışır, gaz valfi açılır ve ateşleme elektrodu kıvılcım çıkarır. İyonizasyon elektrodu alevi algılar; alev algılanmazsa kombi güvenlik gereği gazı keser. Bu zincirdeki herhangi bir halka sorun yaşarsa kombi ateş almaz.",
    },
    {
      h: "Neden tekrar tekrar denememelisiniz?",
      p: "Ateşleme başarısız olduğunda gaz kısa süre için açılmış olabilir. Reset düğmesine arka arkaya basmak gaz birikimine yol açabilir. Kılavuzda belirtildiği şekilde en fazla bir kez deneyin, sonuç değişmiyorsa kombiyi bekletin.",
    },
    {
      h: "Gaz kokusu varsa",
      p: "Ateşleme sırasında gaz kokusu alıyorsanız kombiyi denemeyi bırakın, açık alev ve elektrik anahtarlarından uzak durun, ortamı havalandırın ve gaz kokusu rehberindeki adımları izleyin. Kombi ancak gaz şirketi kontrolünden sonra kontrol edilmelidir.",
    },
  ],
  "kombi-surekli-kapaniyor": [
    {
      h: "Kısa çevrim nedir?",
      p: "Kombi çok kısa aralıklarla yanıp sönüyorsa buna kısa çevrim denir. Bu durum hem konforu bozar hem de parçaları yıpratır, ayrıca yakıt tüketimini artırır. Nedeni genellikle ısıtma suyu sıcaklığının gereğinden yüksek olması, tesisatta yetersiz sirkülasyon ya da termostatın yanlış ölçümüdür.",
    },
    {
      h: "Termostat ve ayarlar",
      p: "Termostat güneş alan bir duvarda ya da petek yakınındaysa ortamı olduğundan sıcak algılar ve kombiyi erken kapatır. Kombinin ısıtma suyu sıcaklığını bir miktar düşürmek ve termostatı daha uygun bir yere almak çoğu zaman sorunu hafifletir.",
    },
    {
      h: "Sensör ve pompa",
      p: "Ayar ve hava kontrollerine rağmen kapanıp açılma sürüyorsa sıcaklık sensörü ya da pompa sorunu olabilir. Bu durumda ustanın ölçüm yapması gerekir. Sorunu uzun süre ihmal etmek kombi ömrünü kısaltabilir.",
    },
  ],
  "kombi-hata-kodu": [
    {
      h: "Hata kodu nedir?",
      p: "Modern kombiler kendi kendini izler ve bir sorun algıladığında ekranda kod gösterir. Bu kod arızanın kendisini değil, kombinin hangi kontrolden geçemediğini söyler. Aynı kod farklı markalarda farklı anlama gelebileceği için yorum yaparken cihazın markasını ve modelini mutlaka bilmek gerekir.",
    },
    {
      h: "Kodu nerede aratmalısınız?",
      p: "En güvenilir kaynak kombinin kullanma kılavuzudur. Kılavuzu bulamıyorsanız üreticinin sitesindeki kılavuz bölümüne bakabilirsiniz. Marka ve kod birlikte aratıldığında genel açıklamalar bulunur, ancak bunlar kombinizin tam modeli için geçerli olmayabilir.",
    },
    {
      h: "Kod ile birlikte not edin",
      p: "Kodun hangi durumda geldiğini (ısıtma, sıcak su, ilk çalıştırma), reset sonrası geri gelip gelmediğini ve o sırada basıncı not edin. Bu bilgi ustanın arıza arama süresini kısaltır.",
    },
  ],
  "petek-isinmiyor": [
    {
      h: "Üst mü alt mı soğuk?",
      p: "Peteğin üstü soğuk, altı sıcaksa içinde hava birikmiş demektir; havalandırma vidasından havayı almak yeterli olabilir. Altı soğuk, üstü sıcaksa genellikle tortu birikmiştir ve havalandırma çözmez. Peteğin tamamen soğuk kalması ise vana, tıkanık boru ya da tesisat dengesizliği anlamına gelebilir.",
    },
    {
      h: "Tek petek mi, tüm evde mi?",
      p: "Yalnızca bir petek soğuksa sorun o peteğin vanasında ya da kendi hattındadır. Birden fazla petek aynı anda soğuksa kolektör, pompa ya da genel tesisat dengesi gündemdedir. Bu ayrımı yapmak ustaya doğru yerden başlama imkânı verir.",
    },
    {
      h: "Havalandırdıktan sonra",
      p: "Peteğin havasını aldıktan sonra kombi basıncının düştüğünü kontrol edin ve gerekirse kılavuza göre tamamlayın. Basınç düşük kalırsa kombi hata verip ısıtmayı kesebilir ve petekler yeniden soğur.",
    },
  ],
  "kombi-gaz-kokusu": [
    {
      h: "Önce güvenlik, sonra sebep",
      p: "Gaz kokusu aldığınızda nedenini araştırmak yerine önce kendinizi ve çevrenizi güvenceye almak gerekir. Açık alev, sigara, ışık anahtarı, zil ve prize takılan cihazlar kıvılcım çıkarabilir; bunları kullanmayın. Pencereleri açın, gaz vanasını kapatın ve binadan çıkın.",
    },
    {
      h: "Kimi aramalısınız?",
      p: "Binanın dışına çıktıktan sonra 187 Doğalgaz Acil hattını arayın. Duman, alev ya da kendinizde rahatsızlık varsa 112'yi arayın. Kombi ustasını aramak bu sürecin parçası değildir; gaz şirketi ekibi kontrolü yaptıktan ve gaz kesildikten sonra kombi kontrolüne geçilebilir.",
    },
    {
      h: "Kokunun kaynağı kombi olmayabilir",
      p: "Gaz kokusu ocak, şofben, sayaç ya da gaz tesisatındaki bir bağlantıdan gelebilir. Kaynağı kendiniz bulmaya çalışmayın; bu iş gaz şirketinin ve yetkili ekibin sorumluluğundadır.",
    },
  ],
  "kombi-karbonmonoksit": [
    {
      h: "Karbonmonoksit neden tehlikelidir?",
      p: "Karbonmonoksit renksiz ve kokusuz bir gazdır, bu yüzden fark edilmesi zordur. Eksik yanma, tıkalı baca ya da yetersiz havalandırma durumunda oluşur. Baş ağrısı, baş dönmesi, mide bulantısı ve halsizlik ilk belirtilerdir; yüksek miktarda solunması ciddi sağlık sorunlarına yol açabilir.",
    },
    {
      h: "Riski azaltmak için",
      p: "Kombi bakımını düzenli yaptırmak, baca bağlantısını kontrol ettirmek ve cihazın bulunduğu alanın havalandırmasını kapatmamak riski düşürür. Kombinin olduğu ya da gazlı cihazların kullanıldığı kapalı alanlarda karbonmonoksit dedektörü bulundurmak ek güvenlik sağlayabilir.",
    },
    {
      h: "Belirti hissederseniz",
      p: "Kombiyi kapatın, pencereleri açın ve açık havaya çıkın. Belirtiler sürüyorsa ya da bilinç bulanıklığı varsa 112'yi arayın. Evde birden fazla kişide aynı anda benzer belirtiler görülmesi karbonmonoksit şüphesini güçlendirir. Kombi, uzman kontrolünden geçmeden yeniden çalıştırılmamalıdır.",
    },
  ],
};