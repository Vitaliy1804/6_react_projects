import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [currencyOne, setCurrencyOne] = React.useState('UAH')
  const [currencyTwo, setCurrencyTwo] = React.useState('USD')
  const [fromPrice, setFromPrice] = React.useState(0)
  const [toPrice, setToPrice] = React.useState(0)

  const [rates, setRates] = React.useState({})

  React.useEffect(()=> {
fetch('https://cdn.cur.su/api/latest.json')
.then(res => res.json())
.then((json) => {
  setRates(json.rates);
  console.log(json.rates);
}).catch(err => {
  console.log(err)
  alert('Fail to get data')
})
  }, [])

  const onChangeFromPrice = (value) => {
    const price = value / rates[currencyOne];
    const result = price * rates[currencyTwo];
    setToPrice(result)
    setFromPrice(value)
  }

  const onChangeToPrice = (value) => {
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
