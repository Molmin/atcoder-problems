Score : $200$ points

## Problem Statement

There were $N$ participants in a contest. The participant ranked $i$-th had the nickname $S_i$.<br>
Print the nicknames of the top $K$ participants in **lexicographical order**.

What is lexicographical order?

Simply put, the lexicographical order is the order of words in a dictionary. As a formal description, below is an algorithm to order distinct strings $S$ and $T$.

Let $S_i$ denote the $i$-th character of a string $S$. We write $S \lt T$ if $S$ is lexicographically smaller than $T$, and $S \gt T$ if $S$ is larger. 

1. Let $L$ be the length of the shorter of $S$ and $T$.  For $i=1,2,\dots,L$, check whether $S_i$ equals $T_i$.
2. If there is an $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$. Compare $S_j$ and $T_j$. If $S_j$ is alphabetically smaller than $T_j$, we get $S \lt T$; if $S_j$ is larger, we get $S \gt T$.
3. If there is no $i$ such that $S_i \neq T_i$, compare the lengths of $S$ and $T$. If $S$ is shorter than $T$, we get $S \lt T$; if $S$ is longer, we get $S \gt T$.

## Constraints

- $1 \leq K \leq N \leq 100$
- $K$ and $N$ are integers.
- $S_i$ is a string of length $10$ consisting of lowercase English letters.
- $S_i \neq S_j$ if $i \neq j$.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the nicknames, separated by newlines.

```input1
5 3
abc
aaaaa
xyz
a
def
```

```output1
aaaaa
abc
xyz
```

This contest had five participants. The participants ranked first, second, third, fourth, and fifth had the nicknames `abc`, `aaaaa`, `xyz`, `a`, and `def`, respectively.

The nicknames of the top three participants were `abc`, `aaaaa`, `xyz`, so print these in lexicographical order: `aaaaa`, `abc`, `xyz`.

```input2
4 4
z
zyx
zzz
rbg
```

```output2
rbg
z
zyx
zzz
```

```input3
3 1
abc
arc
agc
```

```output3
abc
```