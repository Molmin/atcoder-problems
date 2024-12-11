Score : $200$ points

## Problem Statement

We have a grid with $N$ rows and $M$ columns of squares. Initially, all the squares are white.

There is a button attached to each row and each column.
When a button attached to a row is pressed, the colors of all the squares in that row are inverted; that is, white squares become black and vice versa.
When a button attached to a column is pressed, the colors of all the squares in that column are inverted.

Takahashi can freely press the buttons any number of times. Determine whether he can have exactly $K$ black squares in the grid.

## Constraints

- $1 \leq N,M \leq 1000$
- $0 \leq K \leq NM$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

If Takahashi can have exactly $K$ black squares in the grid, print `Yes`; otherwise, print `No`.

```input1
2 2 2
```

```output1
Yes
```

Press the buttons in the order of the first row, the first column.

```input2
2 2 1
```

```output2
No
```

```input3
3 5 8
```

```output3
Yes
```

Press the buttons in the order of the first column, third column, second row, fifth column.

```input4
7 9 20
```

```output4
No
```