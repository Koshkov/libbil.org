const footer = document.createElement('template');
const year = new Date().getFullYear().toString();

footer.innerHTML = `
<style>
	footer{
		font-family: inherit;
		padding: 1em;
		text-align: center;
	}
</style>
<footer>
	Copyleft ${year}.
</footer>
`
class siteFooter extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(footer.content.cloneNode(true));
    }
}
customElements.define('site-footer',siteFooter)
