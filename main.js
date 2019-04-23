const app = new Vue ({
    el: '#app',
    data: {
        spacing: 10,
        bgcolor: '#ededed',
        ecolor: 'rgba(0,0,0,0.2)',
    },
    computed:{
        styleCaja() {
            return {
                padding: this.spacing + 'px',
                background: this.bgcolor,
            };
        },
        styleElemento() {
            return {
                background: this.ecolor,
            };
        },
    }
})