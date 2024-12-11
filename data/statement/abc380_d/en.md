Score : $350$ points

## Problem Statement

You are given a string $S$ consisting of uppercase and lowercase English letters.  

We perform the following operation on $S$ $10^{100}$ times:

- First, create a string $T$ by changing uppercase letters in $S$ to lowercase, and lowercase letters to uppercase.
- Then, concatenate $S$ and $T$ in this order to form a new $S$.

Answer $Q$ queries. The $i$-th query is as follows:

- Find the $K_i$-th character from the beginning of $S$ after all operations are completed.

## Constraints

- $S$ is a string consisting of uppercase and lowercase English letters, with length between $1$ and $2 \times 10^5$, inclusive.
- $Q$ and $K_i$ are integers.
- $1 \le Q \le 2 \times 10^5$
- $1 \le K_i \le 10^{18}$

## Input

The input is given from Standard Input in the following format:

> $S$
> 
> $Q$
> 
> $K_1$ $K_2$ $\dots$ $K_Q$

## Output

Let $C_i$ be the answer to the $i$-th query. Print them in a single line, separated by spaces, in the following format:

> $C_1$ $C_2$ $\dots$ $C_Q$

```input1
aB
16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
```

```output1
a B A b A b a B A b a B a B A b
```

Before the operations, $S =$ `aB`.

- After performing the operation once on `aB`, it becomes `aBAb`.
- After performing the operation twice on `aB`, it becomes `aBAbAbaB`.
- $\dots$

After performing the operation $10^{100}$ times, $S =$ `aBAbAbaBAbaBaBAb`...

```input2
qWeRtYuIoP
8
1 1 2 3 5 8 13 21
```

```output2
q q W e t I E Q
```

```input3
AnUoHrjhgfLMcDIpzxXmEWPwBZvbKqQuiJTtFSlkNGVReOYCdsay
5
1000000000000000000 123456789 1 987654321 999999999999999999
```

```output3
K a A Z L
```