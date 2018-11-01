import * as React from 'react';
import { Provider } from 'react-redux';
import getStore from './store';
import IntlProvider from './Intl-provider';
import './decorator/decorator-mock';
import Innhold from './komponenter/innhold/innhold';
import Overskrift from './komponenter/overskrift/overskrift';
import HentInitialData from './komponenter/hent-initial-data/hent-initial-data';
import SjekkOppfolging from './komponenter/hent-initial-data/sjekk-oppfolging';

const store = getStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <IntlProvider>
                    <HentInitialData>
                        <SjekkOppfolging>
                            <main id="maincontent" role="main" tabIndex={-1}>
                                <Overskrift sideTittelId="overskrift-veientilarbeid"/>
                                <Innhold/>
                            </main>
                        </SjekkOppfolging>
                    </HentInitialData>
                </IntlProvider>
            </Provider>
        );
    }
}

export default App;
