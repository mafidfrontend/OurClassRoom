import { useState } from "react";

function App() {
  const partalar = [
    [
      {
        bormi: true,
        oquvchi: {
          name: "Samandar",
          age: 18,
        },
      },
      {
        bormi: true,
        oquvchi: {
          name: "Abdulaziz",
          age: 18,
        },
      },
      {
        bormi: true,
        oquvchi: {
          name: "Baxrom",
          age: 19,
        },
      },
    ],
    [
      {
        bormi: true,
        oquvchi: {
          name: "Muhammad",
          age: 16,
        },
      },
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
    ],
    [
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: true,
        oquvchi: {
          name: "Asadbek",
          age: 18,
        },
      },
    ],
    [
      {
        bormi: true,
        oquvchi: {
          name: "Ozodbek",
          age: 18,
        },
      },
      {
        bormi: true,
        oquvchi: {
          name: "Ozodbek",
          age: 18,
        },
      },
      {
        bormi: false,
        oquvchi: null,
      },
    ],
    [
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: true,
        oquvchi: {
          name: "Abdulloh",
          age: 18,
        },
      },
    ],
    [
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
    ],
  ];

  const xona = {
    patalok_rangi: "yashil",
    proyekt_model: "epson",
    partalar: partalar,
    oynalar: [
      {
        oyna_ochiqligi: 2,
        boyi: 150,
        eni: 100,
      },
    ],
  };

  const [parta_random, setParta] = useState("");
  const [stul_random, setStul] = useState("");

  const random_qil = () => {
    const parta_random = Math.floor(Math.random() * 6);
    const stul_random = Math.floor(Math.random() * 3);
    setParta(parta_random);
    setStul(stul_random);
  };

  return (
    <div className="w-[1400px] mx-auto">
      <button
        onClick={random_qil}
        className="w-20 h-10 bg-green-500 rounded-xl cursor-pointer text-white"
      >
        random
      </button>
      <div className="w-[1400px] py-20 flex flex-wrap gap-10 mx-auto">
        {xona.partalar.map((stullar, partaIndex) => {
          return (
            <div key={partaIndex} className="w-max mx-auto">
              <div
                className={`w-[500px] h-[150px] ${
                  parta_random === partaIndex ? "bg-red-400" : "bg-yellow-100"
                }`}
              ></div>
              <div className="flex justify-around mt-3">
                {stullar.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-32  ${
                        parta_random === partaIndex && stul_random === index
                          ? "bg-red-400"
                          : "bg-green-500"
                      } rounded-md ${item.bormi ? "h-16" : "h-4"}`}
                    >
                      <p className="text-center text-2xl text-white">
                        {item.bormi && item.oquvchi
                          ? item.oquvchi.name.charAt(0)
                          : ""}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;