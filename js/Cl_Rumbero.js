export default class Cl_Rumbero {
    constructor(c, n, e, s) {
        this.cedula = c;
        this.nombre = n;
        this.edad = e;
        this.sexo = s;
    }
    // metodos
    set cedula(c) {
        this._cedula = c;
    }
    set nombre(n) {
        this._nombre = n;
    }
    set edad(e) {
        this._edad = +e;
    }
    set sexo(s) {
        this._sexo = s;
    }

    get cedula() {
        return this._cedula;
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get sexo() {
        return this._sexo;
    }
// metodos de calculo

calcPagoCadUno() {
    let pago = 0;
    if (this.sexo == "M") {
        pago = 25;
    } else if (this.sexo == "F") {
        pago = (25 * 0.25);
    }
    return pago;}
}    