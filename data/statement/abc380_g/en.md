Score : $575$ points

## Problem Statement

You are given a permutation $P$ of $(1,2,\dots,N)$ and an integer $K$.  

Find the expected value, modulo $998244353$, of the inversion number of $P$ after performing the following operation:

- First, choose an integer $i$ uniformly at random between $1$ and $N - K + 1$, inclusive.
- Then, shuffle $P_i, P_{i+1}, \dots, P_{i+K-1}$ uniformly at random.

What is the inversion number?
The inversion number of a sequence $(A_1, A_2, \dots, A_N)$ is the number of integer pairs $(i, j)$ satisfying $1 \le i < j \le N$ and $A_i > A_j$.

What does "expected value modulo $998244353$" mean?
It can be proved that the sought expected value is always rational. Under the constraints of this problem, when this value is represented as an irreducible fraction $\frac{P}{Q}$, it can also be proved that $Q \not\equiv 0 \pmod{998244353}$. Thus, there is a unique integer $R$ satisfying $R \times Q \equiv P \pmod{998244353}, \ 0 \le R < 998244353$. Report this integer $R$.

## Constraints

- All input values are integers.
- $1 \le K \le N \le 2 \times 10^5$
- $P$ is a permutation of $(1,2,\dots,N)$.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print the answer in one line.

```input1
4 2
1 4 2 3
```

```output1
166374061
```

The operation changes the permutation $P$ into the following:

- $(1,4,2,3)$ ... probability $1/2$
- $(4,1,2,3)$ ... probability $1/6$
- $(1,2,4,3)$ ... probability $1/6$
- $(1,4,3,2)$ ... probability $1/6$

The expected value of the inversion number is $\displaystyle 2 \times \frac{1}{2} + 3 \times \frac{1}{6} + 1 \times \frac{1}{6} + 3 \times \frac{1}{6} = \frac{13}{6}$.

$\displaystyle \frac{13}{6}$ modulo $998244353$ is $166374061$, so print this number.

```input2
1 1
1
```

```output2
0
```

```input3
10 6
7 4 10 5 6 1 8 2 3 9
```

```output3
499122200
```