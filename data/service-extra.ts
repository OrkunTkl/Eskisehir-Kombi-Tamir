import type { ServiceContent } from "@/data/seo-content";

// seo-content.ts'e dokunmadan eklenen hizmet sayfaları. [service]/page.tsx bunu birleştirir.
export const extraServiceContent: Record<string, ServiceContent> = {
  "eskisehir-kombi-servisi": {
    title: "Eskişehir Kombi Servisi | Çağırmadan Önce Bunlara Bakın",
    description:
      "Eskişehir'de kombi servisi arıyorsanız: yetkili ve bağımsız servis farkı, ustaya ne söylenmeli, nelere dikkat edilmeli. WhatsApp'tan tek mesajla talep iletin.",
    h1: "Eskişehir kombi servisi: çağırmadan önce neleri bilmelisiniz?",
    lead: "Kombi servisi çağırmak çoğu zaman acil bir anda olur. Servis türünü, ustaya vereceğiniz bilgiyi ve gelişte neye dikkat edeceğinizi önceden bilmek hem zamandan hem paradan tasarruf ettirir.",
    sections: [
      {
        h: "Kombi servisi ne demek?",
        p: "Kombi servisi; arıza tespiti, onarım, parça değişimi ve yıllık bakım işlerinin tamamını kapsayan genel bir ifadedir. Eskişehir'de bu işleri markaların yetkili servisleri de, bağımsız kombi ustaları da yapar. Hangisini seçeceğiniz kombinin garanti durumuna, markasına ve işin aciliyetine bağlıdır.",
      },
      {
        h: "Yetkili servis ve bağımsız servis farkı",
        p: "Yetkili servis, markanın resmi ağında çalışır; garanti kapsamındaki arızalarda genellikle ilk başvuru adresidir. Bağımsız servis ise markadan bağımsız çalışan usta ya da firmadır; garantisi bitmiş kombilerde ve bakım, petek, tesisat gibi işlerde sık tercih edilir. Garanti durumunu kombinin garanti belgesinden ya da fatura tarihinden kontrol edin; emin değilseniz önce markanın müşteri hattına sorun.",
      },
      {
        h: "Bu platform nasıl çalışır?",
        p: "Bu site kombi hizmetini kendisi vermez ve herhangi bir markanın yetkili servisi değildir. Sorununuzu WhatsApp ya da form ile iletirsiniz; işin türüne ve ilçenize göre uygun bağımsız servis sağlayıcıyla görüşmenizi sağlarız. Fiyat ve işin kapsamı, hizmeti verecek servis sağlayıcıyla belirlenir.",
      },
      {
        h: "Servis çağırmadan önce hazırlanın",
        p: "Kombinin marka ve modelini, ekrandaki hata kodunu, basınç göstergesindeki değeri ve sorunun ne zaman başladığını not edin. Ekranın fotoğrafını çekin, ses varsa kısa bir video kaydedin. Sorunun yalnızca ısıtmada mı yoksa sıcak su alırken mi çıktığını belirtmek, ustanın doğru parçayla gelme ihtimalini artırır.",
      },
      {
        h: "Usta gelince neye dikkat edin?",
        p: "Arızanın nedenini ve yapılacak işlemi başlamadan açıklamasını isteyin. Değiştirilecek parçanın ne olduğunu ve fiyatını işlemden önce öğrenin. İşlem sonunda parça ve işçilik garantisinin süresini ve kapsamını sorun, mümkünse yazılı alın. Gazla ilgili işlerin belgeli ve yetkili kişilerce yapılması gerekir.",
      },
      {
        h: "Eskişehir'de hangi ilçeler için talep alınır?",
        p: "Tepebaşı ve Odunpazarı başta olmak üzere Eskişehir'in ilçelerinden gelen talepler değerlendirilir. Talebinizde mahalle ya da ilçenizi yazmanız, uygun servis sağlayıcıyı bulmayı hızlandırır. Hizmet verilebilirlik ve süre ilçeye ve yoğunluğa göre değişir.",
      },
      {
        h: "Ne zaman beklemeden destek istemelisiniz?",
        p: "Su sızıntısı, resetten sonra geri gelen hata kodu, ateşleme sırasında patlama benzeri ses ya da yanık kokusu varsa kombiyi kapatın ve destek isteyin. Gaz kokusu varsa önce pencereleri açın, elektrik düğmelerine dokunmayın ve 187 Doğalgaz Acil hattını arayın.",
      },
    ],
    problems: ["kombi-isitmiyor", "kombi-hata-kodu", "kombi-basinc-dusuyor", "kombi-gaz-kokusu"],
    services: ["kombi-ariza", "kombi-bakim", "kombi-parca-degisimi"],
    faq: [
      {
        q: "Kombi servisi ile kombi tamiri aynı şey mi?",
        a: "Günlük kullanımda aynı anlamda kullanılır. Servis; arıza tespiti, tamir, parça değişimi ve bakımı kapsayan genel bir başlıktır, tamir ise onarım kısmını anlatır.",
      },
      {
        q: "Garantideki kombi için hangi servise başvurmalıyım?",
        a: "Garanti kapsamındaki arızalarda genellikle önce markanın yetkili servisine ya da müşteri hattına başvurmak gerekir. Garanti bittiyse bağımsız servis de seçebilirsiniz.",
      },
      {
        q: "Bu site yetkili servis mi?",
        a: "Hayır. Bu platform kombi hizmetini kendisi vermez; talebinizi uygun bağımsız servis sağlayıcıya yönlendirir.",
      },
      {
        q: "Servis ücreti nasıl belirlenir?",
        a: "Ücret; arızanın türüne, değişecek parçaya ve işçiliğe göre servis sağlayıcıyla belirlenir. İşleme başlamadan önce kapsamı ve fiyatı netleştirin.",
      },
      {
        q: "Talebimi nasıl iletirim?",
        a: "Sayfadaki WhatsApp düğmesinden sorununuzu, kombinin markasını ve ilçenizi yazmanız yeterlidir.",
      },
    ],
  },
};