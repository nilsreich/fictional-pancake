export default function User() {
  return (
    <>
      <div className="flex items-center border-b justify-between">
        <div className="flex items-center">
          <div>
            <svg
              className="h-6 w-6"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex  truncate text-center">
          <div>
            <div className="truncate">Lineare Funktionen</div>
            <div className="text-sm">06.05.22</div>
          </div>
        </div>
        <div className="">
          <div className="mr-0 ml-auto w-min bg-blue-600 p-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-between border-t border-gray-300 px-2 py-1">
        <div className="flex justify-center text-xs text-red-600">
          <div>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>live</div>
        </div>
        <div className="text-xs">8:10</div>
        <div className="text-xs">online</div>
      </div>
      <div className="m-4">
        <div className="text-3xl">Lineare Funktionen</div>
        <div>Berechne die folgenden Summen</div>
        <div className="my-3 flex">
          <div>a) 34+23 =</div>
          <div>
            <input
              type="text"
              className=" text-right px-2 bg-white ml-2 mr-2 w-12 border-b border-green-600"
              disabled
              value="43"
            />
          </div>
          <div className="flex-1 text-right">
            <button className="text-green-600 px-2 py-0.5 text-xs uppercase tracking-wide text-white">
              richtig
            </button>
          </div>
        </div>
        <div className="my-3 flex">
          <div>b) 31254+543 =</div>
          <div>
            <input
              type="text"
              className="ml-2 bg-white mr-2 w-12 border-b border-red-300 text-right px-2 line-through"
              value="34"
              disabled
            />
          </div>
          <div>48</div>
          <div className="flex-1 text-right">
            <button
              disabled
              className="text-red-600 px-2 py-0.5 text-xs uppercase tracking-wide text-white"
            >
              falsch
            </button>
          </div>
        </div>
        <div className="my-3 flex">
          <div>c) 89+2433 =</div>
          <div>
            <input
              type="text"
              className="ml-2 mr-2 w-12 border-b border-gray-300"
            />
          </div>
          <div className="flex-1 text-right">
            <button className="bg-gray-300 px-2 py-0.5 text-xs uppercase tracking-wide text-gray-600">
              prüfen
            </button>
          </div>
        </div>
        <div className="my-3 flex">
          <div>d) 954+323 =</div>
          <div>
            <input
              type="text"
              className="ml-2 mr-2 w-12 border-b border-gray-300"
            />
          </div>
          <div className="flex-1 text-right">
            <button className="bg-gray-300 px-2 py-0.5 text-xs uppercase tracking-wide text-gray-600">
              prüfen
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

User.getLayout = function getLayout(user) {
  return <>{user}</>;
};
