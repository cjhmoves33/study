/* @jsx createElement */
// 리액트의 createElement를 사용하지않고 jsx를 사용하기위해선 위와 같은 주석이 필요하다.
import { createElement, diffingUpdate, renderDOM } from './react.js'

const prevState = [
  { title: '장난감 - 1' },
  { title: '장난감 - 2' },
]

const nextState = [
  { title: '장난감 - 1' },
  { title: '장난감 - 2.1' },
]

const ToyList = (state) => {  
  return (
    <ul>
      { state.map(({ title }) => {
        return (
          <li>{ title }</li>
        )
      }) }
    </ul>
  )
}

const prevNode = ToyList(prevState);
const nextNode = ToyList(nextState);

const __root__ = document.querySelector('#root');
__root__.appendChild(renderDOM(prevNode));

setTimeout(() => {
  diffingUpdate(__root__, prevNode, nextNode);
}, 1000)