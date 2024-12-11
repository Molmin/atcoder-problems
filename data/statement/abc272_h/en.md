Score : $600$ points

## Problem Statement

$N$ coins numbered $0,1,\ldots,N-1$ are arranged in a row.  Initially, all coins are face up.  Also, you are given a sequence $A$ of length $N$ consisting of integers between $0$ and $N-1$.

Snuke will choose a permutation $p=(p_1,p_2,\ldots,p_N)$ of $(1,\ldots,N)$ at equal probability and perform $N$ operations.  In the $i$-th $(1\leq i \leq N)$ operation,

- he flips $(A_{p_i}+1)$ coins: coin $(i-1) \bmod N$, coin $(i-1+1 ) \bmod N$, $\ldots$, and coin $(i -1+ A_{p_i}) \bmod N$.

After the $N$ operations, Snuke receives $k$ yen (the currency in Japan) from his mother, where $k$ is the number of face-up coins.

Find the expected value, modulo $998244353$, of the money Snuke will receive.

Definition of expected value modulo $998244353$

In this problem, we can prove that the sought expected value is always a rational number.
Moreover, under the Constraints of this problem, when the sought expected value is represented as an irreducible fraction $\frac{y}{x}$, it is guaranteed that $x$ is indivisible by $998244353$.

Then, an integer $z$ between $0$ and $998244352$ such that $xz \equiv y \pmod{998244353}$ is uniquely determined.  Find such $z$.

## Constraints

- $1 \leq N\leq 2\times 10^5$
- $0\leq A_i \leq N-1$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
2
0 1
```

```output1
1
```

$p$ can be either $(1,2)$ or $(2,1)$.

- If $(1,2)$ is chosen as $p$:

In the first operation, coin $0$ is flipped, and in the second operation, coin $1$ and coin $0$ are flipped.  One coin, coin $0$, results in being face up, so he receives $1$ yen.

- If $(2,1)$ is chosen as $p$:

In the first operation, coin $0$ and coin $1$ are flipped, and in the second operation, coin $1$ is flipped.  One coin, coin $1$, results in being face up, so he receives $1$ yen.

Therefore, the expected value of the money he receives is $1$ yen.

```input2
4
3 1 1 2
```

```output2
665496237
```

Print the expected value modulo $998244353$.