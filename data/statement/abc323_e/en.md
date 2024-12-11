Score : $450$ points

## Problem Statement

Takahashi has a playlist with $N$ songs.
Song $i$ $(1 \leq i \leq N)$ lasts $T_i$ seconds.<br>
Takahashi has started random play of the playlist at time $0$.

Random play repeats the following: choose one song from the $N$ songs with equal probability and play that song to the end.
Here, songs are played continuously: once a song ends, the next chosen song starts immediately.
The same song can be chosen consecutively.

Find the probability that song $1$ is being played $(X + 0.5)$ seconds after time $0$, modulo $998244353$.

How to print a probability modulo $998244353$

It can be proved that the probability to be found in this problem is always a rational number.
Also, the constraints of this problem guarantee that when the probability to be found is expressed as an irreducible fraction $\frac{y}{x}$, $x$ is not divisible by $998244353$.

Then, there is a unique integer $z$ between $0$ and $998244352$, inclusive, such that $xz \equiv y \pmod{998244353}$. Report this $z$.

## Constraints

- $2 \leq N\leq 10^3$
- $0 \leq X\leq 10^4$
- $1 \leq T_i\leq 10^4$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $T_1$ $T_2$ $\ldots$ $T_N$

## Output

Print the probability, modulo $998244353$, that the first song in the playlist is being played $(X+0.5)$ seconds after time $0$.

```input1
3 6
3 5 6
```

```output1
369720131
```

Song $1$ will be playing $6.5$ seconds after time $0$ if songs are played in one of the following orders.

- Song $1$ $\to$ Song $1$ $\to$ Song $1$
- Song $2$ $\to$ Song $1$
- Song $3$ $\to$ Song $1$

The probability that one of these occurs is $\frac{7}{27}$.<br>
We have $369720131\times 27\equiv 7 \pmod{998244353}$, so you should print $369720131$.

```input2
5 0
1 2 1 2 1
```

```output2
598946612
```

$0.5$ seconds after time $0$, the first song to be played is still playing, so the sought probability is $\frac{1}{5}$.<br>
Note that different songs may have the same length.

```input3
5 10000
1 2 3 4 5
```

```output3
586965467
```