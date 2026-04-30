function HowToMakeCard() {
  const tabs = window.cardGuideTabs;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <section id="how-to" className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7">
          <p className="text-sm font-black text-[#ffd56a]">HOW TO MAKE CARD</p>
          <h2 className="section-title-nowrap mt-2 font-black leading-tight">
            전면형 카드 구매 방법
          </h2>
        </div>

        <div className="tab-scroll -mx-5 mb-6 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`min-h-12 shrink-0 rounded-2xl px-5 text-sm font-black transition ${
                  isActive
                    ? "bg-[#ffd56a] text-[#170b1d] shadow-gold"
                    : "border border-white/14 bg-white/8 text-[#eee1ff] hover:bg-white/14"
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="guide-image overflow-hidden rounded-[2rem] border border-white/14 p-2">
            <img
              src={activeTab.image}
              alt={`${activeTab.title} 안내 이미지`}
              className="w-full rounded-[1.5rem]"
            />
          </div>

          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#8134ff] px-4 py-2 text-sm font-black text-white">
                {activeTab.eyebrow}
              </span>
              <h3 className="sub-title-nowrap font-black leading-tight">{activeTab.title}</h3>
            </div>

            <div className="grid gap-3">
              {activeTab.steps.map((step, index) => (
                <article key={step} className="hover-tint flex gap-4 rounded-2xl bg-white/8 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#8134ff]">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base font-bold leading-6 text-white">{step}</p>
                </article>
              ))}
            </div>

            <a
              href="https://namanecard.com/"
              className="purple-button mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-[#8134ff] px-6 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-[#944dff]"
            >
              NAMANE에서 카드 만들기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HowToMakeCard = HowToMakeCard;
