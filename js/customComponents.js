class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const test = this.getAttribute('data-test');
        this.shadowRoot.innerHTML = `
            <h1>Hello, world! ${test}</h1>
            <slot></slot>
        `;
    }
}

customElements.define('my-component', MyComponent);