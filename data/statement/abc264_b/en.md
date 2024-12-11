Score : $200$ points

## Problem Statement

Print the color of the cell at the $R$-th row from the top and $C$-th column from the left
in the following grid with $15$ vertical rows and $15$ horizontal columns.

![](https://img.atcoder.jp/abc264/eeab5156a2678c35e42c5eb4cf38353d.png)

## Constraints

- $1 \leq R, C \leq 15$
- $R$ and $C$ are integers.

## Input

Input is given from Standard Input in the following format:

> $R$ $C$

## Output

In the grid above, if the color of the cell at the $R$-th row from the top and $C$-th column from the left is black, then print `black`; if the cell is white, then print `white`.  Note that the judge is case-sensitive.

```input1
3 5
```

```output1
black
```

In the grid above, the cell at the $3$-rd row from the top and $5$-th column from the left is black.  Thus, `black` should be printed.

```input2
4 5
```

```output2
white
```

In the grid above, the cell at the $4$-th row from the top and $5$-th column from the left is white.  Thus, `white` should be printed.