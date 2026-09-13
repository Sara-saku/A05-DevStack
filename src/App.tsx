import Nav from './Components/nav'
import Banner from './Components/banner'
import TechnologySection from "./Components/TechnologySection";
import Footer from './Components/Footer';
import { Suspense } from 'react';

const technologyPromise = fetch("/technologies.json")
  .then((response) => response.json());

function App() {


  return (
    <>

      <Nav></Nav>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <p className="text-xl font-semibold">
              Loading...
            </p>
          </div>
        }
      >
        <TechnologySection
          technologyPromise={technologyPromise}
        />
      </Suspense>

      <Footer />
    </>
  )
}

export default App
