import React from 'react'
import { styled } from '@mui/material/styles';
import benefitsStyles from './BenefitsStyles';
import Image from '../Image/Image';
import benfitsImage1 from '../../images/benefits-image-1.jpg';
import benfitsImage2 from '../../images/benefits-image-2.jpg';
import benfitsImage3 from '../../images/benefits-image-3.jpg';

type BenefitsProps = {}

const StyledBenefits = styled('section')<BenefitsProps>(({ theme }) => benefitsStyles('strive'));

const Benefits: React.FC<BenefitsProps> = (props) => {
  return (
    <StyledBenefits>
      <div className='container'>
        <div className='benefits-title'>¡Una gran solución para ti!</div>
        <div className='benefits-subsection'>
          <div className='benefits-subsection-image-container'>
            <Image className='benefits-subsection-image' src={benfitsImage1}></Image>
          </div>
          <div className='benefits-subsection-text'>
            <div className='benefits-subsection-text-title'>
              Adquiere los mejores beneficios de la ciudad!
            </div>
            <div className='benefits-subsection-text-subtitle'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia eveniet, esse, repudiandae nisi amet, molestias reprehenderit minima fugiat cumque aperiam sequi! Necessitatibus, exercitationem nobis! Facilis, voluptate odit! Tempora, aperiam sed. Vero exercitationem facere explicabo neque nulla magni consequatur doloremque?
            </div>
          </div>
        </div>
        <div className='benefits-subsection'>
          <div className='benefits-subsection-text'>
            <div className='benefits-subsection-text-title'>
              Nosotros sí te damos la garantía que necesitas
            </div>
            <div className='benefits-subsection-text-subtitle'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat, corporis voluptatem hic necessitatibus accusamus quod nisi consectetur eum explicabo velit tempore magnam nesciunt, nostrum dolor nemo autem, quisquam eius.
            </div>
          </div>
          <div className='benefits-subsection-image-container'>
            <Image className='benefits-subsection-image' src={benfitsImage2}></Image>
          </div>
        </div>
        <div className='benefits-subsection'>
          <div className='benefits-subsection-image-container'>
            <Image className='benefits-subsection-image' src={benfitsImage3}></Image>
          </div>
          <div className='benefits-subsection-text'>
            <div className='benefits-subsection-text-title'>
              Estarás en manos de profesionales certificados
            </div>
            <div className='benefits-subsection-text-subtitle'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vero placeat quisquam commodi ea unde quis consequuntur, ipsam provident impedit suscipit tempora perspiciatis facilis ipsa a vitae eos totam possimus magnam quae architecto aspernatur itaque dicta veniam? Quas, enim nisi!
            </div>
          </div>
          
        </div>
      </div>
    </StyledBenefits>
  )
}

export default Benefits;