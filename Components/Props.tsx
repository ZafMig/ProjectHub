import React from 'react';

interface MyComponentProps {
  children: React.ReactNode;
  // Другие пропсы вашего компонента
}

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default MyComponent;
