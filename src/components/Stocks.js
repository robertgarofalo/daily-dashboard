import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Stocks.css'

const apiKey = 'bqr8dnvrh5rabvm5pdtg';

const fetchStocks = () => {
let one = `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${apiKey}`;
let two = `https://finnhub.io/api/v1/quote?symbol=TSLA&token=${apiKey}`;
let three = `https://finnhub.io/api/v1/quote?symbol=AMZN&token=${apiKey}`;
let four = `https://finnhub.io/api/v1/quote?symbol=AMZN&token=${apiKey}`;
let five = `https://finnhub.io/api/v1/quote?symbol=ABNB&token=${apiKey}`;
let six = `https://finnhub.io/api/v1/quote?symbol=FB&token=${apiKey}`;
let seven = `https://finnhub.io/api/v1/quote?symbol=MSFT&token=${apiKey}`;
let eight = `https://finnhub.io/api/v1/quote?symbol=GOOGL&token=${apiKey}`;


const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSix = axios.get(six);
const requestSeven = axios.get(seven);
const requestEight = axios.get(eight);
 
Promise.all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven, requestEight]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  const responseTwo = responses[1]
  const responseThree = responses[2]
  const responseFour = responses[3]
  const responseFive = responses[4]
  const responseSix = responses[5]
  const responseSeven = responses[6]
  const repsonseEight = responses[7]

  // use/access the results 

console.log('the responses', responses)
 return responses;


})).catch(errors => {
  // react on errors.
  console.log(errors);
})

}


const items = [
    <p className="item" data-value="1">1</p>,
    <p className="item" data-value="2">2</p>,
    <p className="item" data-value="3">3</p>,
    <p className="item" data-value="4">4</p>,
    <p className="item" data-value="5">5</p>,
];

// fetchStocks();
function Stocks() {

    const [ stockData, setStockData ] = useState([]);

    useEffect(async () => {
        // fetchStocks().then((randomData) => {
        //     console.log('here is just randomData', randomData);
        //     // console.log('here is randomData,data', randomData);
        //     // setUserInfo(randomData.results) 
                        
        // })
        const myArr = fetchStocks();
        setStockData(myArr);
    }, [stockData]);

    return (
        <div className="stocks-component">
            <h1>Stocks</h1>
            <AliceCarousel
        // autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        autowidth
        animationType="slide"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
        </div>
    )
}

export default Stocks
