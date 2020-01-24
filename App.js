import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './app.css';
import './siderbar.css';
import './main.css';
// Componente: Bloco isolado de html, css e js que não interfere no restante da aplicação
// Estado: Informações mantida pelo componente
// Propriedade: Informações que o componente PAI passa para o componente FILHO

function App() {
  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState ('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  },[]);

  useEffect(() =>{
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  },[]);

  async function handleAddDev(e){
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    setGithubUsername('');
    setTechs('');

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
              />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                />
            </div>
          </div>
          <button type="submit">Salvar</button>
          </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/1471571?s=460&v=4" alt="Bruno Rocha"/>
              <div className="user-info">
                <strong>Bruno Rocha</strong>
                <span>HTML, CSS, JavaScript</span>
              </div>
              </header>
              <p>Aqui vai uma descrição sobre o desenvolvedor</p>
              <a href="#">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/1471571?s=460&v=4" alt="Bruno Rocha"/>
              <div className="user-info">
                <strong>Bruno Rocha</strong>
                <span>HTML, CSS, JavaScript</span>
              </div>
              </header>
              <p>Aqui vai uma descrição sobre o desenvolvedor</p>
              <a href="#">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/1471571?s=460&v=4" alt="Bruno Rocha"/>
              <div className="user-info">
                <strong>Bruno Rocha</strong>
                <span>HTML, CSS, JavaScript</span>
              </div>
              </header>
              <p>Aqui vai uma descrição sobre o desenvolvedor</p>
              <a href="#">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/1471571?s=460&v=4" alt="Bruno Rocha"/>
              <div className="user-info">
                <strong>Bruno Rocha</strong>
                <span>HTML, CSS, JavaScript</span>
              </div>
              </header>
              <p>Aqui vai uma descrição sobre o desenvolvedor</p>
              <a href="#">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/1471571?s=460&v=4" alt="Bruno Rocha"/>
              <div className="user-info">
                <strong>Bruno Rocha</strong>
                <span>HTML, CSS, JavaScript</span>
              </div>
              </header>
              <p>Aqui vai uma descrição sobre o desenvolvedor</p>
              <a href="#">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/1471571?s=460&v=4" alt="Bruno Rocha"/>
              <div className="user-info">
                <strong>Bruno Rocha</strong>
                <span>HTML, CSS, JavaScript</span>
              </div>
              </header>
              <p>Aqui vai uma descrição sobre o desenvolvedor</p>
              <a href="#">Acessar perfil no Github</a>
          </li>
        </ul>


      </main>

    </div>
  
  );
}


export default App;
 