#!/usr/bin/env sh
# Cloudflare Pages: run when SKIP_DEPENDENCY_INSTALL=1 so we control pnpm version.
# Lockfile v9 requires pnpm 9+; older Pages images used pnpm 8 by default.
set -eu
if command -v corepack >/dev/null 2>&1; then
  corepack enable
  corepack prepare pnpm@10.16.1 --activate
fi
pnpm install --frozen-lockfile
pnpm run build
