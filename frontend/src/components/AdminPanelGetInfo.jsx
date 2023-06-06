import React from "react";

function AdminPanelGet() {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
                <h3 className="mb-4 fw-bold color_guinda">Documents</h3>
            </div>
            <div className="col-12 col-sm-6 col-md-6 text-end" style={{marginTop: "30px"}}><a className="btn btn-danger btn_guinda" role="button" data-bss-hover-animate="pulse" href="create-document.html"><i className="fa fa-plus"></i>&nbsp;Ajouter un nouveau dossier</a></div>
        </div>
        <div className="row">
            <div className="col-12" style={{marginBottom: "20px"}}>
                <div className="card" style={{margin: "0px"}}>
                    <div className="card-body">
                        <h4 className="text-muted card-title"><strong>Filtres</strong></h4>
                        <div className="row">
                            <div className="col-6 col-md-4">
                                <div className="form-group mb-3"><label className="form-label text-muted fw-bold">Type de document*</label><select className="form-control" required="" name="location">
                                        <option value="exemple" defaultValue="">exemple</option>
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
                                            <option value="Terminé" defaultValue="">Terminé</option>
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
    )
}

export default AdminPanelGet;
