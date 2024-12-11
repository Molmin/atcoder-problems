Score : $300$ points

## Problem Statement

You are given a string of length $N+1$ consisting of `A` and `B`: $S = S_0\cdots S_N$.
For each $k=1, \ldots, N$, solve the following problem.

Alice and Bob will play a game using a set $X$, which is initially empty. For $t=1,\ldots, k$ in this order, they will do the following action:

- if $t$ is odd, Alice will choose a non-negative integer $x$ and replace $X$ with $X\cup \{x\}$;
- if $t$ is even, Bob will choose a non-negative integer $x$ and replace $X$ with $X\cup \{x\}$.

Let $x$ be $\mathrm{mex}(X)$ after all $k$ actions. If the character $S_x$ is `A`, Alice wins; if $S_x$ is `B`, Bob wins. Note that $X$ has at most $k$ elements, so $x = \mathrm{mex}(X) \leq k$ and the character $S_x$ exists.

Print the name of the winner when both players play optimally.

  What is $\mathrm{mex}(X)$? 
For a finite set $X$ consisting of non-negative integers, $\mathrm{mex}(X)$ is the smallest non-negative integer $x$ such that $x\notin X$.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $S$ is a string of length $N+1$ consisting of `A` and `B`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print $N$ lines. The $i$-th line should contain the winner's name (`Alice` or `Bob`) when both players play optimally in the game with $k=i$.

```input1
2
ABB
```

```output1
Alice
Bob
```

Here is a possible progression of the game with $k=1$.

- Alice chooses $x=10$.
- $\mathrm{mex}(X)=\mathrm{mex}(\lbrace 10\rbrace) = 0$, and $S_0$ is `A`, so Alice wins.

Here is a possible progression of the game with $k=2$.

- Alice chooses $x=2$.
- Bob chooses $x=0$.
- $\mathrm{mex}(X)=\mathrm{mex}(\lbrace 0,2\rbrace) = 1$, and $S_1$ is `B`, so Bob wins.

```input2
4
AAAAA
```

```output2
Alice
Alice
Alice
Alice
```

```input3
7
BBAABABA
```

```output3
Bob
Bob
Alice
Bob
Alice
Bob
Alice
```