import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer 
} from './components'

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
        <Features />
        <Download />
        <Subscribe />
        <Faq />
        <Footer />
      </header>
    </main>
  )
}

export default App