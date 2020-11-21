import App from './App';
import Provider from './Provider';
import { AppContextProvider } from './Context';

export default () => (
    <AppContextProvider>
        <Provider>
            <App />
        </Provider>
    </AppContextProvider>
)