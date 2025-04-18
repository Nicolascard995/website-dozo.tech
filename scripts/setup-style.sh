#!/usr/bin/env bash
set -e

# 1) Eliminar backups
rm -rf app.backup components.backup \
  && echo "✅ Backups eliminados"

# 2) Mover estáticos a public/
for f in favicon.ico robots.txt sitemap.xml; do
  [ -f app/$f ] && mv app/$f public/ && echo "✅ Moved $f to public/"
done

# 3) Reorganizar assets
mkdir -p public/assets/{logo,icons,images}
if [ -d public/images ]; then
  mv public/images/* public/assets/images/ && echo "✅ Imágenes movidas a assets/images"
fi

# 4) Renombrar y preparar script
mkdir -p scripts
if [ -f update-style.sh ]; then
  mv update-style.sh scripts/setup-style.sh
  chmod +x scripts/setup-style.sh
  echo "✅ Script renombrado a scripts/setup-style.sh"
fi

# 5) Actualizar .gitignore
grep -qxF "/app.backup" .gitignore || echo "/app.backup" >> .gitignore
grep -qxF "/components.backup" .gitignore || echo "/components.backup" >> .gitignore

echo "🎉 Cambios automáticos completados."
