import { html, render } from '/web_modules/lit-html.js';

function initElement(elementName, template,  attrs, props) {
  const ElementConstructor = class extends HTMLElement {
    constructor() {
      super();
    }
    get props() {
      const newProps = {};
      attrs && attrs.forEach((propName) => {
        newProps[propName] = this.getAttribute(propName);
      });
      props && props.forEach((propName) => {
        newProps[propName] = this[propName];
      });
      return newProps;
    }
    render(props) {
      render(template(props), this);
    }
    reRender() {
      render(template(this.props), this);
    }
    connectedCallback() {
      this.render(this.props);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this.render({...this.props, [name]: newValue});
    }
    static get observedAttributes() {
      return attrs;
    }
  }

  customElements.define(elementName, ElementConstructor);

  return ElementConstructor;
}

export {
  initElement
};
