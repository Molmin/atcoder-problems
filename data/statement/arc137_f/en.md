Score : $1100$ points

## Problem Statement

We have a bar of length $1$.
A point on the bar whose distance from the left end of the bar is $x$ is said to have a coordinate $x$.

Snuke will do the operation below $N$ times.

- Choose two real numbers $x$ and $y$ uniformly at random from $[0, 1]$.
Put a sticker covering the range from the coordinate $\min(x,y)$ to the coordinate $\max(x,y)$.

Here, all random choices are independent of each other.

Stickers can overlap.
The bar is said to be good when no point is covered by $K+1$ or more stickers.

Find the probability, modulo $998244353$, of having a good bar after putting $N$ stickers.

Definition of a probability modulo $998244353$

It can be proved that the sought probability is always a rational number. Additionally, under the Constraints of this problem, when that value is represented as an irreducible fraction $\frac{P}{Q}$, it can be proved that $Q \not \equiv 0 \pmod{998244353}$. Thus, there is a unique integer $R$ such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$. Report this $R$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq \min(N,10^5)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the answer.

```input1
2 1
```

```output1
332748118
```

We are to find the probability that the two stickers do not overlap, which is $1/3$.

```input2
5 3
```

```output2
66549624
```

```input3
10000 5000
```

```output3
642557092
```