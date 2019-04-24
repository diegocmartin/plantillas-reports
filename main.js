const app = new Vue ({
    el: '#app',
    data: {
        spacing: 10,
        bgcolor: '#ededed',
        ecolor: 'rgba(0,0,0,0.2)',
        accentColor: '#8fbc00',
    },
    computed:{
        styleCaja() {
            return {
                padding: this.spacing + 'px',
                background: this.bgcolor,
            };
        },
        styleH2() {
            return {
                //estilos para aspecto de H2
                border: '0px solid',
                width:'100%',
                display: 'block',
                fontSize: '1.5em',
                fontWeight: 'bold',
                //Estilos propios del elemento. Separar? se pueden poner múltiples
                background: this.ecolor,
                textAlign: 'center',
                padding:'20px',
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                color: this.accentColor,
            };
        },
    }
})