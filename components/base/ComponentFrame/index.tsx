const ComponentFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex justify-center items-center p-4 rounded-lg border-4 border-neutral-200">
    {children}
  </div>
);

export default ComponentFrame;
