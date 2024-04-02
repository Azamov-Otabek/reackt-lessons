import React from "react";
import { Container, Grid_container_wrapper } from "@containers";
import {RecCard} from "@ui";
import rec1 from "@image/rec (1).png";
import rec2 from "@image/rec (2).png";
import rec3 from "@image/rec (3).png";

let arr = [rec1, rec2, rec3];

export default function index() {
  return (
    <section className="mt-[150px]">
      <Container>
        <div className="flex justify-between items-center pb-[30px] border-b-[1px] border-[#00000063] mb-[62px]">
          <h1 className="font-bold text-[38px] w-[450px]">Rekomendasi Kursus Untuk Kamu</h1>
          <div className="flex items-center gap-[50px]">
                <button className="py-[16px] px-[41px] bg-[#] font-semibold text-[16px] ">Kategori</button>
                <button className="py-[16px] px-[41px] bg-[#FCD980] font-semibold text-[16px] ">Lihat Semua</button>
          </div>
        </div>

        <Grid_container_wrapper>
                    {
                        arr.map((item, index) => {
                            return (
                                <RecCard key={index} img={item} />
                            )
                        })
                    }
        </Grid_container_wrapper>
      </Container>
    </section>
  );
}
