import React from 'react'
import { styled } from '@mui/material/styles';
import benefitsStyles from './BenefitsStyles';
import Image from '../Image/Image';
import benfitsImage1 from '../../images/rentermx-benefits-1.jpg';
import benfitsImage2 from '../../images/rentermx-benefits-2.jpg';
import benfitsImage3 from '../../images/rentermx-benefits-3.jpg';

type BenefitsProps = {}

const StyledBenefits = styled('section')<BenefitsProps>(({ theme }) => benefitsStyles('konfio'));

const Benefits: React.FC<BenefitsProps> = (props) => {
  return (
    <StyledBenefits id="benefits-section">
      <div className='container'>
        <div className='benefits-title'>¡Una gran solución para ti!</div>
        <div className='benefits-subsection'>
          <div className='benefits-subsection-image-container benefits-subsection-left-halo'>
            <Image className='benefits-subsection-image' src={benfitsImage1}></Image>
          </div>
          <div className='benefits-subsection-text'>
            <div className='benefits-subsection-text-title'>
              Expande tu negocio más allá de las fronteras locales
            </div>
            <div className='benefits-subsection-text-subtitle'>
              Una página web brinda la oportunidad de llegar a un público global las 24 horas del día, los 7 días de la semana, ya que
              no estás limitado a una ubicación física específica.
              Esto aumentará significativamente el alcance de tu negocio y te proporcionará acceso a nuevos clientes potenciales de todos lados.
            </div>
          </div>
        </div>
        <div className='benefits-subsection'>
          <div className='benefits-subsection-text'>
            <div className='benefits-subsection-text-title'>
              Tendrás mayor visibilidad y marketing en línea
            </div>
            <div className='benefits-subsection-text-subtitle'>
              La presencia en línea a través de una página web te brinda una plataforma para aumentar tu visibilidad y promocionar tu negocio de manera efectiva.
              Además, puedes utilizar las redes sociales y el contenido de calidad para atraer a tu público objetivo y generar interés en tus productos o servicios.
            </div>
          </div>
          <div className='benefits-subsection-image-container benefits-subsection-right-halo'>
            <Image className='benefits-subsection-image' src={benfitsImage2}></Image>
          </div>
        </div>
        <div className='benefits-subsection'>
          <div className='benefits-subsection-image-container benefits-subsection-left-halo'>
            <Image className='benefits-subsection-image' src={benfitsImage3}></Image>
          </div>
          <div className='benefits-subsection-text'>
            <div className='benefits-subsection-text-title'>
              Mantente siempre conectado con tus clientes.
            </div>
            <div className='benefits-subsection-text-subtitle'>
            Puedes proporcionar detalles sobre tus servicios, precios, horarios de atención, testimonios de clientes y otra información relevante de manera fácil y accesible.
            Además, les permite a tus clientes mantenerse conectado contigo, lo que agiliza el proceso de venta y mejora la satisfacción del cliente.
            </div>
          </div>
          
        </div>
      </div>
    </StyledBenefits>
  )
}

export default Benefits;