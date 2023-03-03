import { useState } from 'react';
import './styles/App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="app__header container-fluid">
        <h1>Code Dojo</h1>
      </header>
      <main className="container">
        <details open>
          <summary role="button" className="primary">
            Cadastro de usuário
          </summary>
          <article className="app__form">
            <form>
              <label htmlFor="username">
                Nome de usuário:
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Digite nome do usuário"
                  required
                />
              </label>
              <label htmlFor="birthDate">
                Data de nascimento:
                <input type="date" name="birthDate" id="birthDate" />
              </label>
              <label htmlFor="password">
                Senha:
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Digite sua senha"
                  required
                />
              </label>
              <label htmlFor="confirmPassword">
                Confirma senha:
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirme sua senha"
                  required
                />
              </label>
              <button type="submit">Cadastra usuário</button>
            </form>
          </article>
        </details>
        <details>
          <summary role="button" className="secondary">
            Dados cadastrais
          </summary>
          <section className="container-fluid">
            <p>Nome:</p>
            <p>Data de Nascimento:</p>
          </section>
        </details>
      </main>
    </>
  );
}

export default App;
