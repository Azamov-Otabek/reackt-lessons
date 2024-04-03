import "./style.scss";
import {Container} from "@containers";

const index = () => {
    return (
        <header className="bg-[#111a37] py-[25px]">
            <Container>
                <nav className="flex justify-between items-center">
                    <h2 className="text-white text-[20px] font-bold">LOGO</h2>
                    <ul className="flex gap-[25px]">
                        <li><a className="text-white font-medium" href="#">Home</a></li>
                        <li><a className="text-white font-medium" href="#">About</a></li>
                        <li><a className="text-white font-medium" href="#">Services</a></li>
                        <li><a className="text-white font-medium" href="#">Contact</a></li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default index;