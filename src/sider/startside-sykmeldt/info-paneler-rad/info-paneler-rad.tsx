import * as React from 'react';
import './info-paneler-rad.less';
import InfoPanel from './info-panel';
import sykefravaer from './sykefravaer.svg';

const InfoPanelerRad: React.SFC = () => {

    return (
        <div className="info-paneler-rad">
            <InfoPanel
                tittelId="info-paneler-rad-ditt-sykefravaer-tittel"
                tekstId="info-paneler-rad-ditt-sykefravaer-tekst"
                lenkeTekstId="info-paneler-rad-ditt-sykefravaer-lenke-tekst"
                lenkeUrlId="info-paneler-rad-ditt-sykefravaer-lenke-url"
                bilde={sykefravaer}
            />
        </div>
    );
};

export default InfoPanelerRad;