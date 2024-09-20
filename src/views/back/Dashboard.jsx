import { useState } from "react";
import Nav from "../../components/back/Nav";
import Footer from "../../components/back/Footer";
import Aside from "../../components/back/Aside";
import Professeur from "../../components/back/Professeur";
import Departement from "../../components/back/Departement";
import Users from "../../components/back/Users";

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("Users");

    const renderComponent = () => {
        switch (activeComponent) {
            case "Professeur":
                return <Professeur />;
            case "Departement":
                return <Departement />;
            case "Users":
            default:
                return <Users />;
        }
    };

    return (
        <div className="wrapper">
            <Nav />

            <Aside setActiveComponent={setActiveComponent} activeComponent={activeComponent} />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">FLSHM</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container-fluid">
                        {renderComponent()}
                    </div>
                </div>
            </div>

            <aside className="control-sidebar control-sidebar-dark">
                <div className="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                </div>
            </aside>

            <Footer />
        </div>
    );
}

export default Dashboard;
