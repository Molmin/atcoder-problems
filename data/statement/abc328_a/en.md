Score : $100$ points

## Problem Statement

There is a programming contest with $N$ problems. For each $i = 1, 2, \ldots, N$, the score for the $i$-th problem is $S_i$.

Print the total score for all problems with a score of $X$ or less.

## Constraints

- All input values are integers.
- $4 \leq N \leq 8$
- $100 \leq S_i \leq 675$
- $100 \leq X \leq 675$

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $S_1$ $S_2$ $\ldots$ $S_N$

## Output

Print the answer.

```input1
6 200
100 675 201 200 199 328
```

```output1
499
```

Three problems have a score of $200$ or less: the first, fourth, and fifth, for a total score of $S_1 + S_4 + S_5 = 100 + 200 + 199 = 499$.

```input2
8 675
675 675 675 675 675 675 675 675
```

```output2
5400
```

```input3
8 674
675 675 675 675 675 675 675 675
```

```output3
0
```