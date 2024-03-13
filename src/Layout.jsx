import { Link, Outlet } from "react-router-dom";

export default function Layout({ token, onLogout }) {
    return (
        <>
            <div className="flex p-3 bg-white justify-around">
                <h1 className="font-bold text-2xl">Notes App</h1>
                <nav className="flex mx-2">
                    {/* <Link to={"/register"} className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Register</Link>
            <Link to={"/login"} className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Login</Link>
            <Link to={"/note"} className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Note</Link> */}
                </nav>
                {token !== null ? null : <Link to={"/Registrasi"}><span className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Registrasi</span></Link>}
                {token !== null ? null : <Link to={"/Login"}><span className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Login</span></Link>}
                <Link to={"/Note"}><span className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Notes</span></Link>
                {token !== null ? <Link onClick={() => onLogout()}><span className="p-2 text-xl transition duration-300 ease-in-out hover:text-gray-400">Logout</span></Link> : null}
            </div>
            <Outlet />
        </>
    )
}