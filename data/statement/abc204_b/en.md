Score : $200$ points

## Problem Statement

There are $N$ trees. The $i$-th tree bears $A_i$ nuts.

Chipmunk will harvest nuts from the trees in the following manner:

- From a tree with $10$ or fewer nuts, she does not take nuts.
- From a tree with more than $10$ nuts, she takes all but $10$ nuts.

Find the total number of nuts Chipmunk will take from the trees.

## Constraints

- $1 \leq N \leq 1000$
- $0 \leq A_i \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3
6 17 28
```

```output1
25
```

From the three trees, Chipmunk will take $0$, $7$, and $18$ nuts, for a total of $25$ nuts.

```input2
4
8 9 10 11
```

```output2
1
```