Score : $500$ points

## Problem Statement

There are $N$ squares called Square $1$ though Square $N$. You start on Square $1$.

Each of the squares from Square $1$ through Square $N-1$ has a die on it. The die on Square $i$ is labeled with the integers from $0$ through $A_i$, each occurring with equal probability. (Die rolls are independent of each other.)

Until you reach Square $N$, you will repeat rolling a die on the square you are on. Here, if the die on Square $x$ rolls the integer $y$, you go to Square $x+y$.

Find the expected value, modulo $998244353$, of the number of times you roll a die.

## Notes

It can be proved that the sought expected value is always a rational number. Additionally, if that value is represented $\frac{P}{Q}$ using two coprime integers $P$ and $Q$, there is a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$. Find this $R$.

## Constraints

- $2 \le N \le 2 \times 10^5$
- $1 \le A_i \le N-i(1 \le i \le N-1)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_{N-1}$

## Output

Print the answer.

```input1
3
1 1
```

```output1
4
```

The sought expected value is $4$, so $4$ should be printed.

Here is one possible scenario until reaching Square $N$:

- Roll $1$ on Square $1$, and go to Square $2$.
- Roll $0$ on Square $2$, and stay there.
- Roll $1$ on Square $2$, and go to Square $3$.

This scenario occurs with probability $\frac{1}{8}$.

```input2
5
3 1 2 1
```

```output2
332748122
```