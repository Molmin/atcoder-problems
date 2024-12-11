Score : $500$ points

## Problem Statement

Given is a sequence of $N$ integers: $A = (A_1, A_2, \dots, A_N)$.

Find the number of (not necessarily contiguous) subsequences $A'=(A'_1,A'_2,\ldots,A'_k)$ of length at least $2$ that satisfy the following condition:

- $A'_1 \leq A'_k$.

Since the count can be enormous, print it modulo $998244353$.

Here, two subsequences are distinguished when they originate from different sets of indices, even if they are the same as sequences.

## Constraints

- $2 \leq N \leq 3 \times 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the number of (not necessarily contiguous) subsequences $A'=(A'_1,A'_2,\ldots,A'_k)$ of length at least $2$ that satisfy the condition in Problem Statement.

```input1
3
1 2 1
```

```output1
3
```

$A=(1,2,1)$ has four (not necessarily contiguous) subsequences of length at least $2$: $(1,2)$, $(1,1)$, $(2,1)$, $(1,2,1)$.

Three of them, $(1,2)$, $(1,1)$, $(1,2,1)$, satisfy the condition in Problem Statement.

```input2
3
1 2 2
```

```output2
4
```

Note that two subsequences are distinguished when they originate from different sets of indices, even if they are the same as sequences.

In this Sample, there are four subsequences, $(1,2)$, $(1,2)$, $(2,2)$, $(1,2,2)$, that satisfy the condition.

```input3
3
3 2 1
```

```output3
0
```

There may be no subsequence that satisfies the condition.

```input4
10
198495780 28463047 859606611 212983738 946249513 789612890 782044670 700201033 367981604 302538501
```

```output4
830
```