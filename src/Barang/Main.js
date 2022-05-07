import List from "./List";

const Main = ({lists}) => {
    return(
        <div className="Home">
            {
                lists.length > 0 ? (<List lists={lists}/>) : (<p style={{marginTop:"2rem"}}>Tidak ada daftar barang</p>)
            }
        </div>
        
    )
}

export default Main;