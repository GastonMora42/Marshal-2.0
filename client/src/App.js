import './App.css';
import { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from '@auth0/auth0-react';


function App() {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [usuario, setUsuario] = useState("");
  const [marca, setMarca] = useState("");
  const [rol, setRol] = useState("");
  const [alcanze, setAlcanze] = useState(0);
  const [años, setAños] = useState(0);
  const [objetivos, setObjetivos] = useState("");
  const [id, setId] = useState(0);

  const [editar,setEditar] = useState(false);
  

  const [usuariosList,setUsuarios] = useState([]);

  const add = () => {
    axios.post('http://localhost:3001/create', {
      usuario: usuario, 
      marca: marca,
      rol: rol,
      alcanze: alcanze,
      años: años,
      objetivos: objetivos,
    }).then(() => {
      alert("Usuario creado exitosamente");
    });
 };

 const getUsuarios = () => {
  axios.get('http://localhost:3001/usuarios').then((response) => {
    setUsuarios(response.data);
    alert("Usuarios listados exitosamente");
  });
}; 

const editarUsuario = (val) => {
  setEditar = true;
  setUsuario(val.usuario);
  setMarca(val.marca);
  setRol(val.rol);
  setAlcanze(val.alcanze);
  setAños(val.años);
  setObjetivos(val.objetivos);
  setId(val.id);
}
 

  return (
    <div className="datos">
    <div className="App">
    <div className="Lista">

    <button onClick={()=> loginWithRedirect()}>Login</button>
    
   
    
    {
      usuariosList.map((val,key) => {
        return <div className="usuario">
          <h3>Usuario: {val.usuario}</h3>
          <h3>Marca: {val.marca}</h3>
          <h3>Rol: {val.rol}</h3>
          <h3>Alcanze: {val.alcanze}</h3>
          <h3>Años: {val.años}</h3>
          <h3>Objetivos: {val.objetivos}</h3>
        </div>
      })
    }
    </div>
    </div>

    <div className="card text-center">
  <div className="card-header">
  Cuentanos sobre ti y tu marca
  </div>
  <div className="card-body">
  <div className="form-control form-control-lg">
  <span className="input-group-text" id="basic-addon1">Usuario:</span>
  <input type="text"
  onChange={(event) => {
        setUsuario(event.target.value);
      }}
     className="form-control" placeholder="Ingrese un nombre de usuario" aria-label="Nombre de usuario" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Marca:</span>
  <input type="text"
  onChange={(event) => {
        setMarca(event.target.value);
      }}
     className="form-control" placeholder="Ingrese el nombre de su marca" aria-label="Nombre de su marca" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <label class="input-group-text" 
      for="inputGroupSelect01">Rol</label>
  <select class="form-select" 
  onChange={(event) => {
        setRol(event.target.value);
      }}
      id="inputGroupSelect01">
    <option selected>Escoga su rol principal</option>
    <option value="Dueño">Dueño</option>
    <option value="Community Managger">Community Managger</option>
    <option value="Diseñador">Diseñador</option>
    <option value="Creador de contenido">Creador de contenido</option>
    <option value="Gerente de marketing">Gerente de marketing</option>
    <option value="Director general">Director general</option>
    <option value="Publicista">Publicista</option>
    <option value="Desarrollador">Desarrollador</option>
    <option value="Otros">Otros</option>
  </select>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Años:</span>
  <input type="number"
  onChange={(event) => {
        setAños(event.target.value);
      }}
     className="form-control" placeholder="Años de experiencia" aria-label="Años" aria-describedby="basic-addon1"/>
</div>


<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Alcanze:</span>
  <input type="text"
  onChange={(event) => {
        setAlcanze(event.target.value);
      }}
     className="form-control" placeholder="Ingrese el alcanze de su marca" aria-label="Alcanze" aria-describedby="basic-addon1"/>
</div>


<div class="input-group mb-3">
  <label class="input-group-text" 
      for="inputGroupSelect01">Objetivos</label>
  <select class="form-select" 
  onChange={(event) => {
        setObjetivos(event.target.value);
      }}
      id="inputGroupSelect01">
    <option selected>Selecciona una opcion</option>
    <option value="Aumentar seguidores en instagram">Aumentar seguidores en instagram</option>
    <option value="Crear y mantener imagen de marca">Crear y mantener imagen de marca</option>
    <option value="Captar clientes potenciales">Captar clientes potenciales</option>
    <option value="Expandir mi alcanze y llegar a nuevos clientes">Expandir mi alcanze y llegar a nuevos clientes</option>
    <option value="Otros">Otros</option>
  </select>
</div>
      

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button"  onClick={add}>Guardar y continuar</button>
</div>

  </div>
  <div class="card-footer text-muted">
  </div>
  Recuerda ser especifico para poder brindarte un mejor servicio
</div>
    </div>
   );

   };

export default App;
