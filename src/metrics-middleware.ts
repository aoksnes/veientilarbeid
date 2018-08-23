import { ActionTypes as OppfolgingTypes } from './ducks/oppfolging';
import { ActionTypes as FeatureTogglesTypes } from './ducks/feature-toggles';

export const metricsMiddleWare = (store: any) => (next: any) => (action: any) => { // tslint:disable-line:no-any
    const { frontendlogger } = (window as any); // tslint:disable-line:no-any

    const feilTyper = [
        {
            type: OppfolgingTypes.HENT_OPPFOLGING_FEILET,
            eventnavn: 'veientilarbeid.feil.hentoppfolging',
            apikall: '/startregistrering'
        },
        {
            type: FeatureTogglesTypes.FEATURE_TOGGLES_FEILET,
            eventnavn: 'veientilarbeid.feil.featuretoggle',
            apikall: '/feature'
        },
    ];

    /* Feil logging */
    feilTyper.map((feil) => {
        if (action.type === feil.type) {
            if (frontendlogger) {
                if (!action.data) {
                    frontendlogger.event(feil.eventnavn, {'statusText': 'Action data er undefined'}, {});
                } else {
                    const response = action.data.response || {};
                    const status = response.status;
                    const statusText = response.statusText;
                    const url = response.url;
                    const apikall = feil.apikall;
                    frontendlogger.event(feil.eventnavn, {
                        'useragent': navigator.userAgent,
                        url,
                        apikall,
                        status,
                        statusText,
                        data: action.data
                    },                   {});
                }
            }
        }
    });

    next(action);
};