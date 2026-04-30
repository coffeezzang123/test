function EventOne() {
  const steps = [
    "나마네 키오스크에서 나만의 사진으로 전면형 커스텀 카드 발급",
    "NAMANE 앱에 발급한 카드 등록",
    "등록 즉시 최대 5만원 충전 쿠폰 지급",
  ];

  return (
    <section id="event-1" className="scroll-mt-6 px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="gold-panel overflow-hidden rounded-[2rem] p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black text-[#ffd56a]">EVENT 01</p>
              <h2 className="section-title-nowrap mt-2 font-black leading-tight">
                카드 등록 후 즉시 충전 쿠폰 받기!
              </h2>
              <div className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-lg font-black text-[#8134ff] shadow-gold">
                꽝 없는 랜덤 행운
              </div>
              <p className="mt-5 text-base leading-7 text-[#eee1ff]/80">
                카드만 만들고 끝이 아니라, 앱 등록까지 완료하면 랜덤 충전 쿠폰이 바로 도착합니다.
              </p>
            </div>

            <div className="grid gap-3">
              {steps.map((step, index) => (
                <article
                  key={step}
                  className="hover-tint flex gap-4 rounded-3xl border border-white/14 bg-white/10 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ffd56a] text-lg font-black text-[#170b1d]">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#ffd56a]">STEP {index + 1}</p>
                    <h3 className="mt-1 text-lg font-black leading-snug text-white">{step}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.EventOne = EventOne;
