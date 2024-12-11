Score : $500$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters, and $Q$ queries.  Process the queries in order.

Each query is of one of the following two kinds:

- `1 x c` : replace the $x$-th character of $S$ by the character $c$.
- `2 l r` : let $T$ be the string obtained by sorting the characters of $S$ in ascending order.  Print `Yes` if the string consisting of the $l$-th through $r$-th characters of $S$ is a substring of $T$; print `No` otherwise.

What is a substring?
A **substring** of $S$ is a string obtained by removing $0$ or more initial characters and $0$ or more final characters of $S$.
For example, `ab` is a substring of `abc`, while `ac` is not a substring of `abc`.

## Constraints

- $1\leq N \leq 10^5$
- $S$ is a string of length $N$ consisting of lowercase English letters.
- $1 \leq Q \leq 10^5$
- For each query of the first kind, $1 \leq x \leq N$.
- For each query of the first kind, $c$ is a lowercase English letter.
- For each query of the second kind, $1 \leq l \leq r \leq N$.

## Input

The input is given from Standard Input in the following format, where $\text{query}_i$ denotes the $i$-th query:

> $N$
> 
> $S$
> 
> $Q$
> 
> $\text{query}_1$
> 
> $\text{query}_2$
> 
> $\vdots$
> 
> $\text{query}_Q$

## Output

Process the queries as instructed in the Problem Statement.  

```input1
6
abcdcf
4
2 1 3
2 2 6
1 5 e
2 2 6
```

```output1
Yes
No
Yes
```

- In the $1$-st query, `abccdf` is the string $T$ obtained by sorting the characters of $S$ in ascending order.
The string `abc`, consisting of the $1$-st through $3$-rd characters of $S$, is a substring of $T$, so `Yes` should be printed.
- In the $2$-nd query, `abccdf` is the string $T$ obtained by sorting the characters of $S$ in ascending order.
The string `bcdcf`, consisting of the $2$-nd through $6$-th characters of $S$, is not a substring of $T$, so `No` should be printed.
- The $3$-rd query sets the $5$-th character of $S$ to `e`, making $S$ `abcdef`.
- In the $4$-th query, `abcdef` is the string $T$ obtained by sorting the characters of $S$ in ascending order.
The string `bcdef`, consisting of the $2$-nd through $6$-th characters of $S$, is a substring of $T$, so `Yes` should be printed.