const app = new Vue ({
    el: '#app',
    data: {
        spacing: 10,
        styleCaja:{
            margin: '0 auto',
            padding: '50px',
            background: '#ededed'
        }
    },
    computed:{
        cambiaStyleCaja: function() {
            this.styleCaja.padding = this.spacing + 'px';
            return this.styleCaja.padding;
        }
        //Me falta ver dónde uso la computed para que haga efecto
    }
})