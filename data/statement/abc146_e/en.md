Score : $500$ points

## Problem Statement

Given are a sequence of $N$ positive integers $A_1, A_2, \ldots, A_N$, and a positive integer $K$.

Find the number of non-empty contiguous subsequences in $A$ such that the remainder when dividing the sum of its elements by $K$ is equal to the number of its elements. We consider two subsequences different if they are taken from different positions, even if they are equal sequences.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2\times 10^5$
- $1 \leq K \leq 10^9$
- $1 \leq A_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the number of subsequences that satisfy the condition.

```input1
5 4
1 4 2 3 5
```

```output1
4
```

Four sequences satisfy the condition: $(1)$, $(4,2)$, $(1,4,2)$, and $(5)$.

```input2
8 4
4 2 4 2 4 2 4 2
```

```output2
7
```

$(4,2)$ is counted four times, and $(2,4)$ is counted three times.

```input3
10 7
14 15 92 65 35 89 79 32 38 46
```

```output3
8
```