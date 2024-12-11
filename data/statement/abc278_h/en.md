Score : $600$ points

## Problem Statement

A sequence $S$ of non-negative integers is said to be a **good sequence** if:

- there exists a non-empty (not necessarily contiguous) subsequence $T$ of $S$ such that the bitwise XOR of all elements in $T$ is $1$.

There are an empty sequence $A$, and $2^B$ cards with each of the integers between $0$ and $2^B-1$ written on them.<br>
You repeat the following operation until $A$ becomes a good sequence:

- You freely choose a card and append the integer written on it to the tail of $A$.  Then, you eat the card.  (Once eaten, the card cannot be chosen anymore.)

How many sequences of length $N$ can be the final $A$ after the operations?  Find the count modulo $998244353$.

What is bitwise XOR?
The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$,  $A \oplus B$, is defined as follows.

- When $A \oplus B$ is written in binary, the $k$-th lowest bit ($k \geq 0$) is $1$ if exactly one of the $k$-th lowest bits of $A$ and $B$ is $1$, and $0$ otherwise.

For instance, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).  

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq B \leq 10^7$
- $N \leq 2^B$
- $N$ and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $B$

## Output

Print the answer.

```input1
2 2
```

```output1
5
```

The following five sequences of length $2$ can be the final $A$ after the operations.

- $(0, 1)$
- $(2, 1)$
- $(2, 3)$
- $(3, 1)$
- $(3, 2)$

```input2
2022 1119
```

```output2
293184537
```

```input3
200000 10000000
```

```output3
383948354
```