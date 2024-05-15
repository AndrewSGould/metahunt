import { useState } from 'react';
import Header from './core/Header';
import Nav from './core/Nav';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <main className='bg-tertiary h-screen'>
      <Header setIsNavOpen={setIsNavOpen} />
      <div className='flex'>
        <Nav isNavOpen={isNavOpen} />
        <section className='m-6'>content stuff</section>
      </div>
    </main>
  );
}

export default App;
