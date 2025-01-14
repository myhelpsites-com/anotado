function Layout({ children }) {
    return (
        <div className="container-fluid">
            <div class="row">
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 bg-light vh-100">
                    <SideNav />
                </div>
                <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    {children}
                </div>
            </div>
        </div>
    )
}