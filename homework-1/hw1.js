/*
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır.
 Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı
  bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/

radius = process.argv.slice(2);

if ( radius.length === 0 ){
    console.log("Lütfen yarıçapı konsoldan parametre olarak girin...");
} else{
    // Birden fazla yarıçap girilmiş ise hepsini tek tek hesaplamak için foreach kullandım
    radius.forEach(rad => {
        let area = (Math.PI * rad * rad).toFixed(2);
        console.log(`Yarıçapı ${rad} olan dairenin alanı: ${area}`);
    });
}