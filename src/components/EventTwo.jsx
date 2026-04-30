function EventTwo() {
  const instagramPostUrl = "https://www.instagram.com/p/DXtGl1PFPxf/?img_index=1";
  const prizes = [
    { amount: "50만원", count: "1명", tone: "bg-[#ffd56a] text-[#170b1d]" },
    { amount: "30만원", count: "1명", tone: "bg-[#eee1ff] text-[#170b1d]" },
    { amount: "20만원", count: "1명", tone: "bg-[#6fffd2] text-[#170b1d]" },
  ];
  const steps = [
    "이벤트 기간 내 전면형 커스텀 카드 구매",
    "이벤트 게시물에 참여완료 댓글 작성",
  ];
  const [comment, setComment] = React.useState("참여완료");
  const [status, setStatus] = React.useState("");

  async function handleCommentSubmit(event) {
    event.preventDefault();
    const cleanComment = comment.trim() || "참여완료";

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(cleanComment);
        setStatus("댓글 문구를 복사했어요. 인스타그램에서 로그인 후 댓글창에 붙여넣어 등록해 주세요.");
      } else {
        setStatus("인스타그램에서 로그인 후 아래 댓글 문구를 복사해 등록해 주세요.");
      }
    } catch (error) {
      setStatus("댓글 문구 자동 복사에 실패했어요. 문구를 직접 복사해 인스타그램 댓글창에 입력해 주세요.");
    }

    window.open(instagramPostUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="event-2" className="scroll-mt-6 px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7">
          <p className="text-sm font-black text-[#ffd56a]">EVENT 02</p>
          <h2 className="event-two-title mt-2 font-black leading-tight">
            좋아요 누르고, 댓글 달고 행운의 주인공 되기!
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass-panel rounded-3xl p-6 md:p-8">
            <h3 className="label-title-nowrap text-xl font-black">참여 방법</h3>
            <div className="mt-5 grid gap-3">
              {steps.map((step, index) => (
                <div key={step} className="hover-tint flex gap-4 rounded-2xl bg-white/8 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#8134ff] text-sm font-black">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base font-bold leading-6 text-white">{step}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleCommentSubmit} className="mt-5 rounded-3xl border border-white/14 bg-black/18 p-4">
              <label htmlFor="instagram-comment" className="label-title-nowrap text-sm font-black text-[#ffd56a]">
                참여완료 댓글쓰기
              </label>
              <textarea
                id="instagram-comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                rows="3"
                className="mt-3 w-full resize-none rounded-2xl border border-white/14 bg-white/10 p-4 text-base font-bold leading-6 text-white outline-none transition placeholder:text-white/35 focus:border-[#ffd56a]/70"
                placeholder="참여완료"
              />
              <button
                type="submit"
                className="purple-button mt-3 inline-flex min-h-[52px] w-full items-center justify-center rounded-2xl bg-[#8134ff] px-5 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-[#944dff]"
              >
                인스타그램 로그인 후 댓글 등록하기
              </button>
              <p className="mt-3 text-xs leading-5 text-white/45">
                보안을 위해 이 페이지는 인스타그램 아이디나 비밀번호를 입력받지 않습니다.
              </p>
              {status && <p className="mt-3 text-sm font-bold leading-6 text-[#eee1ff]/78">{status}</p>}
            </form>

            <div className="mt-5 rounded-2xl border border-[#ffd56a]/25 bg-[#ffd56a]/10 p-4">
              <p className="text-sm font-black text-[#ffd56a]">당첨자 발표</p>
              <p className="card-title-nowrap mt-1 font-black">2026.05.18, DM 통해 개별 연락</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {prizes.map((prize) => (
              <article
                key={prize.amount}
                className="hover-tint relative overflow-hidden rounded-3xl border border-white/14 bg-white/10 p-6"
              >
                <div className="absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-[#ffd56a]/20 blur-2xl" />
                <p className="text-sm font-black text-[#eee1ff]/75">페이 충전 쿠폰</p>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <strong className="text-4xl font-black leading-none text-white">
                    {prize.amount}
                  </strong>
                  <span className={`rounded-full px-4 py-2 text-sm font-black ${prize.tone}`}>
                    각 {prize.count}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.EventTwo = EventTwo;
