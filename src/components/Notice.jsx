function Notice() {
  const groups = [
    {
      title: "[공통]",
      items: [
        "2026년 4월 30일부터 5월 15일 사이에 구매 및 앱 등록하신 경우에만 참여가 가능합니다.",
        "전면형 커스텀 카드 발급 시에만 혜택이 제공되며, K-POP 카드 디자인은 제외됩니다.",
      ],
    },
    {
      title: "[EVENT 1]",
      items: [
        "지급된 쿠폰은 유효기간 내에 반드시 사용해 주셔야 하며, 만료 시 재지급되지 않습니다.",
      ],
    },
    {
      title: "[EVENT 2]",
      items: [
        "당첨자분께는 DM을 통해 개별 안내드릴 예정입니다.",
        "경품 지급을 위해 개인정보 제출을 요청드릴 수 있으며, 미제출 시 당첨이 취소될 수 있습니다.",
      ],
    },
    {
      title: "[기타]",
      items: [
        "본 이벤트는 예산 소진 시 별도 안내 없이 조기 종료될 수 있습니다.",
        "본 이벤트는 나마네카드 전 채널에서 통합 진행되며, 중복 응모는 제한될 수 있습니다.",
      ],
    },
  ];

  return (
    <section className="px-5 pb-28 pt-14 md:px-8 md:pb-32 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-black/18 p-6 md:p-8">
          <p className="text-sm font-black text-white/45">NOTICE</p>
          <h2 className="label-title-nowrap mt-2 text-2xl font-black text-white/45 md:text-3xl">유의사항</h2>
          <div className="mt-6 grid gap-5 text-xs leading-6 text-white/42 md:grid-cols-2">
            {groups.map((group) => (
              <article key={group.title}>
                <h3 className="label-title-nowrap mb-2 text-xs font-black text-white/55">
                  {group.title}
                </h3>
                <ul className="grid gap-1.5">
                  {group.items.map((notice) => (
                    <li key={notice}>※ {notice}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#170b1d]/90 px-5 py-3 backdrop-blur md:hidden">
        <a
          href="#event-1"
          className="purple-button flex min-h-12 items-center justify-center rounded-2xl bg-[#8134ff] text-sm font-black text-white"
        >
          EVENT 1
        </a>
        <a
          href="#event-2"
          className="gold-button flex min-h-12 items-center justify-center rounded-2xl bg-[#ffd56a] text-sm font-black text-[#170b1d]"
        >
          EVENT 2
        </a>
      </div>
    </section>
  );
}

window.Notice = Notice;
