const axios = require('axios').default;
var moment = require('moment');


async function handler({ startDate, endDate, amount }) {
    const isStartDateValid = await validateDate({ date: startDate });
    const isEndDateValid = await validateDate({ date: endDate });

    if (isStartDateValid === false || isEndDateValid === false) {
        return "Please, type a valid date!"
    }

    const monthsRange = await getMonthsRange({ startDate, endDate });
    const entireURL = await formatURL({ monthsRange });
    const APIResponse = await fetchDataFromAPI({ url: entireURL });
    const resultOfInflation = await calculateInflation({ dataFromAPI: APIResponse[0].resultados[0].series[0].serie, amount });
    const resulttBasedOnAmount = amount - (amount * (resultOfInflation / 100));
    const resultOfInvestiment = resulttBasedOnAmount.toString();

    return `Investiment: R$${amount} <br></br> Inflation: ${parseFloat(resultOfInflation).toFixed(2)}% <br></br> Investiment based on inflation: R$${parseFloat(resultOfInvestiment).toFixed(2)}`;

}

async function validateDate({ date }) {
    return moment(date, 'YYYY-MM').isValid();
}

async function getMonthsRange({ startDate, endDate }) {
    var totalMonths = moment(endDate, 'YYYY-MM').diff(moment(startDate, 'YYYY-MM'), 'months');
    var arrayOfMonths = [
        moment(startDate, 'YYYY-MM').format('YYYYMM')
    ];

    for (var i = 1; i <= Number(totalMonths); i++) {
        arrayOfMonths.push(moment(startDate, 'YYYY-MM').add(i, 'month').format('YYYYMM'));
    }

    return arrayOfMonths;
}

async function fetchDataFromAPI({ url }) {
    const response = await axios.get(url);
    return await response.data;
}


async function formatURL({ monthsRange }) {
    var joined = monthsRange.join("%7C");
    return `https://servicodados.ibge.gov.br/api/v3/agregados/118/periodos/${joined}/variaveis/306?localidades=N1[all]`;
}



/* 
Calculation based on this website:
https://estudaradm.com.br/macroeconomia/calcular-inflacao-acumulada-em-12-meses-exemplos-e-exercicios/ 
*/
async function calculateInflation({ dataFromAPI }) {
    const months = Object.values(dataFromAPI).map(value => (Number(value) / 100) + 1);
    const result = months.reduce((accumulator, current) => accumulator * current, months[0]);
    const finalResult = (result - 1) * 100;
    return finalResult;
}



module.exports = {
    handler
}