import React, { Component } from 'react'

export class NewsItems extends Component {
  articles = [{
    "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
    },
    "author": "Bojan Pancevski, Paul Hannon, Robert Wall, Mauro Orru, Julien Marion, Tarini Parti",
    "title": "Russia-Ukraine War: Latest News - The Wall Street Journal",
    "description": "Full coverage of Russia’s invasion of Ukraine",
    "url": "https://www.wsj.com/livecoverage/russia-ukraine-latest-news-2022-03-21",
    "urlToImage": "https://images.wsj.net/im-508308/social",
    "publishedAt": "2022-03-21T10:39:24Z",
    "content": "German Economy Minister Robert Habeck was in the United Arab Emirates, on the last leg of a three-day tour of the region aimed at securing future energy supplies as Berlin tries to reduce its heavy r… [+1104 chars]"
}, {
    "source": {
        "id": null,
        "name": "New York Times"
    },
    "author": "Chris Buckley",
    "title": "China Plane Crash: Live News and Updates - The New York Times",
    "description": "More than 130 people were on board the Boeing 737-800 when it went down in southern China. There was no immediate information on casualties or the cause.",
    "url": "https://www.nytimes.com/live/2022/03/21/world/china-eastern-airlines-crash",
    "urlToImage": "https://static01.nyt.com/images/2022/03/21/world/live-blog-20220321-china-eastern-airlines-crash-header-PROMO/merlin_204228846_46a881ca-dad6-4e9c-a4d2-c32dba58350c-articleLarge.jpg",
    "publishedAt": "2022-03-21T10:32:48Z",
    "content": "China Eastern Airlines Boeing 737-800 planes in Taiyuan, China, in 2014.Credit...Jon Woo/Reuters\r\nA passenger plane with over 130 people on board crashed on Monday afternoon in a mountainous area of … [+2775 chars]"
}, {
    "source": {
        "id": null,
        "name": "CNBC"
    },
    "author": "Fred Imbert",
    "title": "Warren Buffett's Berkshire Hathaway agrees to buy insurance company Alleghany for $11.6 billion - CNBC",
    "description": "Warren Buffett is making moves.",
    "url": "https://www.cnbc.com/2022/03/21/warren-buffetts-berkshire-hathaway-agrees-to-buy-insurance-company-alleghany-for-11point6-billion.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106877010-1619963580487-106877010-1619898547023-buffett1.jpg?v=1620056871&w=1920&h=1080",
    "publishedAt": "2022-03-21T09:43:36Z",
    "content": "Warren Buffett is making moves.\r\nBerkshire Hathaway said Monday morning it agreed to buy insurance company Alleghany for $11.6 billion, or $848.02 per share, in cash. The conglomerate said the deal \"… [+1842 chars]"
}, {
    "source": {
        "id": null,
        "name": "WCVB Boston"
    },
    "author": null,
    "title": "Marine pilot killed in Osprey crash in Norway was a native of Leominster - WCVB Boston",
    "description": "\"We are in shock and are devastated by his loss,\" the family said.",
    "url": "https://www.wcvb.com/article/marines-pilot-capt-ross-reynolds-killed-in-norway-osprey-crash-was-a-native-of-leominster/39485562",
    "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/capt-ross-a-reynolds-dvids-1647821328.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    "publishedAt": "2022-03-21T09:41:00Z",
    "content": "LEOMINSTER, Mass. —One of the four U.S. Marines killed in a crash during a training flight in Norway was a native of Massachusetts, officials revealed Sunday. \r\nThe aircraft crashed in Norway, during… [+3050 chars]"
}, {
    "source": {
        "id": null,
        "name": "New York Times"
    },
    "author": "Giulia Heyward, David Montgomery",
    "title": "Weather Conditions Continue to Fuel Texas Wildfire - The New York Times",
    "description": "Two firefighters were injured fighting a blaze on Sunday, and more evacuations were ordered.",
    "url": "https://www.nytimes.com/2022/03/20/us/wildfires-texas-eastland-complex.html",
    "urlToImage": "https://static01.nyt.com/images/2022/03/20/us/20texas-wildfire-1/20texas-wildfire-1-facebookJumbo.jpg",
    "publishedAt": "2022-03-21T09:20:00Z",
    "content": "The biggest threat in that group of fires has been the Kidd fire, which has consumed more than 42,000 acres and was 40 percent contained on Sunday. That blaze has destroyed more than 140 structures, … [+1781 chars]"
}, {
    "source": {
        "id": "reuters",
        "name": "Reuters"
    },
    "author": null,
    "title": "Hong Kong to ease strict COVID measures from April, lifts flight ban - Reuters",
    "description": "Hong Kong plans to relax some anti-COVID-19 measures next month, lifting a ban on flights from nine countries, reducing quarantine for arrivals from abroad and reopening schools.",
    "url": "https://www.reuters.com/world/asia-pacific/hong-kong-leader-says-covid-flight-ban-9-countries-no-longer-necessary-2022-03-21/",
    "urlToImage": "https://www.reuters.com/resizer/Z024vM4bMQBqNS2syKJE5la2Hqo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XPZFF7V6XVKMHM2AKAPFBCBB4Q.jpg",
    "publishedAt": "2022-03-21T08:34:00Z",
    "content": "HONG KONG, March 21 (Reuters) - Hong Kong plans to relax some anti-COVID-19 measures next month, lifting a ban on flights from nine countries, reducing quarantine for arrivals from abroad and reopeni… [+4069 chars]"
}, {
    "source": {
        "id": "cnn",
        "name": "CNN"
    },
    "author": "Ariane de Vogue, CNN Supreme Court Reporter",
    "title": "How Ketanji Brown Jackson is preparing for questions about her record on crime - CNN",
    "description": "Like most every other nominee for the Supreme Court, Judge Ketanji Brown Jackson has been participating behind closed doors in so-called \"moot court\" sessions to prepare for her upcoming hearings, according to a source familiar.",
    "url": "https://www.cnn.com/2022/03/19/politics/ketanji-brown-jackson-criticism-soft-on-crime/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220317164209-01-ketanji-brown-jackson-0315-super-tease.jpg",
    "publishedAt": "2022-03-21T08:20:57Z",
    "content": "(CNN)Like most every other nominee for the Supreme Court, Judge Ketanji Brown Jackson has been participating behind closed doors in so-called \"moot court\" sessions to prepare for her upcoming hearing… [+12314 chars]"
}, {
    "source": {
        "id": null,
        "name": "KABC-TV"
    },
    "author": null,
    "title": "Los Angeles County sheriff helicopter crashes in Angeles National Forest near Azusa - KABC-TV",
    "description": "Authorities are investigating after a Los Angeles County Sheriff's helicopter crashed in the Angeles National Forest near Azusa Saturday.",
    "url": "https://abc7.com/azusa-aircraft-crash-angeles-national-forest/11665500/",
    "urlToImage": "https://cdn.abcotvs.com/dip/images/11665589_031922-kabc-raw-aerial-lasd-helicopter-crash-vid.jpg?w=1600",
    "publishedAt": "2022-03-21T08:00:30Z",
    "content": "AZUSA, Calif. (KABC) -- Authorities are investigating after a Los Angeles County Sheriff's helicopter crashed in the Angeles National Forest north of Azusa Saturday.The incident happened near Highway… [+2369 chars]"
}, {
    "source": {
        "id": "reuters",
        "name": "Reuters"
    },
    "author": null,
    "title": "Oil jumps as EU weighs Russian ban, Saudi refinery output hit - Reuters",
    "description": "Oil prices jumped more than $3 on Monday, with Brent above $111 a barrel, as European Union nations consider joining the United States in a Russian oil embargo, while a weekend attack on Saudi oil facilities caused jitters.",
    "url": "https://www.reuters.com/business/energy/oil-climbs-pressure-ukraine-conflict-tight-market-2022-03-21/",
    "urlToImage": "https://www.reuters.com/resizer/z1_pkCQcea9pQ30zB0UlqS9sRH4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LPEM5UXWXNKAJI4X4WA37HKFQ4.jpg",
    "publishedAt": "2022-03-21T07:49:00Z",
    "content": "SINGAPORE, March 21 (Reuters) - Oil prices jumped more than $3 on Monday, with Brent above $111 a barrel, as European Union nations consider joining the United States in a Russian oil embargo, while … [+3022 chars]"
}, {
    "source": {
        "id": "cnn",
        "name": "CNN"
    },
    "author": "Kevin Liptak, CNN",
    "title": "Biden's European trip will be heavy on displays of Western unity but could be light on actions to stop Putin's Ukraine war - CNN",
    "description": "President Joe Biden and his fellow world leaders hope to finalize and unveil a package of new measures to punish Russia, help Ukraine and demonstrate Western unity at a string of emergency summits in Europe this week.",
    "url": "https://www.cnn.com/2022/03/20/politics/joe-biden-europe-trip-vladimir-putin/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220316131819-president-joe-biden-speaks-on-ukraine-super-tease.jpg",
    "publishedAt": "2022-03-21T06:38:06Z",
    "content": "(CNN)President Joe Biden and his fellow world leaders hope to finalize and unveil a package of new measures to punish Russia, help Ukraine and demonstrate Western unity at a string of emergency summi… [+8347 chars]"
}, {
    "source": {
        "id": null,
        "name": "Daily Mail"
    },
    "author": "Stephen M. Lepore",
    "title": "Maksim Chmerkovskiy flies to Poland to aid Ukrainian refugees after being slammed as a coward - Daily Mail",
    "description": "Chmerkovskiy, 42, was in Kyiv filming  World of Dance Ukraine when Putin invaded and escaped war on a train packed with women and children and returned home to Malibu in early March.",
    "url": "https://www.dailymail.co.uk/news/article-10634537/Maksim-Chmerkovskiy-flies-Poland-aid-Ukrainian-refugees-slammed-coward.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2022/03/21/05/55599055-0-image-a-5_1647840430314.jpg",
    "publishedAt": "2022-03-21T05:37:30Z",
    "content": "Dancing with the Stars alum Maksim Chmerkovskiy is back in Eastern Europe, having flown to Poland to help with refugee relief efforts after he was trashed by critics for fleeing his native Ukraine wh… [+6968 chars]"
}, {
    "source": {
        "id": "reuters",
        "name": "Reuters"
    },
    "author": null,
    "title": "Pressed to choose sides on Ukraine, China trade favors the West - Reuters",
    "description": "U.S. President Joe Biden's warning of \"consequences\" for any aid China may give to Russia's Ukraine war effort could force Chinese President Xi Jinping to choose between a longstanding lucrative trade relationship with the West and a growing strategic partner…",
    "url": "https://www.reuters.com/business/pressed-choose-sides-ukraine-china-trade-favors-west-2022-03-21/",
    "urlToImage": "https://www.reuters.com/resizer/Cho48QVqn-MsfXuVe3opiIMdYg0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LUIL7R2R25GG5OPARBEPJ6P5EM.JPG",
    "publishedAt": "2022-03-21T05:37:00Z",
    "content": "WASHINGTON, March 21 (Reuters) - U.S. President Joe Biden's warning of \"consequences\" for any aid China may give to Russia's Ukraine war effort could force Chinese President Xi Jinping to choose betw… [+4291 chars]"
}, {
    "source": {
        "id": null,
        "name": "New York Times"
    },
    "author": "Billy Witz",
    "title": "The N.C.A.A. Tournament’s Sweet 16 Is Open for the Taking - The New York Times",
    "description": "Even with some surprises, all the teams left have good cases to make that they can make a run toward the Final Four.",
    "url": "https://www.nytimes.com/2022/03/21/sports/ncaabasketball/march-madness-sweet-16.html",
    "urlToImage": "https://static01.nyt.com/images/2022/04/20/multimedia/20mcbb-sweet16-02/20mcbb-sweet16-02-facebookJumbo.jpg",
    "publishedAt": "2022-03-21T05:00:00Z",
    "content": "MILWAUKEE The St. Peters mens basketball team, metaphorically sprouting from a crack in the Jersey City asphalt to reveal its Peacock feathers to a national audience, is led by a man who knows someth… [+937 chars]"
}, {
    "source": {
        "id": "independent",
        "name": "Independent"
    },
    "author": "Annabel Nugent",
    "title": "Kanye West is barred from performing at Grammys due to ‘concerning online behaviour’ - The Independent",
    "description": "West recently hit out at Trevor Noah who will be hosting this year’s ceremony",
    "url": "https://www.independent.co.uk/arts-entertainment/music/news/kanye-west-banned-grammys-2022-trevor-noah-b2040212.html",
    "urlToImage": "https://static.independent.co.uk/2022/03/20/08/kanye%20west-1.jpg?quality=75&width=1200&auto=webp",
    "publishedAt": "2022-03-21T04:59:45Z",
    "content": "Kanye West has reportedly been barred from performing at the Grammy Awards due to his concerning online behaviour.\r\nThe rapper who is up for five awards this year had not been confirmed as a performe… [+2488 chars]"
}, {
    "source": {
        "id": null,
        "name": "CBS Sports"
    },
    "author": "",
    "title": "How Duke's best five minutes of basketball this season saved everything as it rallied late past Michigan State - CBS Sports",
    "description": "The Blue Devils were trailing the Spartans late, but refused to lose and as a result are on to the Sweet 16",
    "url": "https://www.cbssports.com/college-basketball/news/how-dukes-best-five-minutes-of-basketball-this-season-saved-everything-as-it-rallied-late-past-michigan-state/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/03/21/9f1cbe97-49b2-4519-99ad-4920062fdf57/thumbnail/1200x675/e49fccde4f65117dedbbfdf1b9c98909/duke.jpg",
    "publishedAt": "2022-03-21T04:54:00Z",
    "content": "GREENVILLE, S.C. -- This was it. The moment had truly finally arrived. A South Carolina Sunday was where and when Duke had to prove itself. If not, everything would come crashing down.\r\nThe second-se… [+7930 chars]"
}, {
    "source": {
        "id": "reuters",
        "name": "Reuters"
    },
    "author": null,
    "title": "U.S. Supreme Court Justice Thomas in hospital for infection - Reuters",
    "description": "U.S. Supreme Court Justice Clarence Thomas was admitted to a hospital in Washington on Friday after experiencing flu-like symptoms and was diagnosed with an infection, the high court said on Sunday.",
    "url": "https://www.reuters.com/world/us/us-supreme-court-justice-thomas-hospital-infection-statement-2022-03-20/",
    "urlToImage": "https://www.reuters.com/resizer/njusu2OeDjIsIE_UM30mqYGVXFk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CHGQBF42QNPSHHZIVIMU6UAQEI.jpg",
    "publishedAt": "2022-03-21T04:27:00Z",
    "content": "WASHINGTON, March 20 (Reuters) - U.S. Supreme Court Justice Clarence Thomas was admitted to a hospital in Washington on Friday after experiencing flu-like symptoms and was diagnosed with an infection… [+2177 chars]"
}, {
    "source": {
        "id": null,
        "name": "The Guardian"
    },
    "author": "Martin Pengelly",
    "title": "Mitch McConnell: Republicans who support Putin ‘lonely voices’ in party - The Guardian",
    "description": "Senate minority leader however dodges invitation to say such Republicans should be ejected from party or face disciplinary measures",
    "url": "https://amp.theguardian.com/us-news/2022/mar/21/mitch-mcconnell-republicans-who-support-putin-lonely-voices",
    "urlToImage": "https://i.guim.co.uk/img/media/d8055ab8e7d84798396a89c692262a50d402f48d/0_302_5000_3002/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=63b5030c93e9b1459cf80a68704a1a1f",
    "publishedAt": "2022-03-21T04:02:00Z",
    "content": "Republicans who support Vladimir Putin over the Russian invasion of Ukraine are lonely voices in the party, Mitch McConnell said.\r\nBut the Senate minority leader dodged an invitation to say such Repu… [+2418 chars]"
}, {
    "source": {
        "id": null,
        "name": "Teslarati"
    },
    "author": "Monica Pappas",
    "title": "NASA’s James Webb Space Telescope mirror surpasses expectations as alignment continues - Teslarati",
    "description": "NASA’s James Webb Space Telescope has completed another critical mirror alignment step and has released the highest resolution infrared image ever taken from space. Less than two months ago, the James Webb Space Telescope took its first photos in space. The i…",
    "url": "https://www.teslarati.com/nasa-webb-telescope-jwst-mirror-alignment-progress/",
    "urlToImage": "https://www.teslarati.com/wp-content/uploads/2022/03/JWST-mirror-alignment-Feb-March-2022-NASA-1-1024x535.jpg",
    "publishedAt": "2022-03-21T02:34:14Z",
    "content": "NASAs James Webb Space Telescope has completed another critical mirror alignment step and has released the highest resolution infrared image ever taken from space.\r\nLess than two months ago, the Jame… [+4032 chars]"
}, {
    "source": {
        "id": "independent",
        "name": "Independent"
    },
    "author": "Kieran Guilbert",
    "title": "Russia accused of bombing Mariupol art school as Zelensky warns of ‘third world war’ if peace talks fail - The Independent",
    "description": "‘Several thousand’ residents reportedly deported to Russia as Putin’s forces tighten grip on port city",
    "url": "https://www.independent.co.uk/news/world/europe/ukraine-russia-mariupol-zelensky-war-b2040032.html",
    "urlToImage": "https://static.independent.co.uk/2022/03/20/15/SEI94529777.jpg?quality=75&width=1200&auto=webp",
    "publishedAt": "2022-03-21T02:25:31Z",
    "content": "Russia has been accused of bombing an art school providing shelter to hundreds of civilians in the besieged city of Mariupol and of deporting thousands of residents to an unknown fate inside Russian … [+6411 chars]"
}, {
    "source": {
        "id": null,
        "name": "New York Post"
    },
    "author": "Marc Berman",
    "title": "Julius Randle falls apart as Knicks lose to Jazz on Donovan Mitchell's big night - New York Post ",
    "description": "On a night the Knicks needed Julius Randle to be a Garden star against the mighty Jazz, he laid an egg while Donovan Mitchell shined.",
    "url": "https://nypost.com/2022/03/20/julius-randle-falls-apart-as-knicks-lose-to-jaz/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/03/newspress-collage-21596113-1647828147042.png?w=1024",
    "publishedAt": "2022-03-21T02:06:00Z",
    "content": "On a night the Knicks needed Julius Randle to be a Garden star against the mighty Jazz, he laid an egg while Donovan Mitchell shined. \r\nThe Knicks blew a big opportunity to make March more interestin… [+4402 chars]"
}]
  constructor(){
    super();
    this.state={
      articles: this.articles
    }
  }
  render() {
    let {title, description, imgUrl} = this.props;
    return (
      <div>
        
        <div className="card" style={{width: "18rem"}}>
  <img src={imgUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems