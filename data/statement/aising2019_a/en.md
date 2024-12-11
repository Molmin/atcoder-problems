Score : $100$ points

## Problem Statement

It has been decided that a programming contest sponsored by company A will be held, so we will post the notice on a bulletin board.

The bulletin board is in the form of a grid with $N$ rows and $N$ columns, and the notice will occupy a rectangular region with $H$ rows and $W$ columns.

How many ways are there to choose where to put the notice so that it completely covers exactly $HW$ squares?

## Constraints

- $1 \leq H, W \leq N \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $H$
> 
> $W$

## Output

Print the answer.

```input1
3
2
3
```

```output1
2
```

There are two ways to put the notice, as follows:

```output1
###   ...
###   ###
...   ###
```

Here, `#` represents a square covered by the notice, and `.` represents a square not covered.

```input2
100
1
1
```

```output2
10000
```

```input3
5
4
2
```

```output3
8
```