import { FaSlackHash } from 'react-icons/fa'

export const Footer = () => {

  const currentDate = new Date().getFullYear();

  return (
    <footer className='footer p-5 bg-gray-700 text-primary-content footer-center'>
        <div>
            <FaSlackHash className='text-4xl'/>
            Created by Massimiliano Celant
            <p>Copyright &copy; {currentDate} </p>
        </div>
    </footer>
  )
}