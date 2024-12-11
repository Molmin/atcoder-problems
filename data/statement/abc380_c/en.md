Score : $300$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `0` and `1`.<br>
Move the $K$-th `1`-block from the beginning in $S$ to immediately after the $(K-1)$-th `1`-block, and print the resulting string.

It is guaranteed that $S$ contains at least $K$ `1`-blocks.

Here is a more precise description.

- Let $S_{l\ldots r}$ denote the substring of $S$ from the $l$-th character through the $r$-th character.
- We define a substring $S_{l\ldots r}$ of $S$ to be a `1`-block if it satisfies all of the following conditions:-   - $S_l = S_{l+1} = \cdots = S_r =$ `1`
-   - $l = 1$ or $S_{l-1} =$ `0`
-   - $r = N$ or $S_{r+1} =$ `0`
- <p>Suppose that all `1`-blocks in $S$ are $S_{l_1\ldots r_1}, \ldots, S_{l_m\ldots r_m}$, where $l_1 &lt; l_2 &lt; \cdots &lt; l_m$.</p>
<p>Then, we define the length $N$ string $T$, obtained by moving the $K$-th `1`-block to immediately after the $(K-1)$-th `1`-block, as follows:</p>
-   - $T_i = S_i$ for $1 \leq i \leq r_{K-1}$
-   - $T_i =$ `1` for $r_{K-1} + 1 \leq i \leq r_{K-1} + (r_K - l_K) + 1$
-   - $T_i =$ `0` for $r_{K-1} + (r_K - l_K) + 2 \leq i \leq r_K$
-   - $T_i = S_i$ for $r_K + 1 \leq i \leq N$

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $S$ is a string of length $N$ consisting of `0` and `1`.
- $2 \leq K$
- $S$ contains at least $K$ `1`-blocks.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the answer.

```input1
15 3
010011100011001
```

```output1
010011111000001
```

$S$ has four `1`-blocks: from the 2nd to the 2nd character, from the 5th to the 7th character, from the 11th to the 12th character, and from the 15th to the 15th character.

```input2
10 2
1011111111
```

```output2
1111111110
```