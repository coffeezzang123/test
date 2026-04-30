function App() {
  return (
    <main className="page-shell">
      <Hero />
      <Summary />
      <EventOne />
      <HowToMakeCard />
      <EventTwo />
      <Notice />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
