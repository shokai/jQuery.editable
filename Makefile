src = src/jquery.editable.js
dest = jquery.editable.js
dest_min = jquery.editable.min.js
header = HEADER.txt

all: build

build:
	cat $(header) $(src) > $(dest)
	cat $(header) > $(dest_min)
	uglifyjs $(src) >> $(dest_min)
