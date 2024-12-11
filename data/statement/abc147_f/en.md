Score : $600$ points

## Problem Statement

We have an integer sequence $A$ of length $N$, where $A_1 = X, A_{i+1} = A_i + D (1 \leq i &lt; N )$ holds.

Takahashi will take some (possibly all or none) of the elements in this sequence, and Aoki will take all of the others.

Let $S$ and $T$ be the sum of the numbers taken by Takahashi and Aoki, respectively. How many possible values of $S - T$ are there?

## Constraints

- $-10^8 \leq X, D \leq 10^8$
- $1 \leq N \leq 2 \times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$ $D$

## Output

Print the number of possible values of $S - T$.

```input1
3 4 2
```

```output1
8
```

$A$ is $(4, 6, 8)$.

There are eight ways for (Takahashi, Aoki) to take the elements: $((), (4, 6, 8)), ((4), (6, 8)), ((6), (4, 8)), ((8), (4, 6))), ((4, 6), (8))), ((4, 8), (6))), ((6, 8), (4)))$, and $((4, 6, 8), ())$.

The values of $S - T$ in these ways are $-18, -10, -6, -2, 2, 6, 10$, and $18$, respectively, so there are eight possible values of $S - T$.

```input2
2 3 -3
```

```output2
2
```

$A$ is $(3, 0)$. There are two possible values of $S - T$: $-3$ and $3$.

```input3
100 14 20
```

```output3
49805
```