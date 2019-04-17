#!/bin/bash
cd txt;
dos2unix *;
for i in *.txt; do
  if file --mime-encoding -b $i | grep 'utf-8'; then 
    echo "$i is already good";
  elif file --mime-encoding -b $i | grep 'unknown-8bit'; then 
    iconv -f WINDOWS-1252 -t UTF-8 $i > $i;
  elif file --mime-encoding -b $i | grep 'iso-8859-1'; then 
    iconv -f ISO-8859-1 -t UTF-8 $i > $i;
  elif file --mime-encoding -b $i | grep 'us-ascii'; then 
    iconv -f US-ASCII -t UTF-8 $i > $i;
  else
    cp $i unknown/;
  fi
done;

cd ..;