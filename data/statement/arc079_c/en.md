Score : $600$ points

## Problem Statement

We have a sequence of length $N$ consisting of non-negative integers. Consider performing the following operation on this sequence until the largest element in this sequence becomes $N-1$ or smaller. (The operation is the same as the one in Problem D.)

- Determine the largest element in the sequence (if there is more than one, choose one). Decrease the value of this element by $N$, and increase each of the other elements by $1$.

It can be proved that the largest element in the sequence becomes $N-1$ or smaller after a finite number of operations.

You are given the sequence $a_i$. Find the number of times we will perform the above operation.

## Constraints

- $2 \leq N \leq 50$
- $0 \leq a_i \leq 10^{16} + 1000$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ ... $a_N$

## Output

Print the number of times the operation will be performed.

```input1
4
3 3 3 3
```

```output1
0
```

```input2
3
1 0 3
```

```output2
1
```

```input3
2
2 2
```

```output3
2
```

```input4
7
27 0 0 0 0 0 0
```

```output4
3
```

```input5
10
1000 193 256 777 0 1 1192 1234567891011 48 425
```

```output5
1234567894848
```