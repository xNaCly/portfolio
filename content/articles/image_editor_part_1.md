---
title: "Image editor in C: the setup"
description: Writing a basic image editor as a comp science project, Part I
author: xnacly
timetoread: 0 min
writtenat: 2022-03-08
nottags: c#gcc#programming#computer science
---

## Overview

### Task

The `PGM` editor should implement the `Portable GrayMap` standard, which I will explain in the next chapter. It should
also include methods to manipulate Images in the `PGM`-format. The following functions are required by the lecturer. :

#### Regarding Images:

1. create an image structure
2. free the memory of an image structure
3. deep copy an image
4. load image from file system into the program
5. save image to file system

#### Filters and Operators

1. `median` filter
2. `gauss` filter
3. `laplace` operator
4. `threshold` operator
5. `scale`
6. `rotate`

### `.pgm` Standard

#### Differentiating between the three `P*` -image formats

| Type             | ASCII (plain) | Binary (raw) | Extension | Colors                      |
| ---------------- | ------------- | ------------ | --------- | --------------------------- |
| Portable BitMap  | P1            | P4           | .pbm      | 0-1 (white & black)         |
| Portable GrayMap | P2            | P5           | .pgm      | 0-255, 0-65535 (gray scale) |
| Portable PixMap  | P3            | P6           | .ppm      | etc.                        |

[`PGM`](https://en.wikipedia.org/wiki/Netpbm#File_formats) or in my case
[`P2`](http://netpbm.sourceforge.net/doc/pgm.html) is a image format coming from the
[Netpbm Project](https://en.wikipedia.org/wiki/Netpbm). It consists of the two characters `P` and `2` in the first line
of the file to indicate the image format. The second line contains the Dimensions of the image, e.g.: `1920 1080` . The
third line contains the max. brightness possible in the image. Line 3 till the End of the file specifies the pixel grey
values. The specification allows for comments between the first line (format indicator) and the second line (dimension
definition), prefixed with `#` .

#### Beispiel:

```
P2
# Shows the word "FEEP" (example from Netpbm man page on PGM)
24 7
15
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
0  3  3  3  3  0  0  7  7  7  7  0  0 11 11 11 11  0  0 15 15 15 15  0
0  3  0  0  0  0  0  7  0  0  0  0  0 11  0  0  0  0  0 15  0  0 15  0
0  3  3  3  0  0  0  7  7  7  0  0  0 11 11 11  0  0  0 15 15 15 15  0
0  3  0  0  0  0  0  7  0  0  0  0  0 11  0  0  0  0  0 15  0  0  0  0
0  3  0  0  0  0  0  7  7  7  7  0  0 11 11 11 11  0  0 15  0  0  0  0
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
```

## Directory structure

After reading two dozen blogs and a lot of trial and error, i settled on the following dir structure:

```
.
├── build
│  └── main.out
├── makefile
├── README
└── src
   ├── libs
   │  ├── image
   │  │  ├── _image.c
   │  │  └── _image.h
   │  ├── pgm
   │  │  ├── _pgm.c
   │  │  └── _pgm.h
   │  └── util
   │     ├── _util.c
   │     └── _util.h
   └── main.c
```

### `_image.(c|h)`

includes several image manipulation methods

```c
Image *median(Image *img);
Image *gauss(Image *img);
Image *laplace(Image *img);
Image *threshold(Image *img, int threshold);
Image *scale(Image *img, int width, int height);
Image *rotate(Image *img, double angle, int brightness);
```

### `_pgm.(c|h)`

handles everything regarding images in the .pgm standard

```c
Image *createImage(int width, int height, int default_brightness);
void freeImage(Image *img_pointer);
Image *copyImage(Image *img_pointer);
Image *loadImage(char file_name[]);
int saveImage(char file_name[], Image *img_pointer);
```

### `_util.(c|h)`

provides utility methods and defines ANSI macros for colored output, as well as an enum for the main menu selection
handling

```c
int compare(const void *a, const void *b); // used for field sorting
int toInt(const char *text);
void throw_error(char text[]);
void throw_warning(char text[]);
int check_is_option_valid(int selection, int image_in_memory);
```

### `main.c`

takes care of printing the main menu and handling user input, runs the functions implemented in the 'libs'

## Compiler setup

### Compiler choice

The lecturer gave us very specific instructions on how and where to compile our project. The project has to be compiled
with [gcc](https://gcc.gnu.org/) on a Unix system. I’m using Unix for around 2 years now, this makes the requirement
easily fulfillable.

### Compiler flags

Some [warning compiler flags](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html) are mandatory:

-   `-fdiagnostics-color=always` (Use color in diagnostic)
-   `-Wall` (enables all warnings about constructions that are easy to avoid)
-   `-Wpedantic` (Issue all the warnings demanded by strict ISO C)

Some were added by me:

-   `-lm` (link the math library)
-   `-g` (tell gcc to generate debugging and symbol information, _necessary for debugging using
    [gdb](https://en.wikipedia.org/wiki/GNU_Debugger)_)

_After me asking, the lecturer told us to use the [C99](https://en.wikipedia.org/wiki/C99) standard (`-std=c99`)._

### Makefile

After learning about makefiles _(before I knew about them I wrote a shell script to compile my project)_ and gdb I
promptly used both in this project:

```makefile
main:
	gcc -fdiagnostics-color=always -Wall -Wpedantic -std=c99 src/main.c src/libs/util/_util.c src/libs/pgm/_pgm.c src/libs/image/_image.c -lm -o build/main.out
	build/main.out
debug:
	gcc -g -fdiagnostics-color=always -Wall -Wpedantic -std=c99 src/main.c src/libs/util/_util.c src/libs/pgm/_pgm.c src/libs/image/_image.c -lm -o build/main.out
	gdb build/main.out
clean:
	rm -r build/; rm test.pgm
pre:
	mkdir build/
```

-   `make main`

    compiles and runs the executable

-   `make debug`

    compiles with the `-g` flag and starts gdb on the executable

-   `make clean`

    removes generated images and the build folder recursive

-   `make pre`

    creates the build dir, due to me being lazy

> ##### PS:
>
> The next part will focus on the methods found in `_pgm.(c|h)` and some general issues I found myself having while
> working on this project.
