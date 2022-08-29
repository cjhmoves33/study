// jsx트랜스파일링을 위해 사용될 함수
export const createElement = (tagName, props, ...children) => {
  return { tagName, props, children: children.flat() };
}

export const makeDOM = (VirtualDOM) => {
  if (typeof VirtualDOM === 'string') {
    return document.createTextNode(VirtualDOM);
  }

  const Element = document.createElement(VirtualDOM.tagName);

  VirtualDOM.children
    .map(makeDOM)
    .forEach(node => Element.appendChild(node));
  
  return Element;
}

/**
 * 
 * @param {HTMLElement} parent 실제 돔 
 * @param {*} prevNode 가상 돔
 * @param {*} nextNode 가상 돔
 * @param {number} parentIdx 
 * @returns 
 */
export const diffingUpdate = (parent, prevNode, nextNode, parentIdx = 0) => {
  const isStringPrevNode = typeof prevNode === 'string';
  const isStringNextNode = typeof prevNode === 'string';
  
  if (isStringPrevNode && isStringNextNode) {
    if (prevNode === nextNode) return;
    
    return parent.replaceChild(
      makeDOM(nextNode),
      parent.childNodes[parentIdx]
    )
  }

  for (const [idx] of nextNode.children.entries()) {
    diffingUpdate(
      parent.childNodes[parentIdx],
      prevNode.children[idx],
      nextNode.children[idx],
      idx
    )
  }
}