Score : $400$ points

## Problem Statement

Given integers $N$ and $M$, compute the sum $\displaystyle \sum_{k=0}^{N}$ $\rm{popcount}$$(k \mathbin{\&amp;} M)$, modulo $998244353$.

Here, $\mathbin{\&amp;}$ represents the bitwise $\rm{AND}$ operation.

What is the bitwise $\rm{AND}$ operation?
The result $x = a \mathbin{\&} b$ of the bitwise $\rm{AND}$ operation between non-negative integers $a$ and $b$ is defined as follows:

- $x$ is the unique non-negative integer that satisfies the following conditions for all non-negative integers $k$:
- -   - If the $2^k$ place in the binary representation of $a$ and the $2^k$ place in the binary representation of $b$ are both $1$, then the $2^k$ place in the binary representation of $x$ is $1$.
-   - Otherwise, the $2^k$ place in the binary representation of $x$ is $0$.

For example, $3=11_{(2)}$ and $5=101_{(2)}$, so $3 \mathbin{\&} 5 = 1$.

What is $\rm{popcount}$?
$\rm{popcount}$$(x)$ represents the number of $1$s in the binary representation of $x$.
For example, $13=1101_{(2)}$, so $\rm{popcount}$$(13) = 3$.

## Constraints

- $N$ is an integer between $0$ and $2^{60} - 1$, inclusive.
- $M$ is an integer between $0$ and $2^{60} - 1$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer as an integer.

```input1
4 3
```

```output1
4
```

- $\rm{popcount}$$(0\mathbin{\&amp;}3) = 0$
- $\rm{popcount}$$(1\mathbin{\&amp;}3) = 1$
- $\rm{popcount}$$(2\mathbin{\&amp;}3) = 1$
- $\rm{popcount}$$(3\mathbin{\&amp;}3) = 2$
- $\rm{popcount}$$(4\mathbin{\&amp;}3) = 0$

The sum of these values is $4$.

```input2
0 0
```

```output2
0
```

It is possible that $N = 0$ or $M = 0$.

```input3
1152921504606846975 1152921504606846975
```

```output3
499791890
```

Remember to compute the result modulo $998244353$.