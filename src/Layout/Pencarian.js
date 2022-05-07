const Pencarian = ({pencarian, setPencarian}) => {
    return(
        <nav className="Pencarian">
            <form className="searchForm" onSubmit={(e)=>e.preventDefault()} >
                <input 
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    value={pencarian}
                    onChange={(e)=>setPencarian(e.target.value)}
                    />
            </form>
        </nav>
    )
}

export default Pencarian;