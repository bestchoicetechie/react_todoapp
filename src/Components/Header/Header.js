import './Header.css';

function Header() {
    return ( 
    <div className= 'header'>

        <h1 className='logo'>Logo</h1>
        <div>
            <ul>
                <a href='www.google.com'><li>Home</li></a>
                <a href='www.google.com'><li>About</li></a>
                <a href='www.google.com'><li>Contact</li></a>
            </ul>
        </div>
    </div> 
    );
}

export default Header;