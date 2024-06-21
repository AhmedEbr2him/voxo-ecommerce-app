import { Icon } from '@iconify/react/dist/iconify.js';
import { Data } from '../../constants/mockData';

const ServicesSection = () => {
  return (
    <div className='section services-section'>
      <div className='container'>
        <ul className='services-list'>
          {Data.servicesData.map((item, index) => {
            const { icon, title, desc } = item;

            return (
              <li className='services-item' key={index}>
                <div className='icon'>
                  <Icon icon={icon} width='35' height='35' className='icon' />
                </div>

                <div className='text-content'>
                  <h3 className='title-medium'>{title}</h3>
                  <p className='label-large'>{desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ServicesSection;
