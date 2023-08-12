import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  //Formulario
  const [showForm, updateShow] = useState(false)

  //Colaboradores
  const [collaborators, setCollaborator] = useState([
    {
      id: uuid(),
      team: "Front End",
      name: "Sebastian Rojas",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
    {
      id: uuid(),
      team: "Front End",
      name: "Sebastian Rojas",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
    {
      id: uuid(),
      team: "Programacion",
      name: "Sebastian Rojas",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: true
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "Devops",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "UX y Diseño",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: true
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "UX y Diseño",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "Innovacion y Gestión",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "UX y Diseño",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: true
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "Innovacion y Gestión",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "Movil",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "Movil",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "Movil",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
    {
      id: uuid(),
      name: "Sebastian Rojas",
      team: "Movil",
      position: "Estudiante de Alura Latam",
      photo: "https://github.com/sebastianXV.png",
      fav: false
    },
  ]);

  //Equipos
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: '#D9F7E9',
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: '#E8F8FF',
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: '#F0F8E2',
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: '#FDE7E8',
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: '#FFF5D9',
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: '#FFEEDF',
    }
  ]);

  //Ternario --> condicion? SeMuestra o noSemuestra
  const toggleShow = () => {
    updateShow(!showForm)
  }

  //Registrar Colaborador
  const registerColab = (collaborator) => {
    setCollaborator([...collaborators, collaborator])
  }

  //Eliminar colaborador
  const deleteColab = (id) => {
    const newColab = collaborators.filter((collaborator) => collaborator.id !== id)
    setCollaborator(newColab)
  }

  //Actualizar color de equipo
  const updateColor = (color, id) => {
    const teamsUpdate = teams.map((team) => {
      if (team.id === id) {
        team.colorPrimario = color
      }

      return team
    })

    setTeams(teamsUpdate)
  }

  //Crear equipo
  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }]);
  }

  //Dar like
  const like = (id) => {
    const newCollaborators = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav =!collaborator.fav
      }
      return collaborator
    })

    setCollaborator(newCollaborators)
  }

  return (
    <div>
      <Header />
      {
        showForm && <Form
          teams={teams.map((teams) => teams.titulo)}
          registerColab={registerColab}
          createTeam={createTeam}
        />
      }

      <MyOrg toggleShow={toggleShow} />
      {
        teams.map((teams) => <Team
          datos={teams}
          key={teams.titulo}
          collaborators={collaborators.filter(collaborator => collaborator.team === teams.titulo)}
          deleteColab={deleteColab}
          updateColor={updateColor}
          like={like}
        />
        )
      }

      <Footer />
    </div>
  );
}
export default App;