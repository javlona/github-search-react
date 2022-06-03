import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);


  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });  
  }, [])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUsers(results);
        setLoading(false);
      } );

  }, [value])

  const url = `https://api.github.com/search/users?q=${value}`;
  
  console.log(users)

  return (
    <div className="App">
      <h1 className="App-title">Github users</h1>
      <input type='search' placeholder='Search...' onChange={(e) => setValue(e.target.value)} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='users'>
          {users?.map(user => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <a href={user.html_url}>{user.login}</a>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;
