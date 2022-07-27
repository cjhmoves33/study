export default class LazyImageBuilder {
    __range__ = 0;
    __width__ = "0px";
    __height__ = "0px";
    __src__ = "";
    constructor(wrapper){
        this.__wrapper__ = wrapper;
    }
    range(length) {
        this.__range__ = length;
        return this;
    }
    width(width) {
        this.__width__ = width;
        return this;
    }
    height(height) {
        this.__height__ = height;
        return this;
    }
    src(src) {
        this.__src__ = src;
        return this;
    }
    build() {
        this.createImages(this.__range__).map(this.setOptions).forEach(this.setImages);
    }
    createImages(length) {
        return Array.from({
            length
        }, ()=>document.createElement("img"));
    }
    setOptions = (image)=>{
        image.style.width = this.__width__;
        image.style.height = this.__height__;
        image.src = this.__src__;
        return image;
    };
    setImages = (img)=>{
        this.__wrapper__.appendChild(img);
    };
};
