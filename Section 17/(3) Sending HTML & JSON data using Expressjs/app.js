const { response } = require("express");
var express = require("express");
const res = require("express/lib/response");
var app = express();
// var ip = "127.0.0.1";
var port = 8000;

// app.get(route, callback)

// To pass single line of HTML data you can put your data within your prefered html tag inside res.send()
app.get("/", (req, res) => {
    res.send("<h1>Hello World from Express!</h1>");
});

app.get("/about", (req,res)=>{
    res.send("Hello world from About page");
})

app.get("/contact", (req,res)=>{
    res.send("Hello world from Contact page");
})

// Whenever you want to pass multiple lines of HTML data then use res.write().
// If you don't include res.send() after your res.write(); web page will keep on loading
app.get("/html", (req,res)=>{
    res.write("<p>Hello world from Contact page</p><div>This is my container</div><ul><li>First</li><li>Second</li></ul>");
    res.send();
})

// This function will also convert your null and undefined value which is not actually valid JSON
// res.json()

// This is how you pass JSON data from server to the client using express
app.get("/json", (req,res)=>{
    res.send(
        // when you want to convert json into array of an object simply enclose entire JSON data within []
        [
        {
            "status": "ok",
            "totalResults": 13371,
            "articles": [
            {
            "source": {
            "id": "the-verge",
            "name": "The Verge"
            },
            "author": "Sam Byford",
            "title": "Elon Musk and the disappearing board seat: all of the updates about Twitter’s largest shareholder",
            "description": "Elon Musk has a significant ownership stake in Twitter, but what’s next? First Twitter said Musk would take a seat on its board of directors, but now that plan is off, leading to speculation that a hostile takeover could be on the table.",
            "url": "https://www.theverge.com/2022/4/11/23019836/elon-musk-twitter-board-of-directors-news-updates",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/BnG9WCJSDvN5drVI3i6JTS-R1vM=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10125279/acastro_180130_1777_0008.jpg",
            "publishedAt": "2022-04-11T13:22:40Z",
            "content": "Illustration by Alex Castro / The Verge\r\n\n \n\n What’s next for Twitter and Elon Musk? First, we learned that Elon Musk had purchased enough shares of Twitter to become its largest individual sharehold… [+2117 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Overclockers.ru"
            },
            "author": "amv212",
            "title": "Илон Маск официально отказался войти в совет директоров Twitter",
            "description": "Выяснилось, что Илон Маск - крупнейший акционер Twitter отказался войти в совет директоров компании. Причина пока неизвестна. Возможно, он хочет купить еще больше акций Twitter.",
            "url": "https://overclockers.ru/blog/amv212/show/65448/ilon-mask-oficialno-otkazalsya-vojti-v-sovet-direktorov-twitter",
            "urlToImage": "https://overclockers.ru/st/legacy/blog/396911/297941_O.jpg",
            "publishedAt": "2022-04-11T13:16:50Z",
            "content": ", , , , Twitter. Twitter , 10 .\r\n 9 . , : \" Twitter 9- , \".\r\nSteve Jurvetson/Flickr\r\n 5 , . , 5 .\r\n , \" \". \" , . , , , , \", - .\r\n , . , , \" , \".\r\n, , , , Twitter 27 .\r\n , , 14, 9% .   , , , .  , , , … [+379 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Phys.Org"
            },
            "author": "Peter Watson",
            "title": "A universe without mathematics is beyond the scope of our imagination",
            "description": "Almost 400 years ago, in \"The Assayer,\" Galileo wrote: \"Philosophy is written in this grand book, the universe … [But the book] is written in the language of mathematics.\" He was much more than an astronomer, and this can almost be thought of as the first wri…",
            "url": "https://phys.org/news/2022-04-universe-mathematics-scope.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2022/a-universe-without-mat.jpg",
            "publishedAt": "2022-04-11T13:16:22Z",
            "content": "Almost 400 years ago, in \"The Assayer,\" Galileo wrote: \"Philosophy is written in this grand book, the universe [But the book] is written in the language of mathematics.\" He was much more than an astr… [+5469 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Terra.com.br"
            },
            "author": "Estadão Conteúdo",
            "title": "Musk não irá mais integrar conselho de administração do Twitter",
            "description": "Elon Musk, o bilionário fundador da Tesla, desistiu de integrar o conselho de administração do Twitter, segundo informou o presidente executivo da rede...",
            "url": "https://www.terra.com.br/economia/musk-nao-ira-mais-integrar-conselho-de-administracao-do-twitter,a0a885d00d17cb8bfab658d2ed7911cbz5g2wz3a.html",
            "urlToImage": "https://www.terra.com.br/globalSTATIC/fe/zaz-mod-t360-icons/svg/logos/terra-horizontal-com-borda.png",
            "publishedAt": "2022-04-11T13:15:50Z",
            "content": "Elon Musk, o bilionário fundador da Tesla, desistiu de integrar o conselho de administração do Twitter, segundo informou o presidente executivo da rede social, Parag Agrawal. Às 9h04 desta segunda-fe… [+695 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Terra.com.br"
            },
            "author": "Estadão Conteúdo",
            "title": "Dólar abre em alta com exterior e petróleo, mas passa a cair com Campos Neto",
            "description": "O dólar começou o dia em alta frente o real em ambiente de cautela no exterior e queda forte do petróleo, após a moeda americana recuar na sexta-feira (8)...",
            "url": "https://www.terra.com.br/economia/dolar-abre-em-alta-com-exterior-e-petroleo-mas-passa-a-cair-com-campos-neto,a5492144c1a4d11b63a51a2ae2af3ec6lvf22ebh.html",
            "urlToImage": "https://www.terra.com.br/globalSTATIC/fe/zaz-mod-t360-icons/svg/logos/terra-horizontal-com-borda.png",
            "publishedAt": "2022-04-11T13:15:50Z",
            "content": "O dólar começou o dia em alta frente o real em ambiente de cautela no exterior e queda forte do petróleo, após a moeda americana recuar na sexta-feira (8) com o avanço do IPCA de março ao maior patam… [+2433 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Freerepublic.com"
            },
            "author": "Daily Mail",
            "title": "Twitter shares fall 8% in pre-market trading after largest shareholder Elon Musk refused to join board: Staff speculate (via Twitter) that the Tesla chief could now launch hostile takeover bid",
            "description": "- Elon Musk, 50, last week was revealed to be the biggest shareholder in Twitter, having bought a stake worth 9.2 percent - four times that of founder Jack Dorsey. - Agrawal said he thought Musk's decision was 'for the best' and said the company must remain f…",
            "url": "https://freerepublic.com/focus/f-bloggers/4054062/posts",
            "urlToImage": null,
            "publishedAt": "2022-04-11T13:13:30Z",
            "content": "Skip to comments.\r\nTwitter shares fall 8% in pre-market trading after largest shareholder Elon Musk refused to join board: Staff speculate (via Twitter) that the Tesla chief could now launch hostile … [+3687 chars]"
            },
            {
            "source": {
            "id": "la-nacion",
            "name": "La Nacion"
            },
            "author": null,
            "title": "Que sí, que no: Elon Musk tenía que integrarse al directorio de Twitter el sábado, pero al final cambió su decisión",
            "description": "Que sí, que no: Elon Musk tenía que integrarse al directorio de Twitter el sábado, pero al final cambió su decisión",
            "url": "https://www.lanacion.com.ar/el-mundo/elon-musk-declina-formar-parte-del-consejo-de-twitter-nid11042022/",
            "urlToImage": "https://resizer.glanacion.com/resizer/lV0LYyDmUfqvYE2nJoBYaDrqBL4=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/6SNQ76NAX5HSRGDNOJ6FJ5HZPY",
            "publishedAt": "2022-04-11T13:12:55Z",
            "content": "Cinco días después de haber provocado todo tipo de especulaciones, el imprevisible Elon Musk da marcha atrás. El hombre más rico del mundo no se sumará al consejo de administración de Twitter, según … [+4042 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Snopes.com"
            },
            "author": "AP News",
            "title": "Tesla CEO Elon Musk Won’t Join Twitter’s Board After All",
            "description": "Twitter's largest investor, billionaire Elon Musk, is reversing course and will no longer join the company's board of directors less than a week after being awarded a seat.",
            "url": "https://www.snopes.com/ap/2022/04/11/tesla-ceo-elon-musk-wont-join-twitters-board-after-all/",
            "urlToImage": "https://www.snopes.com/tachyon/2022/04/US_Musk_Twitter_17431-scaled.jpg",
            "publishedAt": "2022-04-11T13:12:13Z",
            "content": "Image via AP Photo/John Raoux\r\nSAN FRANCISCO (AP) Twitters largest investor, billionaire Elon Musk, is reversing course and will no longer join the companys board of directors less than a week after … [+3509 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Nio plummets 11% after it shuts down production due to supply chain disruptions caused by city-wide COVID-19 lockdowns in China",
            "description": "Tesla's Shanghai plant has been shut down since late March, while auto plants tied to Volkswagen's joint ventures were also closed.",
            "url": "https://markets.businessinsider.com/news/stocks/nio-stock-price-covid-19-production-shutdown-supply-chain-china-2022-4",
            "urlToImage": "https://i.insider.com/62541db78394f20018d43709?width=1200&format=jpeg",
            "publishedAt": "2022-04-11T13:10:27Z",
            "content": "Nio stock dropped 11% on Monday after the electric vehicle maker halted production due to ongoing supply chain disruptions.\r\nThe disruptions were caused by COVID-19 lockdowns in cities across China, … [+1376 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Clubic"
            },
            "author": "/auteur/378323-benjamin-logerot.html",
            "title": "Tesla Cyber Rodeo : ce qu'il faut retenir des annonces d'Elon Musk",
            "description": "En fin de semaine dernière, le patron de Tesla, Elon Musk, a animé devant des milliers de fans la conférence Cyber Rodeo lors de l'inauguration de la Gigafactory du Texas. L'occasion pour lui d'évoquer le passé, le présent, mais surtout le futur proche de la …",
            "url": "https://www.clubic.com/pro/entreprises/tesla/actualite-417627-tesla-cyber-rodeo-ce-qu-il-faut-retenir-des-annonces-d-elon-musk.html",
            "urlToImage": "https://pic.clubic.com/v1/images/1823209/raw",
            "publishedAt": "2022-04-11T13:10:00Z",
            "content": "En fin de semaine dernière, le patron de Tesla, Elon Musk, a animé devant des milliers de fans la conférence Cyber Rodeo lors de l'inauguration de la Gigafactory du Texas. L'occasion pour lui d'évoqu… [+3049 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "La Verdad Noticias"
            },
            "author": "Erick Peraza",
            "title": "Elon Musk no se unirá al consejo directivo de Twitter",
            "description": "Aunque Elon Musk no se ha pronunciado al respecto el CEO de Twitter, Parag Agrawal, comunicó la decisión en un tuit.",
            "url": "https://laverdadnoticias.com/tecnologia/Elon-Musk-no-se-unira-al-consejo-directivo-de-Twitter-20220411-0022.html",
            "urlToImage": "https://laverdadnoticias.com/__export/1649682407501/sites/laverdad/img/2022/04/11/elon-musk-twitter-directivo.jpg_457058413.jpg",
            "publishedAt": "2022-04-11T13:09:25Z",
            "content": "CEO de Tesla no se unirá al consejo directivo de Twitter\r\nEl CEO de Tesla, Elon Musk, quien recientemente compró una gran participación en Twitter, decidió no unirse al directorio de la compañía de r… [+2142 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Livemint"
            },
            "author": "WSJ",
            "title": "Shopify seeks to protect CEO’s voting power, split stock",
            "description": "E-commerce company proposes ‘founder share’ giving CEO Tobi Lütke 40% of voting power",
            "url": "https://www.livemint.com/companies/news/shopify-seeks-to-protect-ceo-s-voting-power-split-stock-11649681843025.html",
            "urlToImage": "https://images.livemint.com/img/2022/04/11/600x338/Shopify__1649682263804_1649682263973.JPG",
            "publishedAt": "2022-04-11T13:08:02Z",
            "content": "Shopify Inc. is asking investors to approve changes to its complex share structure to protect the voting power of the Canadian technology companys leader. The company also is proposing a 10-for-1 sto… [+4258 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "tmohamed@businessinsider.com (Theron Mohamed)",
            "title": "'Big Short' investor Michael Burry trumpets what Warren Buffett and Elon Musk have called him — and jokingly seeks another nickname from Jeff Bezos",
            "description": "Burry proudly shared in a tweet that Buffett labeled him a \"Cassandra\" for predicting the mid-2000s housing bubble would burst.",
            "url": "https://markets.businessinsider.com/news/stocks/big-short-michael-burry-buffett-musk-bezos-cassandra-nicknames-labels-2022-4",
            "urlToImage": "https://i.insider.com/6033c7b4bed5c50011a2bcae?width=1200&format=jpeg",
            "publishedAt": "2022-04-11T13:07:52Z",
            "content": "\"The Big Short\" investor Michael Burry highlighted the labels given to him by Warren Buffett and Elon Musk, and jokingly tried to goad Jeff Bezos into calling him something too, in a now-deleted twee… [+2294 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "El Financiero"
            },
            "author": "Bloomberg",
            "title": "Musk lo hace de nuevo: El multimillonario rechaza unirse a la junta directiva de Twitter",
            "description": "Elon Musk decidió no unirse a la junta directiva de Twitter, informó este domingo Parag Agrawal, CEO de la red social. Una decisión que hizo que las acciones de la compañía se desplomaran.",
            "url": "https://www.elfinanciero.com.mx/tech/2022/04/11/musk-lo-hace-de-nuevo-el-multimillonario-rechaza-unirse-a-la-junta-directiva-de-twitter/",
            "urlToImage": "https://www.elfinanciero.com.mx/resizer/TtGMCf9b6PMaSJolI_kFkUnZjp4=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/X6X35UTEGVBBDNXC4BSOV7C3NE.jpg",
            "publishedAt": "2022-04-11T13:07:03Z",
            "content": "Elon Musk decidió no unirse a la junta directiva de Twitter, informó este domingo Parag Agrawal, CEO de la red social. Una decisión que hizo que las acciones de la compañía cayeran más de cinco por c… [+2880 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "New York Post"
            },
            "author": "Ariel Zilber, Thomas Barrabi",
            "title": "Joe Rogan takes aim at Nancy Pelosi, pols for ‘insider trading’",
            "description": "Joe Rogan took aim at House Speaker Nancy Pelosi and other members of Congress for being allowed to own stock options even though they're in a position to regulate the industries from which they are profiting.",
            "url": "https://nypost.com/2022/04/11/joe-rogan-slams-nancy-pelosi-pols-for-insider-trading/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/04/newspress-collage-21852884-1649682142799.png?w=1024",
            "publishedAt": "2022-04-11T13:06:59Z",
            "content": "Joe Rogan took aim at House Speaker Nancy Pelosi and other members of Congress for being allowed to own stock options even though they’re in a position to regulate the industries from which they are … [+3401 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "insider@insider.com (Dusan Stojanovic)",
            "title": "China makes semi-secret delivery of anti-aircraft missiles to a Russian ally in Europe",
            "description": "Chinese Y-20 transport planes landed in Belgrade on Saturday, reportedly carrying Chinese HQ-22 surface-to-air missile systems for Serbia's military.",
            "url": "https://www.businessinsider.com/china-makes-semi-secret-antiaircraft-missile-delivery-to-serbia-2022-4",
            "urlToImage": "https://i.insider.com/61a4e7e41ca528001811a060?width=1200&format=jpeg",
            "publishedAt": "2022-04-11T13:04:12Z",
            "content": "BELGRADE, Serbia (AP) Russian ally Serbia took the delivery of a sophisticated Chinese anti-aircraft system in a veiled operation this weekend, amid Western concerns that an arms buildup in the Balka… [+3041 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Daily Caller"
            },
            "author": "Harry Wilmerding",
            "title": "Musk Isn’t Joining Twitter’s Board After All",
            "description": "Tesla and Space X CEO Elon Musk is no longer joining Twitter&#039;s board of directors, the company&#039;s CEO announced Monday.",
            "url": "https://dailycaller.com/2022/04/11/elon-musk-twitter-tesla-agrawal/",
            "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2022/04/Photo-by-JIM-WATSONAFP-via-Getty-Images-1222-e1649270045228.jpg",
            "publishedAt": "2022-04-11T13:01:27Z",
            "content": "Tesla and SpaceX CEO Elon Musk is no longer joining Twitter’s board of directors, the company’s CEO announced Sunday.\r\nTwitter CEO Parag Agrawal issued a statement announcing Musk, who purchased over… [+2146 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Begeek.fr"
            },
            "author": "Morgan Fromentin",
            "title": "Le Tesla Cybertruck sera en vente dans le courant de l’année 2023",
            "description": "Le Tesla Cybertruck sera commercialisé en 2023 et la marque a encore beaucoup de surprises à dévoiler.",
            "url": "https://www.begeek.fr/le-tesla-cybertruck-sera-en-vente-dans-le-courant-de-lannee-2023-367640",
            "urlToImage": "https://www.begeek.fr/wp-content/uploads/2019/11/tesla-cybertruck.jpg",
            "publishedAt": "2022-04-11T13:00:46Z",
            "content": "Le Tesla Cybertruck sera commercialisé en 2023 et la marque a encore beaucoup de surprises à dévoiler.\r\nTesla commencera finalement à vendre son très attendu Cybertruck dans le courant de l’année pro… [+2302 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Trecebits.com"
            },
            "author": "Manuel Moreno",
            "title": "Elon Musk no se unirá a la Junta Directiva de Twitter",
            "description": "A pesar de que se había anunciado lo contrario, Elon Musk, CEO de Tesla y SpaceX entre otros negocios, no .....\nThe post Elon Musk no se unirá a la Junta Directiva de Twitter appeared first on TreceBits - Redes Sociales y Tecnología.",
            "url": "https://www.trecebits.com/2022/04/11/elon-musk-no-se-unira-a-la-junta-directiva-de-twitter/",
            "urlToImage": "https://www.trecebits.com/wp-content/uploads/2022/04/ElonMuskTwitter.jpg",
            "publishedAt": "2022-04-11T13:00:34Z",
            "content": "A pesar de que se había anunciado lo contrario, Elon Musk, CEO de Tesla y SpaceX entre otros negocios, no formará parte de la Junta Directiva de Twitter.\r\nMusk se comprometió a no adquirir más del 14… [+2498 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Foundation for Economic Education"
            },
            "author": "Jon Miltimore",
            "title": "Why Used Cars Are Selling at Higher Prices Right Now Than New Cars",
            "description": "“New cars are supposed to cost more than their used counterparts,” a recent Barron's report noted. “But online car insurance marketplace Get Jerry found in a recent survey that four of the top 10 bestselling cars in the U.S. cost more to buy used than new.”\nE…",
            "url": "https://fee.org/articles/why-used-cars-are-selling-at-higher-prices-right-now-than-new-cars/",
            "urlToImage": "https://fee.org/media/41522/used-cars-more-expensive_new-cars.jpg?anchor=center&mode=crop&height=466&widthratio=2.0171673819742489270386266094&rnd=132941403330000000",
            "publishedAt": "2022-04-11T13:00:18Z",
            "content": "The last time I purchased a used car it didnt turn out well. A number of years ago, I bought a used 2005 Mazda Tribute for what I thought was a screaming deal: $5,900. The mileage was low, and the ve… [+4364 chars]"
            }
            ]
            }
        ]
    )
})

app.listen(port, ()=>{
    console.log("Running on port 8000");
});

// API function
// get - Read
// put - Update
// post - Create
// delete - Delete