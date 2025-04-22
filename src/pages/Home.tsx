// file path: Module-13-DevMatch/src/pages/Home.tsx

const Home = () => {
  return (
    <section style={{ textAlign: 'left', padding: '2rem' }}>
      <h1>Welcome to DevMatch!</h1>

      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
        <p>
          This tool helps you discover talented developers on GitHub.
        </p>
        <p>
          You can view profiles, save your favorites, and build a shortlist of potential candidates.
        </p>
        <h2 style={{ marginTop: '2rem' }}>How to Use:</h2>
        <ul>
          <li>Click “Search” to view random GitHub developer profiles.</li>
          <li>Click the <strong>+</strong> button to save a candidate to your shortlist.</li>
          <li>Click the <strong>−</strong> button to skip a candidate.</li>
          <li>Visit “Saved” to view and manage your picks.</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;

  