Score: $400$ points

## Problem Statement

A positive integer $X$ is called a **"Neq Number"** if it satisfies the following condition:

- When $X$ is written in decimal notation, no two adjacent characters are the same.

For example, $1$, $173$, and $9090$ are Neq Numbers, while $22$ and $6335$ are not.

You are given a positive integer $K$. Find the $K$-th smallest Neq Number.

You have $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 100$
- $1 \leq K \leq 10^{12}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is given in the following format:

> $K$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th test case.

```input1
3
25
148
998244353
```

```output1
27
173
2506230721
```

For the first test case, here are the smallest $25$ Neq Numbers in ascending order:

- The nine integers from $1$ to $9$
- The nine integers from $10$ to $19$, excluding $11$
- The seven integers from $20$ to $27$, excluding $22$

Thus, the $25$-th smallest Neq Number is $27$.