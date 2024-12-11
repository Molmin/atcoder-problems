Score : $800$ points

## Problem Statement

For two non-negative integers $x$ and $y$, let $\gcd(x,y)$ be the greatest common divisor of $x$ and $y$ (for $x=0$, let $\gcd(x,y)=\gcd(y,x)=y$).

There are $N$ integers on the blackboard, and the $i$-th integer is $A_i$. The greatest common divisor of these $N$ integers is $1$.

Takahashi and Aoki will play a game against each other. After initializing an integer $G$ to $0$, they will take turns performing the following operation, with Takahashi going first.

- Choose a number $a$ on the blackboard such that $\gcd(G,a)\neq 1$, erase it, and replace $G$ with $\gcd(G,a)$.

The first player unable to play loses.

For each $i\ (1\leq i \leq N)$, determine the winner when Takahashi chooses the $i$-th integer on the blackboard in his first turn, and then both players play optimally.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $2 \leq A_i \leq 2 \times 10^5$
- The greatest common divisor of the $N$ integers $A_i \ (1\leq i \leq N)$ is $1$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print $N$ lines. The $i$-th line should contain the winner's name, `Takahashi` or `Aoki`, when Takahashi chooses the $i$-th integer on the blackboard in his first turn, and then both players play optimally.

```input1
4
2 3 4 6
```

```output1
Takahashi
Aoki
Takahashi
Aoki
```

For instance, when Takahashi chooses the fourth integer $A_4=6$ in his first turn, Aoki can then choose the second integer $A_2=3$ to make $G=3$. Now, Takahashi cannot choose anything, so Aoki wins. Thus, the fourth line should contain `Aoki`.

```input2
4
2 155 155 155
```

```output2
Takahashi
Takahashi
Takahashi
Takahashi
```

The blackboard may contain the same integer multiple times.

```input3
20
2579 25823 32197 55685 73127 73393 74033 95252 104289 114619 139903 144912 147663 149390 155806 169494 175264 181477 189686 196663
```

```output3
Takahashi
Aoki
Takahashi
Aoki
Takahashi
Takahashi
Takahashi
Takahashi
Aoki
Takahashi
Takahashi
Aoki
Aoki
Aoki
Aoki
Aoki
Takahashi
Takahashi
Aoki
Takahashi
```