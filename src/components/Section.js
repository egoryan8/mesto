export default class Section {
  constructor({ items, renderer }, container) {
    this._container = container;
    this._renderedItems = items;
    this._renderer = renderer;
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
