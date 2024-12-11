Score : $1000$ points

## Problem Statement

How many infinite sequences $a_1, a_2, ...$ consisting of {${1, ... ,n}$} satisfy the following conditions?

- The $n$-th and subsequent elements are all equal. That is, if $n \leq i,j$, $a_i = a_j$.
- For every integer $i$, the $a_i$ elements immediately following the $i$-th element are all equal. That is, if $i &lt; j &lt; k\leq i+a_i$, $a_j = a_k$.

Find the count modulo $10^9+7$.

## Constraints

- $1 \leq n \leq 10^6$

## Input

Input is given from Standard Input in the following format:

> $n$

## Output

Print how many sequences satisfy the conditions, modulo $10^9+7$.

```input1
2
```

```output1
4
```

The four sequences that satisfy the conditions are:

- $1, 1, 1, ...$
- $1, 2, 2, ...$
- $2, 1, 1, ...$
- $2, 2, 2, ...$

```input2
654321
```

```output2
968545283
```