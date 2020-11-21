import { FormattedMessage } from "react-intl";
import translate from '../../../i18n/translate';

const Form = () => {
    return (
        <form className="App-form">
            <FormattedMessage id="form.name" defaultMessage="search">
                {placeholder =>
                    <input type="text" placeholder={placeholder} name="name" />
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
                <br/>
            </div>
                
        </form>
    )
}

export default Form;