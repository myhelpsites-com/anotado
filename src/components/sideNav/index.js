function SideNav() {
    return (
        <div>
            <div>
                {/* personal */}
                <button type="button" class="btn d-flex w-100 gap-5 text-center p-0 pt-3 pb-3">
                    <span className="flex-20">
                        <i class="bi bi-person-fill f-18"></i>
                    </span>
                    <span className="text-left flex-60 bold">
                        Gabriel Paranhos
                    </span>
                    <span className="flex-20">
                        <i class="bi bi-arrow-down-right"></i>
                    </span>
                </button>
            </div>
            <div className="pt-3">
                <div class="form-group">
                    <input type="text"class="form-control rounded-10 border-0 pl-3 pr-3" name="" id="" aria-describedby="helpId" placeholder="Pesquisar notas..." />
                </div>
                <br/>
                {/* navItems */}
                {
                    pagesMenu.map((item, index) => {

                        return (
                            <Link href={`#${item.path}`}>
                                <button type="button" className="btn btn-white w-100 rounded-10 bold">
                                    {item.name}
                                </button>
                            </Link>
                        );
                    })
                }
            </div>
            <div>
                {/* configItems */}
            </div>
        </div>
    )
}

const pagesMenu = [
    {
        path: "#",
        name: "Minhas anotações"
    }
]