// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// defino una funcion asincrona
const fetchAdvice = async () => {
  const adviceElement = document.getElementById('advice');
  //   muestra loading mientras carga
  adviceElement.textContent = 'Loading...';
  // inio try para mostrar errores
  try {
    // realizamos solicitud
    const response = await fetch('https://api.adviceslip.com/advice');
    // convierte la respuesta en json
    const data = await response.json();
    // actualiza el contenido de el elemento advice
    adviceElement.textContent = data.slip.advice;
    // si hay cualquier error
  } catch (error) {
    // muestra un texto de error
    adviceElement.textContent = 'Failed to fetch advice. Please try again.';
  }
};
// metodo de escucha:al hacer click se ejecuta la función fetchAdvice
document.getElementById('generate-advice').addEventListener('click', fetchAdvice);
