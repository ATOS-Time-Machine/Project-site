#!/bin/bash
find . -type f -exec chmod 664 {} \; && find *  -type d -exec chmod 775 {} \;
