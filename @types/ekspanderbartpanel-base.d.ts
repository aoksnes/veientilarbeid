/// <reference types="react" />
import * as React from 'react';
import 'nav-frontend-ekspanderbartpanel-style';
export interface EkspanderbartpanelBaseProps {
    apen?: boolean;
    onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    heading: React.ReactNode;
    ariaTittel: string;
}
export interface EkspanderbartpanelBaseState {
    apen: boolean;
}
declare class EkspanderbartpanelBase extends React.Component<EkspanderbartpanelBaseProps, EkspanderbartpanelBaseState> {
    static defaultProps: Partial<EkspanderbartpanelBaseProps>;
    constructor(props: any);
    handleClick(event: any): void;
    render(): JSX.Element;
}
export default EkspanderbartpanelBase;
