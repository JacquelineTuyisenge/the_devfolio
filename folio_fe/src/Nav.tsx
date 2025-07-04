import { FaGithub } from "react-icons/fa"
export function Nav () {
    return (
        <nav>
            <ul>
                <div>
                    <h1>Jacqueline Tuyisenge</h1>
                </div>
                <div className='nav-links'>
                    <li>Home</li>
                    <li>Blogs</li>
                    <form>
                        <input type='search' placeholder='Search...' />
                    </form>
                    <li className="socials"><FaGithub /> Github</li>
                </div>
            </ul>
        </nav>
    )
};