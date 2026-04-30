function Summary() {
  const items = [
    {
      label: "이벤트 기간",
      value: "2026.04.30 ~ 05.15",
      detail: "황금 연휴처럼 짧고 굵게 열리는 이벤트",
    },
    {
      label: "참여 대상",
      value: "전면형 커스텀 카드 구매 및 앱 등록 고객",
      detail: "기간 내 구매와 앱 등록을 모두 완료하면 참여 가능",
    },
    {
      label: "혜택",
      value: "즉시 쿠폰 + 댓글 추첨 쿠폰",
      detail: "등록 즉시 랜덤 쿠폰, 댓글 참여 시 최대 50만원",
    },
  ];

  return (
    <section className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7">
          <p className="text-sm font-black text-[#ffd56a]">EVENT SUMMARY</p>
          <h2 className="section-title-nowrap mt-2 font-black leading-tight">
            한눈에 보는 <span className="gold-text">골든 혜택</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.label} className="glass-panel rounded-3xl p-6">
              <p className="text-sm font-black text-[#ffd56a]">{item.label}</p>
              <h3 className="card-title-nowrap mt-3 font-black leading-snug text-white">
                {item.value}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#eee1ff]/72">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Summary = Summary;
