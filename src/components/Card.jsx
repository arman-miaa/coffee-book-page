
const Card = ({ coffee }) => {
    // console.log(coffee);
    const { name,image,category,origin,type,id,rating,popularity} = coffee || {};
    return (
        <div>
            <h1>{name} </h1>
        </div>
    );
};

export default Card;