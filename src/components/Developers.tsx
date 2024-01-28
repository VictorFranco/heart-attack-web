import './Developers.css'
import Title from './Title.tsx'

function Developers() {

  let developers = {
    "Cervantes Beltrán Carlos Arturo": false,
    "Cervantes Nava Jesús Enrique": false,
    "Franco Hernández Victor Alfonso": true,
    "González Resendiz Denisse": false,
    "Martínez Olivares Vicente Jafet": false
  }

  return (
    <div className="Developers">
      <Title title="Desarrolladores"/>
      <ul>
      {
        Object.entries(developers).map(
          ([developer, active]) => <li key={developer} style={{color: active ? "black" : "gray"}}>
                                     {developer} ({active ? "Actualmente" : "2018"})
                                   </li>
        )
      }
      </ul>
    </div>
  )
}

export default Developers
