Score : $800$ points

## Problem Statement

You are given a sequence of $N$ positive integers: $A=(A_1,A_2,\dots,A_N)$.

How many integer sequences $B$ consisting of integers between $1$ and $N$ (inclusive) satisfy all of the following conditions? Print the count modulo $998244353$.

- For each integer $i$ such that $1 \le i \le N$, there are exactly $A_i$ occurrences of $i$ in $B$.
- For each integer $i$ such that $1 \le i \le |B|-1$, it holds that $|B_i - B_{i+1}|=1$.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $1 \le A_i \le 2 \times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
3
2 3 1
```

```output1
6
```

$B$ can be the following six sequences.

- $(1,2,1,2,3,2)$
- $(1,2,3,2,1,2)$
- $(2,1,2,1,2,3)$
- $(2,1,2,3,2,1)$
- $(2,3,2,1,2,1)$
- $(3,2,1,2,1,2)$

Thus, the answer is $6$.

```input2
1
200000
```

```output2
0
```

There may be no sequence that satisfies the conditions.

```input3
6
12100 31602 41387 41498 31863 12250
```

```output3
750337372
```