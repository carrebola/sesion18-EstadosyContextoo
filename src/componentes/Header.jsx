import { ColorApp } from "./ColorApp";

export function Header({coloresAzules, colorApp, setColorApp}){

  console.log('colorApp: ', colorApp);
  console.log('Render Header');
  return(
    <div className="border p-3 bg-red-200">
      Header
      <ColorApp coloresAzules={coloresAzules} colorApp={colorApp} setColorApp={setColorApp}></ColorApp>
      
    </div>
  )
}