Score : $1000$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `0` and `1`.
We define an **inversion pair** as a pair of integers $(i, j)$ ($1 \leq i &lt; j \leq N$) such that the $i$-th character of $S$ is `1` and the $j$-th character of $S$ is `0`.

As long as there is an inversion pair in $S$, perform the following operation:

- Randomly choose an inversion pair $(i, j)$. The choice is independent of previous choices and is uniformly random.
  Then, swap the $i$-th and $j$-th characters of $S$.

Find the expected number of operations, modulo $998244353$.

What is the expected value modulo $998244353$?

It can be proved that the sought expected value is always rational. Moreover, under the constraints of this problem, it can be proved that if the expected value is expressed as an irreducible fraction $\frac{P}{Q}$, then $Q \neq 0 \pmod{998244353}$. Thus, there exists a unique integer $R$ such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$. Report this $R$.

## Constraints

- $1 \leq N \leq 250000$
- $S$ is a string of length $N$ consisting of `0` and `1`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
2
10
```

```output1
1
```

The expected number of operations is $1$.

```input2
3
110
```

```output2
499122178
```

The expected number of operations is $3/2$.

```input3
1
0
```

```output3
0
```

```input4
10
1011000010
```

```output4
133099253
```

```input5
100
0101110010001000111000111001001101001100000111110001010010001010101100011001011011101101100001100111
```

```output5
407907276
```