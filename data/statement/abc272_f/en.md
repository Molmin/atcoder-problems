Score : $500$ points

## Problem Statement

You are given strings $S$ and $T$ of length $N$ each, consisting of lowercase English letters.

For a string $X$ and an integer $i$, let $f(X,i)$ be the string obtained by performing on $X$ the following operation $i$ times:

- Remove the first character of $X$ and append the same character to the end of $X$.

Find the number of integer pairs $(i,j)$ satisfying $0 \le i,j \le N-1$ such that $f(S,i)$ is lexicographically smaller than or equal to $f(T,j)$.

What is the lexicographical order?

Simply put, the lexicographical order is the order in which the words are arranged in a dictionary.  Let us define it formally by describing an algorithm of finding the ordering of two distinct strings $S$ and $T$ consisting of lowercase English letters.

Here, we denote "the $i$-th character of a string $S$" by $S_i$.  Also, we write $S \lt T$ and $S \gt T$ if $S$ is lexicographically smaller and larger than $T$, respectively. 

1. Let $L$ be the smallest of the lengths of $S$ and $T$.  For $i=1,2,\dots,L$, we check if $S_i$ equals $T_i$.
2. If there is an $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$.  Comparing $S_j$ and $T_j$, we terminate the algorithm by determining that $S \lt T$ if $S_j$ is smaller than $T_j$ in the alphabetical order, and that $S \gt T$ otherwise.
3. If there is no $i$ such that $S_i \neq T_i$, comparing the lengths of $S$ and $T$, we terminate the algorithm by determining that $S \lt T$ if $S$ is shorter than $T$, and that $S \gt T$ otherwise.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $S$ and $T$ are strings of length $N$ each, consisting of lowercase English letters.
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

Print the answer.

```input1
3
adb
cab
```

```output1
4
```

There are $4$ pairs of $(i, j)$ satisfying the conditions: $(0,0),(0,2),(2,0)$, and $(2,2)$.

$(i,j)=(1,2)$ does not satisfy the conditions because $f(S,i)=$`dba` and $f(T,j)=$`bca`.

```input2
10
wsiuhwijsl
pwqoketvun
```

```output2
56
```