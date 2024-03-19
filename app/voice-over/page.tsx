export default function VoiceOverPage(): JSX.Element {
  return (
    <main>
      <header>Voive Over Testing Page</header>
      <nav>
        <div>wow div 1</div>
        <div>wow div 2</div>
        <button>wow button </button>
      </nav>
      <section>
        <section>
          <h1>this is a section 1</h1>
          <div>div in section</div>
          <p>paragraph in section</p>
        </section>
        <section>
          <h1>this is a section 2</h1>
          <div>div in section</div>
          <p>paragraph in section</p>
        </section>
        <article>
          <h1>this is an article 1</h1>
          <label>
            label in article: <input type="text" />
          </label>
          <label>
            label 2 in article: <input type="text" />
          </label>
        </article>
        <article>
          <h1>this is an article 2</h1>
          <p>
            paragraph in article: <input type="text" />
          </p>
          <button>Hey</button>
        </article>
      </section>
      <footer>Footer</footer>
    </main>
  );
}
