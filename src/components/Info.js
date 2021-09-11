import React from 'react';
import { useParams } from 'react-router';
//we can use the parameters from the routes



const Info = () => {
    const {id, color, height, greeting} = useParams();
    //destructuring variable id from the parameters
    console.log("color is this: ", color)
    console.log("height is this: ", height)


    return (
        <div className = "container-sm mx-auto">
            <h3 className="display-4 mx-auto"> Hi, welcome to the info page. Play around with the route: the url path is localhost:3000/info/id/color/height/greeting</h3>
            <h4 className="display-5 mx-auto" style = {{color: color}}>Details About Person ID#{id}. They are {height} inches tall. They want to say <strong>{greeting}</strong></h4>
            { isNaN(id)?
                <h3>That is not an int id- please enter a number for the id route to work</h3>:
                ""    
            }
        </div>
    );
};



export default Info;