import  './navbar.scss';
function Navbar () {
    return (
        <nav>
            <div className="left">
                <a href='/' className='logo'> 
                     <img src="/logo.png" />
                     <span>YazidEstate</span>
                </a>
                <a href=''>Home</a>
                <a href=''>About</a>
                <a href=''>Contacts</a>
                <a href=''>Agents</a>
            </div>
            <div className="right">
                <a href=''>Sign in</a>
                <a href='' className='register'>Sign up</a>
                <div className="meneIcon">
                    <img src="/menu.png" alt="" />
                </div>
                <div className="menu">
                    <a href=''>Home</a>
                    <a href=''>About</a>
                    <a href=''>Contacts</a>
                    <a href=''>Agents</a>
                    <a href=''>Sign in</a>
                    <a href=''>Sign up</a>

                </div>
            </div>
        </nav>
    )
}

export default Navbar ;