import './Advisors.css'
import Title from './Title.tsx'

function Advisors() {
  let advisors = ["Ing. Jaime Minor Gómez", "M. en C. Oscar Martínez Campos"]
  return (
    <div className="Advisors">
      <Title title="Asesores"/>
      <ul>
        {
          advisors.map((advisor, index) => <li key={index}>{advisor}</li>)
        }
      </ul>
    </div>
  )
}

export default Advisors
