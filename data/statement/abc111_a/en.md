Score : $100$ points

## Problem Statement

Cat Snuke is learning to write characters.
Today, he practiced writing digits `1` and `9`, but he did it the other way around.

You are given a three-digit integer $n$ written by Snuke.
Print the integer obtained by replacing each digit `1` with `9` and each digit `9` with `1` in $n$.

## Constraints

- $111 \leq n \leq 999$
- $n$ is an integer consisting of digits `1` and `9`.

## Input

Input is given from Standard Input in the following format:

> $n$

## Output

Print the integer obtained by replacing each occurrence of `1` with `9` and each occurrence of `9` with `1` in $n$.

```input1
119
```

```output1
991
```

Replace the `9` in the ones place with `1`, the `1` in the tens place with `9` and the `1` in the hundreds place with `9`. The answer is `991`.

```input2
999
```

```output2
111
```