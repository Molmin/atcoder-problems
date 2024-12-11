Score : $400$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of uppercase and lowercase English letters.

Let us perform $Q$ operations on the string $S$.
The $i$-th operation $(1\leq i\leq Q)$ is represented by a tuple $(t _ i,x _ i,c _ i)$ of two integers and one character, as follows.

- If $t _ i=1$, change the $x _ i$-th character of $S$ to $c _ i$.
- If $t _ i=2$, convert all uppercase letters in $S$ to lowercase (do not use $x _ i,c _ i$ for this operation).
- If $t _ i=3$, convert all lowercase letters in $S$ to uppercase (do not use $x _ i,c _ i$ for this operation).

Print the $S$ after the $Q$ operations.

## Constraints

- $1\leq N\leq5\times10^5$
- $S$ is a string of length $N$ consisting of uppercase and lowercase English letters.
- $1\leq Q\leq5\times10^5$
- $1\leq t _ i\leq3\ (1\leq i\leq Q)$
- If $t _ i=1$, then $1\leq x _ i\leq N\ (1\leq i\leq Q)$.
- $c _ i$ is an uppercase or lowercase English letter.
- If $t _ i\neq 1$, then $x _ i=0$ and $c _ i=$ `'a'`.
- $N,Q,t _ i,x _ i$ are all integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $Q$
> 
> $t _ 1$ $x _ 1$ $c _ 1$
> 
> $t _ 2$ $x _ 2$ $c _ 2$
> 
> $\vdots$
> 
> $t _ Q$ $x _ Q$ $c _ Q$

## Output

Print the answer in a single line.

```input1
7
AtCoder
5
1 4 i
3 0 a
1 5 b
2 0 a
1 4 Y
```

```output1
atcYber
```

Initially, the string $S$ is `AtCoder`.

- The first operation changes the $4$-th character to `i`, changing $S$ to `AtCider`.
- The second operation converts all lowercase letters to uppercase, changing $S$ to `ATCIDER`.
- The third operation changes the $5$-th character to `b`, changing $S$ to `ATCIbER`.
- The fourth operation converts all uppercase letters to lowercase, changing $S$ to `atciber`.
- The fifth operation changes the $4$-th character to `Y`, changing $S$ to `atcYber`.

After the operations, the string $S$ is `atcYber`, so print `atcYber`.

```input2
35
TheQuickBrownFoxJumpsOverTheLazyDog
10
2 0 a
1 19 G
1 13 m
1 2 E
1 21 F
2 0 a
1 27 b
3 0 a
3 0 a
1 15 i
```

```output2
TEEQUICKBROWMFiXJUGPFOVERTBELAZYDOG
```