let ogrenciler = [
  { ad: "Aslı", yas: 39, sinif: 10, notlar: [85, 90, 78] },
  { ad: "Can", yas: 17, sinif: 11, notlar: [92, 88, 79] },
  { ad: "Ece", yas: 15, sinif: 9, notlar: [75, 80, 85] }
];

for (let i = 0; i < ogrenciler.length; i++) {
  let toplam = 0;
  console.log(ogrenciler[i].ad);

  for (let j = 0; j < ogrenciler[i].notlar.length; j++) {
    toplam += ogrenciler[i].notlar[j];
  }

  console.log("Ortalama: " + (toplam / 3));
}
