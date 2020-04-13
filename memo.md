노마드코더 리액트 강의

준비
node, npm 설치
npx 설치
npm install npx -g
git 설치

초기설치
npx create-react-app .
readme 적당히 지우고 자기만의 것으로 추가
package.json의 test랑 eject는 필요없으니 삭제
yarn.lock 삭제(안쓰면). 내거엔 없었음.
npm start로 실행해보기

깃에 올리기
git init
해보면 reinitialize하라고 나옴
깃헙 사이트 가서 repository 생성
이름은 가급적 프로젝트명(package json의 title)으로 하는게 헷갈리지 않고,
description 추가, public,에 그 아래 initialize뭐시기나 add gitingore뭐시긴 놔두고 걍 생성
내 경우 .git ignore에 .idea폴더 넣어두기...
git remote add origin https://github.com/A2athoth/react-practice-nomadcoders
git add .
git commit -m "creating your first react app"
git push origin master
끝

수업 시작
기본설명을 위해 대부분 삭제
항목당 지울 내용
---------------------------------------
[index.js]
import './index.css';

import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
-----------------------------------------
[App.js]
import logo from './logo.svg';
import './App.css';
-----------------------------------------
logo.svg
serviceWorker.js
index.css
App.test.js
App.css
난 왠지 setupTest.js가 있어서 그것도 지움

App.js 중간의
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
이것도 삭제해서 이렇게만 남김

import React from 'react';

function App() {
  return (
    <div className="App" />
  );
}

export default App;
---------------------------------------------
[Potato.js]
import React from "react";

function Potato(){
    return (
        <h3>I love potato</h3>
    );
}

export default Potato;

!!!!새 컴포넌트 만들때 함수명은 대문자여야함!
----------------------------------------------
[index.js]
import Potato from './Potato';

<App /><Potato />는 안된다. 최상위 컴포넌트는 한개여야함.
-------------------------------------------
[App.js]
import Potato from './Potato';

          <Potato />
		  
-------------------------------------------
props로 전달 가능한 방법들
          <Food
              fav="kimchi"
              something={true}
              papapa={["hellow",1,2,3,4,5]}
          />
		  
-------------------------------------------
위에거랑 아래 합치면 props라는 애가 저 변수들 객체로 잇음
function Food(props) {
    console.log(props);
    return (<h1>I like Potato</h1>);
}

-------------------------------------------
function Food(props) {
    console.log(props.fav);
    return (<h1>I like {props.fav}</h1>);
}
이거랑
function Food({ fav }) {
    console.log(fav);
    return (<h1>I like {fav}</h1>);
}
이건 동일
---------------------------------------
function Food({ fav, something }) {
    console.log(something);
    return (<h1>I like {fav}</h1>);
}
응용도 가능하나 결국 argument로 넣어야함.
----------------------------------
key관련 오류가 나는걸 해결하려면
객체데이터에 pk용 아무거나 하나 추가(난 id추가)하고,
이를 <Food key={item.id} name={item.title} desc={item.type} />
이거처럼 key에 할당해준다. 이 key는 props로 전달되지 !!!!않기 때문에
굳이 컴포넌트에 arg에 넣을 필요가 없다. 리액트 내부사용(internal use)

----------------------------------

부모 컴포넌트에게 받은 props가 우리가 원한 props인지 확인이 필요하다.
prop-types라는 것을 설치

npm i prop-types

사용법은 
import PropTypes from "prop-types";

// Bucket이 컴포넌트 명이고 그 아래에다 아래를 적기
Bucket.propTypes = {    // 이건 꼭 !!!! propTypes로 해야 react가 체크함
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
    // 앞의 키값을 바꾸거나, 뒤쪽 값 타입을 바꾸면 오류가 난다.
    // isRequire로 필수값 여부도 체크
    // 이외에도 옵션은 많음
}

-----------------------------------------------------------
클래스 컴포넌트 

import React from 'react';
import PropTypes from "prop-types";

// 클래스 컴포넌트. function이 아니기에 return이 없고, import한 React에서 받아온 render method가 있음
class App extends React.Component{
    state = {

    }
    render(){
        return <h1>I'm a class component.</h1>
    }
}

export default App;


!!!!리액트는 자동적으로 클래스 component의 render method를 실행한다.
-----------------------------------------------------------
!!!!state는 object고 component의 data를 넣을 공간이고 이 데이터는 변한다.

<button onClick={this.add()}> + </button>
이건 즉시실행 ()는 즉시실행이라함... 근데 우린 '버튼 클릭 시 만' 작동하게 하려는거임. ()를 지워야 한다함
<button onClick={this.add}> + </button>

state에선 이렇게 state에 직접 접근하면 안됨.
    add = () => {
        console.log("add");
        this.state.count += 1;
    };
    minus = () => {
        console.log("minus");
        this.state.count -= 1;
    };
	
-------------------------------------
setState를 해야 react가 다시 render한다. 그렇게 view가 refresh된다.

    add = () => {
        this.setState({count:1});
    };
    minus = () => {
        this.setState({count:-1});
    };
이 형태가 작동한다.
이걸 가감으로 하려면

    add = () => {
        this.setState({count: this.state.count+1});
    };
    minus = () => {
        this.setState({count: this.state.count-1});
    };
이렇게 할수 있다. 다만 이것도 좋은 코드는 아니다.
state에 의존하면 몇가지 성능이슈가 있을 수 있고, 다른방법이 있긴 하다.

    add = () => {
        this.setState(current => ({count: current.count+1}));
    };
    minus = () => {
        this.setState(current => ({count: current.count-1}));
    };
이것이 우리가 state를 set할때 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법이다.
current state를 함수 형태로 받아오는 방법.

!!!! 매순간 내가 setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다!
!!!! 내가 setState를 호출할 때마다 react는 re-render한다. 하지만 이건 내가 setState를 했을때만 일어난다. 내가 state로 직접 접근할 때는 일어나지 않는다.
-------------------------------------------------------------

react에서 사용하는 function은 render method말고도 life cycle method처럼 여러 구성원이 있다.
그러나 니콜라스가 설명 안하는건 보통 잘 안쓰는거라함.(쓸수도 있긴 함)

먼저 component가 mount되어 screen에 표시될 때, component가 너의 website에 갈 때, [constructor]를 호출함
그리고 나서 component가 render되면 [componentDidMount]가 호출

오류 계속 나던거 소스맵? 그건
https://stackoverflow.com/questions/36051891/esri-failed-to-parse-source-map
이거 통해 해결

!!!!뭔가 두번 렌더링(constructor도 두번...) 되더라... 뭔가 이유를 못찾겠지만 일단 속행...



setState에 원래 state에 선언 안한 걸 넣어도 괜찮다. 다만 미리 넣어두는게 좋은 습관.
즉 극단적으론 state 자체를 안써도 setState로 넣을 수 있다.
