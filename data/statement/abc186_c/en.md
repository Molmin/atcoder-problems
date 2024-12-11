Score : $300$ points

## Problem Statement

Takahashi hates the number $7$.

We are interested in integers without the digit $7$ in both decimal and octal. How many such integers are there between $1$ and $N$ (inclusive)?

## Constraints

- $1 \leq N \leq 10^5$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print an integer representing the answer.

```input1
20
```

```output1
17
```

Among the integers between $1$ and $20$, $7$ and $17$ contain the digit $7$ in decimal. Additionally, $7$ and $15$ contain the digit $7$ in octal.

Thus, the $17$ integers other than $7$, $15$, and $17$ meet the requirement.

```input2
100000
```

```output2
30555
```