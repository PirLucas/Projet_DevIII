import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Billing-Table-with-Add-Row--Fixed-Header-Feature.css';
import '../assets/css/Bootstrap-DataTables.css';
import '../assets/css/Data-Summary-Panel---3-Column-Overview--Mobile-Responsive.css';
import '../assets/css/animate.min.css';
import '../assets/css/Data-Table.css';
import '../assets/css/Data-Table-styles.css';
import '../assets/css/Data-Table-with-Search-Sort-Filter-and-Zoom-using-TableSorter.css';
import '../assets/css/Ludens---1-Index-Table-with-Search--Sort-Filters-v20.css';
import '../assets/css/Ludens---Create-Edit-Form.css';
import '../assets/css/Ludens---Index-v2-with-Backend--Frontend-Filters.css';
import '../assets/css/Ludens---Index-v3-with-Backend--Frontend-Filters.css';
import '../assets/css/Profile-with-data-and-skills.css';
import '../assets/css/Table-With-Search.css';
import '../assets/css/Table-With-Search-search-table.css';
import '../assets/css/Tamplate-SB-Admin-on-BSS.css';
import Desk from "../assets/img/desk.jpg";
import Boy from "../assets/img/boy.jpg";
import '../assets/css/style-font.css';

function AdminPanelInfo() {
    return (
        <section>
            <div>
                    <nav className="navbar navbar-dark navbar-expand bg-dark sb-topnav">
                        <div className="container-fluid"><a className="navbar-brand" href="#"><img src={Desk} style={{width: "28px", marginRight: "10px", borderWidth: "3px", borderStyle: "solid", borderRadius: "8px"}}/>Feet Dreams Panel</a>
                            <form className="d-none d-md-inline-block order-2 ms-auto me-0 me-md-3 my-2 my-md-0">
                                <div className="input-group">
                                    <div className="input-group-append"></div>
                                </div>
                            </form>
                            <ul className="navbar-nav d-flex order-3 ms-auto ms-md-0">
                                <li className="nav-item d-flex d-sm-flex d-md-none justify-content-center align-items-center justify-content-sm-center" style={{marginRight: "7px"}}></li>
                                <li className="nav-item d-flex justify-content-center align-items-center">
                                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle active" aria-expanded="false" data-bs-toggle="dropdown" href="#">&nbsp;<img className="rounded-circle" src={Boy} style={{width: "40px", borderWidth: "2px", borderStyle: "solid"}}/></a>
                                        <div className="dropdown-menu dropdown-menu-end text-start shadow pulse animated" style={{marginTop: "16px"}}><a className="dropdown-item" href="#">Profil</a><a className="dropdown-item" href="#">Historique d'activité</a><a className="dropdown-item" href="#">Paramètres</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Se déconnecter</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div id="layoutSidenav" style={{backgroundColor: "whitesmoke"}}>
                        <div id="layoutSidenav_nav">
                            <div id="sidenavAccordion" className="sb-sidenav accordion sb-sidenav-dark">
                                <div className="sb-sidenav-menu">
                                    <div className="nav">
                                        <div>
                                            <div className="sb-sidenav-menu-heading"><span>Stats</span></div><a className="nav-link active" href="#">
                                                <div className="sb-nav-link-icon"><i className="fa fa-dashboard"></i></div><span>Dashboard</span>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="sb-sidenav-menu-heading"><span>Rendez-vous</span></div><a className="nav-link collapsed" href="#" aria-expanded="false" aria-controls="collapseLayouts" data-bs-toggle="collapse" data-bs-target="#collapseLayouts">
                                            <div className="sb-nav-link-icon"><i className="fa fa-dashboard"></i></div><span>Calendrier</span>

                                            </a>
                                        </div>
                                        { /*<div>
                                            <div className="sb-sidenav-menu-heading"><span>Labeling</span></div><a className="nav-link collapsed" href="#" aria-expanded="false" aria-controls="collapse2" data-bs-toggle="collapse" data-bs-target="#collapse2">
                                                <div className="sb-nav-link-icon"><i className="fa fa-dashboard"></i></div><span>Accordion 2 Layer</span>
                                                <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                                            </a>
                                            <div id="collapse2" className="collapse" aria-labelledby="heading2" data-bs-parent="#sidenavAccordion">
                                                <div id="sidenavAccordionPages" className="sb-sidenav-menu-nested nav accordion"><a className="nav-link collapsed" href="#" aria-expanded="false" aria-controls="pagesCollapseAuth" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth"><span>Menu Item</span>
                                                        <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                                                    </a>
                                                    <div id="pagesCollapseAuth" className="collapse" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                        <div className="sb-sidenav-menu-nested nav"><a className="nav-link" href="#">Menu Item</a><a className="nav-link" href="#">Menu Item</a><a className="nav-link" href="#">Menu Item</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>*/}
                                    </div>
                                </div>
                                <div className="sb-sidenav-footer">
                                    <div className="small"><span>Logged as : ADMIN</span></div>
                                </div>
                            </div>
                        </div>
                        <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-6">
                                            <h3 className="mb-4 fw-bold color_guinda">Documents</h3>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 text-end" style={{marginTop: "30px"}}><a className="btn btn-danger btn_guinda" role="button" data-bss-hover-animate="pulse" href="create-document.html"><i className="fa fa-plus"></i>&nbsp;Ajouter un nouveau dossier</a></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12" style={{marginBottom: "20px"}}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="text-muted card-title"><strong>Filtres</strong></h4>
                                                    <div className="row">
                                                        <div className="col-6 col-md-4">
                                                            <div className="form-group mb-3"><label className="form-label text-muted fw-bold">Type de document*</label><select className="form-control" required="" name="location">
                                                                    <option value="exemple" selected="">exemple</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="form-group mb-3"><label className="form-label text-muted fw-bold">Nom du client*</label><input type="text" className="form-control" placeholder="No. document"/></div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="form-group mb-3"><label className="form-label text-muted fw-bold">Date de naissance</label><input className="form-control" type="date"/></div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="form-group mb-3"><label className="form-label text-muted fw-bold">Sujet*</label><input type="text" className="form-control" placeholder="Sujet"/></div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="form-group mb-3"><label className="form-label text-muted fw-bold">Prénom*</label><input type="text" className="form-control" placeholder="Prénom"/></div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="form-group mb-3">
                                                                <div className="form-group mb-3"><label className="form-label text-muted fw-bold">Etat*</label><select className="form-control" required="" name="location">
                                                                        <option value="Pas vu">Pas vu</option>
                                                                        <option value="Terminé" selected="">Terminé</option>
                                                                        <option value="Téléchargé">Téléchargé</option>
                                                                    </select></div>
                                                            </div>
                                                        </div>
                                                        <div className="col"></div>
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col d-flex d-lg-flex justify-content-end justify-content-lg-end"><button className="btn btn-warning btn_limpiar" type="button">Filtrer</button><button className="btn btn-danger btn-sm reset btn_guinda" type="button" style={{margin: "2px"}}>Supprimer les filtres</button><button className="btn btn-warning btn-sm btn_limpiar" id="zoom_in" type="button" zoomclick="ChangeZoomLevel(-10);" style={{margin: "2px"}}><i className="fa fa-search-plus"></i></button><button className="btn btn-warning btn-sm btn_limpiar" id="zoom_out" type="button" zoomclick="ChangeZoomLevel(-10);" style={{margin: "2px"}}><i className="fa fa-search-minus"></i></button><button className="btn btn-success btn_cancelar" type="button">Générer</button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <div className="table-responsive border_table">
                                                <table className="table table-striped table tablesorter" id="ipi-table">
                                                    <thead className="thead-dark">
                                                        <tr className="table_top_color">
                                                            <th className="text-center">Dossier</th>
                                                            <th className="text-center">etat</th>
                                                            <th className="text-center">lorem ipsum</th>
                                                            <th className="text-center">Date</th>
                                                            <th className="text-center">Nombre de séances</th>
                                                            <th className="text-center">lorem ipsum</th>
                                                            <th className="text-center filter-false sorter-false">Options</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-center">
                                                        <tr></tr>
                                                        <tr>
                                                            <td>John Doe</td>
                                                            <td>
                                                                <p data-bs-toggle="tooltip" data-bss-tooltip="" title="Déjà téléchargé"><i className="fas fa-check text-info"></i></p>
                                                                <p data-bs-toggle="tooltip" data-bss-tooltip="" title="Pas vu"><i className="far fa-window-close text-danger"></i></p>
                                                                <p data-bs-toggle="tooltip" data-bss-tooltip="" title="Doit être validé"><i className="fas fa-pause text-warning"></i></p>
                                                            </td>
                                                            <td>lorem ipsum</td>
                                                            <td>12-02-2023</td>
                                                            <td>10</td>
                                                            <td>lorem ipsum</td>
                                                            <td className="text-center align-middle" style={{maxHeight: "60px", height: "60px"}}><a className="btn btn-dark btnMaterial btn-flat primary semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="attach-document.html" title="Attacher un document"><i className="fas fa-paperclip text-warning"></i></a><a className="btn btnMaterial btn-flat primary semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="show.html" title="Détails"><i className="far fa-eye"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="finish-document.html" title="Télécharger"><i className="fas fa-check text-info"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="send-document.html" title="Déplacer"><i className="fas fa-arrows-alt"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="create-document.html" title="Modifier"><i className="fas fa-pen"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" title="Lorem Ipsum"><i className="fas fa-undo"></i></a><a className="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" data-bs-toggle="modal" data-bss-tooltip="" style={{marginLeft: "5px"}} data-bs-target="#delete-modal" href="#" title="Supprimer"><i className="fas fa-trash btnNoBorders" style={{color: "#DC3545"}}></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mary Sue</td>
                                                            <td>
                                                                <p data-bs-toggle="tooltip" data-bss-tooltip="" title="Déjà téléchargé"><i className="fas fa-check text-info"></i></p>
                                                                <p data-bs-toggle="tooltip" data-bss-tooltip="" title="Pas vu"><i className="far fa-window-close text-danger"></i></p>
                                                                <p data-bs-toggle="tooltip" data-bss-tooltip="" title="Doit être validé"><i className="fas fa-pause text-warning"></i></p>
                                                            </td>
                                                            <td>lorem ipsum</td>
                                                            <td>04-02-2023</td>
                                                            <td>1</td>
                                                            <td>lorem ipsum</td>
                                                            <td className="text-center align-middle" style={{maxHeight: "60px", height: "60px"}}><a className="btn btn-dark btnMaterial btn-flat primary semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="attach-document.html" title="Attacher un document"><i className="fas fa-paperclip text-warning"></i></a><a className="btn btnMaterial btn-flat primary semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="show.html" title="Détails"><i className="far fa-eye"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="finish-document.html" title="Télécharger"><i className="fas fa-check text-info"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="send-document.html" title="Déplacer"><i className="fas fa-arrows-alt"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="create-document.html" title="Modifier"><i className="fas fa-pen"></i></a><a className="btn btnMaterial btn-flat success semicircle" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" title="Lorem ipsum"><i className="fas fa-undo"></i></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default AdminPanelInfo;