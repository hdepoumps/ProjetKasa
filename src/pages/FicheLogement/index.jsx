import { useParams } from 'react-router-dom'

function FicheLogement() {
  const { idLogement } = useParams()

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>id logement : {idLogement}</h2>
    </div>
  )
}

export default FicheLogement