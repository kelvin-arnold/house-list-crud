import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './../../components';

const LayoutAuth: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Button label='Go to Houses' onClick={() => navigate('/houses/')} />
    </div>
  );
};

export default LayoutAuth;
