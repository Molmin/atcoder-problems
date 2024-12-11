Score : $500$ points

## Problem Statement

Given is a sequence $A$ of $N$ numbers. Find the number of ways to separate $A$ into some number of non-empty contiguous subsequence $B_1, B_2, \ldots, B_k$ so that the following condition is satisfied:

- For every $i\ (1 \leq i \leq k)$, the sum of elements in $B_i$ is divisible by $i$.

Since the count can be enormous, print it modulo $(10^9+7)$.

## Constraints

- $1 \leq N \leq 3000$
- $1 \leq A_i \leq 10^{15}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the number of ways to separate the sequence so that the condition in the Problem Statement is satisfied, modulo $(10^9+7)$.

```input1
4
1 2 3 4
```

```output1
3
```

We have three ways to separate the sequence, as follows:

- $(1),(2),(3),(4)$
- $(1,2,3),(4)$
- $(1,2,3,4)$

```input2
5
8 6 3 3 3
```

```output2
5
```

```input3
10
791754273866483 706434917156797 714489398264550 918142301070506 559125109706263 694445720452148 648739025948445 869006293795825 718343486637033 934236559762733
```

```output3
15
```

The values in input may not fit into a $32$-bit integer type.