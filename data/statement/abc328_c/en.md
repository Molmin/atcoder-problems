Score : $300$ points

## Problem Statement

You are given a string $S = S_1S_2\ldots S_N$ of length $N$ consisting of lowercase English letters.

Additionally, you are given $Q$ queries about the string $S$.
For $i = 1, 2, \ldots, Q$, the $i$-th query is represented by two integers $l_i, r_i$ and asks the following.

In the substring $S_{l_i}S_{l_i+1}\ldots S_{r_i}$ of $S$, which ranges from the $l_i$-th to the $r_i$-th character, how many places are there where the same lowercase English letter occurs twice in a row?
In other words, how many integers $p$ satisfy $l_i \leq p \leq r_i-1$ and $S_p = S_{p+1}$?

Print the answer for each of the $Q$ queries.

## Constraints

- $N$ and $Q$ are integers.
- $1 \leq N, Q \leq 3 \times 10^5$
- $S$ is a string of length $N$ consisting of lowercase English letters.
- $l_i$ and $r_i$ are integers.
- $1 \leq l_i \leq r_i \leq N$

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $S$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\vdots$
> 
> $l_Q$ $r_Q$

## Output

Print $Q$ lines.
For $i = 1, 2, \ldots, Q$, the $i$-th line should contain the answer to the $i$-th query.

```input1
11 4
mississippi
3 9
4 10
4 6
7 7
```

```output1
2
2
0
0
```

The answers to the four queries are as follows.

- For the first query, $S_3S_4\ldots S_9 =$ `ssissip` has two places where the same lowercase English letter occurs twice in a row: $S_3S_4 =$ `ss` and $S_6S_7 =$ `ss`.
- For the second query, $S_4S_5\ldots S_{10} =$ `sissipp` has two places where the same lowercase English letter occurs twice in a row: $S_6S_7 =$ `ss` and $S_9S_{10} =$ `pp`.
- For the third query, $S_4S_5S_6 =$ `sis` has zero places where the same lowercase English letter occurs twice in a row.
- For the fourth query, $S_7 =$ `s` has zero places where the same lowercase English letter occurs twice in a row.

```input2
5 1
aaaaa
1 5
```

```output2
4
```

$S_1S_2\ldots S_5 =$ `aaaaa` has four places where the same lowercase English letter occurs twice in a row:
$S_1S_2 =$ `aa`, $S_2S_3 =$ `aa`, $S_3S_4 =$ `aa`, and $S_4S_5 =$ `aa`.