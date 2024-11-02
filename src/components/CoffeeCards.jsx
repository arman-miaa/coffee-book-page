import { useParams } from "react-router-dom";


const CoffeeCards = () => {
    const {category} = useParams();
    console.log(category);
    return (
        <div>
            <h2>Coffee Cards ..... {category} </h2>
        </div>
    );
};

export default CoffeeCards;