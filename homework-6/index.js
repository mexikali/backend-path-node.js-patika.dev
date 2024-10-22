/*
    1 - koa paketini indirelim.
    2 - index, hakkimda ve iletisim sayfaları oluşturalım.
    3 - Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
    4 - port numarası olarak 3000'i kullanalım.
*/

const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use(async (ctx, next) => {
    if (ctx.path === "/") {
      ctx.body = "<h1>INDEX SAYDASINA HOSGELDINIZ...</h1>";
    } else {
      await next();
    }
  });

app.use(async (ctx, next) => {
  if (ctx.path === "/iletisim") {
    ctx.body = "<h1>ILETISIM SAYDASINA HOSGELDINIZ...</h1>";
  } else {
    await next();
  }
});

app.use(async (ctx, next) => {
    if (ctx.path === "/hakkimizda") {
      ctx.body = "<h1>HAKKIMIZDA SAYDASINA HOSGELDINIZ...</h1>";
    } else {
      await next();
    }
});

app.use(async (ctx) => {
  ctx.status = 404;
  ctx.body = "<h1>404 NOT FOUND</h1>"; 
});
  

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor...`);
    console.log(`http://localhost:${port}/`);
});