
import {FormattedMessage} from "react-intl";
import Header from './components/Header';
import Footer from './components/Footer'
import Form from './components/Form';
import DynamicData from './components/DynamicData'
import translate from '../i18n/translate'
import './style.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <h1>{translate('hello')}</h1>
        <Form/>
        <DynamicData/>
      <Footer/>
    </div>
  );
}

export default App;
