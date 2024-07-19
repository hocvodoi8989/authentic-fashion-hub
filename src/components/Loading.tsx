import React from 'react';
import "@/style/loading.scss";

const Loading: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
