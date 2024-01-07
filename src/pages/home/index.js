function Home(props) {
    const [notes, setNotes] = React.useState([]);
    const [currNotes, setCurrNotes] = React.useState(null);

    React.useEffect(() => {
        getData();
    }, []);

    React.useEffect(() => {
        console.log(props, "---------->")
    }, []);

    async function getData() {
        try {
            setNotes(await getDataFromDatabase());
        } catch (error) {
            console.error(error)
        }
    }

    function Card(props) {
        return (
            <div
                onClick={() => {
                    setCurrNotes(props);
                }}
                className={`card-note mt-4 mb-3 rounded-10 p-3 border${currNotes && currNotes.id === props.id && " border-dark border-3 bold"}`}
            >
                {props.value}
            </div>
        )
    }

    function Cards() {
        return notes && notes.length > 0 && notes.map((note, index) => <Card key={index} {...note} />)
    }

    function EditNote({ note }) {
        return (
            <div class={`${note ? "col-md-8" : "col-md-8"} pl-4`}>
                <div style={{height: "10vh"}} className="pb-3 d-flex justify-content-end gap-10 border-bottom pt-3">
                    <button type="button" class="btn rounded-10 btn-dark w-25 bold">Salvar</button>
                    <button type="button" class="btn rounded-10 border border-3 border-dark w-25 bold">Excluir</button>
                </div>
                <textarea name="" id="input" class="form-control w-100 rounded-10 border shadow p-3 mt-4" style={{ height: "85vh" }} rows="3" required="required">{note.value}</textarea>
            </div>
        );
    }

    return (
        <Layout>
            <div className="">

                <div class="container-fluid">

                    <div class="row">
                    


                        <div className={`${currNotes ? "col-md-4" : "col-md-4"} border-right pr-4`} style={{ height: "100vh", overflowY: "auto" }} >
                            <div className="border-bottom d-flex align-items-center" style={{ height: "10vh" }}>
                                <h3 className="">Minhas anotações</h3>
                            </div>
                            <Link href={"#about?batata=true&cenoura=false"}>home</Link>
                            <Cards />
                        </div>


                        {currNotes && <EditNote note={currNotes} />}

                    </div>

                </div>
            </div>
        </Layout>
    )
}

module.exports = Home