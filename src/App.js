import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="widget">
      <Card image="https://cdn.spacetelescope.org/archives/images/screen/heic0602a.jpg">
        <h2 className="card-body-title">Card title</h2>
        <div className="card-body-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </div>
        <button className="card-body-button">Go somewhere</button>
      </Card>
      <Card>
        <h2 className="card-body-title">Card title</h2>
        <div className="card-body-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </div>
        <button className="card-body-button">Go somewhere</button>
      </Card>
    </div>
  );
}

export default App;

