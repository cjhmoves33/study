export const createElement = (tagName, props, ...children) => {
  return { tagName, props, children: children.flat() };
}
  
export const renderDOM = (VirtualDOM) => {
  if (typeof VirtualDOM === 'string') {
    return document.createTextNode(VirtualDOM);
  }

  const Element = document.createElement(VirtualDOM.tagName);

  VirtualDOM.children
    .map(renderDOM)
    .forEach(node => Element.appendChild(node));
  
  return Element;
}

export const diffingUpdate = (parent, prevNode, nextNode, parentIdx = 0) => {
  if (typeof prevNode === 'string' && typeof nextNode === 'string') {
    if (prevNode === nextNode) return;

    return parent.replaceChild(
      renderDOM(nextNode),
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