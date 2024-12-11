Score : $600$ points

## Problem Statement

There are $N$ squares numbered $1$ to $N$. Initially, all squares are painted white.

Additionally, there are $M$ balls numbered $1$ to $M$ in a box.

We repeat the procedure below until all squares are painted black.

1. Pick up a ball from a box uniformly at random.
2. Let $x$ be the index of the ball. Paint Squares $L_x, L_x+1, \ldots, R_x$ black.
3. Return the ball to the box.

Find the expected value of the number of times the procedure is done, modulo $998244353$ (see Notes).

## Notes

It can be proved that the sought expected value is always a rational number. Additionally, under the Constraints of this problem, when that value is represented as $\frac{P}{Q}$ using two coprime integers $P$ and $Q$, it can be proved that there uniquely exists an integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$. You should find this $R$.

## Constraints

- $1 \leq N,M \leq 400$
- $1 \leq L_i \leq R_i \leq N$
- For every square $i$, there is an integer $j$ such that $L_j \leq i \leq R_j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\hspace{0.5cm}\vdots$
> 
> $L_M$ $R_M$

## Output

Print the sought expected value modulo $998244353$.

```input1
3 3
1 1
1 2
2 3
```

```output1
499122180
```

The sought expected value is $\frac{7}{2}$.

We have $499122180 \times 2 \equiv 7\pmod{998244353}$, so $499122180$ should be printed.

```input2
13 10
3 5
5 9
3 12
1 13
9 11
12 13
2 4
9 12
9 11
7 11
```

```output2
10
```

```input3
100 11
22 43
84 93
12 71
49 56
8 11
1 61
13 80
26 83
23 100
80 85
9 89
```

```output3
499122193
```