import {Link} from 'react-router-dom';

const Row  = ({item}) => {
    return(
        <div className='post'>
            <Link to={`/row/${item.id}`}>
                <h3>{item.nama_barang}</h3>            
                    <p className='postBody'>{item.kategori}</p>
            </Link>
        </div>
    )
}

export default Row;