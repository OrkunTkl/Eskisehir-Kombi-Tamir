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
    title: "Eskişehir Kombi Arıza | Kombi Tamiri İçin Yönlendirme",
    description: "Kombi ısıtmıyor, ateş almıyor ya da hata veriyor mu? Önce güvenle kontrol edebilecekleriniz, sonra uygun kombi ustasına yönlendirme.",
    h1: "Kombi arızası: önce ne olduğunu anlayın, sonra ustayı çağırın",
    lead: "Kombi arızaları üç büyük başlığa ayrılır: ısıtma ve sıcak su devresi, gaz ve ateşleme, elektronik ve sensörler. Belirtiyi doğru tarif etmek, ustanın ilk gelişte işi bitirme ihtimalini yükseltir.",
    sections: [
      { h: "Belirtiyi not edin", p: "Hata kodunu, basınç değerini, sesin ne zaman geldiğini ve en son ne zaman düzgün çalıştığını yazın. Bu bilgiler telefonda bile ön tanı için işe yarar." },
      { h: "Güvenle kontrol edebilecekleriniz", p: "Basınç göstergesi, gaz vanasının açık olması, termostat ayarı ve pili, petek vanaları kullanıcının kontrol edebileceği şeylerdir. Kombinin kapağını açmayın, gaz bağlantılarına dokunmayın." },
      { h: "Ne zaman beklemeden usta çağırılır?", p: "Su sızıntısı, tekrarlayan hata kodu, ateşleme sırasında patlama sesi ya da yanık kokusu varsa kombiyi kapatın ve destek isteyin. Gaz kokusu varsa önce gaz kokusu rehberindeki güvenlik adımlarını uygulayın." },
      { h: "Yönlendirme nasıl işler?", p: "Bu platform kombi hizmetini kendisi vermez ve herhangi bir markanın yetkili servisi değildir. Talebinizi telefon, WhatsApp veya form ile iletirsiniz; işin türüne ve ilçenize göre uygun bağımsız servis sağlayıcıyla görüşmenizi sağlarız." },
    ],
    problems: ["kombi-isitmiyor", "kombi-ates-almiyor", "kombi-hata-kodu", "kombi-basinc-dusuyor"],
    services: ["kombi-bakim", "kombi-parca-degisimi"],
    faq: [
      { q: "Kombi arızasında önce neye bakmalıyım?", a: "Basınç göstergesine, gaz vanasının açık olmasına, termostat ayarına ve ekranda hata kodu olup olmadığına bakın. Bunlar normalse usta çağırın." },
      { q: "Arıza bildirirken hangi bilgileri vermeliyim?", a: "Kombinin markası ve yaklaşık yaşı, hata kodu, sorunun ne zaman başladığı ve ilçeniz. Mümkünse bir fotoğraf ekleyin." },
    ],
  }),
  "kombi-bakim": S({
    title: "Eskişehir Kombi Bakımı | Yıllık Bakım Rehberi",
    description: "Kombi bakımı ne zaman yapılır, neleri kapsar, neden önemlidir? Yıllık bakım için bilmeniz gerekenler ve ustaya ulaşma yolu.",
    h1: "Kombi bakımı: yılda bir, sezondan önce",
    lead: "Düzenli bakım hem arıza ihtimalini düşürür hem de yanma verimini korur. Kış başlamadan önce yaptırmak, soğukta arıza yaşama ihtimalini azaltır.",
    sections: [
      { h: "Bakımda ne kontrol edilir?", p: "Genellikle yanma ve brülör, eşanjör, pompa, genleşme tankı basıncı, filtreler, baca bağlantısı ve güvenlik donanımları kontrol edilir. Kapsam servisten servise değişebilir; ne yapılacağını önceden sorun." },
      { h: "Ne zaman yaptırmalı?", p: "Isıtma sezonu başlamadan önceki sonbahar ayları idealdir. Bu dönemde servisler yoğun olabileceği için erken planlamak işinize yarar." },
      { h: "Neden önemlidir?", p: "Kireçlenme, kirlenen brülör ve eskiyen parçalar verimi düşürür. Bakım ayrıca baca ve yanma kaynaklı riskleri erken fark etmeye yardımcı olur." },
    ],
    problems: ["kombi-ses-yapiyor", "kombi-karbonmonoksit", "kombi-surekli-kapaniyor"],
    services: ["kombi-ariza", "petek-temizligi"],
    faq: [
      { q: "Kombi bakımı ne kadar sürer?", a: "Kombinin durumuna göre değişir; çoğu zaman bir saat civarında sürer. Ek temizlik veya parça gerekiyorsa uzayabilir." },
      { q: "Bakım yaptırmazsam ne olur?", a: "Arıza ihtimali ve yakıt tüketimi artabilir. Baca ve yanma kontrolü yapılmadığı için güvenlik riskleri de fark edilmeyebilir." },
    ],
  }),
  "kombi-montaj": S({
    title: "Eskişehir Kombi Montajı ve Değişimi | Başlamadan Önce",
    description: "Yeni kombi takmak ya da eskisini değiştirmek için neler gerekir? Hazırlık, tesisat ve güvenlik konularında rehber.",
    h1: "Kombi montajı ve değişimi: başlamadan bilinmesi gerekenler",
    lead: "Kombi değişimi yalnızca cihazı sökmek ve takmak değildir. Doğru kapasite, baca uyumu ve gaz bağlantısı güvenlik açısından belirleyicidir.",
    sections: [
      { h: "Doğru kapasite", p: "Evin metrekaresi, yalıtımı ve petek sayısı kombi kapasitesini belirler. Gereğinden büyük ya da küçük seçim verimi düşürür." },
      { h: "Gaz ve baca bağlantısı", p: "Gazla ilgili işlerin belgeli ve yetkili kişilerce yapılması gerekir. Hizmeti verecek servis sağlayıcıdan gerekli belge ve garanti bilgilerini isteyin." },
      { h: "Tesisat durumu", p: "Eski tesisatta tortu ve çamur yeni kombiye zarar verebilir. Değişim öncesi tesisatın temizlenmesi gündeme gelebilir." },
    ],
    problems: ["kombi-isitmiyor", "petek-isinmiyor"],
    services: ["petek-temizligi", "isitma-tesisati", "oda-termostati"],
    faq: [
      { q: "Kombiyi kendim takabilir miyim?", a: "Hayır. Gaz bağlantısı ve baca işleri belgeli kişilerce yapılmalıdır. Hatalı montaj güvenlik riski doğurur." },
    ],
  }),
  "kombi-parca-degisimi": S({
    title: "Kombi Parça Değişimi | Eşanjör, Pompa, Genleşme Tankı",
    description: "Eşanjör, sirkülasyon pompası, üç yollu vana ve genleşme tankı gibi parçalarda arıza belirtileri ve değişim süreci.",
    h1: "Kombi parça değişimi: hangi belirti hangi parçayı işaret eder?",
    lead: "Kombideki her ana parçanın kendine özgü bir arıza belirtisi vardır. Belirtiyi bilmek, ustayla konuşurken size zaman kazandırır.",
    sections: [
      { h: "Eşanjör", p: "Sıcak su azalıyor, ılık geliyor ya da kaynama gibi ses duyuluyorsa eşanjörde kireç tıkanıklığı olabilir. Temizlik yetmezse değişim gerekebilir." },
      { h: "Sirkülasyon pompası", p: "Pompa çalışmıyorsa su dolaşmaz, petekler ısınmaz. Vızıltı ya da uğultu da aşınmanın işaretidir." },
      { h: "Üç yollu vana ve genleşme tankı", p: "Üç yollu vana ısıtma ile sıcak su arasında geçişi sağlar. Genleşme tankı basınç dalgalanmalarını dengeler; havasını kaybederse basınç sık sık değişir." },
      { h: "Parça seçimi", p: "Parçanın modelinize uygun ve orijinal olup olmadığını, garantisinin bulunup bulunmadığını işlem öncesinde ustadan öğrenin." },
    ],
    problems: ["kombi-sicak-su-vermiyor", "kombi-ses-yapiyor", "kombi-su-damliyor"],
    services: ["kombi-ariza", "kombi-bakim"],
    faq: [
      { q: "Parça değişimi mi yoksa yeni kombi mi mantıklı?", a: "Kombinin yaşı, arızanın kapsamı ve parça maliyetine bağlıdır. Usta, tamirin mi değişimin mi daha uygun olduğunu muayene sonrası söyleyebilir." },
    ],
  }),
  "petek-temizligi": S({
    title: "Eskişehir Petek Temizliği | Isınmayan Petekler İçin",
    description: "Üstü sıcak altı soğuk petekler, düşen ısıtma verimi ve tortu birikimi. Petek temizliği ne zaman gerekir, nasıl yapılır?",
    h1: "Petek temizliği: ısıtma verimini geri kazanın",
    lead: "Zamanla peteklerin içinde çamur ve tortu birikir. Bu da suyun dolaşımını azaltır ve peteklerin bazı bölgelerinin soğuk kalmasına yol açar.",
    sections: [
      { h: "Ne zaman gerekir?", p: "Petek üstten sıcak, alttan soğuk ise; ısıtma gittikçe zayıflıyorsa ya da kombi sık sık basınç hatası veriyorsa tortu birikimi olabilir." },
      { h: "Nasıl yapılır?", p: "Genellikle tesisata bağlanan bir cihazla su basınçla dolaştırılarak tortu söktürülür. Bu işlem usta tarafından yapılmalıdır." },
      { h: "Sonrasında", p: "Temizlik sonrası havalandırma yapılır ve kombi basıncı kontrol edilir. Isıtma süresinin ve yakıt tüketiminin değişimi izlenebilir." },
    ],
    problems: ["petek-isinmiyor", "kombi-isitmiyor"],
    services: ["isitma-tesisati", "kombi-bakim"],
    faq: [
      { q: "Petek temizliği ile kombi bakımı aynı şey mi?", a: "Hayır. Kombi bakımı cihazın kendisini, petek temizliği ise tesisatı ve peteklerin iç yüzeyini kapsar. Birlikte yaptırmak mantıklı olabilir." },
    ],
  }),
  "isitma-tesisati": S({
    title: "Isıtma Tesisatı | Petek, Boru, Vana ve Kolektör İşleri",
    description: "Petek ekleme, boru yenileme, vana ve kolektör değişimi gibi ısıtma tesisatı işleri için rehber ve yönlendirme.",
    h1: "Isıtma tesisatı: petek, boru ve vana işleri",
    lead: "Tesisat sorunları kombiden bağımsız olabilir. Ama kombiyi de etkiler: basınç düşer, ısıtma dengesizleşir, parçalar yıpranır.",
    sections: [
      { h: "Sık yapılan işler", p: "Petek ekleme ve değiştirme, vana ve termostatik vana değişimi, boru yenileme ve kolektör işleri en yaygın taleplerdir." },
      { h: "Başlamadan önce", p: "İşin kapsamı, kullanılacak malzeme ve süre konusunda net bilgi isteyin. Fiyat ve kapsam hizmet verecek servis sağlayıcıyla netleşir." },
    ],
    problems: ["petek-isinmiyor", "kombi-basinc-dusuyor"],
    services: ["petek-temizligi", "kombi-montaj"],
    faq: [
      { q: "Tesisatta sızıntı varsa ne yapmalıyım?", a: "Kombinin ve ilgili hattın vanalarını kapatın, sızıntının fotoğrafını çekin ve usta çağırın." },
    ],
  }),
  "oda-termostati": S({
    title: "Oda Termostatı | Arıza, Montaj ve Ayar",
    description: "Oda termostatı çalışmıyor, yanlış ölçüyor ya da yenisi takılacaksa neye dikkat etmelisiniz?",
    h1: "Oda termostatı: kombiyle konuşan küçük cihaz",
    lead: "Oda termostatı, kombiye evin ne zaman ısınması gerektiğini söyler. Arızalandığında kombi sağlam olsa bile ev ısınmayabilir ya da gereksiz çalışabilir.",
    sections: [
      { h: "Sık görülen sorunlar", p: "Pil bitmesi, kablosuz bağlantı kopması, yanlış konumlandırma (güneş, soba, kapı yakını) ve ayarın yanlış olması en yaygın nedenlerdir." },
      { h: "Yeni termostat seçimi", p: "Kablolu, kablosuz ya da akıllı seçenekler vardır. Kombinizin termostat girişiyle uyumlu olup olmadığını montaj öncesi ustaya sorun." },
    ],
    problems: ["kombi-isitmiyor", "kombi-surekli-kapaniyor"],
    services: ["kombi-ariza", "kombi-montaj"],
    faq: [
      { q: "Termostat bozulursa kombi çalışır mı?", a: "Kombi çoğu durumda ısıtma talebini termostattan aldığı için ısıtma başlamayabilir. Pil ve ayarı kontrol edin, düzelmezse usta çağırın." },
    ],
  }),
  "sofben-termosifon": S({
    title: "Şofben ve Termosifon | Arıza, Bakım, Değişim",
    description: "Şofben ve termosifonlarda sıcak su gelmiyor, çalışmıyor ya da gaz kokusu var. Güvenlik ve yönlendirme rehberi.",
    h1: "Şofben ve termosifon: sıcak su veren cihazlar",
    lead: "Kombisi olmayan ya da ek sıcak su cihazı kullanan evlerde şofben ve termosifon sorunları sık görülür.",
    sections: [
      { h: "Şofben", p: "Gazlı şofbenlerde baca ve yanma güvenliği çok önemlidir. Kapalı alanda kullanılmamalı, bacası düzenli kontrol edilmelidir. Gaz kokusu varsa gaz kokusu rehberindeki adımları izleyin." },
      { h: "Termosifon", p: "Elektrikli termosifonlarda rezistans, termostat ve anot sık değişen parçalardır. Suyun ısınmaması ya da çok yavaş ısınması bu parçalardan kaynaklanabilir." },
    ],
    problems: ["kombi-gaz-kokusu", "kombi-karbonmonoksit", "kombi-sicak-su-vermiyor"],
    services: ["kombi-ariza", "kombi-bakim"],
    faq: [
      { q: "Şofbeni banyoda kullanmak güvenli mi?", a: "Kapalı ve havalandırması yetersiz alanlarda gazlı cihaz kullanımı karbonmonoksit riski taşır. Kurulumun ve bacanın uygunluğunu usta ile kontrol ettirin." },
    ],
  }),
};
