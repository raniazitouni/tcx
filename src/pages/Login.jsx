

import { useState  } from 'react'

import Group3Image from '../assets/Group-3.svg';

export default function Login() {
  const [mail, setmail] = useState("");
  const [psw, setpsw] = useState("");
  //const [error, setError] = useState('');
 


  return (
    <div className='flex justify-center items-center min-h-screen font-[poppins]'>
        <div className='flex flex-col w-1/3 items-center justify-center'>
            
            <img src={Group3Image} className=' w-2/3'/>
            <p className='text-center  text-s mt-2 text-gray-500'>Connectez-vous à votre compte</p>
            <div className='mt-20 w-full'>
                <label htmlFor="mail" className='  text-lg  text-gray-500 block'>Email</label>
                <input type="text" id="mail"  placeholder='info@example.com' value={mail} onChange={(e) => setmail(e.target.value)} className='bg-gray-200 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg text-s ' />
                {/*error && error === 'Email does not exist.' && <p>{error}</p>*/}
            </div>
            <div className='mt-5 w-full'>
                <label htmlFor="mail" className='  text-lg  text-gray-500 block'>Mot de passe  </label>
                <input type="password" id="mail"  placeholder='Entrez votre mot de passe ' value={psw} onChange={(e) => setpsw(e.target.value)} className='bg-gray-200 block w-full mt-2 mb-2 pl-6 h-10 rounded-lg' />
                {/*error && error === 'Incorrect password.' && <p>{error}</p>*/}
            </div>
            <a href="#" className='text-s  text-custom-blue text-right w-full'>Mot de passe oublié ?</a>
            <button className='bg-custom-blue rounded-lg text-white w-full mt-6 h-10' >Connectez-vous maintenant</button>
            <div className='flex flex-row mt-6 w-full items-center'> 
              <hr className="w-1/2 border-1 border-gray-300 " /> 
              <div className="mx-10 text-gray-500 text-xs">OU</div>
              <hr className="w-1/2 border-1 border-gray-300 " /> 
             
            </div>
            
            <button className='bg-white rounded-lg text-custom-blue  border border-custom-blue w-full mt-6 h-10' >Inscrivez-vous maintenant  </button>
        </div>
        </div>
    
  )
}

