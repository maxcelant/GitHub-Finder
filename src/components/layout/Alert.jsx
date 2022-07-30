import { BiErrorCircle } from 'react-icons/bi';
import { Fragment, useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

export const Alert = () => {

  const { alert } = useContext(AlertContext);

  return alert && (
    <p className='flex.items-start.mb-4.space-x-2'>
        { alert.type === "error" && (
            <div className="flex-none px-2 mx-2 pb-3">
                <BiErrorCircle className='inline pr-2 text-5xl'/>
                <p className='inline text-lg font-bold align-middle'>
                    <strong>{alert.message}</strong>
                </p>
            </div>
        )}
    </p>
  )
}
