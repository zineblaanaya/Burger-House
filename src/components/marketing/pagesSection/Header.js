import React from 'react';
import Logo from '../../../medias/svg/Logo-burger-house.svg';
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg';
import Button from '../../elements/Button';


const Header = () => {
    return (
        <div className = "flex items-center justify-between py-10">
            <div className="h-20 w-full">
                <img src={Logo} alt="Burger House App" className='w-64'/>
            </div>
            <div className="  w-full text-secondary ">
                <div className="flex items-center justify-end">
                <img src={Icone} alt="" className="w-5 h-5 mr-1"/>
                <span>Commandez votre repas en ligne</span></div>
                <div className='mt-5 flex items-center justify-end '>
                    <Button className={'bg-primary hover:bg-secondary'}>
                        Inscription
                    </Button>
                    <Button className={'bg-secondary hover:bg-primary'} >
                        Connexion
                    </Button>
                    
                </div>
                
            </div>
      
   

            
        </div>
    );
};

export default Header;