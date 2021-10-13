#! /bin/bash
files=`ls -l *.md | awk '{ print $9 }'`
for file in $files
do
  modded_file=`echo $file | sed 's/\.md//'`
  pandoc $file -t html -o $modded_file.html
done
