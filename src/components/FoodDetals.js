import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getfoodItemFromServer } from "../redux/food.slice";

const FoodDetails = () => {
    const Sfood = useSelector((state) => state.foods.Sfood);
    let { id } = useParams();
    let dispatch = useDispatch();
    //let [Sfood, setSfood] = useState([]);

    useEffect(() => {
        // let getfoodItem = async () => {
        //     let url = `http://localhost:3004/foods/${id}`;
        //     let response = await fetch(url);
        //     let data = await response.json();
        //     // setSfood(data);
        //     dispatch(ongetfoodItem(data))
        //     console.log(id)




        // }
        if (id) {
            dispatch(getfoodItemFromServer({id}));
        }
        
    },[id, dispatch])


    return (
        <section>
            <div className='row d-flex justify-content-center  mt-5'>
                {


                    <div key={Sfood.id} className=" col-md-3 mb-4 d-flex justify-content-center">

                        <div className="card cardwidth p-4" >

                            <div className="card-body p-3">
                                <h5 className="card-title">{Sfood.name}</h5>
                                <h6 className="card-title">Description</h6>
                                <p className="card-text">{Sfood.description}</p>
                                <h6 className="card-title">Recipe</h6>
                                <p className="card-text">{Sfood.recipe}</p>

                            </div>
                        </div>
                    </div>




                }
            </div>

            <div className='row'>

            </div>


        </section>
    );
}

export default FoodDetails;