export default class Cl_Discoteca {
    constructor() {
      this.acumGanancia = 0.0
      this.cotFem = 0
      this.cotFemMay21 = 0
      this.contMasc = 0
    }
  
    procesarRumbero(rumbero) {
      //acumulamos los pagos de cada rumbero (ganancias)
      this.acumGanancia += rumbero.calcPagoCadUno()
      if (rumbero.sexo === 'F') {
        this.cotFem++
        if (rumbero.edad >= 21) {
          this.cotFemMay21++
        }
      } else {
        this.contMasc++
      }
    }
    devolveracumGanancia() {
      return this.acumGanancia
    }
  
    porcRumbMay21() {
      return (this.cotFemMay21 / this.cotFem) * 100
    }
  
    sexoMasAsistio() {
      if (this.cotFem == this.contMasc) {
        return 'AMBOS POR IGUAL'
      } else if (this.cotFem > this.contMasc) {
        return 'FEMENINO'
      } else if (this.contMasc > this.cotFem) {
        return 'MASCULINO'
      }
    }
  }
  