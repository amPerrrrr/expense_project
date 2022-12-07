const checkRequire = (require) => {
    if (require === true) {
        return <span className="color-red-error">*</span>;
      }
  };
  
  export default checkRequire