import "./styles.scss";
import slide_logo from "@ic/slider_logo.svg";
import stars from "@ic/stars.svg";

export default function index() {
  return (
    <section id="slider">
      <div className="container">
        <h3>Memnuniyetini bildiren müşterilerimiz</h3>
        <div className="slider-wrapper">
          <div className="slide_card">
            <img src={slide_logo} alt="" />
            <h4>Jane Cooper</h4>
            <h3>The Walt Disney Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat donec sit morbi tristique massa enim. Consequat odio
              adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus
              faucibus quam. Quis commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="stars" />
          </div>
          <div className="slide_card">
            <img src={slide_logo} alt="" />
            <h4>Jane Cooper</h4>
            <h3>The Walt Disney Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat donec sit morbi tristique massa enim. Consequat odio
              adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus
              faucibus quam. Quis commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="stars" />
          </div>
          <div className="slide_card">
            <img src={slide_logo} alt="" />
            <h4>Jane Cooper</h4>
            <h3>The Walt Disney Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat donec sit morbi tristique massa enim. Consequat odio
              adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus
              faucibus quam. Quis commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="stars" />
          </div>
          <div className="slide_card">
            <img src={slide_logo} alt="" />
            <h4>Jane Cooper</h4>
            <h3>The Walt Disney Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat donec sit morbi tristique massa enim. Consequat odio
              adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus
              faucibus quam. Quis commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="stars" />
          </div>
          <div className="slide_card">
            <img src={slide_logo} alt="" />
            <h4>Jane Cooper</h4>
            <h3>The Walt Disney Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat donec sit morbi tristique massa enim. Consequat odio
              adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus
              faucibus quam. Quis commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="stars" />
          </div>
        </div>
      </div>
    </section>
  );
}
