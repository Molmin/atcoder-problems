Score : $300$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `A`, `B`, `C`.

You can do the following two kinds of operations on $S$ any number of times in any order.

- Choose `A` in $S$, delete it, and insert `BB` at that position.
- Choose two adjacent characters that are `BB` in $S$, delete them, and insert `A` at that position.

Find the lexicographically smallest possible string that $S$ can become after your operations.

What is the lexicographical order?

Simply speaking, the lexicographical order is the order in which words are listed in a dictionary. As a more formal definition, here is the algorithm to determine the lexicographical order between different strings $S$ and $T$.

Below, let $S_i$ denote the $i$-th character of $S$. Also, if $S$ is lexicographically smaller than $T$, we will denote that fact as $S \lt T$; if $S$ is lexicographically larger than $T$, we will denote that fact as $S \gt T$.

1. Let $L$ be the smaller of the lengths of $S$ and $T$. For each $i=1,2,\dots,L$, we check whether $S_i$ and $T_i$ are the same.
2. If there is an $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$. Then, we compare $S_j$ and $T_j$. If $S_j$ comes earlier than $T_j$ in alphabetical order, we determine that $S \lt T$ and quit; if $S_j$ comes later than $T_j$, we determine that $S \gt T$ and quit.
3. If there is no $i$ such that $S_i \neq T_i$, we compare the lengths of $S$ and $T$. If $S$ is shorter than $T$, we determine that $S \lt T$ and quit; if $S$ is longer than $T$, we determine that $S \gt T$ and quit.

## Constraints

- $1 \leq N \leq 200000$
- $S$ is a string of length $N$ consisting of `A`, `B`, `C`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
4
CBAA
```

```output1
CAAB
```

We should do the following.

- Initially, we have $S=$`CBAA`.
- Delete the $3$-rd character `A` and insert `BB`, making $S=$`CBBBA`.
- Delete the $2$-nd and $3$-rd characters `BB` and insert `A`, making $S=$`CABA`.
- Delete the $4$-th character `A` and insert `BB`, making $S=$`CABBB`.
- Delete the $3$-rd and $4$-th characters `BB` and insert `A`, making $S=$`CAAB`.

We cannot make $S$ lexicographically smaller than `CAAB`. Thus, the answer is `CAAB`.

```input2
1
A
```

```output2
A
```

We do no operation.

```input3
6
BBBCBB
```

```output3
ABCA
```