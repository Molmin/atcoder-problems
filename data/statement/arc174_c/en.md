Points: $500$ points

## Problem Statement

There is a roulette that produces an integer from $1,2,\dots,N$ with equal probability.<br>
Two players use it to play the following game:  

- The players take turns spinning the roulette.-   - If the produced integer has not appeared before, nothing happens.
-   - Otherwise, the player who spun the roulette pays a fine of $1$ yen.
- The game immediately ends when all of the $N$ integers have appeared at least once.

For each of the first and second players, find the expected value of the amount of the fine paid before the game ends, modulo $998244353$.  

On expected values modulo $998244353$

It can be proved that the expected values sought in this problem are always rational numbers.
Furthermore, under the constraints of this problem, when the expected values are expressed as irreducible fractions $\frac{y}{x}$, it is guaranteed that $x$ is not divisible by $998244353$.

Now, there is a unique integer $z$ between $0$ and $998244352$, inclusive, such that $xz \equiv y \pmod{998244353}$. Provide this $z$ as the answer.

## Constraints

- $N$ is an integer such that $1 \le N \le 10^6$.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print two integers as the answer.<br>
The first is the expected value of the amount of the fine paid by the first player, and the second is the expected value of the amount of the fine paid by the second player, represented as integers modulo $998244353$.

```input1
1
```

```output1
0 0
```

In this input, $N=1$.<br>
When the first player spins the roulette, it always produces $1$, ending the game immediately.<br>
Thus, the expected values of the amounts of the fines paid by the first and second players are both $0$.

```input2
2
```

```output2
332748118 665496236
```

In this input, $N=2$. Here is a possible progression of the game:

- The first player spins the roulette, and it produces $2$. Nothing happens.
- The second player spins the roulette, and it produces $2$. The second player pays a fine of $1$ yen.
- The first player spins the roulette, and it produces $2$. The first player pays a fine of $1$ yen.
- The second player spins the roulette, and it produces $1$. Nothing happens.
- At this point, both $1$ and $2$ have appeared at least once, so the game immediately ends.
- In this progression, the amount of the fine paid by the first player is $1$ yen, and the amount of the fine paid by the second player is also $1$ yen.

It can be shown that the expected value of the amount of the fine paid by the first player is $\frac{1}{3}$ yen, and the expected value of the amount of the fine paid by the second player is $\frac{2}{3}$ yen.

```input3
3
```

```output3
174692763 324429416
```