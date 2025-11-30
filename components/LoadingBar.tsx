import React, { useEffect, useState } from 'react';

export const LoadingBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <div className="loading-line" />;
};