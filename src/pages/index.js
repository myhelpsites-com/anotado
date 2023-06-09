// pages


// Function render page
function App() {
    const [page, setPage] = React.useState({url: ""});
    
    // get change in hash
    window.addEventListener('hashchange', function () {
        var newHash = window.location.hash;
        if(newHash.includes("?")){
            let explode = newHash.split("?");
            setPage({url: explode[0], props: queryStringToObject(explode[1])})
        }else{
            setPage({url: newHash, props: {}})
        }
    });


    const pages = {
        "": <Home/>,
        "#": <Home/>,
        "#about": <About/>
    }
    // Render the page
    const currentPage = pages[page.url];
    const renderedPage = page.props ? React.cloneElement(currentPage, page.props) : currentPage;
    return renderedPage;
}

// renderDom
ReactDOM.render(<App />, document.getElementById('root'));