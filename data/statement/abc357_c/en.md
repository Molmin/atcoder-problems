Score : $250$ points

## Problem Statement

For a non-negative integer $K$, we define a level-$K$ carpet as follows:

- A level-$0$ carpet is a $1 \times 1$ grid consisting of a single black cell.
- For $K &gt; 0$, a level-$K$ carpet is a $3^K \times 3^K$ grid. When this grid is divided into nine $3^{K-1} \times 3^{K-1}$ blocks:-   - The central block consists entirely of white cells.
-   - The other eight blocks are level-$(K-1)$ carpets.

You are given a non-negative integer $N$.<br>
Print a level-$N$ carpet according to the specified format.

## Constraints

- $0 \leq N \leq 6$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print $3^N$ lines.<br>
The $i$-th line ($1 \leq i \leq 3^N$) should contain a string $S_i$ of length $3^N$ consisting of `.` and `#`.<br>
The $j$-th character of $S_i$ ($1 \leq j \leq 3^N$) should be `#` if the cell at the $i$-th row from the top and $j$-th column from the left of a level-$N$ carpet is black, and `.` if it is white.

```input1
1
```

```output1
###
#.#
###
```

A level-$1$ carpet is a $3 \times 3$ grid as follows:

![](https://img.atcoder.jp/abc357/78b18b1b75ea7862c1c216499221b9e8.png)

When output according to the specified format, it looks like the sample output.

```input2
2
```

```output2
#########
#.##.##.#
#########
###...###
#.#...#.#
###...###
#########
#.##.##.#
#########
```

A level-$2$ carpet is a $9 \times 9$ grid.