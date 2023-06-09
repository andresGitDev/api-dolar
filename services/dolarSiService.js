const convert = require('xml-js')
const axios = require('axios')
class dolarSiService {

    getInfoDolar = async (req, res) => {
        try {
            const dataDolar = await axios.get("https://www.dolarsi.com/api/dolarSiInfo.xml")
            const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
            const jsonParsed = JSON.parse(json);

            return jsonParsed
        } catch(e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = dolarSiService