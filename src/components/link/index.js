function Link({ children, href }) {
    function changePage(hash){
        window.location.hash = hash;
    }

    return (
        <span style={{cursor: "pointer"}} onClick={() => changePage(href)}>
            {children}
        </span>
    )
}