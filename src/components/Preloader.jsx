import   { useEffect } from 'react';
import '../Preloader.css'; // Подключаем CSS
import logo from '../assets/logo.png';


const Preloader = () => {
  useEffect(() => {
    // Убираем класс preloader-container после завершения анимации
    const timer = setTimeout(() => {
      document.querySelector('.preloader-container').classList.add('fade-out');
      document.querySelector('.page-content').classList.add('fade-in');
    }, 2000); // 2 секунды на выполнение прелоадера

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader-container">
      <div className="spinner">
        <div className="inner-circle circle1"></div>
        <div className="inner-circle circle2"></div>
        <div className="inner-circle circle3"></div>
        <div className="inner-circle circle4"></div>
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
