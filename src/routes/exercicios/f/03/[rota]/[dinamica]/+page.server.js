export function load(event) {
    const parametro1 = event.params.rota;
    const parametro2 = event.params.dinamica;
  
  return { parametro1, parametro2 };
  }