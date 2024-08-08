import React from 'react';
import Brake from '../../assets/icons/brake.svg';
import Gear from '../../assets/icons/gear.svg';
import Suspension from '../../assets/icons/suspension.svg';
import OilChange from '../../assets/icons/oilchange.svg';
import Correia from '../../assets/icons/correia.svg';
import Engine from '../../assets/icons/engine.svg';
import Vela from '../../assets/icons/vela.svg';
import Car from '../../assets/icons/car.svg';
import Injection from '../../assets/icons/injection.svg';

const Services = () => {
  return (
    <div className='dark:bg-black w-11/12 lg:w-2/3 mx-auto mt-20 h-auto p-2 md:p-10 flex flex-col items-center gap-1' id='services'>
        <p className='text-sm font-semibold mb-2 font-Poppins text-gray-800 dark:text-gray-700 uppercase '>conheça mais sobre</p>
        <p className='text-3xl mb-10 font-Poppins text-red-500 tracking-tight uppercase font-medium'>Nossos serviços</p>
        <div className="flex w-full md:max-w-max gap-2 flex-wrap md:justify-between justify-around" id='services'>
        {/* Brake */}
        <div className='cursor-pointer hover:shadow-[0_0_30px_1px_rgba(125,39,39,0.7)] transition-all hover:scale-105 p-2 my-1 w-full h-64 md:w-72 md:h-64 bg-trasnparent dark:bg-black border dark:border-t-gray-800 dark:border-x-gray-800 border-b-8 border-b-red-500 hover:border-none rounded-xl text-center'>
            <img src={Brake} className='mx-auto max-w-20 md:max-w-20 mt-2 md:mt-5'/>
            <p className='dark:text-white text-2xl md:text-xl mt-3 font-Poppins'>Freios</p>
            <p className=' md:block w-5/6 mx-auto text-center text-gray-500 font-medium md:text-xs mt-4 md:mt-2 font-Poppins'>Serviço de reparo de freios para garantir um desempenho seguro e confiável.</p>
        </div>

        {/* Gear */}
        <div className='cursor-pointer hover:shadow-[0_0_30px_1px_rgba(125,39,39,0.7)] transition-all hover:scale-105 p-2 my-1 w-full h-64 md:w-72 md:h-64 bg-trasnparent dark:bg-black border dark:border-t-gray-800 dark:border-x-gray-800 border-b-8 border-b-red-500 hover:border-none rounded-xl text-center'>
            <img src={Gear} className='mx-auto max-w-20 md:max-w-20 mt-2 md:mt-5'/>
            <p className='dark:text-white text-2xl md:text-xl mt-3 font-Poppins'>Transmissão</p>
            <p className='md:block w-5/6 mx-auto text-center text-gray-500 font-medium md:text-xs mt-4 md:mt-2 font-Poppins'>Serviço de reparo e manutenção de transmissão para assegurar seu funcionamento correto.</p>
        </div>

        {/* Suspension */}
        <div className='cursor-pointer hover:shadow-[0_0_30px_1px_rgba(125,39,39,0.7)] transition-all hover:scale-105 p-2 my-1 w-full h-64 md:w-72 md:h-64 bg-trasnparent dark:bg-black border dark:border-t-gray-800 dark:border-x-gray-800 border-b-8 border-b-red-500 hover:border-none rounded-xl text-center'>
            <img src={Suspension} className='mx-auto max-w-20 md:max-w-20 mt-2 md:mt-5'/>
            <p className='dark:text-white text-2xl md:text-xl mt-3 font-Poppins'>Suspensão</p>
            <p className=' md:block w-5/6 mx-auto text-center text-gray-500 font-medium md:text-xs mt-4 md:mt-2 font-Poppins'>Serviço de diagnóstico e reparo da suspensão para um conforto e segurança ideais.</p>
        </div>

        {/* Oil Change */}
        <div className='cursor-pointer hover:shadow-[0_0_30px_1px_rgba(125,39,39,0.7)] transition-all hover:scale-105 p-2 my-1 w-full h-64 md:w-72 md:h-64 bg-trasnparent dark:bg-black border dark:border-t-gray-800 dark:border-x-gray-800 border-b-8 border-b-red-500 hover:border-none rounded-xl text-center'>
            <img src={OilChange} className='mx-auto max-w-20 md:max-w-20 mt-2 md:mt-5'/>
            <p className='dark:text-white text-2xl md:text-xl mt-3 font-Poppins'>Troca de óleo</p>
            <p className=' md:block w-5/6 mx-auto text-center text-gray-500 font-medium md:text-xs mt-4 md:mt-2 font-Poppins'>Serviço de troca de óleo para manter o motor em ótimas condições.</p>
        </div>

        {/* Correia */}
        <div className='cursor-pointer hover:shadow-[0_0_30px_1px_rgba(125,39,39,0.7)] transition-all hover:scale-105 p-2 my-1 w-full h-64 md:w-72 md:h-64 bg-trasnparent dark:bg-black border dark:border-t-gray-800 dark:border-x-gray-800 border-b-8 border-b-red-500 hover:border-none rounded-xl text-center'>
            <img src={Correia} className='mx-auto max-w-20 md:max-w-20 mt-2 md:mt-5'/>
            <p className='dark:text-white text-2xl md:text-xl mt-3 font-Poppins'>Troca de correias</p>
            <p className=' md:block w-5/6 mx-auto text-center text-gray-500 font-medium md:text-xs mt-4 md:mt-2 font-Poppins'>Serviço de substituição de correias para manter o funcionamento adequado do motor.</p>
        </div>

        {/* Engine */}
        <div className='cursor-pointer hover:shadow-[0_0_30px_1px_rgba(125,39,39,0.7)] transition-all hover:scale-105 p-2 my-1 w-full h-64 md:w-72 md:h-64 bg-trasnparent dark:bg-black border dark:border-t-gray-800 dark:border-x-gray-800 border-b-8 border-b-red-500 hover:border-none rounded-xl text-center'>
            <img src={Engine} className='mx-auto max-w-20 md:max-w-20 mt-2 md:mt-5'/>
            <p className='dark:text-white text-2xl md:text-xl mt-3 font-Poppins'>Motor</p>
            <p className=' md:block w-5/6 mx-auto text-center text-gray-500 font-medium md:text-xs mt-4 md:mt-2 font-Poppins'>Serviço de diagnóstico e reparo do motor para manter seu desempenho.</p>
        </div>

        {/* Vela */}
        <div className='cursor-pointer hover:shadow-[0_0_30px_1px_rgba(125,39,39,0.7)] transition-all hover:scale-105 p-2 my-1 w-full h-64 md:w-72 md:h-64 bg-trasnparent dark:bg-black border dark:border-t-gray-800 dark:border-x-gray-800 border-b-8 border-b-red-500 hover:border-none rounded-xl text-center'>
            <img src={Vela} className='mx-auto max-w-20 md:max-w-20 mt-2 md:mt-5'/>
            <p className='dark:text-white text-2xl md:text-xl mt-3 font-Poppins'>Funcionamento</p>
            <p className=' md:block w-5/6 mx-auto text-center text-gray-500 font-medium md:text-xs mt-4 md:mt-2 font-Poppins'>Serviço para garantir o funcionamento eficiente dos componentes essenciais do veículo.</p>
        </div>

        {/* Car */}
        <div className='cursor-pointer hover:shadow-[0_0_30px_1px_rgba(125,39,39,0.7)] transition-all hover:scale-105 p-2 my-1 w-full h-64 md:w-72 md:h-64 bg-trasnparent dark:bg-black border dark:border-t-gray-800 dark:border-x-gray-800 border-b-8 border-b-red-500 hover:border-none rounded-xl text-center'>
            <img src={Car} className='mx-auto max-w-20 md:max-w-20 mt-2 md:mt-5'/>
            <p className='dark:text-white text-2xl md:text-xl mt-3 font-Poppins'>Revisões</p>
            <p className=' md:block w-5/6 mx-auto text-center text-gray-500 font-medium md:text-xs mt-4 md:mt-2 font-Poppins'>Serviço de revisão geral para manter seu veículo funcionando sem problemas.</p>
        </div>

        {/* Injection */}
        <div className='cursor-pointer hover:shadow-[0_0_30px_1px_rgba(125,39,39,0.7)] transition-all hover:scale-105 p-2 my-1 w-full h-64 md:w-72 md:h-64 bg-trasnparent dark:bg-black border dark:border-t-gray-800 dark:border-x-gray-800 border-b-8 border-b-red-500 hover:border-none rounded-xl text-center'>
            <img src={Injection} className='mx-auto max-w-20 md:max-w-20 mt-2 md:mt-5'/>
            <p className='dark:text-white text-2xl md:text-xl mt-3 font-Poppins'>Injeção eletrônica</p>
            <p className=' md:block w-5/6 mx-auto text-center text-gray-500 font-medium md:text-xs mt-4 md:mt-2 font-Poppins'>Serviço de manutenção e reparo da injeção eletrônica para otimizar o consumo e desempenho do veículo.</p>
        </div>
        </div>
    </div>
  );
}

export default Services;
