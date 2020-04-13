import React from 'react';

function Food({ name, desc }) {
    return <div>
        <h1>I like { name }</h1>
        <div>I'm the { desc }</div>
    </div>
}

const testDatas = [
        {
            title: "A",
            type: "Arch"
        },
        {
            title: "B",
            type: "Bear"
        },
        {
            title: "C",
            type: "Cute"
        }
    ];

function App() {
  return (
      <div>
          <h1>Hello</h1>
          {testDatas.map(item => (
              <Food  name={item.title} desc={item.type} />
          ))}
      </div>
  );
}

export default App;
