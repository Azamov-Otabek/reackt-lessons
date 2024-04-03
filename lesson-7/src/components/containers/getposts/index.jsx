import React from "react";
import { Container} from "@containers";

export default function index({item, deletePost}) {
  return (
          <div className="shadow-2xl p-[20px] mb-5">
              <h1 className="text-center font-bold text-[25px] mb-3 ">{item.name}</h1>
              <p className="text-center text-[20px] font-medium mb-4">{item.body}</p>
              <button onClick={(e)=> deletePost(e)} id={item.id} className="p-[20px] bg-red-900 rounded-2xl text-white font-bold block mx-auto w-full ">DELETE</button>
          </div>
  );
}
