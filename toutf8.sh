#!/bin/bash
mv txt txtconv;
mkdir txt;
cd txtconv;
dos2unix *;
for i in *.txt; do
  if file --mime-encoding -b $i | grep 'utf-8'; then 
    echo "$i is already good";
    cp $i ../txt/;
  elif file --mime-encoding -b $i | grep 'unknown-8bit'; then 
    iconv -f WINDOWS-1252 -t UTF-8 $i > ../txt/$i;
  elif file --mime-encoding -b $i | grep 'iso-8859-1'; then 
    iconv -f ISO-8859-1 -t UTF-8 $i > ../txt/$i;
  elif file --mime-encoding -b $i | grep 'us-ascii'; then 
    iconv -f US-ASCII -t UTF-8 $i > ../txt/$i;
  else
    cp $i ../unknowntxt/;
  fi
done;

cd ..;