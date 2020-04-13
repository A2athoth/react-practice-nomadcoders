import React from 'react';
import PropTypes from "prop-types";

function Bucket({ name, desc, score }) {
    return <div>
        <h1>I like { name }</h1>
        <div>I'm the { desc }</div>
        <h3>rating : { score }</h3>
    </div>
}

Bucket.propTypes = {    // 이건 꼭 !!!! propTypes로 해야 react가 체크함
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
    // 앞의 키값을 바꾸거나, 뒤쪽 값 타입을 바꾸면 오류가 난다.
    // isRequire로 필수값 여부도 체크
    // 이외에도 옵션은 많음
}

const testDatas = [
        {
            id: 0,
            title: "A",
            type: "Arch",
            rating: 5
        },
        {
            id: 1,
            title: "B",
            type: "Bear",
            rating: 3
        },
        {
            id: 2,
            title: "C",
            type: "Cute",
            rating: 5
        }
    ];

function App() {
  return (
      <div>
          <h1>Hello</h1>
          {testDatas.map(item => (
              <Bucket key={item.id} name={item.title} desc={item.type} score={item.rating} />
          ))}
      </div>
  );
}

export default App;
