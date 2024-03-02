
import './App.css'
import AppRoutes from './AppRoutes';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
function App() {
  

  return (
    <>
      <I18nextProvider i18n={i18n}>
      <AppRoutes />
      </I18nextProvider>
    </>
  )
}

export default App
