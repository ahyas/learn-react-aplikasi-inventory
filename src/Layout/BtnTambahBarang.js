import {Link} from 'react-router-dom';

const BtnTambahBarang = ({judul}) => {
    return(
        <div className="BtnTambahBarang"><Link to="/row/add">{judul}</Link></div>
    )
}

export default BtnTambahBarang;