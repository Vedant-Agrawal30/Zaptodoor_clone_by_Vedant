<!-- ////////////////////////////////////////////////////////////////////// -->
  <!-- Testinomial -->

<section class="testimonial-section">
  <h2 class="section-heading">Loved by people worldwide</h2>

  <div class="marquee-wrapper">
    <div class="marquee-track">

      <!-- CARD -->
      <div class="tweet-card">
        <div class="tweet-header">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200">
          <div>
            <h4>Martin <span class="verify">✔</span></h4>
            <p>@martin_dev</p>
          </div>
        </div>
        <p class="tweet-text">
          Zaptodoor made ordering and delivery an absolute breeze.
        </p>
      </div>

      <div class="tweet-card">
        <div class="tweet-header">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200">
          <div>
            <h4>Avery Johnson <span class="verify">✔</span></h4>
            <p>@averywrites</p>
          </div>
        </div>
        <p class="tweet-text">
          Fast delivery, great support and smooth app experience.
        </p>
      </div>

      <div class="tweet-card">
        <div class="tweet-header">
          <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200">
          <div>
            <h4>Jordan Lee <span class="verify">✔</span></h4>
            <p>@jordantalks</p>
          </div>
        </div>
        <p class="tweet-text">
          Very clean UI and reliable local delivery platform.
        </p>
      </div>

    </div>
  </div>
</section>





<style>
  .testimonial-section {
  padding: 90px 0;
  background: #fff;
  overflow: hidden;
}

.section-heading {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 50px;
}

/* WRAPPER */
.marquee-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
}

/* FADE EDGES (Image-2 effect) */
.marquee-wrapper::before,
.marquee-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  width: 120px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(to right, #fff, transparent);
}

.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #fff, transparent);
}

/* TRACK */
.marquee-track {
  display: flex;
  gap: 30px;
  width: max-content;
  animation: marqueeMove 28s linear infinite;
}

@keyframes marqueeMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* CARD */
.tweet-card {
  width: 320px;
  min-height: 180px;
  background: #fff;
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 10px 35px rgba(0,0,0,0.08);
  border: 1px solid #eee;
  flex-shrink: 0;
}

/* HEADER */
.tweet-header {
  display: flex;
  gap: 12px;
  align-items: center;
}

.tweet-header img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
}

.tweet-header h4 {
  font-size: 15px;
  margin: 0;
}

.verify {
  color: #1d9bf0;
}

.tweet-header p {
  font-size: 13px;
  color: #666;
  margin: 0;
}

/* TEXT FIX (NO OVERFLOW) */
.tweet-text {
  margin-top: 14px;
  font-size: 15px;
  color: #333;
  line-height: 1.6;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


/* MOBILE */
@media (max-width:768px){
  .tweet-card {
    width: 260px;
  }
}

</style>







<section class="testimonial-section">
  <h2 class="section-heading">Loved by people worldwide</h2>

  <!-- ROW 1 -->
  <div class="marquee-wrapper">
    <div class="marquee-track" id="row1">
      <!-- cards injected by JS -->
    </div>
  </div>

  <!-- ROW 2 -->
  <div class="marquee-wrapper reverse">
    <div class="marquee-track" id="row2">
      <!-- cards injected by JS -->
    </div>
  </div>
</section>

<style>
.testimonial-section {
  padding: 100px 0;      /* 👈 top & bottom space */
  background: #fff;
  overflow: hidden;      /* 👈 very important */
}


.section-heading {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #111827;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;   /* underline width text ke hisab se */
  cursor: default;
  text-align: center;
}

/* underline */
.section-heading::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -12px;
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, #4c0996, #7a4fe0);
  border-radius: 999px;
  transform: translateX(-50%);
  transition: width 0.35s ease;
}

/* hover effect */
.section-heading:hover::after {
  width: 70%;
}


/* wrapper */
.marquee-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 30px;
}

/* fade edges */
.marquee-wrapper::before,
.marquee-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  width: 120px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(to right, #fff, transparent);
}

.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #fff, transparent);
}

