import React, { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([
    {
      type: 'video',
      url:
        'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 5129,
    },
    {
      type: 'video',
      url:
        'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 1432,
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 1725,
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
    },
    {
      type: 'video',
      url:
        'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253,
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return (
    <List list={list} />
  );
}

export default App;
