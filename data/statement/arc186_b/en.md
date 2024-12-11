Score : $900$ points

## Problem Statement

You are given a sequence of integers $(A_1,\dots,A_N)$ of length $N$. This sequence satisfies $0\le A_i &lt; i$ for each $i=1,\dots,N$.
Find the number of permutations $(P_1,\dots,P_N)$ of $(1,\dots,N)$ that satisfy the following conditions, modulo $998244353$.

- For each $i=1,\dots,N$:-   - $P_j &amp;gt; P_i$ for any integer $j$ with $A_i &amp;lt; j &amp;lt; i$
-   - $P_{A_i} &amp;lt; P_i$ if $A_i &amp;gt; 0$

For the sequence $(A_1,\dots,A_N)$ given in the input, it is guaranteed that there exists a permutation satisfying the conditions.

## Constraints

- $1\le N\le 3\times 10^5$
- $0\le A_i \lt i$
- For $A_1,\dots,A_N$, there exists a permutation satisfying the conditions in the problem statement.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the number of permutations satisfying the conditions, modulo $998244353$.

```input1
4
0 1 0 3
```

```output1
3
```

There are three such permutations: $(2, 3, 1, 4)$, $(2, 4, 1, 3)$, and $(3, 4, 1, 2)$.

```input2
22
0 1 2 2 2 2 2 2 1 9 9 9 9 0 14 15 15 15 14 19 19 19
```

```output2
353820794
```

The answer is $353820794$, which is $2350309500$ modulo $998244353$.