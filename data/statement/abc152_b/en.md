Score : $200$ points

## Problem Statement

Given are $1$-digit positive integers $a$ and $b$. Consider these two strings: the concatenation of $b$ copies of the digit $a$, and the concatenation of $a$ copies of the digit $b$. Which of these is lexicographically smaller?

## Constraints

- $1 \leq a \leq 9$
- $1 \leq b \leq 9$
- $a$ and $b$ are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$

## Output

Print the lexicographically smaller of the two strings. (If the two strings are equal, print one of them.)

```input1
4 3
```

```output1
3333
```

We have two strings `444` and `3333`. Between them, `3333` is the lexicographically smaller.

```input2
7 7
```

```output2
7777777
```