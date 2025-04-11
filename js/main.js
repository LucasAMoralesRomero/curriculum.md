const textarea = document.getElementById('markdown');
const preview = document.getElementById('preview');

const defaultText = `# Nombre Apellido

**Puesto deseado | Especialidad**

---

## Educación
- **Nombre de la institución** – Carrera o título  
  *Año de inicio – Año de finalización (o presente)*

## Experiencia
- **Nombre de la empresa**  
  Breve descripción del puesto y tareas realizadas.  
  *Año de inicio – Año de finalización*

## Habilidades
- Lenguaje o herramienta 1
- Lenguaje o herramienta 2
- Lenguaje o herramienta 3

## Contacto
- [LinkedIn](https://linkedin.com/in/usuario)
- usuario@email.com`;

textarea.value = defaultText;

function updatePreview() {
  const markdownText = textarea.value;
  preview.innerHTML = marked.parse(markdownText);
}

textarea.addEventListener('input', updatePreview);
window.addEventListener('load', updatePreview);