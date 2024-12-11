Score : $1000$ points

## Problem Statement

For a sequence of integers $P = (P_1, \ldots, P_M)$, let $f(P)$ denote the sequence obtained by inserting $P_i + P_{i+1}$ between $P_i$ and $P_{i+1}$ for each $1\leq i\leq M-1$.
More formally:

- Let $Q_i = P_i + P_{i+1}$ for each $1\leq i\leq M - 1$.
- Let $f(P)$ be defined as a sequence of $2M-1$ integers $f(P) = (P_1, Q_1, P_2, Q_2, \ldots, P_{M-1}, Q_{M-1}, P_M)$.

Given are three positive integers $a$, $b$, and $N$ where $a, b\leq N$. Let us begin with a sequence $A = (a, b)$ and define a sequence $B = (B_1, B_2, \ldots)$ as follows.

- Do the following $N$ times: replace $A$ with $f(A)$.
- Then, remove from $A$ all values greater than $N$ and let $B$ be the resulting sequence.

Find $B_L, \ldots, B_R$.

## Constraints

- $1\leq N\leq 3\times 10^5$
- $1\leq a, b\leq N$
- $1\leq L\leq R\leq 10^{18}$
- $R - L &lt; 3\times 10^5$
- $R$ is at most the number of elements in the sequence $B$.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $N$ 
> 
> $L$ $R$

## Output

Print a line containing $B_L, \ldots, B_R$, with a space in between.

```input1
1 1 4
1 7
```

```output1
1 4 3 2 3 4 1
```

Initially, $A = (1, 1)$. The replacements of $A$ with $f(A)$ take place as follows.

- After the first replacement: $A = (1, 2, 1)$.
- After the second replacement: $A = (1, 3, 2, 3, 1)$.
- After the third replacement: $A = (1, 4, 3, 5, 2, 5, 3, 4, 1)$.
- After the fourth replacement: $A = (1, 5, 4, 7, 3, 8, 5, 7, 2, 7, 5, 8, 3, 7, 4, 5, 1)$.

Thus, we have $B = (1, 4, 3, 2, 3, 4, 1)$. We should report the $1$-st through $7$-th elements of this sequence.

```input2
1 1 4
2 5
```

```output2
4 3 2 3
```

Again, we have $B = (1, 4, 3, 2, 3, 4, 1)$. We should report the $2$-nd through $5$-th elements of this sequence.

```input3
2 1 10
5 15
```

```output3
8 3 10 7 4 9 5 6 7 8 9
```

```input4
10 10 10
2 2
```

```output4
10
```