import useFetch from "./useFetch";

function App() {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <div>
      <h1>With custom hooks | Dinesh Decodes</h1>
      {data && <p>{data.title}</p>}
    </div>
  );
}

export default App;
