function About(props) {
    React.useEffect(() => {
        console.log(props, "---------->")
    }, []);

    return (
        <div>
            <h1>About</h1>
            <a href="#">home</a>
        </div>
    )
}

module.exports = About