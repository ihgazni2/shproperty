
if [ $# == 1 ] ; then 
    python3 ./CODETOOL/search.py "$1"
fi


if [ $# == 2 ] ; then
    python3 ./CODETOOL/search.py "$1" "$2"
fi



if [ $# == 3 ] ; then
    python3 ./CODETOOL/search.py "$1" "$2" "$3"
fi

