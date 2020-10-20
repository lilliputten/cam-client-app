#!/bin/sh
# @desc Publish (and make if absent) dist build
# @changed 2020.10.21, 00:33

# Import config variables (expected variables `$DIST_REPO` and `$PUBLISH_FOLDER`)...
# DIST_REPO="git@github.com:lilliputten/YouFaceDist.git"
# PUBLISH_FOLDER="publish"
test -f "./util-config.sh" && . "./util-config.sh"
test -f "./util-config-local.sh" && . "./util-config-local.sh"

if [ ! -d "$PUBLISH_FOLDER" ]; then
  echo "No publish folder. Probably submodule was not initialized. Use script 'util-publish-init.sh'."
  exit 1
fi

# Make build if absent
test -d build || npm run -s build

TIMESTAMP=`cat build-timestamp.txt`
TIMETAG=`cat build-timetag.txt`
VERSION=`cat build-version.txt`

echo "Syncing build ($VERSION, $TIMESTAMP)..."

# TODO: Compare actual and previously published versions? (The git is checking for changes itself anyway.)

cd "$PUBLISH_FOLDER" && \
  git pull && \
  rm -Rf * && \
  cp -Rfu ../build-*.txt ../static-build-files/* ../build/* . && \
  cat index.html \
    | sed "s/<html /<!-- v.${VERSION}-${TIMETAG} -->\0/" \
    | sed "s/<link rel/<link crossorigin=\"use-credentials\" rel/g" \
    > index.html && \
  cd .. && \
  echo OK
    # | sed "s/<html /<!-- v.${VERSION}-${TIMETAG} -->\0/" \
    # | sed "s/<link rel/<link crossorigin=\"use-credentials\" rel/" \

