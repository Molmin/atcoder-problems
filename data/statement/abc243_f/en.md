Score : $500$ points

## Problem Statement

Takahashi is participating in a lottery.

Each time he takes a draw, he gets one of the $N$ prizes available. Prize $i$ is awarded with probability $\frac{W_i}{\sum_{j=1}^{N}W_j}$. The results of the draws are independent of each other.

What is the probability that he gets exactly $M$ different prizes from $K$ draws? Find it modulo $998244353$.

## Note

To print a rational number, start by representing it as a fraction $\frac{y}{x}$.
Here, $x$ and $y$ should be integers, and $x$ should not be divisible by $998244353$ (under the Constraints of this problem, such a representation is always possible).
Then, print the only integer $z$ between $0$ and $998244352$ (inclusive) such that $xz\equiv y \pmod{998244353}$.

## Constraints

- $1 \leq K \leq 50$
- $1 \leq M \leq N \leq 50$
- $0 &lt; W_i$
- $0 &lt; W_1 + \ldots + W_N &lt; 998244353$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $W_1$
> 
> $\vdots$
> 
> $W_N$

## Output

Print the answer.

```input1
2 1 2
2
1
```

```output1
221832079
```

Each draw awards Prize $1$ with probability $\frac{2}{3}$ and Prize $2$ with probability $\frac{1}{3}$.

He gets Prize $1$ at both of the two draws with probability $\frac{4}{9}$, and Prize $2$ at both draws with probability $\frac{1}{9}$, so the sought probability is $\frac{5}{9}$.

The modulo $998244353$ representation of this value, according to Note, is $221832079$.

```input2
3 3 2
1
1
1
```

```output2
0
```

It is impossible to get three different prizes from two draws, so the sought probability is $0$.

```input3
3 3 10
499122176
499122175
1
```

```output3
335346748
```

```input4
10 8 15
1
1
1
1
1
1
1
1
1
1
```

```output4
755239064
```