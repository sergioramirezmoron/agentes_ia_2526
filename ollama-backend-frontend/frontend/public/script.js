document.getElementById("btnModelos").addEventListener("click", async () => {
  const mostrarModelos = document.getElementById("mostrarModelos"); // mover fuera del try

  try {
    const response = await fetch("http://localhost:3002/api/modelos");

    if (!response.ok) {
      throw new Error("Error fetching ollama models");
    }

    const data = await response.json();
    console.table(data.modelos);

    const nombreModelos = data.modelos.map((modelo) => modelo.name);

    // Mostramos los modelos en el párrafo
    mostrarModelos.textContent = nombreModelos.join(", ");
  } catch (error) {
    console.error("Error fetching ollama models:", error);
    mostrarModelos.textContent = "Error fetching modelos";
  }
});
