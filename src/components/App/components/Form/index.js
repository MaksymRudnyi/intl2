import { useState } from 'react';
import { FormattedMessage } from "react-intl";
import translate from '../../../i18n/translate';

const Form = () => {
    const [name, setName] = useState('');
    const [dogs, setDogs] = useState(0);

    return (
        <div>
            <FormattedMessage
                id="richtext"
                values={{ num: dogs, bold: chunks => <b>{chunks}</b> }}
            />

            {!!name && <p>{translate('subscribe-invite', { name })}</p>}

            <form className="App-form">
                <FormattedMessage id="form.name" defaultMessage="search">
                    {placeholder =>
                        <input value={name}
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                            placeholder={placeholder}
                            name="name" />
                    }
                </FormattedMessage>

                <select>

                    <FormattedMessage id="form.country.us">
                        {placeholder => <option value={1}>{placeholder}</option>}
                    </FormattedMessage>

                    <FormattedMessage id="form.country.france">
                        {placeholder => <option value={1}>{placeholder}</option>}
                    </FormattedMessage>

                    <FormattedMessage id="form.country.ukraine">
                        {placeholder => <option value={1}>{placeholder}</option>}
                    </FormattedMessage>

                    <FormattedMessage id="form.country.other">
                        {placeholder => <option value={1}>{placeholder}</option>}
                    </FormattedMessage>

                </select>
                <div>
                    <FormattedMessage id="form.dogs">
                        {placeholder =>
                            <input value={dogs}
                                onChange={(event) => setDogs(event.target.value)}
                                type="number"
                                placeholder={placeholder}
                                name="name" />
                        }
                    </FormattedMessage>
                </div>
                <div>
                    <br />
                </div>

            </form>

        </div>
    )
}

export default Form;