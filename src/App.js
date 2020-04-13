import React from 'react';

function Food({ name, desc }) {
    return <div>
        <h1>I like { name }</h1>
        <div>I'm the { desc }</div>
    </div>
}

const testDatas = [
        {
            id: 0,
            title: "A",
            type: "Arch"
        },
        {
            id: 1,
            title: "B",
            type: "Bear"
        },
        {
            id: 2,
            title: "C",
            type: "Cute"
        }
    ];

function App() {
  return (
      <div>
          <h1>Hello</h1>
          {testDatas.map(item => (
              <Food key={item.id} name={item.title} desc={item.type} />
          ))}
      </div>
  );
}

export default App;
