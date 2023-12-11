import Cars from '../images/Cars.png';

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '90px',
        paddingBottom: '90px',
      }}
    >
      <img src={Cars} style={{ width: '100%' }} />
      <h1 style={{ fontSize: '60px' }}>Rent Your Car Now</h1>
    </div>
  );
};

export default HomePage;
