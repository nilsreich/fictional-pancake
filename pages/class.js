export default function Class(){



    return(
        <div className="px-20 flex-1">
  <div className="mx-8 mt-4 mb-2 flex items-center border bg-gray-50">
    <input className="flex-1 bg-transparent py-1 px-2 text-xs" placeholder="Einstellungen oder Schüler/in suchen" />
    <div>
      <svg className="mr-2 w-4 text-gray-300" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
    </div>
    <div>
      <svg className="mr-2 w-4 text-gray-600" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
    </div>
  </div>

  <div className="mx-8 flex text-xs">
    <div className="border-b border-black p-2">Aktuell</div>
    <div className="border-b border-gray-300 p-2 text-gray-700">Archiv</div>
    <div className="flex-1 border-b border-gray-300">
      <div className="ml-auto mr-0 w-min whitespace-nowrap bg-blue-600 px-2 py-1 text-white">Klasse anlegen</div>
    </div>
  </div>

  <div className="mx-4 mt-2 flex">
    <div className="mt-3 h-screen w-40 border-r border-gray-300">
      <div className="my-2 ml-8 flex items-center text-sm text-gray-500">
        <div>
          <svg className="mr-2 h-4" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </div>
        <div>BGY21a</div>
      </div>
      <div>
        <div className="my-1 ml-[4rem] text-sm text-gray-500">Einstellungen</div>
        <div className="my-1 ml-[4rem] text-sm  font-medium text-gray-900">Schüler</div>
        <div className="my-1 ml-[4rem] text-sm text-gray-500">Session</div>
      </div>

      <div className="my-2 ml-8 flex items-center text-sm text-gray-500">
        <div>
          <svg className="mr-2 h-4" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </div>
        <div>BF121a</div>
      </div>
      <div className="my-2 ml-8 flex items-center text-sm text-gray-500">
        <div>
          <svg className="mr-2 h-4" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </div>
        <div>FSS21a</div>
      </div>
      <div className="my-2 ml-8 flex items-center text-sm text-gray-500">
        <div>
          <svg className="mr-2 h-4" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </div>
        <div>FSH21a</div>
      </div>
      <div className="my-2 ml-8 flex items-center text-sm text-gray-500">
        <div>
          <svg className="mr-2 h-4" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </div>
        <div>FSH21b</div>
      </div>
    </div>

    <div className="flex-1">
       <div className="mx-8 mt-8 text-2xl font-medium text-gray-800">Einstellungen</div>

      <div className="mx-4 mt-4 p-4 hover:bg-gray-100">
        <div className="text-sm font-medium text-gray-800">Name</div>
        <div className="mt-1 text-sm text-gray-600">Bezeichnung der Klasse ändern</div>
        <div className=""><input className="mt-1 border border-gray-300 bg-gray-50 p-2 text-xs" value="BGY21a" placeholder="BGY21a" /></div>
      </div>

      <div className="mx-4 p-4 hover:bg-gray-100">
        <div className="text-sm font-medium text-gray-800">Schuljahr</div>
        <div className="mt-1 text-sm text-gray-600">Einstellen des Schuljahr der Klasse</div>
        <div className=""><input className="mt-1 border border-gray-300 bg-gray-50 p-2 text-xs" value="2021/2022" placeholder="BGY21a" /></div>
      </div>

      <div className="mx-4 p-4 hover:bg-gray-100">
        <div className="text-sm font-medium text-gray-800">Schulform</div>
        <div className="mt-1 text-sm text-gray-600">Klasse einer Schulform zuordnen</div>
        <div className=""><input className="mt-1 border border-gray-300 bg-gray-50 p-2 text-xs" value="Gymnasium" placeholder="BGY21a" /></div>
      </div>

      <div className="mx-4 p-4 hover:bg-gray-100">
        <div className="text-sm font-medium text-gray-800">Jahrgangsstufe</div>
        <div className="mt-1 text-sm text-gray-600">Jahrgangsstufe der Klasse festlegen</div>
        <div className=""><input className="mt-1 border border-gray-300 bg-gray-50 p-2 text-xs" value="8" placeholder="BGY21a" /></div>
      </div>

      <div className="mx-4 p-4 hover:bg-gray-100">
        <div className="text-sm font-medium text-gray-800">Archivieren</div>
        <div className="flex items-center">
          <div>
            <svg className="mr-3 mt-1 h-4 bg-gray-50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
          <div className="mt-1 text-sm text-gray-600">Klasse ins Archive verschieben</div>
        </div>
      </div>
      <div className="mx-8 mt-8 text-2xl font-medium text-gray-800">Schüler</div>
      <div className="mx-4 mt-4 p-4 hover:bg-gray-50">
        <div className="text-sm font-medium text-gray-800">Schüler</div>
        <div className="mt-1 text-sm text-gray-600">Verwalten der Schüler</div>
<div className="flex text-xs p-1 text-gray-800 font-medium bg-stone-100 mt-2">
  <div className="w-1/2">Vorname</div>
  <div className="w-1/2">Nachname</div>
</div>
<div className="flex text-xs p-1 text-gray-800 bg-transparent">
  <div className="w-1/2">Nils</div>
  <div className="w-1/2">Reich</div>
</div>
<div className="flex text-xs p-1 text-gray-800 bg-stone-100">
  <div className="w-1/2">Jan</div>
  <div className="w-1/2">Werth</div>
</div>
      </div>
    </div>
  </div>
</div>

    )
}