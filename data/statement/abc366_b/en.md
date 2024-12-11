Score : $200$ points

## Problem Statement

You are given a horizontally written text. Convert it to vertical writing, filling spaces with `*`.

You are given $N$ strings $S_1, S_2, \dots, S_N$ consisting of lowercase English letters. Let $M$ be the maximum length of these strings.

Print $M$ strings $T_1, T_2, \dots, T_M$ that satisfy the following conditions:

- Each $T_i$ consists of lowercase English letters and `*`.
- Each $T_i$ does not end with `*`.
- For each $1 \leq i \leq N$, the following holds:-   - For each $1 \leq j \leq |S_i|$, the $(N-i+1)$-th character of $T_j$ exists, and the concatenation of the $(N-i+1)$-th characters of $T_1, T_2, \dots, T_{|S_i|}$ in this order equals $S_i$.
-   - For each $|S_i| + 1 \leq j \leq M$, the $(N-i+1)$-th character of $T_j$ either does not exist or is `*`.

Here, $|S_i|$ denotes the length of the string $S_i$.

## Constraints

- $N$ is an integer between $1$ and $100$, inclusive.
- Each $S_i$ is a string of lowercase English letters with length between $1$ and $100$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer in the following format:

> $T_1$
> 
> $T_2$
> 
> $\vdots$
> 
> $T_M$

```input1
3
abc
de
fghi
```

```output1
fda
geb
h*c
i
```

Placing `*` as the 2nd character of $T_3$ puts the `c` in the correct position.
On the other hand, placing `*` as the 2nd and 3rd characters of $T_4$ would make $T_4$ end with `*`, which violates the condition.

```input2
3
atcoder
beginner
contest
```

```output2
cba
oet
ngc
tio
end
sne
ter
*r
```