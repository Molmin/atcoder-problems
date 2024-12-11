Score : $900$ points

## Problem Statement

There are $N$ Snukes lining up in a row.
You are given a string $S$ of length $N$. The $i$-th Snuke from the front has two red balls if the $i$-th character in $S$ is `0`; one red ball and one blue ball if the $i$-th character in $S$ is `1`; two blue balls if the $i$-th character in $S$ is `2`.

Takahashi has a sequence that is initially empty. Find the number of the possible sequences he may have after repeating the following procedure $2N$ times, modulo $998244353$:

- Each Snuke who has one or more balls simultaneously chooses one of his balls and hand it to the Snuke in front of him, or hand it to Takahashi if he is the first Snuke in the row.
- Takahashi receives the ball and put it to the end of his sequence.

## Constraints

- $1 \leq |S| \leq 2000$
- $S$ consists of `0`,`1` and `2`.

Note that the integer $N$ is not directly given in input; it is given indirectly as the length of the string $S$.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the number of the possible sequences Takahashi may have after repeating the procedure $2N$ times, modulo $998244353$.

```input1
02
```

```output1
3
```

There are three sequences that Takahashi may have: `rrbb`, `rbrb` and `rbbr`, where `r` and `b` stand for red and blue balls, respectively.

```input2
1210
```

```output2
55
```

```input3
12001021211100201020
```

```output3
543589959
```