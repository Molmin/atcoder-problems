Score : $600$ points

## Problem Statement

On a number line are person $1$, person $2$, and person $3$.  At time $0$, person $1$ is at point $A$, person $2$ is at point $B$, and person $3$ is at point $C$.<br>
Here, $A$, $B$, and $C$ are all integers, and $A \equiv B \equiv C \pmod{2}$.  

At time $0$, the three people start random walks.  Specifically, a person that is at point $x$ at time $t$ ($t$ is a non-negative integer) moves to point $(x-1)$ or point $(x+1)$ at time $(t+1)$ with equal probability.  (All choices of moves are random and independent.)

Find the probability, modulo $998244353$, that it is at time $T$ that the three people are at the same point for the first time.

What is rational number modulo $998244353$?

We can prove that the sought probability is always a rational number.  
Moreover, under the Constraints of this problem, when the value is represented as $\frac{P}{Q}$ by two coprime integers $P$ and $Q$, we can prove that there is a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$.  Find such $R$.

## Constraints

- $0 \leq A, B, C, T \leq 10^5$
- $A \equiv B \equiv C \pmod{2}$
- $A, B, C$, and $T$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$ $T$

## Output

Find the probability, modulo $998244353$, that it is at time $T$ that the three people are at the same point for the first time, and print the answer.

```input1
1 1 3 1
```

```output1
873463809
```

The three people are at the same point for the first time at time $1$ with the probability $\frac{1}{8}$.  Since $873463809 \times 8 \equiv 1 \pmod{998244353}$, $873463809$ should be printed.

```input2
0 0 0 0
```

```output2
1
```

The three people may already be at the same point at time $0$.

```input3
0 2 8 9
```

```output3
744570476
```

```input4
47717 21993 74147 76720
```

```output4
844927176
```