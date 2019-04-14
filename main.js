const app = new Vue ({
    el: '#app',
    data: {
        spacing: 10,
        styleCaja:{
            margin: '0 auto',
            padding: '50px',
            background: 'blue'
        }
    },
    computed:{
        //cambiaStyleCaja: () => this.styleCaja.padding = spacing + 'px';
    }
})