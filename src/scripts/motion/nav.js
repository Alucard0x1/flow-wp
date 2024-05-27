class Nav {
    constructor() {
        this.toggle = document.querySelector('.nav-toggle a')
        this.popup = document.querySelector('.nav-popup')

        this.toggle.addEventListener('click', () => {
            if (this.popup.classList.contains('show')) {
                this.popup.classList.remove('show')
            } else {
                this.popup.classList.add('show')
            }
        })
    }
}

export default Nav
