import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import LenkepanelMedBilde from '../lenkepanel-med-bilde/lenkepanel-med-bilde';
import { connect } from 'react-redux';
import { AppState } from '../../reducer';

import './ressurslenker.less';

const VEIVISER2_URL = '/veiviserarbeidssoker/';
const JOBBSOKERKOMPETANSE_RESULTAT_URL = '/jobbsokerkompetanse/resultatside';
const MIA_URL = '/mia/';

interface StateProps {
    harJobbbsokerbesvarelse: boolean;
}

class Ressurslenker extends React.Component<StateProps> {
    render () {
        const {harJobbbsokerbesvarelse} = this.props;
        const URL = harJobbbsokerbesvarelse ? JOBBSOKERKOMPETANSE_RESULTAT_URL : VEIVISER2_URL;
        return (
            <div className="ressurslenker">
                <LenkepanelMedBilde
                    className="ressurslenker__mia ressurslenke"
                    src={require('./mia.svg')}
                    alt="Norgeskart med forstørrelsesglass"
                    href={MIA_URL}
                >
                    <Innholdstittel className="blokk-s">
                        <FormattedMessage id="mia-overskrift" />
                    </Innholdstittel>
                    <Normaltekst className="blokk-s">
                        <FormattedMessage id="mia-tekst" />
                    </Normaltekst>
                </LenkepanelMedBilde>
                <LenkepanelMedBilde
                    className="ressurslenker__jobbsokertips ressurslenke"
                    src={require('./jobbsokertips.svg')}
                    alt="Jobbsøkerutstyr"
                    href={URL}
                >
                    <Innholdstittel className="blokk-s">
                        <FormattedMessage id="jobbsokertips-overskrift" />
                    </Innholdstittel>
                    <Normaltekst className="blokk-s">
                        <FormattedMessage id="jobbsokertips-tekst" />
                    </Normaltekst>
                </LenkepanelMedBilde>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    harJobbbsokerbesvarelse: state.jobbsokerbesvarelse.harJobbsokerbesvarelse
});

export default connect(mapStateToProps)(Ressurslenker);