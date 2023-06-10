function About(props) {
    React.useEffect(() => {
        console.log(props, "---------->")
    }, []);

    return (
        <div>
            <h1>About</h1>
            <Link href={"#"}>home</Link>

        </div>
    )
}

module.exports = About