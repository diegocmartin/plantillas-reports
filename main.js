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
        cambiaStyleCaja: function() {return this.styleCaja.padding = this.spacing + 'px'}
        //Me falta ver dónde uso la computed para que haga efecto
    }
})