import './Header.css';

export interface HeaderProps {
    menuItems: string[],
    siteName: string;
}

export default function Header(props: HeaderProps) {
    const {menuItems, siteName} = props;
    return (
    <header>
        <nav className="header__navBar">
            <ul className="header__navigation">
                {menuItems.map(function (link, index) {
                    return (<li className="header__navLink" key={index}><a href={`#${link}`}>{link}</a></li>)
                })}
            </ul>
        </nav>
        <div className="Header__logoBar">
            <h1 className="header__siteTitle">{siteName}</h1>
        </div>
    </header>
  )
}
