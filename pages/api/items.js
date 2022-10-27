// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      image:
        "https://www.elgiganten.se/image/dv_web_D180001002873705/387711/asus-tuf-gaming-asvg247q1a-24-bildskarm--pdp_zoom-3000--pdp_main-960.jpg",
      price: 1890,
      rating: 4.3,
      desc: 'Upplev fördjupande bilder med ASUS TUF Gaming ASVG247Q1A 24" bildskärm med en Full HD VA-panel, 2x HDMI 1.4 och en smidig 165 Hz uppdateringsfrekvens. Ta vara på ELMB Sync-teknologi och glöm hackande bilder och oskarpa rörelser.',
      title: 'ASUS TUF Gaming ASVG247Q1A 24" bildskärm',
      specs: [
        '24" 1080 p VA-panel, ELMB Sync',
        "NVIDIA G-Sync, AMD FreeSync Premium",
        "165 Hz refresh, 1 ms, 2x HDMI",
      ],
    },
    {
      id: 1,
      image:
        "https://www.elgiganten.se/image/dv_web_D180001002872783/383083/samsung-odyssey-g5-s32ag524-32-bildskarm-for-gaming--pdp_zoom-3000--pdp_main-960.jpg",
      price: 3290,
      rating: 3.6,
      desc: 'Samsung Odyssey G5 S32AG524 32" bildskärm för gaming förhöjer din spelupplevelse. NVIDIA G-Sync-stödet gör att din GPU och bildskärm arbetar hand i hand för att säkerställa smidiga bilder utan lagg och skärmslitning.',
      title: 'Samsung Odyssey G5 S32AG524 32" bildskärm för gaming',
      discount: 1700,
      specs: [
        '32" WQHD 1440p IPS-panel, HDR400',
        "NVIDIA G-Sync-kompatibel, 165 Hz",
        "DP, HDMI, AMD FreeSync Premium",
      ],
    },
    {
      id: 2,
      image:
        "https://www.elgiganten.se/image/dv_web_D180001002783670/325056/hp-m24fw-238-bildskarm--pdp_zoom-3000--pdp_main-960.jpg",
      price: 2690,
      rating: 4.7,
      desc: "HP M24fw-bildskärm är perfekt för visning av alla typer av visuellt innehåll. Skarp 1080p Full HD-upplösning uppnås med den 23,8-tums IPS-panelen och din visningskomfort säkerställs av den extremt breda betraktningsvinkeln och Eyesafe-teknik",
      title: "HP M24fw 23.8” bildskärm",
      specs: [
        "23.8” Full HD 1080 IPS panel",
        "Ultra-bred betraktningsvinkel",
        "VGA, HDMI 1.4",
      ],
    },
    {
      id: 3,
      image:
        "https://www.elgiganten.se/image/dv_web_D180001002783686/325052/hp-m27fw-27-bildskarm--pdp_zoom-3000--pdp_main-960.jpg",
      price: 2990,
      rating: 4.4,
      desc: "HP M27fw-bildskärm är perfekt för visning av alla typer av visuellt innehåll. Skarp 1080p Full HD-upplösning uppnås med 27-tums IPS-panelen och din visningskomfort säkerställs av den extremt breda betraktningsvinkeln",
      title: "HP M27fw 27” bildskärm",
      specs: [
        "27” Full HD 1080 IPS panel",
        "Ultra-bred betraktningsvinkel",
        "VGA, HDMI 1.4",
      ],
    },
    {
      id: 4,
      image:
        "https://www.elgiganten.se/image/dv_web_D180001002596846/183694/aoc-c24g2aebk-24-valvd-bildskarm-for-gaming--pdp_zoom-3000--pdp_main-960.jpg",
      price: 2490,
      rating: 4.5,
      desc: "Förbättra din spelupplevelse med AOC AOC C24G2AE/BK bildskärm för gaming, som erbjuder en fantastisk bildhastighet och 1 ms responstid. Tack vare VA-teknologin kan du njuta av hög kontrast och otroligt jämn svärta.",
      title: 'AOC C24G2AE/BK 24" välvd bildskärm för gaming',
      specs: [
        "27” Full HD 1080 IPS panel",
        "165 Hz,1 ms responstid",
        "AMD FreeSync Premium",
      ],
    },
  ]);
}
