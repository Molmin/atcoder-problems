Score : $900$ points

## Problem Statement

Alice and Bob are playing a game using a length-$N$ sequence of non-negative integers $A=(A_1,A_2,\dots,A_N)$.

Starting with Alice, they take turns performing the following operation. The player who cannot make a move first loses.

- Choose a non-negative integer $X$ such that there is an integer $i$ satisfying $A_i &gt; A_i \oplus X$.
- For each $1 \le i \le N$, replace $A_i$ with $\min(A_i,A_i \oplus X)$.

Determine who wins when both players play optimally.

Here, $\oplus$ represents the bitwise XOR.

You are given $T$ test cases. Find the answer for each of them.

## Constraints

- $1 \le T \le 100$
- $1 \le N \le 100$
- $0 \le A_i \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Here, $\mathrm{case}_i$ is the $i$-th test case. Each test case is given in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print $T$ lines.

The $i$-th line $(1 \le i \le T)$ should contain `Alice` if Alice wins, and `Bob` if Bob wins in the $i$-th test case.

```input1
5
2
3 1
5
1 1 1 1 1
4
0 0 0 0
4
8 1 6 4
5
3 8 7 12 15
```

```output1
Bob
Alice
Bob
Bob
Alice
```

In the first test case, one possible game progression could be as follows.

- Alice chooses $X=3$. This choice is valid because $3 &gt; 3 \oplus 3(=0)$ for $i=1$.
- $A=(3,1)$ becomes $A=(0,1)$.
- Bob chooses $X=1$. This choice is valid because $1 &gt; 1 \oplus 1(=0)$ for $i=2$.
- $A=(0,1)$ becomes $A=(0,0)$.
- Since Alice cannot choose any $X$, the game ends.

In this case, Bob wins.

In the second test case, one possible game progression could be as follows.

- Alice chooses $X=1$. This choice is valid because $1 &gt; 1 \oplus 1(=0)$ for $i=1$.
- $A=(1,1,1,1,1)$ becomes $A=(0,0,0,0,0)$.
- Since Bob cannot choose any $X$, the game ends.

In this case, Alice wins.