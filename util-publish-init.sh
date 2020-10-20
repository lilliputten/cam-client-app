#!/bin/sh
# @desc Initialize publish syncing repository
# @changed 2020.10.06, 01:52

# NOTE: For uninstall/reinitialize publish submodule, use:
# ```shell
# rm -Rf publish .gitmodules .git/modules/publish
# ```

# Import config variables (expected variables `$DIST_REPO` and `$PUBLISH_FOLDER`)...
# DIST_REPO="git@github.com:lilliputten/YouFaceDist.git"
# PUBLISH_FOLDER="publish"
test -f "./util-config.sh" && . "./util-config.sh"
test -f "./util-config-local.sh" && . "./util-config-local.sh"

if [ -d "$PUBLISH_FOLDER" ]; then
  echo "Publish folder already exists!"
  echo "Remove it first for re-initializing using command:"
  echo "'rm -Rf "$PUBLISH_FOLDER" .gitmodules ".git/modules/$PUBLISH_FOLDER"'."
  exit # Successfull exit
  # exit 1 # Exit with error code
  # echo "Uninstalling submodule..." # Alterative behavior
  # rm -Rf "$PUBLISH_FOLDER" .gitmodules
fi

echo "Init publish submodule with repo: $DIST_REPO ..."
touch .gitmodules && \
  git submodule add -f "$DIST_REPO" "$PUBLISH_FOLDER" && \
  git rm --cached -f "$PUBLISH_FOLDER" .gitmodules && \
  echo OK
