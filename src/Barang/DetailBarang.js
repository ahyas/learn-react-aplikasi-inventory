import { useHistory, useParams } from "react-router-dom";

const DetailBarang = ({lists}) => {
    const {id} = useParams();
    const item = lists.find(item=>(item.id)==id);
    const history = useHistory();
    
    return (
        <div className="PostPage">
            {item && 
                <>
                <h3>{item.nama_barang}</h3>
                <br></br>
                <p>Kategori : {item.kategori} </p> 
                <p>Harga : Rp {item.harga_perolehan}</p>
                <p>Stock : {item.stock}</p>
                <button className="BtnBatal" onClick={()=>history.push("/")}>Kembali</button>
                </>
            }
        </div>
    )
}

export default DetailBarang;