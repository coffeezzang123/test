function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden px-5 pb-12 pt-8 md:px-8 md:pb-16 md:pt-12">
      <div className="sparkle-field" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm font-black tracking-[0.24em] text-[#eee1ff]/75">
            NAMANE CARD
          </div>
          <div className="hover-tint rounded-full border border-[#ffd56a]/40 bg-[#ffd56a]/15 px-4 py-2 text-xs font-black text-[#ffd56a]">
            04.30 - 05.15
          </div>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold text-[#eee1ff]">
              5월의 황금빛 행운이 쏟아집니다
            </p>
            <h1 className="hero-title-nowrap font-black leading-[0.95] tracking-normal">
              Golden May <span className="gold-text">Surprise</span>
            </h1>
            <p className="hero-copy-nowrap mt-5 font-black leading-tight text-white">
              전면형 카드 발급하고 최대 50만원 충전쿠폰 받으세요!
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#eee1ff]/78">
              나만의 사진으로 커스텀 카드를 만들고, 등록 즉시 쿠폰부터 댓글 추첨 혜택까지 받아보세요.
            </p>

            <div className="mt-5 max-w-xl">
              <Countdown />
            </div>

            <div className="mt-7 grid gap-3 sm:max-w-xl sm:grid-cols-2">
              <a
                href="#event-1"
                className="purple-button inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#8134ff] px-6 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-[#944dff]"
              >
                EVENT 1
              </a>
              <a
                href="#event-2"
                className="gold-button inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#ffd56a] px-6 text-base font-black text-[#170b1d] transition hover:-translate-y-0.5 hover:bg-[#ffe08b]"
              >
                EVENT 2
              </a>
            </div>
          </div>

          <div className="poster-frame relative mx-auto w-full max-w-[420px] md:max-w-[500px]">
            <div className="absolute -inset-3 rounded-[2.2rem] bg-[#8134ff]/25 blur-2xl" />
            <img
              src="/images/kor_1.png"
              alt="Golden May Surprise 이벤트 포스터"
              className="relative w-full rounded-[2rem] border border-white/18 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
