import { useState } from "react";
import { render } from "react-dom";


const App = () => {
  let url = "http://localhost:3000/tasks"
  async function getData(){
    const response = await fetch('http://localhost:3000/tasks');
    const data = await response.json();
    console.log(data);
    renderData(data);
  }

  async function renderData(data){
    let renderID = document.querySelector('#renderDate')
    console.log(renderID);
    renderID.innerHTML = "";
    data.forEach(element => {
        let div = document.createElement('div')
        div.classList.add('flex', 'justify-between', 'mt-[15px]', 'gap-[30px]');
        div.innerHTML = `
          <h1 class="bg-[#6d69d4] py-[15px] px-[30px] text-[#ffffff] font-bold rounded-lg w-[170px] text-center text-[14px]">${element.task}</h1>
          <h1 class="bg-[#6d69d4] py-[15px] px-[30px] text-[#ffffff] font-bold rounded-lg w-[170px] text-center text-[14px]">${element.work}</h1>
          <h1 class="bg-[#6d69d4] py-[15px] px-[30px] text-[#ffffff] font-bold rounded-lg w-[170px] text-center text-[14px]">${element.date}</h1>
          <h1 class="bg-[#6d69d4] py-[15px] px-[30px] text-[#ffffff] font-bold rounded-lg w-[170px] text-center text-[14px]">${element.deadline}</h1>
          <h1 class="bg-[#6d69d4] py-[15px] px-[30px] text-[#ffffff] font-bold rounded-lg w-[170px] text-center text-[14px]">${element.status}</h1>
        `
        renderID.append(div);
    });
  }

  async function postData(db){
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(db)
    });
    const data = await response.json();
    renderData(data)
  }


  let [input1, setInput1] = useState("");
  let [input2, setInput2] = useState("");
  let [input3, setInput3] = useState("");
  let [input4, setInput4] = useState("");
  let [input5, setInput5] = useState("");

  function submitForm(e){
    if(input1 && input2 && input3 && input4 && input5){
      let user = {
        task: input1,
        work: input2,
        date: input3,
        deadline: input4,
        status: input5
      }

      postData(user);
    }else{
      alert("Please fill all the fields");
    }
  }

  getData();

  return (
    <>
        <header className="py-[20px] bg-[#141339] mb-[60px]">
            <div className="container">
                <h1 className="text-[coral] text-center text-[30px] font-bold font-serif">Enter task for FORM</h1>
            </div>  
        </header>

        <main>
           <section>
              <div className="form container">
                  <form className="w-[700px] mx-auto p-[30px] border-[1px]  shadow-xl">
                      <label className="w-full block border mb-3 p-3 rounded-xl">
                        <p className="text-[12px] text-[#00000058] font-semibold mb-[5px] font-serif">Enter title tasks</p>
                        <input onChange={(e) => (setInput1(e.target.value))} className="w-full outline-none text-[18px] font-semibold" type="text" placeholder="Enter title tasks" />
                      </label>
                      <label className="w-full block border mb-3 p-3 rounded-xl">
                        <p className="text-[12px] text-[#00000058] font-semibold mb-[5px] font-serif">Enter descreption tasks</p>
                        <input onChange={(e) => (setInput2(e.target.value))} className="w-full outline-none text-[18px] font-semibold" type="text" placeholder="Enter descreption tasks" />
                      </label>
                      <label className="w-full block border mb-3 p-3 rounded-xl">
                        <p className="text-[12px] text-[#00000058] font-semibold mb-[5px] font-serif">Enter deadline tasks</p>
                        <input onChange={(e) => (setInput3(e.target.value))} className="w-full outline-none text-[18px] font-semibold" type="date" />
                      </label>
                      <label className="w-full block border mb-3 p-3 rounded-xl">
                        <p className="text-[12px] text-[#00000058] font-semibold mb-[5px] font-serif">Enter priority tasks</p>
                        <input onChange={(e) => (setInput4(e.target.value))} className="w-full outline-none text-[18px] font-semibold" type="time"/>
                      </label>
                      <label className="w-full block border mb-3 p-3 rounded-xl">
                        <p className="text-[12px] text-[#00000058] font-semibold mb-[5px] font-serif">Enter status tasks</p>
                        <input onChange={(e) => (setInput5(e.target.value))} className="w-full outline-none text-[18px] font-semibold" type="text" placeholder="Enter status tasks" />
                      </label>
                      <div className="buttons flex justify-end items-center gap-4">
                        <button type="submit" onClick={(e) => (submitForm(e))} className="py-[10px] px-[20px] rounded-xl bg-[#141339] text-[coral] font-bold">Submit</button>
                        <button type="reset" className="py-[10px] px-[20px] rounded-xl bg-[#141339] text-[white] font-bold">Reset</button>
                      </div>
                  </form>
              </div>

              
           </section>

           <section className="mt-[60px]">
              <div className="w-[700px] mx-auto">
                  <div className="title flex justify-between">
                      <h3 className="bg-[#141339] py-[15px] px-[30px] text-[coral] font-bold rounded-lg w-[120px] text-center">Tittle</h3>
                      <h3 className="bg-[#141339] py-[15px] px-[30px] text-[coral] font-bold rounded-lg w-[120px] text-center">Work</h3>
                      <h3 className="bg-[#141339] py-[15px] px-[30px] text-[coral] font-bold rounded-lg w-[120px] text-center">Date</h3>
                      <h3 className="bg-[#141339] py-[15px] px-[30px] text-[coral] font-bold rounded-lg w-[120px] text-center">Dedline</h3>
                      <h3 className="bg-[#141339] py-[15px] px-[30px] text-[coral] font-bold rounded-lg w-[120px] text-center">Status</h3>
                  </div>
                  <div id="renderDate" className="mt-[15px]">
                      
                  </div>
              </div>
           </section> 
        </main>
    </>
  );
};

export default App;
