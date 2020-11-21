import {FormattedMessage} from "react-intl";
import './style.css'

const Header = () => {
  const menu = {
    home: 'https://site.com/home',
    blog: 'https://site.com/blog',
    about: 'https://site.com/about',
    contacts: 'https://site.com/contacts'
  }

    return (
        <header className="App-header">
        <nav>
          <ul>
            {Object.keys(menu).map(key => (
              <li key={key}>
                <a href={menu[key]}>
                  <FormattedMessage id={`menu.${key}`} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
}

export default Header;