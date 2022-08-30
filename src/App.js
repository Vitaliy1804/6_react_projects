import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [currencyOne, setCurrencyOne] = React.useState('UAH')
  const [currencyTwo, setCurrencyTwo] = React.useState('USD')
  const [fromPrice, setFromPrice] = React.useState(0)
  const [toPrice, setToPrice] = React.useState(1)

  // const [rates, setRates] = React.useState({})
  const ratesRef = React.useRef({});

  React.useEffect(()=> {
fetch('https://cdn.cur.su/api/latest.json')
.then(res => res.json())
.then((json) => {
  // setRates(json.rates);
  ratesRef.current = json.rates;
  console.log(ratesRef)
  onChangeToPrice(1);
}).catch(err => {
  console.log(err)
  alert('Fail to get data')
})
  }, [])

  const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[currencyOne];
    const result = price * ratesRef.current[currencyTwo];
    setToPrice(result.toFixed(2))
    setFromPrice(value)
  }

  const onChangeToPrice = (value) => {
    const result = (ratesRef.current[currencyOne] / ratesRef.current[currencyTwo]) * value;
    setFromPrice(result.toFixed(2))
    setToPrice(value)
  }

  return (
    <div className="App">
      <Block 
      value={fromPrice} 
      currency={currencyOne} 
      onChangeCurrency={setCurrencyOne} 
      onChangeValue={onChangeFromPrice}
      />
      <Block 
      value={toPrice} 
      currency={currencyTwo} 
      onChangeCurrency={setCurrencyTwo}
      onChangeValue={onChangeToPrice}
      />
      
    </div>
  );
}

export default App;
