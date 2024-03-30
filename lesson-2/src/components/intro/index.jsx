import {Card} from "@ui";
import db from "../../../products (2).json";

export default function index() {
  console.log("object");
  return (
    <section>
        <div className="container grid grid-cols-4 justify-between gap-8 pt-[50px] pb-[50px]">
              {db.map((item, index, arr) => {
                    return <Card key={index} data={item}/>                
              })}
        </div>
    </section>
  )
}
