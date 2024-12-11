Score : $400$ points

## Problem Statement

A sequence of $n$ numbers, $S = (s_1, s_2, \dots, s_n)$, is said to be *non-decreasing* if and only if $s_i \leq s_{i+1}$ holds for every $i$ $(1 \leq i \leq n - 1)$.

Given are non-decreasing sequences of $N$ integers each: $A = (a_1, a_2, \dots, a_N)$ and $B = (b_1, b_2, \dots, b_N)$.<br>
Consider a non-decreasing sequence of $N$ integers, $C = (c_1, c_2, \dots, c_N)$, that satisfies the following condition:

- $a_i \leq c_i \leq b_i$ for every $i$ $(1 \leq i \leq N)$.

Find the number, modulo $998244353$, of sequences that can be $C$.

## Constraints

- $1 \leq N \leq 3000$
- $0 \leq a_i \leq b_i \leq 3000$ $(1 \leq i \leq N)$
- The sequences $A$ and $B$ are non-decreasing.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $\dots$ $a_N$
> 
> $b_1$ $b_2$ $\dots$ $b_N$

## Output

Print the number, modulo $998244353$, of sequences that can be $C$.

```input1
2
1 1
2 3
```

```output1
5
```

There are five sequences that can be $C$, as follows.

- $(1, 1)$
- $(1, 2)$
- $(1, 3)$
- $(2, 2)$
- $(2, 3)$

Note that $(2, 1)$ does not satisfy the condition since it is not non-decreasing.

```input2
3
2 2 2
2 2 2
```

```output2
1
```

There is one sequence that can be $C$, as follows.

- $(2, 2, 2)$

```input3
10
1 2 3 4 5 6 7 8 9 10
1 4 9 16 25 36 49 64 81 100
```

```output3
978222082
```

Be sure to find the count modulo $998244353$.