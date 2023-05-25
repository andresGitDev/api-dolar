class casasController {
    constructor(dolarSiService, util) {
        this.dolarSiService = dolarSiService
        this.util = util
    }

    getDolarMetro = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa340.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa340.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarAlpe = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa338.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa338.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarVaccaro = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa339.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa339.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarTransatlantica = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Capital_Federal.casa343.compra._text),
                venta: this.util.formatNumber(data.cotiza.Capital_Federal.casa343.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarJonestur = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Mar_del_Plata.casa23.compra._text),
                venta: this.util.formatNumber(data.cotiza.Mar_del_Plata.casa23.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarMoneta = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Mar_del_Plata.casa24.compra._text),
                venta: this.util.formatNumber(data.cotiza.Mar_del_Plata.casa24.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarExchange = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Mar_del_Plata.casa400.compra._text),
                venta: this.util.formatNumber(data.cotiza.Mar_del_Plata.casa400.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarDaminato = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Rosario.casa28.compra._text),
                venta: this.util.formatNumber(data.cotiza.Rosario.casa28.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarMontemar = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Mendoza.casa58.compra._text),
                venta: this.util.formatNumber(data.cotiza.Mendoza.casa58.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarLosTilos = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.La_Plata.casa350.compra._text),
                venta: this.util.formatNumber(data.cotiza.La_Plata.casa350.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    getDolarMaguitur = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatNumber(data.cotiza.Tucuman.casa115.compra._text),
                venta: this.util.formatNumber(data.cotiza.Tucuman.casa115.venta._text)
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
    
}

module.exports = casasController