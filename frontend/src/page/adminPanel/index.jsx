import React from "react";
import AdminPanelInfo from "../../components/AdminPanelInfo";
import {useState, useEffect} from "react";

function AdminPanel() {
    const [repStatus, setRepStatus] = useState(0);

    function getCookie(name) {
        const cookieString = document.cookie;
        const cookies = cookieString.split(';');

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // Recherche du nom du cookie
            if (cookie.startsWith(`${name}=`)) {
                const cookieValue = cookie.substring(name.length + 1);
                return decodeURIComponent(cookieValue);
            }
        }

        return null;
    }

    const token = getCookie('jwt_test');
    console.log(token);

    async function checkToken(){
        await fetch('http://localhost:3000/adminPanel?',
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then(response => {
                setRepStatus(response.status);


            })
    }
    useEffect(() => {
        checkToken();
    }, []);
    console.log(repStatus);

    if (repStatus == 200){
        return (
            <div className="admin-panel">
                <AdminPanelInfo/>
            </div>
        );
    }
    else {
        return (
            <div className="admin-panel">
                <div className="card">
                    <div className="card-header">
                        <div className="text-header">Accès refusé</div>
                    </div>
                    <div className="card-body">
                        <div className="text-body">Vous n'avez pas les droits pour accéder à cette page.</div>
                    </div>
                </div>
            </div>
        );
    }


}

export default AdminPanel;