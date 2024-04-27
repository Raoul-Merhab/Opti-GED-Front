import Image from 'next/image';
import React from 'react';

const OneFunc = () => {
    return (
        <div className='w-1/4 h-auto bg-white flex flex-col p-5 rounded-lg gap-6 border-solid'>
            <div className=' w-full h-[200px] relative rounded-lg'>    
                    <Image
                        src="/images/welcome1.png"
                        alt="Image"
                        layout="fill"
                        objectFit="cover"
                        className='rounded-lg'
                        />
            </div>
            
            <div className='flex flex-col gap-3'>
                <p className='text-[#131313] text-xl font-bold'>Titre n1</p>
                <p>Deploy, manage and debug applications with end-to-end ownership without experiencing bottlenecks or battling Kubernetes hurdles.</p>
            </div>
            
        </div>
    );
}

export default OneFunc;
