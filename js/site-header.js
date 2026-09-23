const header = document.createElement('template');

header.innerHTML = `
        <title>libbil</title>
`
class siteHeader extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(header.content.cloneNode(true));
    }
}
customElements.define('site-header',siteHeader)


