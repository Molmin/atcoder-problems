Score : $100$ points

## Problem Statement

There are $H$ rows and $W$ columns of white square cells.

You will choose $h$ of the rows and $w$ of the columns, and paint all of the cells contained in those rows or columns.

How many white cells will remain?

It can be proved that this count does not depend on what rows and columns are chosen.

## Constraints

- All values in input are integers.
- $1 \leq H, W \leq 20$
- $1 \leq h \leq H$
- $1 \leq w \leq W$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $h$ $w$

## Output

Print the number of white cells that will remain.

```input1
3 2
2 1
```

```output1
1
```

There are $3$ rows and $2$ columns of cells. When two rows and one column are chosen and painted in black, there is always one white cell that remains.

```input2
5 5
2 3
```

```output2
6
```

```input3
2 4
2 4
```

```output3
0
```