export type Problem = {
  slug: string;
  title: string;
  seoTitle: string;
  short: string;
  causes: string[];
  safe: string[];
  call: string[];
  faq: { q: string; a: string }[];
  services: string[];
  problems: string[];
};
export const problems: Problem[] = [
  {
    slug: "kombi-isitmiyor",
    title: "Kombi ısıtmıyor",
    seoTitle: "Kombi Isıtmıyor: Nedenleri ve İlk Kontroller | Eskişehir Kombi",
    short: "Kombi açık, ekran yanıyor ama petekler soğuk kalıyorsa sorun çoğu zaman basınçta, havada, termostatta ya da pompadadır. İlk kontroller birkaç dakika sürer.",
    causes: [
      "Kombi basıncının düşük olması",
      "Peteklerde ve tesisatta hava birikmesi",
      "Oda termostatının ayarının düşük olması ya da pilinin bitmesi",
      "Sirkülasyon pompasının çalışmaması ya da sıkışması",
      "Üç yollu vana veya eşanjör arızası",
    ],
    safe: [
      "Kombi ekranındaki basınç değerine bakın. Soğukken çoğu kombide 1 ile 1,5 bar arası beklenir; ayrıntı için kullanma kılavuzuna bakın.",
      "Oda termostatını yüksek bir değere alın, pilli ise pilini değiştirip deneyin.",
      "Kombinin yaz/kış ya da ısıtma modunda olduğundan emin olun.",
      "Hata kodu görünüyorsa kodu not alın; kılavuzda karşılığını bakın.",
    ],
    call: [
      "Basınç normal, ayarlar doğru ama petekler hâlâ soğuksa",
      "Kombi ısıtmaya geçince hemen kapanıyor ya da hata veriyorsa",
      "Kombiden anormal ses, koku ya da su sızıntısı varsa",
    ],
    faq: [
      { q: "Kombi sıcak su veriyor ama petek ısınmıyorsa ne olabilir?", a: "Sıcak su devresi çalışıp ısıtma devresi çalışmıyorsa sorun sık görülen biçimde peteklerdeki hava, düşük basınç, termostat ya da üç yollu vana kaynaklıdır. Önce basınç ve termostata bakın, düzelmezse usta çağırın." },
      { q: "Peteği kendim havalandırabilir miyim?", a: "Petek üzerindeki havalandırma vidasını açıp havayı almak yaygın bir bakımdır. Ardından kombi basıncının düştüğünü kontrol edin. Basıncı nasıl yükselteceğiniz için kombinizin kılavuzuna bakın." },
    ],
    services: ["kombi-ariza", "petek-temizligi", "oda-termostati"],
    problems: ["kombi-basinc-dusuyor", "petek-isinmiyor", "kombi-hata-kodu"],
  },
  {
    slug: "kombi-basinc-dusuyor",
    title: "Kombi basıncı düşüyor",
    seoTitle: "Kombi Basıncı Düşüyor: Neden ve Ne Yapmalı? | Eskişehir Kombi",
    short: "Basıncın zamanla düşmesi kombinin hata vermesine ve ısıtmayı kesmesine yol açar. Düşüşün hızı, arızanın nerede olduğunu gösterir.",
    causes: [
      "Tesisatta ya da kombide küçük bir su sızıntısı",
      "Genleşme tankının havasının kaçması",
      "Peteklerin havasının alınması sonrası doğal düşüş",
      "Emniyet ventilinden su tahliyesi",
    ],
    safe: [
      "Basıncı soğukken okuyun. Isınınca basınç yükselir, bu normaldir.",
      "Kombinin, petek ve boruların altında ıslaklık, damla ya da pas izi arayın.",
      "Basınç yükseltmek için kombinizin kılavuzundaki yöntemi izleyin; musluğu zorlamayın.",
      "Basıncı doldurduktan sonra birkaç gün izleyin ve ne kadar düştüğünü not edin.",
    ],
    call: [
      "Doldurduktan kısa süre sonra basınç yine düşüyorsa",
      "Basınç 3 bara yaklaşıyor ya da emniyet ventilinden su akıyorsa",
      "Kombi altında sürekli su birikiyorsa",
    ],
    faq: [
      { q: "Kombi basıncı kaç bar olmalı?", a: "Çoğu kombide soğukken 1 ile 1,5 bar arası beklenir, ancak değer markaya ve modele göre değişir. Doğru aralık için kombinizin kılavuzuna bakın." },
      { q: "Basıncı sık sık yükseltmek sorun mu?", a: "Ayda bir ya da daha seyrek yapılan doldurma normal olabilir. Haftalık ya da daha sık gerekiyorsa tesisatta kaçak veya genleşme tankı sorunu olabilir; usta kontrolü gerekir." },
    ],
    services: ["kombi-ariza", "kombi-parca-degisimi", "isitma-tesisati"],
    problems: ["kombi-su-damliyor", "kombi-isitmiyor", "petek-isinmiyor"],
  },
  {
    slug: "kombi-su-damliyor",
    title: "Kombi su damlatıyor",
    seoTitle: "Kombi Su Damlatıyor, Su Kaçırıyor: Ne Yapmalı? | Eskişehir Kombi",
    short: "Kombinin altında ya da çevresinde su görmek ciddiye alınmalıdır. Suyun nereden geldiğini bulmak, sorunun büyüklüğünü anlamanın ilk adımıdır.",
    causes: [
      "Gevşemiş ya da eskimiş bağlantı ve contalar",
      "Emniyet ventilinden basınç nedeniyle su tahliyesi",
      "Genleşme tankı ya da eşanjörde sızıntı",
      "Bağlı tesisattan kaynaklanan sızıntı",
    ],
    safe: [
      "Su akışı hızlıysa kombinin altındaki giriş vanalarını kapatın.",
      "Su elektrik bağlantılarına değiyorsa kombinin sigortasını panodan kapatın; ıslak elle kombiye ya da prize dokunmayın.",
      "Suyun nereden geldiğini fotoğraflayın; ustaya göstermek işi hızlandırır.",
      "Zemini kurulayıp bir bez ya da kap koyarak damlama hızını izleyin.",
    ],
    call: [
      "Sızıntı kendiliğinden durmuyorsa",
      "Su kombi gövdesinin içinden geliyorsa",
      "Aynı anda basınç düşüyor ya da kombi hata veriyorsa",
    ],
    faq: [
      { q: "Kombiden su damlıyorsa kullanmaya devam edebilir miyim?", a: "Sızıntı kaynağı belli değilse kombiyi kapatıp vanalarını kapatın ve usta çağırın. Küçük bir damlama bile elektrik aksamına zarar verebilir." },
      { q: "Emniyet ventilinden su gelmesi normal mi?", a: "Hayır, genellikle basıncın yüksekliğini gösterir. Basıncı kontrol edin; sürekli tekrarlıyorsa genleşme tankı ya da ventil sorunu olabilir." },
    ],
    services: ["kombi-ariza", "kombi-parca-degisimi"],
    problems: ["kombi-basinc-dusuyor", "kombi-ses-yapiyor"],
  },
  {
    slug: "kombi-ses-yapiyor",
    title: "Kombi ses yapıyor",
    seoTitle: "Kombi Ses Yapıyor: Vızıltı, Tıkırtı, Gurultu Nedenleri | Eskişehir Kombi",
    short: "Kombideki sesin türü, nedenine dair ipucu verir. Gurultu çoğunlukla havadan, tıkırtı ve vızıltı pompa ya da kireçlenmeden kaynaklanabilir.",
    causes: [
      "Tesisatta hava ya da düşük basınç (gurultu, çıtırtı)",
      "Sirkülasyon pompasının aşınması (vızıltı, uğultu)",
      "Eşanjörde kireçlenme (tıkırtı, kaynama sesi)",
      "Fan arızası ya da baca sorunu (uğultu, titreme)",
    ],
    safe: [
      "Sesin ne zaman başladığına bakın: ısıtmada mı, sıcak su alırken mi?",
      "Basıncı kontrol edin ve peteklerin havasını alın.",
      "Sesi kısa bir video ile kaydedin; ustaya anlatması kolaylaşır.",
    ],
    call: [
      "Ses tok ve metalik ise ya da kombi titriyorsa",
      "Ses yanında yanık kokusu ya da hata kodu varsa",
      "Havalandırma sonrası ses devam ediyorsa",
    ],
    faq: [
      { q: "Kombi kaynama gibi ses çıkarıyorsa ne olabilir?", a: "Eşanjörde kireç birikimi su akışını daraltır ve kaynama benzeri ses çıkarabilir. Bakım sırasında kontrol edilmesi gereken bir durumdur." },
    ],
    services: ["kombi-bakim", "kombi-parca-degisimi", "petek-temizligi"],
    problems: ["kombi-basinc-dusuyor", "kombi-sicak-su-vermiyor"],
  },
  {
    slug: "kombi-sicak-su-vermiyor",
    title: "Kombi sıcak su vermiyor",
    seoTitle: "Kombi Sıcak Su Vermiyor: Nedenleri ve Çözüm Adımları | Eskişehir Kombi",
    short: "Isıtma çalışıp sıcak su gelmiyorsa ya da tersi, sorun genellikle üç yollu vana, eşanjör ya da su akış sensöründedir.",
    causes: [
      "Plakalı eşanjörde kireç tıkanıklığı",
      "Üç yollu vananın sıkışması",
      "Su akış sensörü ya da filtresinin arızalanması",
      "Soğuk su giriş filtresinin tıkanması",
    ],
    safe: [
      "Kombinin yaz modunda ve sıcak su ayarının yeterli olduğunu kontrol edin.",
      "Birden fazla musluğu denemek, sorunun tesisatta mı kombide mi olduğunu gösterir.",
      "Kombi ekranında hata kodu varsa not alın.",
    ],
    call: [
      "Sıcak su çok az ya da ılık geliyorsa",
      "Isıtma devrede, sıcak su yoksa (ya da tersi) ve ayarlar doğruysa",
    ],
    faq: [
      { q: "Kombi sıcak su veriyor ama petek ısınmıyor. Aynı sorun mu?", a: "Hayır. Bu iki belirti farklı devrelerde. Sıcak su ile ısıtma arasındaki geçişi yapan üç yollu vana iki durumda da şüpheli parçalardan biridir." },
    ],
    services: ["kombi-ariza", "kombi-parca-degisimi", "sofben-termosifon"],
    problems: ["kombi-isitmiyor", "kombi-ses-yapiyor"],
  },
  {
    slug: "kombi-ates-almiyor",
    title: "Kombi ateş almıyor",
    seoTitle: "Kombi Ateş Almıyor, Yanmıyor: Ne Yapmalı? | Eskişehir Kombi",
    short: "Kombi çalışmaya başlıyor ama brülör ateşlenmiyorsa gaz, ateşleme ya da iyonizasyon tarafında bir sorun olabilir.",
    causes: [
      "Gaz vanasının kapalı olması ya da gazın gelmemesi",
      "Ateşleme elektrodunun kirlenmesi ya da yıpranması",
      "İyonizasyon (alev algılama) elektrodu arızası",
      "Baca ya da hava giriş sorunu",
    ],
    safe: [
      "Kombinin altındaki gaz vanasının açık olduğundan emin olun.",
      "Başka bir gaz cihazının (ocak) çalışıp çalışmadığına bakarak gaz gelip gelmediğini anlayın.",
      "Reset düğmesine kılavuzda belirtildiği şekilde en fazla bir kez basın; tekrar tekrar denemeyin.",
    ],
    call: [
      "Reset sonrası kombi yine ateş almıyorsa",
      "Ateşleme sırasında patlama benzeri ses geliyorsa",
      "Gaz kokusu varsa önce gaz kokusu rehberindeki adımları uygulayın",
    ],
    faq: [
      { q: "Reset düğmesine sürekli basmak zararlı mı?", a: "Evet. Sürekli resetlemek asıl arızayı gizler ve gaz birikmesine yol açabilir. En fazla bir kez deneyin, düzelmezse usta çağırın." },
    ],
    services: ["kombi-ariza", "kombi-parca-degisimi"],
    problems: ["kombi-gaz-kokusu", "kombi-hata-kodu", "kombi-surekli-kapaniyor"],
  },
  {
    slug: "kombi-surekli-kapaniyor",
    title: "Kombi sürekli kapanıp açılıyor",
    seoTitle: "Kombi Sürekli Kapanıp Açılıyor: Nedenleri | Eskişehir Kombi",
    short: "Kombinin kısa aralıklarla devreye girip çıkması hem konforu hem parça ömrünü düşürür. Sebep çoğunlukla ayar, hava ya da sensördür.",
    causes: [
      "Isıtma suyu sıcaklığının gereğinden yüksek ayarlanması",
      "Tesisatta hava ya da düşük sirkülasyon",
      "Oda termostatının hatalı ölçmesi",
      "Sıcaklık sensörü ya da pompa arızası",
    ],
    safe: [
      "Kombinin ısıtma suyu sıcaklığını bir miktar düşürmeyi deneyin.",
      "Termostatın ısıya maruz kalan bir yerde olup olmadığına bakın.",
      "Peteklerde havayı alıp basıncı kontrol edin.",
    ],
    call: [
      "Ayar ve hava kontrollerine rağmen devam ediyorsa",
      "Hata kodu ile birlikte kapanıyorsa",
    ],
    faq: [
      { q: "Kombinin sık açılıp kapanması fatura yükseltir mi?", a: "Genellikle evet. Kısa aralıklı çalışma verimsizdir ve parçaları yıpratır. Nedenini bulmak hem tasarruf hem ömür için önemlidir." },
    ],
    services: ["kombi-ariza", "oda-termostati", "kombi-bakim"],
    problems: ["kombi-isitmiyor", "kombi-ates-almiyor"],
  },
  {
    slug: "kombi-hata-kodu",
    title: "Kombi hata kodu veriyor",
    seoTitle: "Kombi Hata Kodları: Ne Anlama Gelir, Ne Yapılır? | Eskişehir Kombi",
    short: "Hata kodları markaya ve modele göre değişir. Doğru yorum için kombinizin kılavuzu esastır; bu sayfa genel yaklaşımı ve yaygın örnekleri anlatır.",
    causes: [
      "Düşük basınç ya da su yetersizliği",
      "Ateşleme ya da alev algılama sorunu",
      "Aşırı ısınma",
      "Sensör, pompa ya da fan arızası",
    ],
    safe: [
      "Ekrandaki kodu ve varsa harfini yazın. Modelinizin etiketini ve kılavuzunu bulun.",
      "Örneğin Vaillant kombilerde F.22 genellikle su yetersizliğini, F.28 ise çalışma başlangıcında ateşleme hatasını gösterir. Başka markalarda aynı kod farklı anlama gelebilir.",
      "Kod basınçla ilgiliyse basıncı kontrol edin; ateşleme ile ilgiliyse gaz vanasını kontrol edin.",
      "Resetleyebiliyorsanız en fazla bir kez deneyin ve kodun geri gelip gelmediğini not edin.",
    ],
    call: [
      "Kod resetten sonra geri geliyorsa",
      "Kodu kılavuzda bulamıyorsanız",
      "Kodla birlikte koku, ses ya da sızıntı varsa",
    ],
    faq: [
      { q: "Kombi hata kodunu kendim silebilir miyim?", a: "Kılavuzda belirtilen reset yöntemi kullanıcıya açıktır. Kodun nedenini gidermeden tekrar tekrar silmek sorunu çözmez." },
      { q: "Aynı hata kodu her markada aynı mı?", a: "Hayır. Kodlar üreticiye ve modele göre değişir. Doğru anlam için yalnızca kendi kombinizin kılavuzuna güvenin." },
    ],
    services: ["kombi-ariza", "kombi-bakim"],
    problems: ["kombi-basinc-dusuyor", "kombi-ates-almiyor"],
  },
  {
    slug: "petek-isinmiyor",
    title: "Petekler ısınmıyor",
    seoTitle: "Petek Isınmıyor: Üstü Sıcak Altı Soğuk, Hava ve Tıkanıklık | Eskişehir Kombi",
    short: "Peteğin tamamen ya da kısmen soğuk kalması, tesisatta hava ya da tortu birikimine işaret eder.",
    causes: [
      "Peteğin üst kısmında hava birikmesi",
      "Alt kısımda çamur ve tortu birikmesi",
      "Radyatör vanasının kapalı ya da arızalı olması",
      "Tesisat dengesizliği",
    ],
    safe: [
      "Radyatör vanalarının açık olduğundan emin olun.",
      "Üstü soğuksa havasını alın; altı soğuksa tortu birikmiş olabilir.",
      "Havalandırma sonrası kombi basıncını kontrol edin.",
    ],
    call: [
      "Havasını aldığınız halde ısınmıyorsa",
      "Birden fazla petek aynı anda ısınmıyorsa",
    ],
    faq: [
      { q: "Petek temizliği ne zaman gerekir?", a: "Petekler alttan soğuk, üstten sıcak kalıyor ya da ısıtma gittikçe zayıflıyorsa tortu birikimi olabilir. Temizlik sonrası verim artabilir." },
    ],
    services: ["petek-temizligi", "isitma-tesisati"],
    problems: ["kombi-isitmiyor", "kombi-basinc-dusuyor"],
  },
  {
    slug: "kombi-gaz-kokusu",
    title: "Kombiden gaz kokusu geliyor",
    seoTitle: "Gaz Kokusu Gelirse Ne Yapılır? İlk Adımlar | Eskişehir Kombi",
    short: "Gaz kokusu acil bir durumdur. Önce güvenliğinizi sağlayın, ancak sonra usta çağırın.",
    causes: [
      "Kombi bağlantılarında gaz sızıntısı",
      "Gaz vanası ya da hortum yıpranması",
      "Yanma sorunu nedeniyle yanmamış gaz",
    ],
    safe: [
      "Açık ateşi, sigarayı ve ışık anahtarı dahil elektrikli cihazları kullanmayın.",
      "Pencere ve kapıları açarak ortamı havalandırın.",
      "Gaz vanasını kapatın; kapatamıyorsanız binadan çıkın.",
      "Binadan çıktıktan sonra 187 Doğalgaz Acil hattını arayın. Duman, alev ya da rahatsızlık varsa 112'yi arayın.",
    ],
    call: [
      "Gaz kesildikten ve gaz şirketi kontrolü yapıldıktan sonra kombiyi kontrol ettirmek için",
    ],
    faq: [
      { q: "Gaz kokusu alırsam önce kimi aramalıyım?", a: "Önce güvenli bir yere çıkın, ardından 187 Doğalgaz Acil hattını arayın. Duman, alev ya da rahatsızlık varsa 112. Servis çağırmak bundan sonra gelir." },
    ],
    services: ["kombi-ariza", "kombi-bakim"],
    problems: ["kombi-karbonmonoksit", "kombi-ates-almiyor"],
  },
  {
    slug: "kombi-karbonmonoksit",
    title: "Kombi ve karbonmonoksit riski",
    seoTitle: "Kombi ve Karbonmonoksit: Belirtiler, Korunma | Eskişehir Kombi",
    short: "Karbonmonoksit renksiz ve kokusuzdur. Baca ve yanma sorunlarında oluşabilir; belirtileri bilmek hayat kurtarır.",
    causes: [
      "Tıkalı ya da hatalı bağlanmış baca",
      "Yetersiz havalandırma",
      "Bakımsız kombide eksik yanma",
    ],
    safe: [
      "Baş ağrısı, baş dönmesi, mide bulantısı ya da uyuşukluk hissederseniz kombiyi kapatın, pencereleri açın ve açık havaya çıkın.",
      "Belirti sürerse ya da bilinç bulanıklığı varsa hemen 112'yi arayın.",
      "Evde karbonmonoksit dedektörü bulundurmayı değerlendirin.",
      "Kombi ve bacayı yılda bir kez kontrol ettirin.",
    ],
    call: [
      "Güvenlik sağlandıktan sonra kombi ve baca kontrolü için",
    ],
    faq: [
      { q: "Karbonmonoksit koku yapar mı?", a: "Hayır. Gaz kokusu ile karıştırılmamalıdır; karbonmonoksit koku vermez. Bu yüzden belirtiler ve dedektör önemlidir." },
    ],
    services: ["kombi-bakim", "kombi-montaj"],
    problems: ["kombi-gaz-kokusu", "kombi-ates-almiyor"],
  },
];
