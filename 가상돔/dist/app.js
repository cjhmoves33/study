import { createElement, diffingUpdate, renderDOM } from './react.js';
const prevState = [
    {
        title: '장난감 - 1'
    },
    {
        title: '장난감 - 2'
    }, 
];
const nextState = [
    {
        title: '장난감 - 1'
    },
    {
        title: '장난감 - 2.1'
    }, 
];
const ToyList = (state)=>{
    return createElement("ul", null, state.map(({ title  })=>{
        return createElement("li", null, title);
    }));
};
const prevNode = ToyList(prevState);
const nextNode = ToyList(nextState);
const __root__ = document.querySelector('#root');
__root__.appendChild(renderDOM(prevNode));
setTimeout(()=>{
    diffingUpdate(__root__, prevNode, nextNode);
}, 1000);
