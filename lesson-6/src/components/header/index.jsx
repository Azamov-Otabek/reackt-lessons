import "./style.scss";
import { Container } from "@containers";

const index = () => {
  return (
    <header className="py-[28px] bg-[#1C1E53]">
      <Container>
        <nav className="flex justify-between items-center">
          <h1 className="text-[24px] text-white font-semibold">[EDUFREE]</h1>
          <div className="flex gap-[72px] items-center">
            <ul className="flex gap-[34px] items-center">
              <li>
                <a className="flex items-center gap-[5px] text-white  text-[16px] font-normal" href="#">HOME</a>
              </li>
              <li>
                <a className="flex items-center gap-[5px] text-white  text-[16px] font-normal" href="#">TENTANG KAMI</a>
              </li>
              <li>
                <a className="flex items-center gap-[5px] text-white  text-[16px] font-normal" href="#">KURSUS</a>
              </li>
              <li>
                <a className="flex items-center gap-[5px] text-white  text-[16px] font-normal" href="#">FAQ</a>
              </li>
              <li>
                <a className="flex items-center gap-[5px] text-white  text-[16px] font-normal" href="#">
                  BLOG
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.33325 5.00065H4.99992C4.55789 5.00065 4.13397 5.17625 3.82141 5.48881C3.50885 5.80137 3.33325 6.22529 3.33325 6.66732V15.0007C3.33325 15.4427 3.50885 15.8666 3.82141 16.1792C4.13397 16.4917 4.55789 16.6673 4.99992 16.6673H13.3333C13.7753 16.6673 14.1992 16.4917 14.5118 16.1792C14.8243 15.8666 14.9999 15.4427 14.9999 15.0007V11.6673M11.6666 3.33398H16.6666M16.6666 3.33398V8.33398M16.6666 3.33398L8.33325 11.6673"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
            <button className="py-[13px] px-[42px] border-[1px] rounded-md text-white text-[16px]">Login</button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default index;
