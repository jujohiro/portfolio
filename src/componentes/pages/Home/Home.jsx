import React from 'react';
import { Header } from '../../Layouts/Header/Header';
import { PerfilInit } from '../../Layouts/PerfilInit/PerfilInit';
import { Projects } from '../../Layouts/Projects/Projects';
import { ProfileAboutMe } from '../AboutMe/ProfileAboutMe'
export const Home = () => {
  return (
    <>
      <Header />
      <PerfilInit />
      <ProfileAboutMe />
      <Projects />
      
    
    </>
  );
};
