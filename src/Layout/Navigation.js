import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="Nav">
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="#" >About</Link></li>
            </ul>
        </div>
    )
}

export default Navigation;