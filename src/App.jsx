import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'; // Correct import

function App() {
  return (
    <div className="container mt-5">
      <h1>Hello World</h1>
      <Button variant="warning">Click Me!</Button>
      <Alert variant="success" className="mt-3">
        This is a success alert — check it out!
      </Alert>
    </div>
  );
}

export default App;
