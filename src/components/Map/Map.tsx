import React from 'react';
//@ts-ignore
import GoogleMaps from "simple-react-google-maps";
import ReactWhatsapp from 'react-whatsapp';
import ContactForm from '../ContactForm/ContactForm';

type MapProps = {
}

const Map:React.FC<MapProps> = (props) => {

  return (
    <section className='flex justify-center items-center'>
      <div className='container flex flex-col items-center justify-between sm:m-8 lg:items-center lg:flex-row lg:mt-[5rem]'>
        <div className="m-8 lg:w-5/12 flex justify-center items-center flex-col">
          <ContactForm></ContactForm>
          <div className='relative w-full my-8 h-[1px] before:content-[""] before:absolute before:top-0 before:left-[5%] before:right-[5%] before:w-[90%] before:h-[1px] bg-gradient-to-r from-transparent via-black to-transparent'></div>
          <ReactWhatsapp className="border-none hover:bg-green-700 px-8 py-4 text-sm bg-green-500 text-white rounded-full shadow-sm" element="button" number="+52 7711580540" message="Hola, me gustaría conocer más sobre ustedes.">Envíanos un whatsapp</ReactWhatsapp>
        </div>
        <div className='w-full h-[30rem] lg:w-5/12'>
          <GoogleMaps
            apiKey={'AIzaSyCOHwFFRqzFaAZXDCLeGQMZhcl2PS77fAA'}
            style={{height: '100%', width: '100%'}}
            zoom={15}
            center={{ lat: 20.744325,lng: -103.446098 }}
          />
        </div>
      </div>
    </section>
  )
}


export default Map;