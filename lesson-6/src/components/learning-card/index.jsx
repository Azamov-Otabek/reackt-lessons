import {Grid_container_wrapper, Container} from "@containers";
import {LearningCardss} from "@ui";


export default function index() {
  let arr = [1,2,3,4,5,6];
  return (
    <section className="mt-[122px]">
        <Container>
                <h2 className="mb-[62px] font-bold text-[38px] w-[620px] mx-auto text-center">Keuntungan Bergabung Dengan  E-Learning EDUFREE</h2>
                <Grid_container_wrapper>
                  {
                      arr.map(() => {
                        return (
                          <LearningCardss/>
                        )
                      })
                  }
                </Grid_container_wrapper>
        </Container>
    </section>
  )
}
