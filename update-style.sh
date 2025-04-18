#!/usr/bin/env bash
set -euo pipefail

echo "1) Asegurando carpeta de imágenes…"
mkdir -p public/images

echo "2) Restaurando placeholder.svg en la raíz de public/"
if [ -f public/assets/placeholder.svg ]; then
  cp public/assets/placeholder.svg public/placeholder.svg
  echo "   • public/placeholder.svg creado."
else
  echo "   ⚠️ No encontré public/assets/placeholder.svg para copiar."
fi

echo "3) Generando hero-dashboard.jpg de prueba…"
# Ratio 4:3 → 800×600
curl -sSL "https://via.placeholder.com/800x600.jpg?text=Hero+Dashboard" \
     -o public/images/hero-dashboard.jpg \
     && echo "   • public/images/hero-dashboard.jpg creado."

echo "✅ Ya tienes archivos en:"
echo "   - public/placeholder.svg"
echo "   - public/images/hero-dashboard.jpg"
echo
echo "Ahora corre:"
echo "  npm run dev"
