const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-icon">📊</span>
          <div className="loading-text">
            <span className="loading-name">Rosana Evangelista</span>
            <span className="loading-subtitle">Estudio Contable</span>
          </div>
        </div>
        
        <div className="loading-bar">
          <div className="loading-bar-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;





