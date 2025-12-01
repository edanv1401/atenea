import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSessionValidation() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (!token || !user) {
      navigate('/');
    }
  }, [navigate]);
}
