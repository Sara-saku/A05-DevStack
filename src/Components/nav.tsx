
import logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className="sticky top-0 z-10 bg-white shadow-md p-4 flex justify-between items-center container mx-auto font-sans font-medium"> 
        
            <img src={logo} alt="Logo" />
            <ul className="flex justify-center space-x-4">
                <li className='text-pink-500'><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="flex space-x-4">
                <button>Sign In</button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Sign Up</button>
            </div>
        
        </nav>
    );  
};

export default Nav;