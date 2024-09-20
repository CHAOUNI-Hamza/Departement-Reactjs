import React from 'react';
function Aside({ setActiveComponent, activeComponent }) {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link" style={{ textAlign: 'center' }}>
                <span className="brand-text font-weight-light">FLSHM</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a type='button' className="d-block">Admin</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item menu-open">
                            <a href="#" className={`nav-link ${activeComponent === "Dashboard" ? "active" : ""}`} onClick={() => setActiveComponent("Dashboard")}>
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Pages de démarrage
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className={`nav-link ${activeComponent === "Users" ? "active" : ""}`} onClick={() => setActiveComponent("Users")}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Utilisateurs</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className={`nav-link ${activeComponent === "Professeur" ? "active" : ""}`} onClick={() => setActiveComponent("Professeur")}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Professeur</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className={`nav-link ${activeComponent === "Departement" ? "active" : ""}`} onClick={() => setActiveComponent("Departement")}>
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Département</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Aside;
