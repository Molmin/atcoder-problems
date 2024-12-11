Score : $500$ points

## Problem Statement

Takahashi is playing sugoroku, a board game.

The board has $N+1$ squares, numbered $0$ to $N$.
Takahashi starts at square $0$ and goes for square $N$.

The game uses a roulette wheel with $M$ numbers from $1$ to $M$ that appear with equal probability.
Takahashi spins the wheel and moves by the number of squares indicated by the wheel. If this would send him beyond square $N$, he turns around at square $N$ and goes back by the excessive number of squares.

For instance, assume that $N=4$ and Takahashi is at square $3$. If the wheel shows $4$, the excessive number of squares beyond square $4$ is $3+4-4=3$. Thus, he goes back by three squares from square $4$ and arrives at square $1$.

When Takahashi arrives at square $N$, he wins and the game ends.

Find the probability, modulo $998244353$, that Takahashi wins when he may spin the wheel at most $K$ times.

How to print a probability modulo $998244353$

It can be proved that the sought probability is always a rational number.
Additionally, under the Constraints of this problem, when the sought probability is represented as an irreducible fraction $\frac{y}{x}$, it is guaranteed that $x$ is not divisible by $998244353$.

Here, there is a unique integer $z$ between $0$ and $998244352$ such that $xz \equiv y \pmod{998244353}$. Print this $z$.

## Constraints

- $M \leq N \leq 1000$
- $1 \leq M \leq 10$
- $1 \leq K \leq 1000$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

Print the answer.

```input1
2 2 1
```

```output1
499122177
```

Takahashi wins in one spin if the wheel shows $2$. Therefore, the probability of winning is $\frac{1}{2}$.

We have $2\times 499122177 \equiv 1 \pmod{998244353}$, so the answer to be printed is $499122177$.

```input2
10 5 6
```

```output2
184124175
```

```input3
100 1 99
```

```output3
0
```