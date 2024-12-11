Score : $100$ points

## Problem Statement

You are given a string $S$ of even length consisting of lowercase English letters.  Let $|S|$ be the length of $S$, and $S_i$ be the $i$-th character of $S$.  

Perform the following operation for each $i = 1, 2, \ldots, \frac{|S|}{2}$ in this order, and print the final $S$.  

- Swap $S_{2i-1}$ and $S_{2i}$.

## Constraints

- $S$ is a string of even length consisting of lowercase English letters.
- The length of $S$ is at most $100$.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
abcdef
```

```output1
badcfe
```

Initially, $S =$ `abcdef`.<br>
Performing the operation for $i = 1$ swaps $S_1$ and $S_2$, making $S =$ `bacdef`.<br>
Performing the operation for $i = 2$ swaps $S_3$ and $S_4$, making $S =$ `badcef`.<br>
Performing the operation for $i = 3$ swaps $S_5$ and $S_6$, making $S =$ `badcfe`.<br>
Thus, `badcfe` should be printed.

```input2
aaaa
```

```output2
aaaa
```

```input3
atcoderbeginnercontest
```

```output3
taocedbrgeniencrnoetts
```