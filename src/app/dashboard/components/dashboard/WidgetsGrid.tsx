'use client'
import { SimpleWidget } from './SimpleWidget'
import { IoCalculator } from 'react-icons/io5'
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {

    
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center">
    <SimpleWidget 
        title={ `${isCart}` }
        subTitle='Productos agregados'
        label="Contador"
        icon={<IoCalculator size={ 70 } className='text-blue-600' /> }
        href='/dashboard/counter'
    />
   {/*  <SimpleWidget /> */}
  </div>
  )
}
