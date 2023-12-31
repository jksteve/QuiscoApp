import Image from 'next/image';

import useQuiosco from './../hooks/useQuiosco';
import Category from './Category';


const Sidebar = () => {
  
    const {categories} = useQuiosco()
  return (
    <div className={'shadow-lg'}>
        <Image 
            width={300} 
            height={100} 
            src={'/assets/img/logo.svg'} 
            alt={'Image Logo'}
            className={'p-14'}
        />
    
        <nav className="mt-10">
          {
            categories.map(category => (
              <Category
                key={category.id}
                category={category}
              />
            ))
          }
        </nav>
    </div>
  )
}

export default Sidebar
