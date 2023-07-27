import { Link } from 'react-router-dom'

export default function Navbar() {
    return <nav className={`flex gap-5 sticky top-0 border-b-2 border-black py-3 px-5 z-50 bg-white bg-opacity-20 backdrop-blur-lg`}>
        <Link to='/setting'>Setting</Link>
        <Link to='/'>Dashobard</Link>
    </nav>
}