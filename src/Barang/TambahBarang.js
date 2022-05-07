import { useHistory } from "react-router-dom";

const TambahBarang = ({handleSubmit, namaBarang, setNamaBarang, kategori, setKategori, stock, setStock, hargaPerolehan, setHargaPerolehan}) => {
    const history = useHistory();

    return(
        <div className="NewPost">
            <h1>Tambah barang</h1>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="namaBarang"><b>Nama barang :</b></label>
                <input id="namaBarang" 
                    type="text"
                    required
                    value={namaBarang}
                    onChange={(e)=>setNamaBarang(e.target.value)}
                />

                <label htmlFor="kategori"><b>Kategori :</b></label>
                <input id="kategori" 
                    type="text"
                    required
                    value={kategori}
                    onChange={(e)=>setKategori(e.target.value)}
                />
                <label htmlFor="stock"><b>Stock :</b></label>
                <input id="stock" 
                    type="text"
                    required
                    value={stock}
                    onChange={(e)=>setStock(e.target.value)}
                />
                <label htmlFor="hargaPerolehan"><b>Harga perolehan :</b></label>
                <input id="hargaPerolehan" 
                    type="text"
                    required
                    value={hargaPerolehan}
                    onChange={(e)=>setHargaPerolehan(e.target.value)}
                />
               
                <button type="submit" className="BtnSimpan">Submit</button>

                <button className="BtnBatal" onClick={()=>history.goBack()} >Batal</button>
            </form>
        </div>
    )
}

export default TambahBarang;