Score : $400$ points

## Problem Statement

You are given a sequence of positive integers of length $N$, $A=a_1,a_2, \cdots ,a_{N}$, and an integer $K$.
How many contiguous subsequences of $A$ satisfy the following condition?

- (Condition) The sum of the elements in the contiguous subsequence is at least $K$.

We consider two contiguous subsequences different if they derive from different positions in $A$, even if they are the same in content.

Note that the answer may not fit into a $32$-bit integer type.

## Constraints

- $1 \leq a_i \leq 10^5$
- $1 \leq N \leq 10^5$
- $1 \leq K \leq 10^{10}$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print the number of contiguous subsequences of $A$ that satisfy the condition.

```input1
4 10
6 1 2 7
```

```output1
2
```

The following two contiguous subsequences satisfy the condition:

- $A[1..4]=a_1,a_2,a_3,a_4$, with the sum of $16$
- $A[2..4]=a_2,a_3,a_4$, with the sum of $10$

```input2
3 5
3 3 3
```

```output2
3
```

Note again that we consider two contiguous subsequences different if they derive from different positions, even if they are the same in content.

```input3
10 53462
103 35322 232 342 21099 90000 18843 9010 35221 19352
```

```output3
36
```