Score : $500$ points

## Problem Statement

The definition of an 11/22 string in this problem is the same as in Problems A and C.

A string $T$ is called an **11/22 string** when it satisfies all of the following conditions:

- $|T|$ is odd. Here, $|T|$ denotes the length of $T$.
- The $1$-st through $(\frac{|T|+1}{2} - 1)$-th characters are all `1`.
- The $(\frac{|T|+1}{2})$-th character is `/`.
- The $(\frac{|T|+1}{2} + 1)$-th through $|T|$-th characters are all `2`.

For example, `11/22`, `111/222`, and `/` are 11/22 strings, but `1122`, `1/22`, `11/2222`, `22/11`, and `//2/2/211` are not.

Given a string $S$ of length $N$ consisting of `1`, `2`, and `/`, process $Q$ queries.

Each query provides two integers $L$ and $R$. Let $T$ be the **(contiguous)** substring of $S$ from the $L$-th through $R$-th character. Find the maximum length of a subsequence **(not necessarily contiguous)** of $T$ that is an 11/22 string. If no such subsequence exists, print `0`.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq Q \leq 10^5$
- $S$ is a string of length $N$ consisting of `1`, `2`, and `/`.
- $1 \leq L \leq R \leq N$
- $N$, $Q$, $L$, and $R$ are integers.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{query}_i$ denotes the $i$-th query.

> $N$ $Q$
> 
> $S$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Each query is given in the following format:

> $L$ $R$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to the $i$-th query.

```input1
12 5
111/212/1122
1 7
9 12
3 6
4 10
1 12
```

```output1
5
0
3
1
7
```

For the first query, the substring from the $1$-st to $7$-th character of $S$ is `111/212`. This string contains `11/22` as a subsequence, which is the longest subsequence that is an 11/22 string. Therefore, the answer is $5$.<br>
For the second query, the substring from the $9$-th to $12$-th character of $S$ is `1122`. This string does not contain any subsequence that is an 11/22 string, so the answer is $0$.