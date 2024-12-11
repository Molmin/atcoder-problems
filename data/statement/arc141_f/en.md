Score : $1100$ points

## Problem Statement

You are given $N$ srings $S_i\ (1\le i \le N)$ consisting of `A`, `B`, `C`, `D`.

Consider the operation below on a string $T$ consisting of `A`, `B`, `C`, `D`.

- Repeat the following until $T$ contains none of the strings $S_i$ as a substring.-   - Choose an $S_i$ and one of its occurrences in $T$, remove that occurrence from $T$, and concatenate the remaining parts.

  What is a substring?
A substring of a string is its contiguous subsequence. For example, `A`, `AB`, and `BC` are substrings of `ABC`, while `BA` and `AC` are not.

We say that the string $T$ is *bad* when multiple strings can result from the operation above.

Determine whether a bad string exists.

## Constraints

- $1 \leq N \leq 10^6$
- $1 \leq |S_i| \leq 2 \times 10^6$
- $|S_1|+|S_2|+\dots +|S_N| \leq 2 \times 10^6$
- $S_i \neq S_j$ if $i\neq j$.
- $S_i$ is a string consisting of `A`, `B`, `C`, `D`.

## Input

Input is given from Standard Input in the following format:

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

If a bad string exists, print `Yes`.

Otherwise, print `No`.

```input1
3
A
B
C
```

```output1
No
```

The only string we can get from $T$ is what remains after removing all occurrences of `A`, `B`, `C` from $T$.

```input2
1
ABA
```

```output2
Yes
```

For example, from $T=$ `ABABA`, we can get two strings: `AB` and `BA`, so $T$ is a bad string.

```input3
4
CBA
ACB
AD
CAB
```

```output3
Yes
```