#!/sbin/sh
# @desc react-scripts configs
# @since 2020.10.19, 00:37
# @changed 2020.10.21, 03:40
#
# Patching for:
# - Adding `.pcss` (postcss-loader) extension.
# - Use `assets` instead `static` folder location (fixing flask svg serving bug on production).
# - Disable removing of `debugger` statements in production build (terser options, see `https://github.com/terser/terser`).

# Root folder
ROOTCD="node_modules"

# Target path relative to root
PATCHCD="react-scripts/config"

