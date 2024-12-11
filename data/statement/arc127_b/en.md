Score : $500$ points

## Problem Statement

Given are integers $N$ and $L$.
Find a tuple of $3N$ strings $(S_1,S_2,\cdots,S_{3N})$ that satisfies all of the following conditions.

- <p>$S_i$ is a string of length $L$ consisting of `0`, `1`, `2`.</p>
- <p>All $S_i$ are pairwise distinct.</p>
- <p>For every $j$ ($1 \leq j \leq L$) and every $c=$`0`, `1`, `2`, the following holds.</p>
-   - For exactly $N$ of the strings $S_i$, the $j$-th character is $c$.
- <p>Let $t$ be the lexicographically largest string among $S_1,S_2,\cdots,S_{3N}$.
$t$ for this tuple is the lexicographically smallest among all strings that $t$ can be.</p>

## Constraints

- $1 \leq N \leq 5 \times 10^4$
- $1 \leq L \leq 15$
- $3N \leq 3^L$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $L$

## Output

Print the answer in the following format:

> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_{3N}$

If there are multiple solutions satisfying the conditions, any of them will be accepted.

```input1
2 2
```

```output1
00
02
11
12
20
21
```

This Sample Output satisfies all conditions.

For example, there are two strings whose second character is `0`.

Also, we have $t=$`21` in this sample, and $t$ is never lexicographically smaller than this.