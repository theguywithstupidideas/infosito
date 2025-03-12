class PageDetails extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const page_name = this.getAttribute('page-name');
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="css/bs/bootstrap.css">
            <h1 style="margin-top: 20px;">${page_name}</h1>
            <div style="display: flex; flex-direction: row; gap: 20px; margin-top: 20px;">
                <div class="card bg-dark text-white" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Pro</h5>
                        <p class="card-text">Scopri i Pro dello Smart Working</p>
                        <a href="pages/pro.html" class="btn btn-primary">Vai</a>
                    </div>
                </div>
                
                <div class="card bg-dark text-white" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Contro</h5>
                        <p class="card-text">Scopri i Contro dello Smart Working</p>
                        <a href="pages/contro.html" class="btn btn-primary">Vai</a>
                    </div>
                </div>
            </div>
        `;
    }
}

class HomeCustom extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <h1>Benvenuto!</h1>
            <p>
                 Lo smart working, che permette di svolgere le proprie attività da remoto, ha guadagnato sempre più popolarità negli ultimi anni, soprattutto a seguito degli eventi che hanno cambiato il mondo.<br>
                 Ma questa modalità ha dei benefici per la produttività dei lavoratori? Clicca 'dettagli' per scoprire di più
            </p>
        `;
    }
}

class DataContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const pageTitle = this.getAttribute('page-title') || "Default Title";
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../css/bs/bootstrap.css">
            <h1>${pageTitle}</h1>
            <slot></slot>
        `;
    }
}

class HomeFAB extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../css/bs/bootstrap.css">
            <a href="/main.html">Home</a>
            <slot></slot>
        `;
    }
}


customElements.define('my-details', PageDetails);
customElements.define('my-home', HomeCustom);
customElements.define('data-container', DataContainer);