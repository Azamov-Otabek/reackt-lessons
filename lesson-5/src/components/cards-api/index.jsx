import "./style.scss";
import Card from "@ui/card";

export default function index({data}) {
  return (
    <section id="card-wrapper">
      <div className="container">
        <div className="card-wrapper">
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  category={item.category}
                  price={item.price}
                  rate={item.rating.rate}
                  count={item.rating.count}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
