import React from "react";
import propTypes from "prop-types";

const AnimalList = ({animals}) => {
    return (
        <div className="ui cards">
            {
                animals.map(({id, name, headline, image, gallery}) =>
                    <div key={id} className="card" role="animal">
                        <div className="ui slide masked reveal image">
                            <img className="visible content"
                                 src={`http://codebangkok.com:5000/africa/hero/${image}.jpg`} alt={image}></img>
                            <img className="hidden content"
                                 src={`http://codebangkok.com:5000/africa/gallery/${gallery[0]}.jpg`} alt={image}></img>
                        </div>
                        <div className="content">
                            <div className="header">{name}</div>
                            <div className="meta">{headline}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

AnimalList.propTypes = {
    animals: propTypes.array.isRequired
}

export default AnimalList;
