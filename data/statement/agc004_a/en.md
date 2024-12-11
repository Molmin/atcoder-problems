Score : $200$ points

## Problem Statement

We have a rectangular parallelepiped of size $A \times B \times C$, built with blocks of size $1 \times 1 \times 1$. Snuke will paint each of the $A \times B \times C$ blocks either red or blue, so that:

- There is at least one red block and at least one blue block.
- The union of all red blocks forms a rectangular parallelepiped.
- The union of all blue blocks forms a rectangular parallelepiped.

Snuke wants to minimize the difference between the number of red blocks and the number of blue blocks. Find the minimum possible difference.

## Constraints

- $2 \leq A,B,C \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print the minimum possible difference between the number of red blocks and the number of blue blocks.

```input1
3 3 3
```

```output1
9
```

For example, Snuke can paint the blocks as shown in the diagram below.
There are $9$ red blocks and $18$ blue blocks, thus the difference is $9$.

![](https://atcoder.jp/img/agc/004/gatbantar/A_1.png)

```input2
2 2 4
```

```output2
0
```

For example, Snuke can paint the blocks as shown in the diagram below.
There are $8$ red blocks and $8$ blue blocks, thus the difference is $0$.

![](https://atcoder.jp/img/agc/004/gatbantar/A_2.png)

```input3
5 3 5
```

```output3
15
```

For example, Snuke can paint the blocks as shown in the diagram below.
There are $45$ red blocks and $30$ blue blocks, thus the difference is $9$.

![](https://atcoder.jp/img/agc/004/gatbantar/A_3.png)