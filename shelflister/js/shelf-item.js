//const shelf_item = document.createElement('template');
//shelf_item.innerHTML = 

class shelfItem extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = 
        `<div>
            <div class='spine'>
                <div class='label'>
                    ${this.formatLCC(this.innerText)}
                </div>
            </div>
            <div class='controller'>
                <button onclick=down(1)>&lt;</button>
                <button onclick=up(1)>&gt;</button>
            </div>
        </div>
        `
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this.content.cloneNode(true));
    }

    formatLCC(lcc){
        let text= "";
        let code = lcc.split(" ");
        for(let j = 0; j < code.length; j++){
            text += code[j] + "<br/>";
        }
        return text;
    }

}

customElements.define('shelf-item',shelfItem);
