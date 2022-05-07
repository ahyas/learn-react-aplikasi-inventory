import { useParams } from "react-router-dom";

const BtnDeleteBarang = ({judul, lists, handleDelete}) => {
    const {id} = useParams();
    const item = lists.find(item=>(item.id)==id);

    return(
        <button className="BtnDeleteBarang" onClick={()=>handleDelete(item.id)}>{judul}</button>
    )
}

export default BtnDeleteBarang;