/* track */
.marquee-track {
  display: flex;
  gap: 30px;
  width: max-content;
  animation: scrollLeft 35s linear infinite;
}

/* reverse direction */
.marquee-wrapper.reverse .marquee-track {
  animation: scrollRight 40s linear infinite;
}

@keyframes scrollLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes scrollRight {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}

/* card */

.tweet-card {
  width: 320px;
  min-height: 200px;     /* 👈 thoda bada */
  background: #fff;
  border-radius: 16px;
  padding: 22px;
  flex-shrink: 0;
   box-shadow: 0 10px 35px rgba(0,0,0,0.08);
  border: 1px solid #eee;
}


.tweet-header {
  display: flex;
  gap: 12px;
  align-items: center;
}

.tweet-header img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
}

.tweet-header h4 {
  font-size: 15px;
  margin: 0;
}

.verify {
  color: #1d9bf0;
}

.tweet-header p {
  font-size: 13px;
  color: #666;
  margin: 0;
}

.tweet-text {
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.6;
  color: #333;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


/* mobile */
@media (max-width:768px){
  .tweet-card { width: 260px; }
}

</style>


<script>
const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200",
    name: "Martin",
    handle: "@martin_dev",
    text: "Zaptodoor made ordering and delivery an absolute breeze."
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    text: "Fast delivery, great support and smooth app experience."
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    name: "Jordan Lee",
    handle: "@jordantalks",
    text: "Very clean UI and reliable local delivery platform."
  }
];

function createCard(t) {
  return `
    <div class="tweet-card">
      <div class="tweet-header">
        <img src="${t.img}">
        <div>
          <h4>${t.name} <span class="verify">✔</span></h4>
          <p>${t.handle}</p>
        </div>
      </div>
      <p class="tweet-text">${t.text}</p>
    </div>
  `;
}

function renderRow(rowId) {
  const row = document.getElementById(rowId);
  const doubled = [...testimonials, ...testimonials];
  doubled.forEach(t => row.insertAdjacentHTML("beforeend", createCard(t)));
}

renderRow("row1");
renderRow("row2");
</script>






