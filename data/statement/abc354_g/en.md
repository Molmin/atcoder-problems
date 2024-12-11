Score : $625$ points

## Problem Statement

You are given $N$ strings $S_1, S_2, \ldots, S_N$ consisting of lowercase English letters and $N$ positive integers $A_1, A_2, \ldots, A_N$.

A subset $T$ of $\lbrace 1, 2, \ldots, N \rbrace$ is called a **good set** if there is no pair $i, j \in T (i \neq j)$ such that $S_i$ is a substring of $S_j$.

Find the maximum possible value of $\displaystyle \sum_{i \in T} A_i$ for a good set $T$.

What is a substring?
A **substring** of a string $S$ is a string obtained by deleting zero or more characters from the beginning and zero or more characters from the end of $S$. 
For example, `ab` is a substring of `abc`, but `ac` is not a substring of `abc`.

## Constraints

- $1 \leq N \leq 100$
- $S_i$ is a string consisting of lowercase English letters.
- $1 \leq |S_i|$
- $|S_1| + |S_2| + \ldots + |S_N| \leq 5000$
- $1 \leq A_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4
atcoder
at
coder
code
5 2 3 4
```

```output1
6
```

The possible good sets $T$ and their corresponding $\displaystyle \sum_{i \in T} A_i$ are as follows:

- $T = \lbrace 1 \rbrace$: $\displaystyle \sum_{i \in T} A_i = 5$
- $T = \lbrace 2 \rbrace$: $\displaystyle \sum_{i \in T} A_i = 2$
- $T = \lbrace 3 \rbrace$: $\displaystyle \sum_{i \in T} A_i = 3$
- $T = \lbrace 4 \rbrace$: $\displaystyle \sum_{i \in T} A_i = 4$
- $T = \lbrace 2, 3 \rbrace$: $\displaystyle \sum_{i \in T} A_i = 5$
- $T = \lbrace 2, 4 \rbrace$: $\displaystyle \sum_{i \in T} A_i = 6$

The maximum among them is $6$, so print $6$.

```input2
10
abcd
abc
ab
a
b
c
d
ab
bc
cd
100 10 50 30 60 90 80 70 40 20
```

```output2
260
```