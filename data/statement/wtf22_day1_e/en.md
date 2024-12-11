Score : $2500$ points

## Problem Statement

You are given positive integers $N$ and $M$. Here, $N&lt;M$.

A sequence of $N$ non-negative integers $a=(a_1,a_2,\cdots,a_N)$ is said to be a **good** sequence when it satisfies the following condition:

- $0 \leq a_1 \leq a_2 \leq \cdots \leq a_N \leq M$.

For a good sequence $a$, let $f(a)$ be the sequence resulting from sorting $(a_1-1,a_2-2,\cdots,a_N-N)$ in ascending order.

For each $k=1,2,\cdots,N$, solve the following problem.

- Assume that we have found the $k$-th element of $f(a)$ for every possible good sequence $a$.
Find the sum, modulo $998244353$, of these values.

※ The answer should be between $0$ and $998244352$ even if the sum is negative.

## Constraints

- $1 \leq N &lt; M \leq 10^6$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print $N$ lines.
The $i$-th line should contain the answer for $k=i$.

```input1
2 3
```

```output1
998244349
4
```

Here are all possible $a$ and the corresponding $f(a)$.

- $a=(0,0)$: $f(a)=(-2,-1)$
- $a=(0,1)$: $f(a)=(-1,-1)$
- $a=(0,2)$: $f(a)=(-1,0)$
- $a=(0,3)$: $f(a)=(-1,1)$
- $a=(1,1)$: $f(a)=(-1,0)$
- $a=(1,2)$: $f(a)=(0,0)$
- $a=(1,3)$: $f(a)=(0,1)$
- $a=(2,2)$: $f(a)=(0,1)$
- $a=(2,3)$: $f(a)=(1,1)$
- $a=(3,3)$: $f(a)=(1,2)$

Thus, the sum of the first elements is $-4$, and the sum of the second elements is $4$.

```input2
3 4
```

```output2
998244329
0
24
```

```input3
4 6
```

```output3
998244233
35
175
330
```

```input4
10 1000000
```

```output4
297189103
747015740
88545731
123651717
920498165
977169022
775771117
810877103
152407094
602233731
```