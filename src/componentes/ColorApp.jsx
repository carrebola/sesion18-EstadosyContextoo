export function ColorApp({coloresAzules, colorApp, setColorApp}) {

  function manejadorSelect(e) {
    console.log('Se ha realizado un cambio en el select');
    console.log('valor del select: ', e.target.value);
    setColorApp(e.target.value)
    console.log('colorApp:', colorApp);
  }

  return (
    <select onChange={(e) => manejadorSelect(e)}>
      {
        coloresAzules.map((color, key) => {
          return (
            <option key={key} value={color}>{color}</option>
          )
        })
      }
    </select>
  )
}