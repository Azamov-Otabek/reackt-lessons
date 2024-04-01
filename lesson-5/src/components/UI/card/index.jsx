import "./style.scss";

const index = ({id, title, description, image, rate, count, category, price}) => {
  return (
    <div className="card">
      <div className="card-left">
        <img
          src={image}
          alt="IMG"
        />
      </div>
      <div className="card-right">
        <h2>Title: {title}</h2>
        <p>
          Description: {description}
        </p>
        <h3>Category: {category}</h3>
        <h4>Price: {price}</h4>
        <h5>Count: {count}</h5>
        <h6>Rate: {rate}</h6>
      </div>
    </div>
  );
};

export default index;
