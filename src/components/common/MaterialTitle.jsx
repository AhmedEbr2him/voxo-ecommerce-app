const MaterialTitle = ({ title, desc }) => {
  return (
    <div className='material-title'>
      <div className='title'>
        <h2>{title}</h2>
      </div>
      <div className='description'>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default MaterialTitle;
