import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'



const App = () => {
  
  
  
  return (
    <>
    <header>
      <h1>Cuisine Escalée</h1>
    </header>
    <section id='recipe-search'>
    <input type='text' placeholder='Zoek gerechten op naam'/>
    <label class="tag">Tag #1
      <input type="checkbox"/>
      <span class="slider"></span>
.   </label>
    </section>
    <section id='recipe-display'></section>
    <section id = 'recipe-input'></section>
    <footer></footer>
    </>
    );
  };

ReactDOM.render(<App />, document.getElementById("root"))