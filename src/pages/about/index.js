function About(props) {
    React.useEffect(() => {
        console.log(props, "---------->")
    }, []);

    return (
        <div>
            <h1>About</h1>
            <Link href={"#home?batata=true&cenoura=false"}>home</Link>

        </div>
    )
}

/*
{
    url: "#home",
    props: {
        batata: true,
        cenoura: false
    }
}
*/
module.exports = About