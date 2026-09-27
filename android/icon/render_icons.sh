#!/bin/bash
# 渲染图标候选对比图
set -u
export PATH="/usr/bin:/bin:/c/Windows/System32:$PATH"
ICON="D:/work/workbuddy/life-book-android/icon"
PY="C:/Users/Administrator/.workbuddy/binaries/python/versions/3.13.12/python.exe"
NPX="C:/Users/Administrator/.workbuddy/binaries/node/versions/22.22.2-3/npx.cmd"
export NODE_PATH="C:/Users/Administrator/.workbuddy/binaries/node/workspace/node_modules"
PW() { "$NPX" -y @playwright/cli@latest "$@"; }
PORT=8788

cd "$ICON" || exit 1
"$PY" -m http.server $PORT --bind 127.0.0.1 >/dev/null 2>&1 &
SRV=$!
trap 'kill $SRV 2>/dev/null' EXIT
sleep 2

PW close >/dev/null 2>&1
PW open "http://127.0.0.1:$PORT/icon_preview.html" --browser=msedge 2>&1 | tail -1
sleep 3
PW resize 1200 1400 >/dev/null 2>&1
sleep 2

for k in A B C; do
  PW screenshot "#cell$k" --filename="$ICON/icon_$k.png" >/dev/null 2>&1
  if [ -f "$ICON/icon_$k.png" ]; then echo "  icon_$k.png ok $(stat -c%s "$ICON/icon_$k.png") B"; else echo "  icon_$k.png FAILED"; fi
done
