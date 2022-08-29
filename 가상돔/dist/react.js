export const createElement = (tagName, props, ...children)=>{
    return {
        tagName,
        props,
        children: children.flat()
    };
};
export const makeDOM = (VirtualDOM)=>{
    if (typeof VirtualDOM === 'string') {
        return document.createTextNode(VirtualDOM);
    }
    const Element = document.createElement(VirtualDOM.tagName);
    VirtualDOM.children.map(makeDOM).forEach((node)=>Element.appendChild(node));
    return Element;
};
export const diffingUpdate = (parent, prevNode, nextNode, parentIdx = 0)=>{
    console.log(parent);
    const isStringPrevNode = typeof prevNode === 'string';
    const isStringNextNode = typeof prevNode === 'string';
    if (isStringPrevNode && isStringNextNode) {
        if (prevNode === nextNode) return;
        return parent.replaceChild(makeDOM(nextNode), parent.childNodes[parentIdx]);
    }
    for (const [idx, node] of nextNode.children.entries()){
        console.log(node);
        console.log(prevNode);
        console.log(nextNode);
        debugger;
        diffingUpdate(parent.childNodes[parentIdx], prevNode.children[idx], nextNode.children[idx], idx);
    }
};
