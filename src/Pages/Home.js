import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';

function Home() {
  const [input, setInput] = useState('');

  const onInput = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    fetch(`https://api.tvamze.com/search/shows?q=${input}`)
      .then(r => r.json)
      .then(result => {
        console.log(result);
      });
  };

  const onKeyDown = (ev) =>{
if(ev.keyCode === 13){
  onSearch()
}
  };

  return (
    <MainPageLayout>
      <input type="text" onChange={onInput} onKeyDown={onKeyDown} value={input} />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
}

export default Home;
