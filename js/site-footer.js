const footer = document.createElement('template');
const year = new Date().getFullYear().toString();

footer.innerHTML = `
<footer class="libbil_footer">Copyleft ${year}.</footer>
`
class siteFooter extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(footer.content.cloneNode(true));
    }
}
customElements.define('site-footer',siteFooter)
