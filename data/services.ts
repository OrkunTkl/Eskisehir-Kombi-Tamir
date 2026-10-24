export type Service = { slug: string; title: string; desc: string };
export const services: Service[] = [
  { slug: "kombi-ariza", title: "Kombi arızası", desc: "Isıtmıyor, ateş almıyor, hata veriyor. Önce ne olduğunu anlayın, sonra usta çağırın." },
  { slug: "eskisehir-kombi-servisi", title: "Kombi servisi", desc: "Servis çağırmadan önce bilmeniz gerekenler: nasıl işler, neye bakılır, ustaya ne söylenir." },
  { slug: "kombi-bakim", title: "Kombi bakımı", desc: "Yıllık bakımda neler kontrol edilir, ne zaman yaptırılır, ne kadar sürer." },
  { slug: "kombi-montaj", title: "Kombi montajı ve değişimi", desc: "Yeni kombi ya da eskisini değiştirme. Başlamadan bilmeniz gerekenler." },
  { slug: "kombi-parca-degisimi", title: "Kombi parça değişimi", desc: "Eşanjör, pompa, genleşme tankı, üç yollu vana ve diğer parçalar." },
  { slug: "petek-temizligi", title: "Petek temizliği", desc: "Üstü sıcak altı soğuk petekler için temizlik ve havasını alma." },
  { slug: "isitma-tesisati", title: "Isıtma tesisatı", desc: "Petek, boru, vana ve kolektör işleri. Yenileme ve ek hat." },
  { slug: "oda-termostati", title: "Oda termostatı", desc: "Çalışmayan, yanlış ölçen ya da yeni takılacak oda termostatı." },
  { slug: "sofben-termosifon", title: "Şofben ve termosifon", desc: "Sıcak su veren cihazlarda arıza, bakım ve değişim." },
];