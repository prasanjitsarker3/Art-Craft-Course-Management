import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthenticationPage/AuthProvider";


const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const allTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', allTheme);
    }, [theme])
    const themehandle = n => {
        if (n.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    // console.log(setBackgroundMode);
    const { user, userLogOut } = useContext(AuthContext);
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }


    const options = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructor</Link></li> 
        <li><Link to='/classes'>Classes</Link></li>
        {
            user?.email ? <>
                <li><Link to="/dashboard/dashboardInfo">DashBoard</Link></li>
                <div className='cursor-pointer flex justify-center items-center'>
                    <div className="tooltip" data-tip={user?.displayName}>
                        <img id='title' src={user?.photoURL} className='rounded' width={'30px'} height={'30px'} />
                    </div>
                </div>
                <li><Link onClick={handleLogOut}>Log out</Link></li>
            </> : <li><Link to='/login'>Login</Link></li>
        }
        <li>
            <input onClick={themehandle} type='checkbox' className="toggle toggle-md text-white"
                checked={theme === 'light' ? false : true} />
        </li>
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start z-20">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" text-black font-bold menu menu-compact dropdown-content  p-2 shadow rounded-box w-52 text-base font-serif">
                            {options}
                        </ul>
                    </div>
                    <a ></a>
                    <Link className="normal-case text-2xl font-serif flex items-center gap-2" to='/'>
                        <img src="https://img.freepik.com/premium-vector/vector-hand-made-label-outline-trendy-style-glass-with-pencil-brush-calligraphy-pen-logo-design-template_163983-2062.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=country_rows_v1" alt="" className="rounded-full" height={'80px'} width={'80px'} />
                        Art&Craft</Link>
                </div>
                <div className="navbar-end hidden lg:flex me">
                    <ul className="menu menu-horizontal px-1 text-base  font-serif">
                        {options}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
            </div>
        </div>
    );
};

export default Header;