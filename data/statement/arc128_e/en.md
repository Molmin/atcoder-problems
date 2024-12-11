Score : $800$ points

## Problem Statement

Given are a sequence of $N$ integers $A=(A_1,A_2,\cdots,A_N)$ and an integer $K$.

Consider making a sequence of integers $x$ that satisfies both of the following conditions.

- For each integer $i$ ($1 \leq i \leq N$), $x$ contains exactly $A_i$ occurrences of $i$.
$x$ does not contain other integers.
- For every way of choosing $K$ consecutive elements from $x$, their values are all distinct.

Determine whether it is possible to make $x$ that satisfies the conditions. If it is possible, find the lexicographically smallest such $x$.

## Constraints

- $2 \leq K \leq N \leq 500$
- $1 \leq A_i$
- $\sum_{1 \leq i \leq N} A_i \leq 200000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

If it is impossible to make a sequence $x$ that satisfies the conditions, print `-1`.
If it is possible, print the lexicographically smallest such $x$.

```input1
3 3
2 2 1
```

```output1
1 2 3 1 2
```

Two sequences $x=(1,2,3,1,2),(2,1,3,2,1)$ satisfy the conditions. The lexicographically smaller one, $(1,2,3,1,2)$, is the answer.

```input2
3 2
2 1 2
```

```output2
1 2 3 1 3
```

```input3
3 3
1 3 3
```

```output3
-1
```