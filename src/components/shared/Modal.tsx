const ModalView: CFC<{ showing?: boolean }> = ({ children, showing }) => {
  return (
    <>
      {showing && (
        <div className="absolute top-0 left-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur">
          <div className="max-h-[90%] max-w-[90%] overflow-clip rounded-md border bg-slate-50 drop-shadow-md">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalView;
