Score: $500$ points

## Problem Statement

There are $N$ buildings along the AtCoder Street, numbered $1$ through $N$ from west to east. Initially, Buildings $1, 2, \ldots, N$ have the heights of $A_1, A_2, \dots, A_N$, respectively.

Takahashi, the president of ARC Wrecker, Inc., plans to choose integers $l$ and $r$ $(1 \leq l \lt r \leq N)$ and make the heights of Buildings $l, l+1, \dots, r$ all zero.
To do so, he can use the following two kinds of operations any number of times in any order:

- Set an integer $x$ $(l \leq x \leq r-1)$ and increase the heights of Buildings $x$ and $x+1$ by $1$ each.
- Set an integer $x$ $(l \leq x \leq r-1)$ and decrease the heights of Buildings $x$ and $x+1$ by $1$ each. This operation can only be done when both of those buildings have heights of $1$ or greater.

Note that the range of $x$ depends on $(l,r)$.

How many choices of $(l, r)$ are there where Takahashi can realize his plan?

## Constraints

- $2 \leq N \leq 300000$
- $1 \leq A_i \leq 10^9$ $(1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
5
5 8 8 6 6
```

```output1
3
```

Takahashi can realize his plan for $(l, r) = (2, 3), (4, 5), (2, 5)$.

For example, for $(l, r) = (2, 5)$, the following sequence of operations make the heights of Buildings $2, 3, 4, 5$ all zero.

- Decrease the heights of Buildings $4$ and $5$ by $1$ each, six times in a row.
- Decrease the heights of Buildings $2$ and $3$ by $1$ each, eight times in a row.

For the remaining seven choices of $(l, r)$, there is no sequence of operations that can realize his plan.

```input2
7
12 8 11 3 3 13 2
```

```output2
3
```

Takahashi can realize his plan for $(l, r) = (2, 4), (3, 7), (4, 5)$.

For example, for $(l, r) = (3, 7)$, the following figure shows one possible solution.

![](https://img.atcoder.jp/arc119/392b686a479008a3dbc3fb36893ed144.png)

```input3
10
8 6 3 9 5 4 7 2 1 10
```

```output3
1
```

Takahashi can realize his plan for $(l, r) = (3, 8)$ only.

```input4
14
630551244 683685976 249199599 863395255 667330388 617766025 564631293 614195656 944865979 277535591 390222868 527065404 136842536 971731491
```

```output4
8
```