<!-- baniya ki css thi ye mene iski jagah original css laga di h  -->
<style>
  :root {
    --primary: #4c0996;
    --secondary: #7a4fe0;
    --glass: rgba(255, 255, 255, 0.75);
  }

  /* ================= SECTION ================= */
  .app-download-advanced {
    background: radial-gradient(circle at top, #f5efff, #ffffff);
    padding: 80px 0;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
  }

  /* ================= GRID ================= */
  .apps-grid {
    display: flex;
    flex-direction: column;
    gap: 90px;
  }

  /* ================= CARD ================= */
  .app-card {
    position: relative;
    display: flex;
    align-items: center;
    gap: 140px;
    padding: 60px;
    border-radius: 36px;

    background: rgb(17, 17, 17);
    backdrop-filter: blur(18px);
    box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6);

    color: #ffffff;
  }

  .app-card.reverse {
    flex-direction: row-reverse;
  }

  /* ================= FLOATING STICKERS ================= */
  .sticker {
    position: absolute;
    padding: 10px 18px;
    border-radius: 22px;
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
    animation: float 5s ease-in-out infinite;
  }

  .sticker.chat {
    background: linear-gradient(135deg, #25d366, #128c7e);
    top: -18px;
    left: 40px;
  }

  .sticker.service {
    background: linear-gradient(135deg, #4c0996, #7a4fe0);
    top: 60px;
    right: -30px;
    animation-delay: 1.5s;
  }

  .sticker.fast {
    background: linear-gradient(135deg, #ff8a00, #ff4d00);
    bottom: -20px;
    left: 120px;
    animation-delay: 3s;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-12px);
    }
  }

  /* ================= PHONE ================= */
  .phone {
    padding-left: 50px;
    width: 260px;
    border-radius: 36px;
    animation: phoneFloat 6s ease-in-out infinite;
  }

  @keyframes phoneFloat {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-18px);
    }
  }

  /* ================= CONTENT ================= */
  .content {
    max-width: 520px;
  }

  .content h3 {
    font-size: 2.1rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 22px;
    letter-spacing: -0.02em;
  }

  .content p {
    font-size: 1.05rem;
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 38px;
  }

  /* ================= CTA ================= */
  .cta-group {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .store-btn img {
    width: 150px;
    padding: 10px;
    border-radius: 18px;
    background: #ffffff;
    transition: transform .35s ease, box-shadow .35s ease;
  }

  .store-btn img:hover {
    transform: scale(1.12);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
  }

  /* ================= QR ================= */
  .qr {
    padding: 16px;
    background: #ffffff;
    border-radius: 16px;
  }

  .qr img {
    width: 80px;
  }

  /* ================= MOBILE ================= */
  @media (max-width: 768px) {

    .app-card,
    .app-card.reverse {
      flex-direction: column;
      text-align: center;
      gap: 40px;
      padding: 50px 28px;
    }

    .phone {
      padding-left: 0;
      width: 210px;
    }

    .cta-group {
      justify-content: center;
      flex-wrap: wrap;
    }

    .sticker {
      display: none;
    }
  }
</style>


<!-- mene solving coustomer mein margue laga diya h neeche ussi ka code h -->
<!-- Choose Excellence Section -->
<section class="choose-excellence">
  <div class="container">
    <div class="choose-header">
      <h2>CHOOSE EXCELLENCE <span class="highlight">— CHOOSE US</span></h2>
    </div>

    <h3 class="section-title">
      SOLVING CUSTOMERS PROBLEMS
    </h3>

    <!-- MARQUEE CONTAINER START -->
    <div class="marquee-container">
      <div class="marquee-track">
        <!-- FIRST SET OF 5 CARDS -->
        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_6855122c985007.51940027.webp" alt="2 KM Free Delivery">
          </div>
          <div class="caption">2 KM Free Delivery</div>
        </div>

        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_68551354351f98.72702960.webp" alt="Monthly Gifts">
          </div>
          <div class="caption">Monthly Gifts</div>
        </div>

        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_685512d35049f2.70089842.webp" alt="Cart Services">
          </div>
          <div class="caption">Cart Services</div>
        </div>

        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_685512fb5eb632.73874314.webp" alt="Affordable Charges">
          </div>
          <div class="caption">Affordable Charges</div>
        </div>

        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_6855265a48b826.38262141.webp" alt="Upto 50% off">
          </div>
          <div class="caption">Upto 50% off</div>
        </div>

        <!-- SAME SET REPEATED FOR CONTINUOUS LOOP -->
        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_6855122c985007.51940027.webp" alt="2 KM Free Delivery">
          </div>
          <div class="caption">2 KM Free Delivery</div>
        </div>

        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_68551354351f98.72702960.webp" alt="Monthly Gifts">
          </div>
          <div class="caption">Monthly Gifts</div>
        </div>

        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_685512d35049f2.70089842.webp" alt="Cart Services">
          </div>
          <div class="caption">Cart Services</div>
        </div>

        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_685512fb5eb632.73874314.webp" alt="Affordable Charges">
          </div>
          <div class="caption">Affordable Charges</div>
        </div>

        <div class="marquee-item">
          <div class="image-wrap">
            <img src="upload/file_6855265a48b826.38262141.webp" alt="Upto 50% off">
          </div>
          <div class="caption">Upto 50% off</div>
        </div>
      </div>
    </div>
    <!-- MARQUEE CONTAINER END -->
  </div>
</section>

<style>
  /* BASIC SECTION STYLES */
  .choose-excellence {
    padding: 60px 0;
    background: #ffffff;
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .choose-excellence .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .choose-excellence .choose-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .choose-excellence .choose-header h2 {
    display: inline-block;
    background: linear-gradient(135deg, #4c0996, #6a1fd3);
    color: #fff;
    padding: 12px 36px;
    border-radius: 16px;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .choose-excellence .highlight {
    color: #f9cc00;
  }

  .choose-excellence .section-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #111;
    text-align: center;
    margin-bottom: 40px;
  }

  /* MARQUEE CONTAINER - MAIN WRAPPER */
  .marquee-container {
    width: 100%;
    overflow: hidden;
    /* Hide overflowing content */
    position: relative;
    padding: 20px 0;
  }

  /* MARQUEE TRACK - MOVING ELEMENT */
  .marquee-track {
    display: flex;
    gap: 40px;
    /* Space between cards */
    width: max-content;
    /* Fit content width */

    /* ANIMATION PROPERTIES */
    animation: marqueeScroll 30s linear infinite;
    /* 30s = animation duration, linear = constant speed, infinite = loop forever */
  }

  /* MARQUEE ANIMATION KEYFRAMES */
  @keyframes marqueeScroll {
    0% {
      transform: translateX(0);
      /* Start from right side */
    }

    100% {
      transform: translateX(-50%);
      /* Move left by 50% (half of total width) */
    }
  }

  /* PAUSE ANIMATION ON HOVER */
  .marquee-container:hover .marquee-track {
    animation-play-state: paused;
  }

  /* INDIVIDUAL MARQUEE ITEM (CARD) */
  .marquee-item {
    flex: 0 0 180px;
    /* Fixed width for each card */
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }

  .marquee-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  }

  /* IMAGE STYLING */
  .marquee-item .image-wrap {
    width: 100%;
    height: 150px;
    overflow: hidden;
    background: #e0e0e0;
  }

  .marquee-item .image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .marquee-item:hover .image-wrap img {
    transform: scale(1.08);
  }

  /* CAPTION STYLING */
  .marquee-item .caption {
    padding: 12px;
    background: linear-gradient(135deg, #4c0996, #6a1fd3);
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    transition: letter-spacing 0.35s ease;
  }

  .marquee-item:hover .caption {
    letter-spacing: 0.6px;
  }

  /* GRADIENT OVERLAY FOR SMOOTH EDGES */
  .marquee-container::before,
  .marquee-container::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  .marquee-container::before {
    left: 0;
    background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0) 100%);
  }

  .marquee-container::after {
    right: 0;
    background: linear-gradient(to left, #ffffff 0%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0) 100%);
  }

  /* RESPONSIVE DESIGN */
  @media (max-width: 992px) {
    .marquee-item {
      flex: 0 0 160px;
    }

    .marquee-item .image-wrap {
      height: 140px;
    }

    .marquee-track {
      gap: 30px;
    }
  }

  @media (max-width: 768px) {
    .choose-excellence {
      padding: 40px 0;
    }

    .marquee-item {
      flex: 0 0 140px;
    }

    .marquee-item .image-wrap {
      height: 120px;
    }

    .marquee-track {
      gap: 25px;
      animation: marqueeScroll 25s linear infinite;
    }

    .marquee-container::before,
    .marquee-container::after {
      width: 80px;
    }
  }

  @media (max-width: 480px) {
    .marquee-item {
      flex: 0 0 120px;
    }

    .marquee-item .image-wrap {
      height: 100px;
    }

    .marquee-track {
      gap: 20px;
      animation: marqueeScroll 20s linear infinite;
    }

    .marquee-item .caption {
      font-size: 12px;
      padding: 8px 6px;
    }

    .marquee-container::before,
    .marquee-container::after {
      width: 50px;
    }
  }

  /* DARK MODE SUPPORT */
  body.dark-mode .choose-excellence {
    background: #1a1a1a;
  }

  body.dark-mode .choose-excellence .section-title {
    color: #f0f0f0;
  }

  body.dark-mode .marquee-item {
    background: #2a2a2a;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  body.dark-mode .marquee-item .image-wrap {
    background: #333;
  }

  body.dark-mode .marquee-container::before {
    background: linear-gradient(to right, #1a1a1a 0%, rgba(26, 26, 26, 0.9) 30%, rgba(26, 26, 26, 0) 100%);
  }

  body.dark-mode .marquee-container::after {
    background: linear-gradient(to left, #1a1a1a 0%, rgba(26, 26, 26, 0.9) 30%, rgba(26, 26, 26, 0) 100%);
  }
</style>
<!-- End Choose Excellence Section -->






