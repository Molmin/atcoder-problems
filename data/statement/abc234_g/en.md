Score : $600$ points

## Problem Statement

Given is a sequence $A$ of $N$ numbers.

There are $2^{N-1}$ ways to divide $A$ into non-empty **contiguous** subsequences $B_1,B_2,\ldots,B_k$. Find the value below for each of those ways, and print the sum, modulo $998244353$, of those values.

- $\prod_{i=1}^{k} (\max(B_i)-\min(B_i))$

Here, for a sequence $B_i=(B_{i,1},B_{i,2},\ldots,B_{i,j})$, $\max(B_i)$ and $\min(B_i)$ are defined to be the maximum and minimum values of an element of $B_i$, respectively.

## Constraints

- $1 \leq N \leq 3 \times 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the sum, modulo $998244353$, of the values found.

```input1
3
1 2 3
```

```output1
2
```

There are $4$ ways to divide $A=(1,2,3)$ into non-empty contiguous subsequences, as follows.

- $(1)$, $(2)$, $(3)$
- $(1)$, $(2,3)$
- $(1,2)$, $(3)$
- $(1,2,3)$

$\prod_{i=1}^{k} (\max(B_i)-\min(B_i))$ for these divisions are $0$, $0$, $0$, $2$, respectively. The sum of them, $2$, should be printed.

```input2
4
1 10 1 10
```

```output2
90
```

```input3
10
699498050 759726383 769395239 707559733 72435093 537050110 880264078 699299140 418322627 134917794
```

```output3
877646588
```

Be sure to print the sum modulo $998244353$.