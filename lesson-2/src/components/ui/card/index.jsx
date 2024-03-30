
export default function index(props) {
  console.log(props);

  return (
    <div className="w-[350px] h-[600px] border-[2px] p-8 shadow-md">
        <img className="w-[200px] object-contain h-[200px] mx-auto" src={props.data.image} alt="" />
        <h3 className="text-left mt-5 font-bold font-serif mb-4" >{props.data.title}</h3>
        <p className="text-[14px] text">{props.data.description.length > 200 ? props.data.description.slice(0, 200) + ". . ." : props.data.description}</p>
    </div>
  )
}
