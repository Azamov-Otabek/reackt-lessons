import React from "react";
import {Container} from "@containers";
import tentang_img from "@image/tentangcami.png"

export default function index() {
  return (
    <section className="mt-[148px]">
      <Container>
        <div className="flex justify-between items-center">
            <div className="w-[624px] ">
                <p className="text-[18px] mb-[16px] font-normal text-[#232536]">Tentang Kami</p>
                <h1 className="text-[38px] text-[#232536] font-bold mb-[16px] ">EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh</h1>
                <p className="text-[18px] font-normal text-[#232536] opacity-[0.6]">Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan</p>
            </div>
            <div>
                <img src={tentang_img} alt="img" />
            </div>
        </div>
      </Container>
    </section>
  );
}
