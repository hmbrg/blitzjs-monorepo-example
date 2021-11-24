import { sayHello } from '@agracheck/core-lib';
import { Message } from '@agracheck/ui-lib';
import { useState } from 'react';
import { Link, Route } from 'wouter';

import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Route path="/">
        <main className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{`${sayHello('Hello Vite')} from @agracheck/core-lib`}</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            <Message message={'React component from @agracheck/ui-lib'} />
          </p>
          <p>
            <Link href="/about">
              <a className="App-link">About</a>
            </Link>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer">
              Vite Docs
            </a>
          </p>
        </main>
      </Route>
      <Route path="/about">
        <h1>About</h1>
        <p>Simple routing example.</p>
        <p>
          Minim ea nisi irure voluptate commodo nostrud duis et laboris ipsum
          aute aute incididunt occaecat. Excepteur qui velit adipisicing id est
          nulla nisi irure aliqua pariatur esse reprehenderit ea reprehenderit.
        </p>
        <Link className="App-link" href="/">
          <a>&larr; Home</a>
        </Link>
      </Route>
    </div>
  );
}

export default App;
