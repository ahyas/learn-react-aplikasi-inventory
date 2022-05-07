import Row from "./Row";

const List = ({lists}) => {
    return(
        <>
            {lists.map(item=>(
                <Row key={item.id} item={item}/>
            ))}  
        </>     
    )
}

export default List;