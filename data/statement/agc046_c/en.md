Score : $800$ points

## Problem Statement

Given is a string $S$ consisting of `0` and `1`. Find the number of strings, modulo $998244353$, that can result from applying the following operation on $S$ between $0$ and $K$ times (inclusive):

- Choose a pair of integers $i, j$ $(1\leq i &lt; j\leq |S|)$ such that the $i$-th and $j$-th characters of $S$ are `0` and `1`, respectively. Remove the $j$-th character from $S$ and insert it to the immediate left of the $i$-th character.

## Constraints

- $1 \leq |S| \leq 300$
- $0 \leq K \leq 10^9$
- $S$ consists of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $S$ $K$

## Output

Find the number of strings, modulo $998244353$, that can result from applying the operation on $S$ between $0$ and $K$ times (inclusive).

```input1
0101 1
```

```output1
4
```

Four strings, `0101`, `0110`, `1001`, and `1010`, can result.

```input2
01100110 2
```

```output2
14
```

```input3
1101010010101101110111100011011111011000111101110101010010101010101 20
```

```output3
113434815
```