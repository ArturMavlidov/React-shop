import { Header, Footer, Shop } from './components'
import {ContextProvider} from './context'

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
