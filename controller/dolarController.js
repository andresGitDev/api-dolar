class dolarController {
    constructor(dolarSiService, util) {
        this.dolarSiService = dolarSiService
        this.util = util
    }

     getAllValues = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()            
            const valores = { valores : data.cotiza }
            res.send(valores)

        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    getDolarOficial = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Dolar.casa344.compra._text),
                venta: this.util.formatNumber(data.cotiza.Dolar.casa344.venta._text)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    getDolarBlue = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Dolar.casa380.compra._text),
                venta: this.util.formatNumber(data.cotiza.Dolar.casa380.venta._text)
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getContadoConLiqui = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.valores_principales.casa312.compra._text),
                venta: this.util.formatNumber(data.cotiza.valores_principales.casa312.venta._text)
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarPromedio = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.cotizador.casa302.compra._text),
                venta: this.util.formatNumber(data.cotiza.cotizador.casa302.venta._text)
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarBolsa = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.valores_principales.casa313.compra._text),
                venta: this.util.formatNumber(data.cotiza.valores_principales.casa313.venta._text)
            }

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getEvolucionDolarOficial = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = this.util.getEvolucion(data.cotiza.evolucion_dolar.oficial.anio)

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getEvolucionDolarBlue = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = this.util.getEvolucion(data.cotiza.evolucion_dolar.blue.anio)

            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarTurista = async (req, res) => {
        try {
          const data = await this.dolarSiService.getInfoDolar();

          const valores = {
            fecha: this.util.getDateTime(),
            compra: this.util.formatNumber(
              data.cotiza.valores_principales.casa406.compra._text
            ),
            venta: this.util.formatNumber(
              data.cotiza.valores_principales.casa406.venta._text
            ),
          };
            
          res.send(valores);
        } catch (e) {
          res.sendStatus(500);
          console.log(e);
        }
    }
}

module.exports = dolarController