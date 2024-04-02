import "./style.scss";
import {Container} from "@containers";
const index = () => {
    return (
        <footer className="bg-[#161827] py-[15px]">
            <Container>
                <div className="flex justify-center">
                    <p className="text-white font-serif font-semibold">CopyRight Demo Web Site APP</p>
                </div>
            </Container>
        </footer>
    );
};

export default index;