import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mx-auto max-w-page px-5 md:px-8">
        <Work />
        <Experience />
      </main>
      <Contact />
    </>
  )
}
