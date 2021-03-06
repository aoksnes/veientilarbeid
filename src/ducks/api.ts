import { fetchToJson } from './api-utils';
import { alleFeatureToggles } from './feature-toggles';

export const VEILARBOPPFOLGINGPROXY_URL = '/veilarboppfolging/api';
export const FEATURE_URL = '/veientilarbeid/api/feature';
export const SERVICEGRUPPE_URL = '/veilarbtiltakinfo/api/oppfolgingsstatus';
export const STARTREGISTRERING_URL = '/veilarbregistrering/api/startregistrering';
export const JOBBSOKERBESVARELSE_URL = '/veilarbjobbsokerkompetanse/api/hent';

export const getCookie = (name: string) => {
    const re = new RegExp(`${name}=([^;]+)`);
    const match = re.exec(document.cookie);
    return match !== null ? match[1] : '';
};

function getHeaders() {
    return new Headers({
        'Content-Type': 'application/json',
        'NAV_CSRF_PROTECTION': getCookie('NAV_CSRF_PROTECTION'),
    });
}

const CREDENTIALS_SAME_ORIGIN = {
    credentials: ('same-origin' as RequestCredentials)
};

export function hentOppfolging() {
    return fetchToJson({
        url: `${VEILARBOPPFOLGINGPROXY_URL}/oppfolging`,
        config: {
            ...CREDENTIALS_SAME_ORIGIN,
            headers: getHeaders(),
        }
    });
}

export function hentFeatureToggles() {
    if (alleFeatureToggles.length === 0) {
        return Promise.resolve({});
    }
    const parameters = alleFeatureToggles.map(element => 'feature=' + element).join('&');
    return fetchToJson({
        url: `${FEATURE_URL}/?${parameters}`,
        config: CREDENTIALS_SAME_ORIGIN,
        recoverWith: () => ({})
    });
}

export function hentServicegruppe() {
    return fetchToJson({
        url: `${SERVICEGRUPPE_URL}`,
        config: {
            ...CREDENTIALS_SAME_ORIGIN,
            headers: getHeaders(),
        }
    });
}

export function hentSykmeldtInfo() {
    return fetchToJson({
        url: `${STARTREGISTRERING_URL}`,
        config: {
            ...CREDENTIALS_SAME_ORIGIN,
            headers: getHeaders(),
        }
    });
}

export function hentJobbsokerbesvarelse() {
    return fetchToJson({
        url: `${JOBBSOKERBESVARELSE_URL}`,
        config: {
            ...CREDENTIALS_SAME_ORIGIN,
            headers: getHeaders(),
        }
    });
}