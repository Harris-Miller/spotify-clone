import { useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import viteLogo from '/vite.svg';
// eslint-disable-next-line import/no-unresolved
import electronLogo from '/electron.svg';

import reactLogo from './assets/react.svg';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src={viteLogo} />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
        <a href="https://electronjs.org" rel="noreferrer" target="_blank">
          <img alt="Electron logo" className="logo electron" src={electronLogo} />
        </a>
      </div>
      <h1>Vite + React + Electron</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount(c => c + 1);
          }}
          type="button"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
