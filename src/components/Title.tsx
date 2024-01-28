import './Title.css'

function Title({ title }: { title: String }) {
  return (
    <h2 className="Title">{ title }</h2>
  )
}

export default Title
