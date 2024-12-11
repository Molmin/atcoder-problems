Score : $600$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `0`, `1`, and `?`.

You are also given $Q$ queries $(x_1, c_1), (x_2, c_2), \ldots, (x_Q, c_Q)$.<br>
For each $i = 1, 2, \ldots, Q$, $x_i$ is an integer satisfying $1 \leq x_i \leq N$ and $c_i$ is one of the characters `0` , `1`, and `?`.

For $i = 1, 2, \ldots, Q$ in this order, do the following process for the query $(x_i, c_i)$.

1. First, change the $x_i$-th character from the beginning of $S$ to $c_i$.
2. Then, print the number of non-empty strings, modulo $998244353$, that can be obtained as a (not necessarily contiguous) subsequence of $S$ after replacing each occurrence of `?` in $S$ with `0` or `1` independently.

## Constraints

- $1 \leq N, Q \leq 10^5$
- $N$ and $Q$ are integers.
- $S$ is a string of length $N$ consisting of `0`, `1`, and `?`.
- $1 \leq x_i \leq N$
- $c_i$ is one of the characters `0` , `1`, and `?`.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $S$
> 
> $x_1$ $c_1$
> 
> $x_2$ $c_2$
> 
> $\vdots$
> 
> $x_Q$ $c_Q$

## Output

Print $Q$ lines. For each $i = 1, 2, \ldots, Q$, the $i$-th line should contain the answer to the $i$-th query $(x_i, c_i)$ (that is, the number of strings modulo $998244353$ at the step 2. in the statement).

```input1
3 3
100
2 1
2 ?
3 ?
```

```output1
5
7
10
```

- <p>The $1$-st query starts by changing $S$ to `110`. Five strings can be obtained as a subsequence of $S =$ `110`: `0`, `1`, `10`, `11`, `110`. Thus, the $1$-st query should be answered by $5$.</p>
- <p>The $2$-nd query starts by changing $S$ to `1?0`. Two strings can be obtained by the `?` in $S =$ `1?0`: `100` and `110`. Seven strings can be obtained as a subsequence of one of these strings: `0`, `1`, `00`, `10`, `11`, `100`, `110`. Thus, the $2$-nd query should be answered by $7$.</p>
- <p>The $3$-rd query starts by changing $S$ to `1??`. Four strings can be obtained by the `?`'s in $S =$ `1??`: `100`, `101`, `110`, `111`. Ten strings can be obtained as a subsequence of one of these strings: `0`, `1`, `00`, `01`, `10`, `11`, `100`, `101`, `110`, `111`. Thus, the $3$-rd query should be answered by $10$.</p>

```input2
40 10
011?0??001??10?0??0?0?1?11?1?00?11??0?01
5 0
2 ?
30 ?
7 1
11 1
3 1
25 1
40 0
12 1
18 1
```

```output2
746884092
532460539
299568633
541985786
217532539
217532539
217532539
573323772
483176957
236273405
```

Be sure to print the count modulo $998244353$.