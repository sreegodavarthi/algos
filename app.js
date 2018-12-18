function MySelect(el) {
    this.elmList = document.querySelectorAll(el);
}

let myElm = new MySelect("div");

MySelect.prototype.addClass = function(cls) {
    for (let i = 0; i < this.elmList.length; i++) {
        this.elmList[i].className = cls;
    }
}

myElm.addClass("test");