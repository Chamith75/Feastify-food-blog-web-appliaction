import { useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getfoodListFromServer } from '../redux/food.slice';
const FoodHome = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let FoodList = useSelector((state) => state.foods.FoodList);
    //let [FoodList,setFoodList]= useState([]);



    // let [FoodList, setFoodList] = useState([]);
    // let getfoodList = async () => {
    //     let url = "http://localhost:3004/foods";
    //     let response = await fetch(url);
    //     let data = await response.json();
        
    //     dispatch(ongetfoodList(data));
    //     //setFoodList(data)

    // }

    useEffect(() => {
        dispatch(getfoodListFromServer());
    })

    let showdetails = (food) => {
        navigate(`/fooddetails/${food.id}`);
    }
    return (
        <>
            <h1 className='d-flex justify-content-center'>FoodHome</h1>
            <section>
                <div className='row d-flex justify-content-center  mt-5'>
                    {
                        FoodList.map((food, index) => {
                            return (
                                <div key={food.id} className=" col-md-3 mb-4 d-flex justify-content-center">

                                    <div className="card cardwidth p-4" >

                                        <div className="card-body">
                                            <h5 className="card-title">{food.name}</h5>
                                            <p className="card-text">{food.description}</p>
                                            <button type="button" className="btn  btn-outline-primary" value={index} onClick={() => showdetails(food)} >info </button>
                                        </div>
                                    </div>
                                </div>


                            );
                        })
                    }
                </div>

                <div className='row'>

                </div>


            </section>

        </>
    );

}


export default FoodHome;