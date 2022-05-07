
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditBarang = ({lists, handleEdit, editNamaBarang, setEditNamaBarang, editKategori, setEditKategori, editStock, setEditStock, editHargaPerolehan, setEditHargaPerolehan}) => {
    const {id} = useParams();
    const item = lists.find(item => (item.id)==id);
    const history = useHistory();

    useEffect(() => {
        if(item){
            setEditNamaBarang(item.nama_barang);
            setEditKategori(item.kategori);
            setEditStock(item.stock);
            setEditHargaPerolehan(item.harga_perolehan);
        }
    },[item, setEditNamaBarang, setEditKategori, setEditStock, setEditHargaPerolehan]);

    return(
        <div className="NewPost">
            <>
            <h1>Edit barang</h1>
            <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="namaBarang"><b>Nama barang :</b></label>
                <input id="namaBarang" 
                    type="text"
                    required
                    value={editNamaBarang}
                    onChange={(e)=>setEditNamaBarang(e.target.value)}
                />

                <label htmlFor="kategori"><b>Kategori :</b></label>
                <input id="kategori" 
                    type="text"
                    required
                    value={editKategori}
                    onChange={(e)=>setEditKategori(e.target.value)}
                />
                <label htmlFor="stock"><b>Stock (PCS):</b></label>
                <input id="stock" 
                    type="text"
                    style={{textAlign:"right"}}
                    required
                    value={editStock}
                    onChange={(e)=>setEditStock(e.target.value)}
                />
                <label htmlFor="hargaPerolehan"><b>Harga perolehan (Rp):</b></label>
                <input id="hargaPerolehan" 
                    type="text"
                    style={{textAlign:"right"}}
                    required
                    value={editHargaPerolehan}
                    onChange={(e)=>setEditHargaPerolehan(e.target.value)}
                />

                <button type="submit" onClick={()=>handleEdit(item.id)} className="BtnSimpan">Update</button>

                <button className="BtnBatal" onClick={()=>history.goBack()}>Batal</button>
            </form>
            </>
        </div>
    )
}

export default EditBarang;