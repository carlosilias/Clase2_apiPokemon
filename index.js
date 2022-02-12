// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

const opt = {
  method: "GET",
};

fetch("https://pokeapi.co/api/v2/pokemon/ditto", opt)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    appDiv.innerHTML = `<center><h1>Pokemon</center>
    <table border=2>
      
      <tr>
        <th>Nombre</th>
        <th>Fuerza</th>
        <th>Poder</th>
        <th>XP</th>
      </tr>
      <tr>
       <td>${data.id}</td>
       <td>${data.name}</td>
       <td>${data.name}</td>
       <td>${data.name}</td>
      </tr>
    </table>
    `;
    
  });