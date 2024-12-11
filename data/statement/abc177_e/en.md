Score : $500$ points

## Problem Statement

We have $N$ integers. The $i$-th number is $A_i$.

$\{A_i\}$ is said to be pairwise coprime when $GCD(A_i,A_j)=1$ holds for every pair $(i, j)$ such that $1\leq i &lt; j \leq N$.

$\{A_i\}$ is said to be setwise coprime when $\{A_i\}$ is not pairwise coprime but $GCD(A_1,\ldots,A_N)=1$.

Determine if $\{A_i\}$ is pairwise coprime, setwise coprime, or neither.

Here, $GCD(\ldots)$ denotes greatest common divisor.

## Constraints

- $2 \leq N \leq 10^6$
- $1 \leq A_i\leq 10^6$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

If $\{A_i\}$ is pairwise coprime, print `pairwise coprime`; if $\{A_i\}$ is setwise coprime, print `setwise coprime`; if neither, print `not coprime`.

```input1
3
3 4 5
```

```output1
pairwise coprime
```

$GCD(3,4)=GCD(3,5)=GCD(4,5)=1$, so they are pairwise coprime.

```input2
3
6 10 15
```

```output2
setwise coprime
```

Since $GCD(6,10)=2$, they are not pairwise coprime. However, since $GCD(6,10,15)=1$, they are setwise coprime.

```input3
3
6 10 16
```

```output3
not coprime
```

$GCD(6,10,16)=2$, so they are neither pairwise coprime nor setwise coprime.