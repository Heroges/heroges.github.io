/*class UICampo {
	constructor(element) {
		this.el = element;
		this.tags = {
			"UICheckbox": document.getElementsByTagName("UICheckbox")
		}
	}
	
	init() {
	  for(let i in this.tags) {
	    let len = this.tags[i].length;
	    for(let j = 0; j < len; j++) {
	      let label = this.tags[i][j].attributes.label.textContent;
	      this.checkbox(this.tags[i][j], { text: label });
	    }
	  }
	}
	
	checkbox(el, obj) {
	  if(!el) el = this.el;
		el.insertAdjacentHTML("beforeend", "<label class='checkbox'><input type='checkbox'><span class='checkbox-span'><svg xmlns='http:\/\/www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap=' stroke-linejoin=' stroke-width='2' d='M5 13l4 4L19 7' /></svg></span><span class='checkbox-text'>" + obj.text + "</span></label>");
	}
}
new UICampo(document.body).init();*/

class UiCheckbox extends HTMLElement {

  connectedCallback() {
    setTimeout(() => {
      this.innerHTML = ""
      let label = document.createElement("label")
      label.classList.add("checkbox")
      this.append(label)
      let labelName = this.children[0]
      labelName.insertAdjacentHTML("afterbegin", "<input type='checkbox'><span class='checkbox-span'><svg xmlns='http:\/\/www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap=' stroke-linejoin=' stroke-width='2' d='M5 13l4 4L19 7' /></svg></span><span class='checkbox-text'>" + this.attributes.label.value + "</span>")
    })
  }

}

customElements.define('ui-checkbox', UiCheckbox);