Score : $450$ points

## Problem Statement

There are $N - 1$ white balls and one black ball. These $N$ balls are arranged in a row, with the black ball initially at the leftmost position.

Takahashi will perform the following operation exactly $K$ times.

- Choose an integer uniformly at random between $1$ and $N$, inclusive, twice. Let $a$ and $b$ the chosen integers. If $a \neq b$, swap the $a$-th and $b$-th balls from the left.

After $K$ operations, let the black ball be at the $x$-th position from the left. Find the expected value of $x$, modulo $998244353$.

What is expected value modulo $998244353$?

It can be proved that the sought expected value will always be rational. Additionally, under the constraints of this problem, it can be proved that if this value is expressed as an irreducible fraction $\frac{P}{Q}$, then $Q \not \equiv 0 \pmod{998244353}$. Therefore, there exists a unique integer $R$ such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R < 998244353$. Report this $R$.

## Constraints

- $1 \leq N \leq 998244352$
- $1 \leq K \leq 10^5$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the answer in one line.

```input1
2 1
```

```output1
499122178
```

After one operation, the probabilities that the black ball is at the 1st position and the 2nd position from the left are both $\displaystyle \frac{1}{2}$. Thus, the expected value is $\displaystyle \frac{3}{2}$.

```input2
3 2
```

```output2
554580198
```

```input3
4 4
```

```output3
592707587
```