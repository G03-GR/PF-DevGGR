const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Lee el contenido del archivo HTML
const htmlContent = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

const dom = new JSDOM(htmlContent);

const document = dom.window.document;

// Suite de pruebas
describe('Pruebas para la página web', () => {
  it('Debe mostrar un título de bienvenida', () => {
    // Verifica si el título del documento es el esperado
    expect(document.title).toBe('Mi Página Web');
  });

  it('Debe contener un encabezado de bienvenida', () => {
    // Verifica si existe un encabezado h1 con el texto esperado
    const welcomeHeader = document.querySelector('h1');
    expect(welcomeHeader).not.toBeNull();
    expect(welcomeHeader.textContent).toBe('Bienvenido a mi página web');
  });

  it('Debe contener un párrafo de agradecimiento', () => {
    // Verifica si existe un párrafo con el texto esperado
    const thankYouParagraph = document.querySelector('p');
    expect(thankYouParagraph).not.toBeNull();
    expect(thankYouParagraph.textContent).toBe('Gracias por visitar mi pagina, mi nombres es Genesis.');
  });
});
