Score : $100$ points

## Problem Statement

Let $N$ be a positive integer.
You are given a string $s$ of length $N - 1$, consisting of `&amp;lt;` and `&amp;gt;`.

Find the number of permutations $(p_1, p_2, \ldots, p_N)$ of $(1, 2, \ldots, N)$ that satisfy the following condition, modulo $10^9 + 7$:

- For each $i$ ($1 \leq i \leq N - 1$), $p_i &lt; p_{i + 1}$ if the $i$-th character in $s$ is `&amp;lt;`, and $p_i &gt; p_{i + 1}$ if the $i$-th character in $s$ is `&amp;gt;`.

## Constraints

- $N$ is an integer.
- $2 \leq N \leq 3000$
- $s$ is a string of length $N - 1$.
- $s$ consists of `&amp;lt;` and `&amp;gt;`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $s$

## Output

Print the number of permutations that satisfy the condition, modulo $10^9 + 7$.

```input1
4
<><
```

```output1
5
```

There are five permutations that satisfy the condition, as follows:

- $(1, 3, 2, 4)$
- $(1, 4, 2, 3)$
- $(2, 3, 1, 4)$
- $(2, 4, 1, 3)$
- $(3, 4, 1, 2)$

```input2
5
<<<<
```

```output2
1
```

There is one permutation that satisfies the condition, as follows:

- $(1, 2, 3, 4, 5)$

```input3
20
>>>><>>><>><>>><<>>
```

```output3
217136290
```

Be sure to print the number modulo $10^9 + 7$.