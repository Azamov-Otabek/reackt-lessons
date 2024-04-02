import React from 'react';
import { useState, useEffect, useRef } from "react";
import {Header, Footer, Intro, Rating, LearningCard, TengtangCami, RecomendentCard} from "@component"
import {Container, Main} from "@containers";

const App = () => {
  return (
     <>
       <Header/>
        <Main>
            <Intro/>
            <Rating/>
            <LearningCard/>
            <TengtangCami/>
            <RecomendentCard/>
        </Main>
     </>
  );
};

export default App; 