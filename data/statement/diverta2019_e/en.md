Score : $800$ points

## Problem Statement

The *beauty* of a sequence $a$ of length $n$ is defined as $a_1 \oplus \cdots \oplus a_n$, where $\oplus$ denotes the bitwise exclusive or (XOR).

You are given a sequence $A$ of length $N$.
Snuke will insert zero or more partitions in $A$ to divide it into some number of non-empty contiguous subsequences.

There are $2^{N-1}$ possible ways to insert partitions.
How many of them divide $A$ into sequences whose beauties are all equal? Find this count modulo $10^{9}+7$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 5 \times 10^5$
- $0 \leq A_i &lt; 2^{20}$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_{N}$

## Output

Print the answer.

```input1
3
1 2 3
```

```output1
3
```

Four ways of dividing $A$ shown below satisfy the condition. The condition is not satisfied only if $A$ is divided into $(1),(2),(3)$.

- $(1,2,3)$
- $(1),(2,3)$
- $(1,2),(3)$

```input2
3
1 2 2
```

```output2
1
```

```input3
32
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

```output3
147483634
```

Find the count modulo $10^{9}+7$.

```input4
24
1 2 5 3 3 6 1 1 8 8 0 3 3 4 6 6 4 0 7 2 5 4 6 2
```

```output4
292
```