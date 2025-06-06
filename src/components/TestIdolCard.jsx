function IdolCard({ idol }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={`./assets/images/${idol.Profile}.png`}
        alt={idol.name}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '2px solid #f96d96',
        }}
      />
      <div>{idol.name}</div>
      <div style={{ fontSize: '12px', color: '#aaa' }}>{idol.group}</div>
    </div>
  );
}

export default IdolCard;
