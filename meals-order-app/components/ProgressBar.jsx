const progressBar = [
  { progress: 1, name: "Menú", url: "/" },
  { progress: 2, name: "Resumen", url: "/summary" },
  { progress: 3, name: "Datos y Total", url: "/total" },
];

const ProgressBar = () => {
  return (
      <>
      <div className="flex justify-between mb-5">
          {progressBar.map(progress => (
              <button key={progress.progress} 
              className="text-2xl font-bold">
                  {progress.name}
              </button>
          ))}
      </div>
      </>
  );
};

export default ProgressBar;
