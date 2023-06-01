import { useState, useEffect } from 'react';

function App() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetchRecords();
  },)

  async function fetchRecords() {
    await fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then(response => {
        console.log(response)
        setRecords(response)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      {records ? (
        <table className="table table-striped" style={{ width: '100%' }}>
          <thead>
            <tr>
              <td>
                ID
              </td>
              <td>
                Title
              </td>
              <td>
                Completed
              </td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(records).map((key) =>
              <tr>
                <td>
                  {records[key].id}
                </td>
                <td>
                  {records[key].title}
                </td>
                <td>
                  {(String)(records[key].completed)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ) : <p> No data</p>}
    </div>
  )
}

export default App;