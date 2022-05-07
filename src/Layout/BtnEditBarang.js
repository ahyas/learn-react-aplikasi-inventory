import {Link, useParams} from 'react-router-dom';

const BtnEditBarang = ({judul}) => {
    const {id} = useParams();
    return(
        <button className="BtnEditBarang"><Link to={`/row/${id}/edit`}>{judul}</Link></button>
    )
}

export default BtnEditBarang;