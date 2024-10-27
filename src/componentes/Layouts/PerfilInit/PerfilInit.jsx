import React from 'react'
import { ImgInitPerfil } from '../../UI/ImgInitPerfil/ImgInitPerfil'
import ImgProfile from '../../../assets/images/ImgProfile.jpeg'
import './PerfilInit.css'

export const PerfilInit = () => {
  return (
    <div className="perfil-main-container">
      <div className="perfil-container-img">
        <ImgInitPerfil src={ImgProfile} alt='ImgProfile' />
      </div>
      <div className="perfil-personalInit">
        <h1 className='name'>Hi I'm Juan José</h1>
      "DISEÑAMOS EL CAMBIO. DESARROLLAMOS EL FUTURO."
      </div>
    </div>
  )
}
