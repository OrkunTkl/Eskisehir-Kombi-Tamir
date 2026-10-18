export type ErrorCode = {
  slug: string;
  brand: string;
  code: string;
  title: string;
  seoTitle: string;
  short: string;
  meaning: string[];
  causes: string[];
  safe: string[];
  call: string[];
  faq: { q: string; a: string }[];
  related: string[]; // diğer hata kodu sayfaları
  problems: string[]; // arıza merkezi sayfaları
  services: string[];
  gas?: boolean; // gaz kokusu uyarı kutusu gösterilsin
  date: string; // yayın / son güncelleme günü (YYYY-MM-DD)
};

export const errorCodes: ErrorCode[] = [
  {
    slug: "vaillant-f22-hatasi",
    brand: "Vaillant",
    code: "F22",
    title: "Vaillant F22 hatası",
    seoTitle: "Vaillant F22 Hatası: Anlamı, Nedenleri ve Çözümü | Eskişehir Kombi",
    short:
      "F22, kombinin su basıncının güvenli seviyenin altına düştüğünü gösterir. Çoğu zaman basıncı tamamlamak yeterli olur, ama sık tekrarlıyorsa kaçak vardır.",
    meaning: [
      "Vaillant kombilerde F22 hatası, ısıtma devresindeki su basıncının çok düşük olduğunu bildirir. Çoğu modelde basınç yaklaşık 0,8 barın altına inince ekrandaki basınç göstergesi uyarı verir. Yaklaşık 0,5 barın altında ise kombi, susuz çalışmayı önlemek için ısıtmayı kapatır ve F22 gösterir. Bu değerler modele göre değişebilir.",
      "Bu durumda kombi arızalı olmak zorunda değildir. Basınç tamamlanınca çoğu zaman yeniden çalışır. Asıl sorulması gereken, basıncın neden düştüğüdür.",
    ],
    causes: [
      "Petek havası alındıktan ya da tesisat bakımı yapıldıktan sonra basıncın doğal olarak düşmesi",
      "Kombide, boru bağlantılarında ya da peteklerde küçük bir su sızıntısı",
      "Genleşme tankının havasının kaçması. Bu durumda basınç ısınınca yükselir, soğuyunca hızla düşer.",
      "Emniyet ventilinden fark edilmeden su tahliye edilmesi",
      "Basınç sensörünün yanlış ölçmesi (nadir)",
    ],
    safe: [
      "Kombi soğukken ekrandaki basınç değerini okuyun.",
      "Kombinizin kılavuzundaki yönteme göre, doldurma vanasını yavaşça açarak basıncı 1 ile 1,5 bar arasına tamamlayın. İş bitince vanayı tam kapatın.",
      "Basıncı 1,5 barın üzerine çıkarmayın. Kombi ısınınca basınç kendiliğinden biraz yükselir.",
      "Kombinin, boruların ve peteklerin altında ıslaklık, damla ya da pas izi arayın.",
      "Basınç tamamlandıktan sonra kombi kendiliğinden çalışmazsa kılavuzdaki sıfırlama düğmesine bir kez basın.",
    ],
    call: [
      "Basıncı tamamladıktan birkaç gün içinde F22 yeniden çıkıyorsa",
      "Haftada bir ya da daha sık basınç tamamlamanız gerekiyorsa",
      "Kombinin altında ya da tesisatta su birikiyor, ıslaklık görüyorsanız",
      "Basınç tamamlandığı halde hata gitmiyorsa",
    ],
    faq: [
      {
        q: "F22 hatasında kombiyi sıfırlamak yeterli mi?",
        a: "Önce basıncı tamamlamak gerekir. Basınç düşükken sıfırlamak hatayı kaldırmaz. Basınç normale gelince kombi çoğu zaman kendiliğinden devreye girer, girmezse sıfırlama düğmesine bir kez basın.",
      },
      {
        q: "F22 ne sıklıkla tekrarlarsa usta gerekir?",
        a: "Basıncı ayda bir ya da daha seyrek tamamlıyorsanız bu çoğu zaman normaldir. Haftalar içinde yeniden düşüyorsa kaçak ya da genleşme tankı sorunu olabilir ve usta kontrolü gerekir.",
      },
      {
        q: "Doldurma vanasını açmaktan çekiniyorum, ne yapmalıyım?",
        a: "Vanayı yavaş açın ve göstergeyi izleyin. Emin değilseniz kombinizin kılavuzuna bakın ya da usta çağırın. Doğru yöntem modele göre değişebilir.",
      },
    ],
    related: ["vaillant-f75-hatasi"],
    problems: ["kombi-basinc-dusuyor", "kombi-isitmiyor", "kombi-hata-kodu"],
    services: ["kombi-ariza", "kombi-parca-degisimi"],
    date: "2026-10-18",
  },
  {
    slug: "vaillant-f28-hatasi",
    brand: "Vaillant",
    code: "F28",
    title: "Vaillant F28 hatası",
    seoTitle: "Vaillant F28 Hatası: Kombi Ateşlemiyor, Ne Yapmalı? | Eskişehir Kombi",
    short:
      "F28, kombinin brülörü ateşleyemediğini gösterir. Gaz vanasını ve gazın gelip gelmediğini kontrol edin; birkaç denemeden sonra düzelmezse usta gerekir.",
    meaning: [
      "Vaillant kombilerde F28, ateşleme sırasında brülörün yanmadığını bildirir. Kombi gazı açıp ateşlemeyi birkaç kez dener, alev oluşmazsa güvenlik için arıza durumuna geçer ve kendiliğinden yeniden denemez. Tekrar başlatmak için sıfırlama gerekir.",
      "Bu hata, ısıtmanın ve sıcak suyun tamamen durmasına yol açar. Sebep çoğunlukla gazın gelmemesi, ateşleme elektrodu ya da gaz valfi gibi parçalardır.",
    ],
    causes: [
      "Kombinin gaz vanasının kapalı olması ya da binada gaz kesintisi",
      "Kartlı ya da ön ödemeli sayaç kullanılıyorsa kredinin bitmesi",
      "Ateşleme elektrodunun kirlenmesi veya aşınması",
      "Gaz valfinin arızası",
      "Elektronik kartın ateşleme komutunu vermemesi",
      "Bakım ya da montaj sonrası tesisata hava girmesi",
    ],
    safe: [
      "Kombinin altındaki gaz vanasının açık olduğunu kontrol edin. Kol, borunun yönünde olmalıdır.",
      "Mutfaktaki ocağı yakmayı deneyin. Ocak da yanmıyorsa sorun binanın gazındadır, doğalgaz dağıtım şirketiyle iletişime geçin.",
      "Kartlı sayaç kullanıyorsanız kredinizi kontrol edin.",
      "Kombiyi bir kez sıfırlayın. Düzelmezse tekrar tekrar sıfırlamayın.",
    ],
    call: [
      "Gaz var, vana açık ve sıfırlamadan sonra F28 tekrar çıkıyorsa",
      "Kombi ateşlemeye çalışırken tıkırtı sesi geliyor ama yanmıyorsa",
      "Hata birkaç gün içinde tekrar tekrar geliyorsa",
    ],
    faq: [
      {
        q: "F28 hatasında kaç kez sıfırlama yapabilirim?",
        a: "Bir ya da iki kez deneyebilirsiniz. Her seferinde hata geri geliyorsa sıfırlamayı bırakın. Sorun büyük olasılıkla bir parçadadır ve usta kontrolü gerekir.",
      },
      {
        q: "F28 ile F29 aynı şey mi?",
        a: "Hayır. F28, kombinin ilk ateşlemeyi yapamadığını gösterir. F29 ise ateşleme olduktan sonra çalışırken alevin söndüğünü gösterir. İkisinde de gaz akışı ve elektrot kontrol edilir.",
      },
      {
        q: "F28 gaz kaçağı anlamına mı gelir?",
        a: "Hayır. Kombi gaz alamadığı ya da ateşleyemediği için durur. Yine de gaz kokusu alıyorsanız cihazı kullanmayın, havalandırın, binadan çıkın ve 187'yi arayın.",
      },
    ],
    related: ["vaillant-f29-hatasi", "vaillant-f27-hatasi"],
    problems: ["kombi-ates-almiyor", "kombi-hata-kodu", "kombi-gaz-kokusu"],
    services: ["kombi-ariza", "kombi-parca-degisimi"],
    gas: true,
    date: "2026-10-18",
  },
  {
    slug: "vaillant-f29-hatasi",
    brand: "Vaillant",
    code: "F29",
    title: "Vaillant F29 hatası",
    seoTitle: "Vaillant F29 Hatası: Alev Sönüyor, Nedenleri ve Çözümü | Eskişehir Kombi",
    short:
      "F29, kombi çalışırken alevin söndüğünü gösterir. Gaz akışı, baca ve yoğuşma gideri kontrol edilir; düzelmezse usta gerekir.",
    meaning: [
      "F29 hatası, brülör yanarken alevin kaybolduğunu bildirir. Kombi bu durumda gazı keser ve arıza durumuna geçer. F28'den farkı, ateşlemenin başarılı olması ama alevin devam etmemesidir.",
      "Eskişehir gibi kışı soğuk geçen yerlerde, özellikle yoğuşmalı kombilerde dışarıya açılan yoğuşma suyu borusunun donması bazı durumlarda bu hataya yol açabilir.",
    ],
    causes: [
      "Gaz akışının geçici olarak kesilmesi ya da gaz basıncının düşmesi",
      "Baca çıkışının ya da hava emiş hattının tıkanması",
      "Yoğuşmalı kombilerde yoğuşma gideri borusunun tıkanması veya donması",
      "Ateşleme ve alev algılama elektrodunun kirlenmesi ya da arızası",
      "Gaz valfi veya elektronik kart arızası",
    ],
    safe: [
      "Gaz vanasının açık olduğundan ve diğer gazlı cihazların çalıştığından emin olun.",
      "Soğuk havalarda baca çıkışının önünde kar, buz ya da engel olup olmadığına bakın. Baca ve yoğuşma borusu üzerinde kendiniz işlem yapmayın.",
      "Kombiyi bir kez sıfırlayın.",
      "Hata tekrar gelirse kombiyi kullanmayı bırakıp usta çağırın.",
    ],
    call: [
      "Sıfırlamadan sonra F29 tekrar ediyorsa",
      "Kombi kısa süre çalışıp sonra kapanıyorsa",
      "Baca ya da yoğuşma borusunda donma, tıkanıklık şüphesi varsa",
      "Kombiden gaz ya da yanık kokusu geliyorsa",
    ],
    faq: [
      {
        q: "F29 hatası kışın daha mı sık görülür?",
        a: "Soğuk havalarda yoğuşma borusunun donması ve gaz basıncının düşmesi gibi nedenlerle kışın daha sık görülebilir. Aynı kod yazın da çıkabilir, sebep her zaman soğuk değildir.",
      },
      {
        q: "F29 çıkınca kombiyi kullanmaya devam edebilir miyim?",
        a: "Kombi güvenlik nedeniyle zaten durur. Sürekli sıfırlayıp çalıştırmak yerine bir ya da iki denemeden sonra usta çağırın.",
      },
      {
        q: "Baca temizliği F29'u çözer mi?",
        a: "Sebep baca tıkanıklığıysa evet, ama sebebi ustanın bulması gerekir. Baca ve gaz hatlarına müdahale yetkili kişilerce yapılmalıdır.",
      },
    ],
    related: ["vaillant-f28-hatasi", "vaillant-f27-hatasi"],
    problems: ["kombi-surekli-kapaniyor", "kombi-hata-kodu", "kombi-gaz-kokusu"],
    services: ["kombi-ariza", "kombi-parca-degisimi"],
    gas: true,
    date: "2026-10-18",
  },
  {
    slug: "vaillant-f75-hatasi",
    brand: "Vaillant",
    code: "F75",
    title: "Vaillant F75 hatası",
    seoTitle: "Vaillant F75 Hatası: Pompa ve Basınç Sensörü Arızası | Eskişehir Kombi",
    short:
      "F75, pompa çalışırken kombinin basınç değişimini algılayamadığını gösterir. Pompa ya da basınç sensörü arızası olabilir, çoğunlukla usta gerekir.",
    meaning: [
      "F75 hatası, pompa devreye girdiğinde basınç sensörünün beklenen basınç değişimini görmediğini bildirir. Kombi bu durumda pompanın ya da sensörün çalışmadığını varsayıp ısıtmayı durdurur.",
      "Bu kod F22'den farklıdır. F22'de basınç gerçekten düşüktür. F75'te basınç normal olabilir, sorun pompada ya da sensördedir.",
    ],
    causes: [
      "Sirkülasyon pompasının arızalanması ya da sıkışması",
      "Basınç sensörünün yanlış ölçmesi veya bağlantısının gevşemesi",
      "Tesisatta fazla hava olması",
      "Elektronik kart sorunu",
    ],
    safe: [
      "Ekrandaki basıncın 1 ile 1,5 bar arasında olduğunu kontrol edin, düşükse kılavuzdaki yöntemle tamamlayın.",
      "Petek havasını almayı deneyin, ardından basıncı yeniden kontrol edin.",
      "Kombiyi bir kez sıfırlayın.",
      "Pompaya ya da sensöre müdahale etmeyin, kombinin kapağını açmayın.",
    ],
    call: [
      "Basınç normal olduğu halde F75 çıkıyorsa",
      "Sıfırlamadan sonra hata tekrar ediyorsa",
      "Kombi çalışırken pompa sesi gelmiyor ya da anormal gürültü varsa",
    ],
    faq: [
      {
        q: "F75 ile F22 arasındaki fark nedir?",
        a: "F22'de kombinin su basıncı gerçekten düşüktür ve çoğu zaman basıncı tamamlamak yeterlidir. F75'te basınç normal olabilir, pompa ya da sensör beklenen değişimi vermez. F75 çoğunlukla ustanın kontrolünü gerektirir.",
      },
      {
        q: "F75 pahalı bir arıza mı?",
        a: "Maliyet nedene göre değişir: sensör ya da pompa değişimi gerekebilir, bazen sadece hava almak yeterli olur. Fiyatı ustanın arızayı gördükten sonra söylemesi gerekir, telefonda kesin fiyat verilmesi güvenilir değildir.",
      },
    ],
    related: ["vaillant-f22-hatasi"],
    problems: ["kombi-isitmiyor", "kombi-basinc-dusuyor", "kombi-hata-kodu"],
    services: ["kombi-ariza", "kombi-parca-degisimi"],
    date: "2026-10-18",
  },
  {
    slug: "vaillant-f27-hatasi",
    brand: "Vaillant",
    code: "F27",
    title: "Vaillant F27 hatası",
    seoTitle: "Vaillant F27 Hatası: Yanlış Alev Algılama, Anlamı ve Çözümü | Eskişehir Kombi",
    short:
      "F27, kombinin gaz valfi kapalıyken alev algıladığını gösterir. Nem gibi basit sebepleri olabilir ama güvenlik hatasıdır; tekrarlarsa usta gerekir.",
    meaning: [
      "F27 hatası, kombi brülörü yakmıyorken alev sensörünün alev görmesi anlamına gelir. Bu bir güvenlik hatasıdır: kombi emin olamadığı için devreyi kapatır.",
      "Çoğu zaman sebep gerçek bir alev değil, elektrodun ya da kart bağlantısının nem veya kirle yanlış sinyal vermesidir. Gaz valfinin tam kapanmaması da mümkündür, bu yüzden hata tekrar ediyorsa usta kontrolü gerekir.",
    ],
    causes: [
      "Elektronik kartta ya da elektrot bağlantısında nem veya kirlenme",
      "Alev algılama elektrodunun arızası",
      "Gaz valfinin tam kapanmaması",
      "Elektronik kart arızası",
    ],
    safe: [
      "Kombiyi bir kez sıfırlayın.",
      "Kombinin çevresinde ve altında nem ya da su damlaması olup olmadığına bakın.",
      "Hata tekrar ederse sürekli sıfırlamayın.",
    ],
    call: [
      "F27 sıfırlamadan sonra tekrar çıkıyorsa",
      "Kombiden gaz ya da yanık kokusu geliyorsa",
      "Kombide ya da çevresinde nem, su sızıntısı varsa",
    ],
    faq: [
      {
        q: "F27 tehlikeli bir hata mı?",
        a: "Kombi güvenlik amacıyla kendini kapattığı için doğrudan tehlike oluşturmaz, ama sebebi gaz valfi olabileceğinden hatanın tekrar etmesini göz ardı etmeyin ve usta çağırın.",
      },
      {
        q: "Nem yüzünden F27 çıkarsa kendiliğinden geçer mi?",
        a: "Bazen kısa süreli nem nedeniyle çıkar ve sıfırlamayla gider. Aynı gün ya da birkaç gün içinde tekrar ediyorsa arızanın başka bir sebebi vardır.",
      },
    ],
    related: ["vaillant-f28-hatasi", "vaillant-f29-hatasi"],
    problems: ["kombi-hata-kodu", "kombi-surekli-kapaniyor", "kombi-gaz-kokusu"],
    services: ["kombi-ariza", "kombi-parca-degisimi"],
    gas: true,
    date: "2026-10-18",
  },
];

export const errorCodeBySlug = (s: string) => errorCodes.find((e) => e.slug === s);