import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Map(paramDict) {//doit commencer avec une majuscule
    return(
        <div className="map-clean">
            <iframe allowFullScreen="" frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJ6lQwx6fhc3Ufh-W0MM8sAa6MNNXpAKY&amp;q=Gembloux+gare%2C+Belgique&amp;zoom=15"
                    width="100%" height="450"></iframe>
        </div>

    )
}

export default Map;