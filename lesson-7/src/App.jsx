import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { Header, Footer} from "@component";
import {Main, Section, GetPosts, Inputs, Grid_Container, Container} from "@containers"
import {Posts} from "@axios/posts";


const App = () => {
  const [post, setPost] = useState([]);
 
 
  async function renderData(){
    Posts.GET()
    .then(res => {
       setPost(res.data)
     })

  }
    useEffect(() =>{
      renderData();
    }, [])

  function deletePost(e){
    const id = e.target.id;
    Posts.Delete(id);
    toast.info("Post Deleted Successfully", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() =>{
        window.location.href="/";
    }, 2000)
  }

  return (
    <>
     <ToastContainer />
      <Header />
      <Main>
          <Section>
              <Inputs setPost={setPost} posts={Posts}  />
          </Section>

          <Section>
            <Container>
              <Grid_Container title={"POSTS"}>
                {
                  (post.length != 0) ? post.map((post) => {
                    return (
                      <GetPosts key={post.id} item={post} deletePost={deletePost}/>
                    )
                  }) : false
                }
              </Grid_Container>
            </Container>
          </Section>
      </Main>
      <Footer />
    </>
  );
};

export default App;