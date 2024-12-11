Score : $400$ points

## Problem Statement

You are given a string $S$ consisting of uppercase English letters.

Find the number of integer triples $(i, j, k)$ satisfying both of the following conditions:

- $1 \leq i &lt; j &lt; k \leq |S|$
- The length-$3$ string formed by concatenating $S_i$, $S_j$, and $S_k$ in this order is a palindrome.

Here, $|S|$ denotes the length of $S$, and $S_x$ denotes the $x$-th character of $S$.

## Constraints

- $S$ is a string of length between $1$ and $2 \times 10^5$, inclusive, consisting of uppercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
ABCACC
```

```output1
5
```

The triples satisfying the conditions are $(i, j, k) = (1, 2, 4), (1, 3, 4), (3, 4, 5), (3, 4, 6), (3, 5, 6)$.

```input2
OOOOOOOO
```

```output2
56
```

```input3
XYYXYYXYXXX
```

```output3
75
```