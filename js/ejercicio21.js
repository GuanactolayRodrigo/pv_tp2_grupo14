const input = document.getElementById('input-texto');
      const destino = document.getElementById('texto-destino');
  
      input.addEventListener('input', function() {
        destino.textContent = input.value;
      });