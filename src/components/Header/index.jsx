import './Header.css';
import IgniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
    return (
        <div className="header">
            <img src={IgniteLogo} alt="Ignite Logo" />
        </div>
    );
}