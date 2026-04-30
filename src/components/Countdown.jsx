function Countdown() {
  const deadline = React.useMemo(() => new Date("2026-05-16T00:00:00+09:00"), []);
  const [remaining, setRemaining] = React.useState(() => getRemaining(deadline));

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getRemaining(deadline));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [deadline]);

  if (remaining.total <= 0) {
    return (
      <div className="countdown-panel hover-tint">
        <span className="countdown-label">이벤트 종료</span>
        <strong className="countdown-ended">Golden May Surprise가 종료되었습니다</strong>
      </div>
    );
  }

  return (
    <div className="countdown-panel hover-tint" aria-live="polite">
      <span className="countdown-label">2026.05.15 자정까지</span>
      <div className="countdown-grid">
        <CountdownUnit label="DAY" value={remaining.days} />
        <CountdownUnit label="HOUR" value={remaining.hours} />
        <CountdownUnit label="MIN" value={remaining.minutes} />
        <CountdownUnit label="SEC" value={remaining.seconds} />
      </div>
    </div>
  );
}

function CountdownUnit({ label, value }) {
  return (
    <div className="countdown-unit">
      <strong>{String(value).padStart(2, "0")}</strong>
      <span>{label}</span>
    </div>
  );
}

function getRemaining(deadline) {
  const total = Math.max(0, deadline.getTime() - Date.now());
  const secondsTotal = Math.floor(total / 1000);
  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  return { total, days, hours, minutes, seconds };
}

window.Countdown = Countdown;
