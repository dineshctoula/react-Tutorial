function Count({ count, data }) {

  function handleCount() {
    console.log("count clicked");
  }

  function handleData() {
    console.log("data clicked");
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Data: {data}</h1>

      <button onClick={handleCount}>Log Count</button>
      <button onClick={handleData}>Log Data</button>
    </div>
  );
}

export default Count;
