#!/bin/bash

md1=($(md5sum index.js))
md2=($(md5sum index.normal.js))

if [ "$md1" != "$md2" ]; then
    echo "#####################################"
    echo "## Disable storybook before commit ##"
    echo "#####################################"
    exit 1
fi
