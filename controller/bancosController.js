class bancosController {
    constructor(dolarSiService, util) {
        this.dolarSiService = dolarSiService
        this.util = util
    }

    getDolarBBVA = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa336.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa336.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarPiano = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa37.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa37.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarHipotecario = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa217.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa217.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    getDolarGalicia = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa342.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa342.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    getDolarSantander = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa401.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa401.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarCiudad = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa402.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa402.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarSupervielle = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa403.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa403.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarPatagonia = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa404.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa404.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarComafi = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa405.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa405.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarNacion = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa6.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa6.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarBIND = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa22.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa22.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarChaco = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa334.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa334.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarPampa = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa335.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa335.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarBancor = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa341.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa341.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

     getDolarMayorista = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Dolar.casa44.compra._text),
                venta: this.util.formatNumber(data.cotiza.Dolar.casa44.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = bancosController
