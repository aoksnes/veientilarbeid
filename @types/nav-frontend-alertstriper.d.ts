declare module "nav-frontend-alertstriper" {
    import * as React from 'react';

    interface AlertStripeProps {
        children: React.ReactChildren | React.ReactChild;
        className?: string;
    }

    export type AlertstripeTypes = 'advarsel' | 'suksess' | 'info' | 'stopp';

    interface AlertStripeMedTypeOgSolidProps extends AlertStripeProps {
        type: AlertstripeTypes;
        solid?: boolean;
    }

    export class AlertStripe extends React.Component<AlertStripeMedTypeOgSolidProps, {}>{

    }

    export class AlertStripeAdvarsel extends React.Component<AlertStripeProps, {}>{

    }

    export class AlertStripeAdvarselSolid extends React.Component<AlertStripeProps, {}>{

    }

    export class AlertStripeSuksessSolid extends React.Component<AlertStripeProps, {}>{

    }

    export class AlertStripeSuksess extends React.Component<AlertStripeProps, {}>{

    }

    export class AlertStripeInfoSolid extends React.Component<AlertStripeProps, {}>{

    }

    export class AlertStripeInfo extends React.Component<AlertStripeProps, {}>{

    }

    export class AlertStripeNavAnsatt extends React.Component<AlertStripeProps, {}>{

    }

    export default AlertStripe;
}
