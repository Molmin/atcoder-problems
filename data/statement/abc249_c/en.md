Score : $300$ points

## Problem Statement

You are given $N$ strings $S_1,S_2,\dots,S_N$ consisting of lowercase English alphabets.

Consider choosing some number of strings from $S_1,S_2,\dots,S_N$.

Find the maximum number of distinct alphabets that satisfy the following condition: "the alphabet is contained in exactly $K$ of the chosen strings."

## Constraints

- $1 \le N \le 15$
- $1 \le K \le N$
- $N$ and $K$ are integers.
- $S_i$ is a non-empty string consisting of lowercase English alphabets.
- For each integer $i$ such that $1 \le i \le N$, $S_i$ does not contain two or more same alphabets.
- If $i \neq j$, then $S_i \neq S_j$.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer.

```input1
4 2
abi
aef
bc
acg
```

```output1
3
```

When $S_1,S_3$, and $S_4$ are chosen, `a`,`b`, and `c` occur in exactly two of the strings.

There is no way to choose strings so that $4$ or more alphabets occur in exactly $2$ of the strings, so the answer is $3$.

```input2
2 2
a
b
```

```output2
0
```

You cannot choose the same string more than once.

```input3
5 2
abpqxyz
az
pq
bc
cy
```

```output3
7
```