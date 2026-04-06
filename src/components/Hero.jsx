export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* 🖼 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 hero-zoom bg-cover md:bg-center bg-[center_top]"
        style={{ backgroundImage: "url('../public/logo/Hero-bg.jpg')" }}
      ></div>

      {/* 🌑 OVERLAY (FIXED — DOES NOT BLOCK CLICKS) */}
      <div className="hero-overlay absolute inset-0 pointer-events-none"></div>

      {/* ✨ CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="max-w-3xl px-6">
          <h1 className="heading-xl gold-text mb-6 fade-in">Yahya King</h1>

          <p className="text-luxury mb-8 slide-up">
            Unrivaled Luxury Hookah Experience
          </p>

          {/* 🔥 BUTTONS */}
          <div className="flex gap-4 justify-center">
            <button className="btn-solid">Shop Now</button>
            <button className="btn-primary">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}
