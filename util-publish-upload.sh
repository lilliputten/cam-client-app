#!/bin/sh
# @desc Publish (and make if absent) dist build
# @changed 2020.10.19, 02:20

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

echo "Upload build ($VERSION, $TIMESTAMP)..."

# TODO: Compare actual and previously published versions? (The git is checking for changes itself anyway.)

cd "$PUBLISH_FOLDER" && \
  git add . -Av && \
  git commit -am "Build v.$VERSION, $TIMESTAMP ($TIMETAG)" && \
  git push && \
  cd .. && \
  echo OK
