import React from 'react';

function Food({ fav }) {
    return (<h1>I like {fav}</h1>);
}

function App() {
  return (
      <div>
          <h1>Hello</h1>
          <Food fav="kimchi" />
          <Food fav="A" />
          <Food fav="B" />
          <Food fav="C" />
          <Food fav="D" />
          <Food fav="E" />
      </div>
  );
}

export default App;
