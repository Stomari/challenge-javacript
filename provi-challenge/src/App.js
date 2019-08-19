import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      const userInfo = await axios.get('http://www.mocky.io/v2/5c923b0932000029056bce39');
      const { data } = userInfo;
      return data;
    }
    setUser(fetchData())
  }, [])

  return (
    <div className="App">
      Alo
    </div>
  );
}

export default App;
