// pages
const pages = {
    "": <Home />,
    "#": <Home />,
    "#about": <About />
}

// Function render page
function App() {
    const [page, setPage] = React.useState("");

    // get change in hash
    window.addEventListener('hashchange', function () {
        var newHash = window.location.hash;
        setPage(newHash)
    });

    // page rendered
    return pages[page];
}

// renderDom
ReactDOM.render(<App />, document.getElementById('root'));