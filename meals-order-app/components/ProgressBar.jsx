import { useRouter } from "next/router";

const progressBar = [
  { progress: 1, name: "Menú", url: "/" },
  { progress: 2, name: "Resumen", url: "/summary" },
  { progress: 3, name: "Datos y Total", url: "/total" },
];

const ProgressBar = () => {
  const router = useRouter();

  const calculateProgress = () => {
    let value;
    if (router.pathname == "/") {
      value = 2;
    } else if (router.pathname == "/summary") {
      value = 50;
    } else {
      value = 100;
    }
    return value;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {progressBar.map((progress) => (
          <button
            key={progress.progress}
            className="text-2xl font-bold"
            onClick={() => {
              router.push(progress.url); //Te redirigue a esa url
            }}
          >
            {progress.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
