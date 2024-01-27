import './App.css'
import Header from './components/Header.tsx'
import Mobile from './components/Mobile.tsx'
import Description from './components/Description.tsx'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Mobile />
        <section>
          <Description />
        </section>
      </main>
    </div>
  )
}

export default App
