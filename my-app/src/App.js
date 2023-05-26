import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    await fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(response => {
          setRecords(response);
            console.log(response);
  })
        .catch(err => console.error(err));
}


  return (
    <div className="App">

      {records ? (
        <table className = "table table-striped" striped bordered hover size="sm" style={{width: '100%'}}>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Title
            </th>
            <th>
              Completed
            </th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(records).map((key) =>
                  <tr>
                    {/* <th scope="row">{Number(key) + 1}</th> */}
                    <td>{records[key].id}</td>
                    <td>{records[key].title}</td>
                    <td>{String(records[key].completed)}</td>
                  </tr>
                )}
        </tbody>
      </table>
      ) : (<p> Loading...</p>)
    }
      
      
    </div>
  );
}

export default App;
