Score : $1400$ points

## Problem Statement

You are given an integer sequence $a$ of length $N$.
How many permutations $p$ of the integers $1$ through $N$ satisfy the following condition?

- For each $1 \leq i \leq N$, at least one of the following holds: $p_i = a_i$ and $p_{p_i} = a_i$.

Find the count modulo $10^9 + 7$.

## Constraints

- $1 \leq N \leq 10^5$
- $a_i$ is an integer.
- $1 \leq a_i \leq N$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print the number of the permutations $p$ that satisfy the condition, modulo $10^9 + 7$.

```input1
3
1 2 3
```

```output1
4
```

The following four permutations satisfy the condition:

- $(1, 2, 3)$
- $(1, 3, 2)$
- $(3, 2, 1)$
- $(2, 1, 3)$

For example, $(1, 3, 2)$ satisfies the condition because $p_1 = 1$, $p_{p_2} = 2$ and $p_{p_3} = 3$.

```input2
2
1 1
```

```output2
1
```

The following one permutation satisfies the condition:

- $(2, 1)$

```input3
3
2 1 1
```

```output3
2
```

The following two permutations satisfy the condition:

- $(2, 3, 1)$
- $(3, 1, 2)$

```input4
3
1 1 1
```

```output4
0
```

```input5
13
2 1 4 3 6 7 5 9 10 8 8 9 11
```

```output5
6
```