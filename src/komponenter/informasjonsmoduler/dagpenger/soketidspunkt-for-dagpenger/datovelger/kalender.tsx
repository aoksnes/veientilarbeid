import * as React from 'react';
import DayPicker from 'react-day-picker';
import momentLocaleUtils, { LocaleUtils } from 'react-day-picker/moment';
import Navigasjonsbar from './navigasjonsbar';
import DatovelgerCaption from './datovelger-caption';

interface Props {
    valgtDato: Date;
    velgDato: (dato: Date) => void;
    lukk: () => void;
}

class Kalender extends React.Component<Props> {
    private dayPickerRef: HTMLDivElement | null;

    componentDidMount() {
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        document.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    setDayPickerRef(node: HTMLDivElement | null) {
        this.dayPickerRef = node;
    }

    handleOutsideClick(event: any) { // tslint:disable-line no-any
        if (this.dayPickerRef && !this.dayPickerRef.contains(event.target)) {
            this.props.lukk();
        }
    }

    render() {
        const localeUtils: LocaleUtils = {
            ...momentLocaleUtils,
            formatWeekdayShort: (weekday, locale) => {
                return momentLocaleUtils.formatWeekdayLong(weekday, locale).substring(0, 3);
            },
        };

        const navigasjonsbar = (
            <Navigasjonsbar
                showPreviousButton={true}
                showNextButton={true}
            />
        );

        return (
            <div
                className="datovelger__DayPicker"
                ref={(node) => this.setDayPickerRef(node)}
            >
                <DayPicker
                    locale="nb"
                    localeUtils={localeUtils}
                    firstDayOfWeek={1}
                    navbarElement={navigasjonsbar}
                    captionElement={<DatovelgerCaption date={this.props.valgtDato}/>}
                    selectedDays={this.props.valgtDato}
                    initialMonth={this.props.valgtDato}
                    onDayClick={(dato) => this.props.velgDato(dato)}
                    containerProps={{tabIndex: 0}}
                />
            </div>
        );
    }
}

export default Kalender;