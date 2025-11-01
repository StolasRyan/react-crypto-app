import { CryptoContextProvider } from './components/context/crypto-context';
import AppLayout from './components/LayOut/AppLayout';


 

function App() {


  return (
    <CryptoContextProvider>
      <AppLayout></AppLayout>
    </CryptoContextProvider>
  )
}

export default App
