import * as React from 'react';
import { Element, Systemtittel } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import Lenkepanel from 'nav-frontend-lenkepanel';

const hvordansokejobber = require('./meldekort.svg');

class Meldekort extends React.Component {
    render() {
        return (
            <Lenkepanel className="ressurslenke" href="/meldekort/">
                <img
                    src={hvordansokejobber}
                    alt="Forstørrelsesglass"
                    className="ressurslenke__illustrasjon"
                />
                <div className="ressurslenke__tekst">
                    <Systemtittel className="blokk-xs">
                        <FormattedMessage id="overskrift-meldekort"/>
                    </Systemtittel>
                    <Element>
                        <FormattedMessage id="beskrivelse-meldekort"/>
                    </Element>
                </div>
            </Lenkepanel>
        );
    }
}

export default Meldekort;