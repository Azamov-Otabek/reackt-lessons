import { Container } from "@containers";
import intro_img from "@image/intro_img.png";

export default function index() {
  return (
    <section className="pt-[92px] pb-[120px] bg-[#1C1E53]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-[597px]">
            <h1 className="font-semibold text-[42px] w-[595px] text-white mb-[32px]">Bangun dan Wujudkan Cita Bersama EDUFREE</h1>
            <p className="font-normal text-[16px] text-white mb-[62px]" >
              EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
              online yang bertujuan untuk membantu kamu meraih cita di bidang
              teknologi.
            </p>
            <div className="flex gap-[35px] items-center">
                <button className="py-[16px] px-[41px] bg-[#FCD980] text-center font-semibold">Lihat Kursus</button>
                <a className="flex items-center gap-[8px] text-white " href="#">Lihat Alur Belajar 
                <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <path d="M17.5 8.00065H2.5M11.6667 3.33398L17.5 8.00065L11.6667 3.33398ZM17.5 8.00065L11.6667 12.6673L17.5 8.00065Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></a>
            </div>
          </div>
          <div>
            <img src={intro_img} alt="img" />
          </div>
        </div>
      </Container>
    </section>
  );
}
