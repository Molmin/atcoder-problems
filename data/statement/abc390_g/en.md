Score : $600$ points

## Problem Statement

You are given a positive integer $N$.

For an integer sequence $A=(A_1,A_2,\ldots,A_N)$ of length $N$. Let $f(A)$ be the integer obtained as follows:

- Let $S$ be an empty string.
- For $i=1,2,\ldots,N$ in this order:-   - Let $T$ be the decimal representation of $A_i$ without leading zeros.
-   - Append $T$ to the end of $S$.
- Interpret $S$ as a decimal integer, and let that be $f(A)$.

For example, if $A=(1,20,34)$, then $f(A)=12034$.

There are $N!$ permutations $P$ of $(1,2,\ldots,N)$. Find the sum, modulo $998244353$, of $f(P)$ over all such permutations $P$.

## Constraints

- $1 \le N \le 2 \times 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the sum, modulo $998244353$, of $f(P)$ over all permutations $P$ of $(1,2,\ldots,N)$.

```input1
3
```

```output1
1332
```

The six permutations of $(1,2,3)$ are $(1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), (3,2,1)$. Their $f(P)$ values are $123,132,213,231,312,321$. Therefore, print $123+132+213+231+312+321 = 1332$.

```input2
390
```

```output2
727611652
```

Print the sum modulo $998244353$.

```input3
79223
```

```output3
184895744
```