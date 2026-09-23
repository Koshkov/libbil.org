const header = document.createElement('template');

header.innerHTML = `
<style>
	h1 {
		font-family: inherit;
		text-align: center;
		font-weight: bold;
	}
</style>
<header>
	<h1>libbil</h1>
</header>
`
class siteHeader extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(header.content.cloneNode(true));
    }
}
customElements.define('site-header',siteHeader)


