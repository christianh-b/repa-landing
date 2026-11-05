#!/bin/sh
# Regenera public/og.png (1200×630) y public/apple-touch-icon.png (180×180) desde las plantillas HTML.
# Necesita el sitio compilado (npm run build) y Google Chrome. En Linux, cambiá CHROME por la ruta de chromium.
set -eu
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
node scripts/build-og.mjs
PROFILE=$(mktemp -d)
trap 'rm -rf "$PROFILE" scripts/.og-render.html' EXIT
shot() {
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$PROFILE" \
    --force-device-scale-factor=1 --window-size="$1" --virtual-time-budget=3000 \
    --screenshot="$PWD/public/$2" "file://$PWD/scripts/$3" 2>/dev/null
}
shot 1200,630 og.png .og-render.html
shot 180,180 apple-touch-icon.png icon-template.html
echo "Listo: public/og.png y public/apple-touch-icon.png"
