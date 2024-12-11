Score : $700$ points

## Problem Statement

Given is a sequence of $N$ integers $A_1,A_2,\cdots,A_N$.

Find the number of non-empty subsequences $s$ of $A$ satisfying the following condition, modulo $998244353$.

- There is only one way to extract $s$ from $A$.
Formally, there uniquely exists a sequence of indices $1 \leq idx(1)&lt;idx(2)&lt;\cdots&lt;idx(k) \leq N$ such that $A_{idx(i)}=s_i$ ($1 \leq i \leq k$), where $s=(s_1,s_2,\cdots,s_k)$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
3
1 2 1
```

```output1
5
```

The following five subsequences satisfy the condition.

- $(1,1)$
- $(1,2)$
- $(1,2,1)$
- $(2)$
- $(2,1)$

The subsequence $(1)$ does not satisfy the condition since there are two ways to extract it.

```input2
4
4 2 1 3
```

```output2
15
```

```input3
12
1 2 3 6 9 2 3 3 9 6 1 6
```

```output3
1178
```