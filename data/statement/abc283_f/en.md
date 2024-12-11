Score : $500$ points

## Problem Statement

You are given a permutation $P=(P _ 1,P _ 2,\ldots,P _ N)$ of $(1,2,\ldots,N)$.

Find the following value for all $i\ (1\leq i\leq N)$:

- $D _ i=\displaystyle\min_{j\neq i}\left\lparen\left\lvert P _ i-P _ j\right\rvert+\left\lvert i-j\right\rvert\right\rparen$.

What is a permutation?

A permutation of $(1,2,\ldots,N)$ is a sequence that is obtained by rearranging $(1,2,\ldots,N)$.
In other words, a sequence $A$ of length $N$ is a permutation of $(1,2,\ldots,N)$ if and only if each $i\ (1\leq i\leq N)$ occurs in $A$ exactly once.

## Constraints

- $2 \leq N \leq 2\times10^5$
- $1 \leq P _ i \leq N\ (1\leq i\leq N)$
- $i\neq j\implies P _ i\neq P _ j$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P _ 1$ $P _ 2$ $\ldots$ $P _ N$

## Output

Print $D _ i\ (1\leq i\leq N)$ in ascending order of $i$, separated by spaces.

```input1
4
3 2 4 1
```

```output1
2 2 3 3
```

For example, for $i=1$,

- if $j=2$, we have $\left\lvert P _ i-P _ j\right\rvert=1$ and $\left\lvert i-j\right\rvert=1$;
- if $j=3$, we have $\left\lvert P _ i-P _ j\right\rvert=1$ and $\left\lvert i-j\right\rvert=2$;
- if $j=4$, we have $\left\lvert P _ i-P _ j\right\rvert=2$ and $\left\lvert i-j\right\rvert=3$.

Thus, the value is minimum when $j=2$, where $\left\lvert P _ i-P _ j\right\rvert+\left\lvert i-j\right\rvert=2$, so $D _ 1=2$.

```input2
7
1 2 3 4 5 6 7
```

```output2
2 2 2 2 2 2 2
```

```input3
16
12 10 7 14 8 3 11 13 2 5 6 16 4 1 15 9
```

```output3
3 3 3 5 3 4 3 3 4 2 2 4 4 4 4 7
```