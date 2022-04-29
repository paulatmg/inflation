const axios = require('axios').default;



async function getNumber(number) {
    console.log("parametroGetNumber", number);
    const response = await axios.get(`https://catfact.ninja/fact?max_length=${number}`);
    return await response.data;
}

async function process(startDate, endDate, amount) {
    console.log(startDate);
    console.log(endDate);
    console.log(amount);
}

async function startDate(date) {
    var numbers = /^[0-9]+$/;
    if (date.match(numbers) && moment(req.query.startDate, 'YYYY-MM-DD').isValid()){
        return true
    }
    else{
        return "enter a valid date"
    }
}

async function endDate(date) {
    var numbers = /^[0-9]+$/;
    if (date.match(numbers) && moment(req.query.startDate, 'YYYY-MM-DD').isValid()){
        return true
    }
    else{
        return "enter a valid date"
    }
}


async function startPrice(price) {
    var numbers = /^[0-9]+$/;
    if (price.match(numbers) && price>0){
        return true
    }
    else{
        return "enter a valid price"
    }
}


async function endPrice(price) {
    var numbers = /^[0-9]+$/;
    if (price.match(numbers) && price>0){
        return true
    }
    else{
        return "enter a valid price"
    }
}


// async function test(){
//     const apiData = {
//         "199801": "0.59",
//         "199802": "0.44",
//         "199803": "0.28",
//         "199804": "0.17",
//         "199805": "0.48"
//     }
//     const months = Object.keys(apiData);
//     const totalmonths = months.length

//     for (var i=0; i < totalmonths; i++) {
//         var currentMonth = months[i];
//         var currentMonthValue = apiData[currentMonth];
//         apiData[currentMonth] = (apiData[currentMonth]/100) + 1;
//     }

//     console.log(apiData);



//     const apiData = {
//         "199801": "0.59",
//         "199802": "0.44",
//         "199803": "0.28",
//         "199804": "0.17",
//         "199805": "0.48"
//     }

//     const months = Object.values(apiData).map( value => (Number(value)/100) + 1 )
//     const result = months.reduce( (accumulator, current) => accumulator * current, months[0] )

//     console.log(result)

// }


module.exports = {
    getNumber,
    //firstWord, 
    process,
    startDate,
    endDate,
    startPrice,
    endPrice
}