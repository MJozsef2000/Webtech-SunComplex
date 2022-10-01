import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { Rolunk1, Rolunk2 } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Galery from '../components/Galery';
import { Start } from '../components/Start';
import {
  Folyamat1,
  Folyamat2,
  Folyamat3,
  Folyamat4,
  Folyamat5,
  Folyamat6,
  Szolgaltatas1} from '../components/InfoSection/Data';
import ExtendedInfoSection from '../components/ExtendedInfoSection';
import RolunkPage from "../components/RolunkPage";
import RolunkPage2 from '../components/RolunkPage2';
import Ceginfo from "../components/Ceginfo"
const Home = () => {  
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection />
      <Start />
      <InfoSection {...Folyamat1}/>
      <InfoSection {...Folyamat2}/>
      <InfoSection {...Folyamat3}/>
      <InfoSection {...Folyamat4}/>
      <InfoSection {...Folyamat5}/>
      <InfoSection {...Folyamat6}/>
      <ExtendedInfoSection {...Szolgaltatas1}/>
      <RolunkPage2 {...Rolunk1}/>
      <RolunkPage {...Rolunk2}/>
      <Ceginfo />
      <Services />
      <Galery />
    </>
  );
};

export default Home