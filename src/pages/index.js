// Function render page
function App() {
    const [page, setPage] = React.useState({url: ""});
    
    // get change in hash
    window.addEventListener('hashchange', function () {
        var newHash = window.location.hash;
        if(newHash.includes("?")){
            let explode = newHash.split("?"); // explode[0] = #home
            setPage({url: explode[0], props: queryStringToObject(explode[1])})
        }else{
            setPage({url: newHash, props: {}})
        }
    });

    // pages object
    const pages = {
        "": <Home/>,
        "#": <Home/>,
        "#home": <Home/>,
        "#about": <About/>
    }

    // Render the page
    const currentPage = pages[page.url];
    const renderedPage = React.cloneElement(currentPage, page); //add props
    return renderedPage;
}

// renderDom
ReactDOM.render(<App />, document.getElementById('root'));