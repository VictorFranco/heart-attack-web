import './App.css'
import Header from './components/Header.tsx'
import Mobile from './components/Mobile.tsx'
import Description from './components/Description.tsx'
import Developers from './components/Developers.tsx'
import Acknowledgments from './components/Acknowledgments.tsx'
import Advisors from './components/Advisors.tsx'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Mobile />
        <section>
          <Description />
          <Developers />
          <Acknowledgments />
          <Advisors />
        </section>
      </main>
    </div>
  )
}

export default App
