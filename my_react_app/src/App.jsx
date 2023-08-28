import { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") //api 불러오기
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //watching nothing

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); //default 설정을 해줘야 length를 불러올 수 있다.
  const [money, setMoney] = useState(0);
  const [coin, setCoin] = useState(0);
  const [value, setValue] = useState(0);

  const onChange = (e) => setMoney(e.target.value);
  const handleSelect = (e) => setCoin(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setValue((value) => money / coin);
  };

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          onChange={onChange}
          value={money}
          placeholder="Text the USD"
        />

        <select onChange={handleSelect}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
        <button>go!</button>
      </form>

      {loading ? <strong>loading...</strong> : null}
      <hr />
      <h2>{value} $</h2>
    </div>
  );
}

export default App;
