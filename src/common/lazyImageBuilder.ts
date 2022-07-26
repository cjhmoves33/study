export default class LazyImageBuilder {
  private __wrapper__: HTMLDivElement;

  private __range__ = 0;
  private __width__ = "0px";
  private __height__ = "0px";
  private __src__ = "";

  constructor(wrapper: HTMLDivElement) {
    this.__wrapper__ = wrapper;
  }

  public range(length: number) {
    this.__range__ = length;
    return this;
  }

  public width(width: string) {
    this.__width__ = width;
    return this;
  }

  public height(height: string) {
    this.__height__ = height;
    return this;
  }

  public src(src: string) {
    this.__src__ = src;
    return this;
  }

  public build() {
    this.createImages(this.__range__)
      .map(this.setOptions.bind(this))
      .forEach(img => this.__wrapper__.appendChild(img));
  }

  private createImages(length: number) {
    return Array.from({ length }, () => document.createElement("img"));
  }

  private setOptions(image: HTMLImageElement) {
    image.style.width = this.__width__;
    image.style.height = this.__height__;
    image.src = this.__src__;
    return image;
  }
}
