Score : $500$ points

## Problem Statement

Integer Sequence Exhibition is taking place, where integer sequences are gathered in one place and evaluated. Here, every integer sequence of length $N$ consisting of integers between $1$ and $K$ (inclusive) is evaluated and given an integer score between $1$ and $M$ (inclusive).

Print the number, modulo $998244353$, of ways to give each of the evaluated sequences a score between $1$ and $M$.

Here, two ways are said to be different when there is an evaluated sequence $A = (A_1, A_2, \ldots, A_N)$ that is given different scores by the two ways.

## Constraints

- $1 \leq N, K, M \leq 10^{18}$
- $N$, $K$, and $M$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $M$

## Output

Print the number, modulo $998244353$, of ways to give each of the evaluated sequences a score between $1$ and $M$.

```input1
2 2 2
```

```output1
16
```

Four sequences are evaluated: $(1, 1)$, $(1, 2)$, $(2, 1)$, and $(2, 2)$. There are $16$ ways to give each of these sequences a score between $1$ and $2$, as follows.

- Give $1$ to $(1, 1)$, $1$ to $(1, 2)$, $1$ to $(2, 1)$, and $1$ to $(2, 2)$
- Give $1$ to $(1, 1)$, $1$ to $(1, 2)$, $1$ to $(2, 1)$, and $2$ to $(2, 2)$
- Give $1$ to $(1, 1)$, $1$ to $(1, 2)$, $2$ to $(2, 1)$, and $1$ to $(2, 2)$
- Give $1$ to $(1, 1)$, $1$ to $(1, 2)$, $2$ to $(2, 1)$, and $2$ to $(2, 2)$
- $\cdots$
- Give $2$ to $(1, 1)$, $2$ to $(1, 2)$, $2$ to $(2, 1)$, and $2$ to $(2, 2)$

Thus, we print $16$.

```input2
3 14 15926535
```

```output2
109718301
```

Be sure to print the count modulo $998244353$.