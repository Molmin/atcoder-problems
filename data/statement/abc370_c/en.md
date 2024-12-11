Score : $300$ points

## Problem Statement

You are given two strings $S$ and $T$ consisting of lowercase English letters. Here, $S$ and $T$ have equal lengths.

Let $X$ be an empty array, and repeat the following operation until $S$ equals $T$:

- Change one character in $S$, and append $S$ to the end of $X$.

Find the array of strings $X$ with the minimum number of elements obtained in this way. If there are multiple such arrays with the minimum number of elements, find the lexicographically smallest one among them.

 What is lexicographical order on arrays of strings?

A string $S = S_1 S_2 \ldots S_N$ of length $N$ is **lexicographically smaller** than a string $T = T_1 T_2 \ldots T_N$ of length $N$ if there exists an integer $1 \leq i \leq N$ such that both of the following are satisfied:

- $S_1 S_2 \ldots S_{i-1} = T_1 T_2 \ldots T_{i-1}$
- $S_i$ comes earlier than $T_i$ in alphabetical order.

An array of strings $X = (X_1,X_2,\ldots,X_M)$ with $M$ elements is **lexicographically smaller** than an array of strings $Y = (Y_1,Y_2,\ldots,Y_M)$ with $M$ elements if there exists an integer $1 \leq j \leq M$ such that both of the following are satisfied:

- $(X_1,X_2,\ldots,X_{j-1}) = (Y_1,Y_2,\ldots,Y_{j-1})$
- $X_j$ is lexicographically smaller than $Y_j$.

## Constraints

- $S$ and $T$ are strings consisting of lowercase English letters with length between $1$ and $100$, inclusive.
- The lengths of $S$ and $T$ are equal.

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

Let $M$ be the number of elements in the desired array. Print $M + 1$ lines.

The first line should contain the value of $M$.

The $i + 1$-th line $(1 \leq i \leq M)$ should contain the $i$-th element of the array.

```input1
adbe
bcbc
```

```output1
3
acbe
acbc
bcbc
```

Initially, $S =$ `adbe`.

We can obtain $X = ($ `acbe` $,$ `acbc` $,$ `bcbc` $)$ by performing the following operations:

- <p>Change $S$ to `acbe` and append `acbe` to the end of $X$.</p>
- <p>Change $S$ to `acbc` and append `acbc` to the end of $X$.</p>
- <p>Change $S$ to `bcbc` and append `bcbc` to the end of $X$.</p>

```input2
abcde
abcde
```

```output2
0
```

```input3
afwgebrw
oarbrenq
```

```output3
8
aawgebrw
aargebrw
aarbebrw
aarbebnw
aarbebnq
aarbeenq
aarbrenq
oarbrenq
```