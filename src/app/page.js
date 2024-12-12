"use client";
import Ellipse from "@/components/svgs/Ellipse";
import Step1Onboarding from "@/components/Step1Onboarding1";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import HomePage from "@/components/HomePage";
import HowDoesItWork3 from "@/components/HowDoesItWork3";
import HowDoesItWork2 from "@/components/HowDoesItWork2";
import HowDoesItWork1 from "@/components/HowDoesItWork1";
import Step3Onboarding from "@/components/Step3Onboarding";
import Step2Onboarding from "@/components/Step2Onboarding";
import HowDoesItWork4 from "@/components/HowDoesItWork4";
import Step3OnBoarding2 from "@/components/Step3OnBoarding2";
import EmailPage from "@/components/EmailPage";
import Step1Onboarding1 from "@/components/Step1Onboarding1";
export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <HomePage moveToPage={moveToPage} />;
      case 1:
        return (
          
            <Step1Onboarding1 moveToPage={moveToPage} />
          
        );
      case 2:
        return (
          
            <HowDoesItWork1 moveToPage={moveToPage} />
    
        );
      case 3:
        return <HowDoesItWork2 moveToPage={moveToPage} />;
      case 4:
        return <HowDoesItWork3 moveToPage={moveToPage} />;
      case 5:
        return <HowDoesItWork4 moveToPage={moveToPage} />;
      case 6:
        return <Step2Onboarding moveToPage={moveToPage} />;
      case 7:
        return <Step3Onboarding moveToPage={moveToPage} />;
      case 8:
        return <Step3OnBoarding2 moveToPage={moveToPage} />;
      case 9:
        return <EmailPage moveToPage={moveToPage} />;
      default:
        return <Step1Onboarding1 />;
    }
  };
  const moveToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className=" bg-blue-200 max-w-[100vw] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="overflow-hidden absolute bg-appbg w-[393px] h-[852px] font-header1">
        <AnimatePresence mode="wait">
        {renderPage()}

        </AnimatePresence>

        <Ellipse className=" absolute z-10 top-[334px] left-[70.94px] w-[909.12px] h-[909.12px]" />
        <Ellipse className=" absolute z-10 top-[-491px] left-[-486.06px] w-[909.12px] h-[909.12px]" />
      </div>
    </div>
  );
}
