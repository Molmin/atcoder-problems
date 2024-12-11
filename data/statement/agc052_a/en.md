Score : $400$ points

## Problem Statement

You are given $3$ binary strings $S_1, S_2, S_3$, each containing exactly $N$ `0`'s and $N$ `1`'s.

Find a binary string of length $2N+1$, which is a subsequence of all of the strings $S_1 + S_1, S_2 + S_2, S_3 + S_3$ ($s+t$ denotes the concatenation of strings $s$ and $t$ in order). It's guaranteed that under the constraints above such a string always exists.

Here a string $B$ is a subsequence of a string $A$ if $B$ can be obtained by removing zero or more characters from $A$ and concatenating the remaining characters without changing the order.

You will be given $T$ test cases. Solve each of them.

## Constraints

- $1 \le T \le 10^5$
- $1\le N \le 10^5$
- $S_i$ is a binary string of length $2N$ consisting of $N$ `0`'s and $N$ `1`'s.
- The sum of $N$ over all test cases doesn't exceed $10^5$.

## Input

Input is given from Standard Input in the following format.
The first line of input is as follows:

> $T$

Then, $T$ test cases follow, each of which is in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $S_3$

## Output

For each test case, print any binary string of length $2N+1$, which is a subsequence of all of $S_1 + S_1, S_2 + S_2, S_3 + S_3$.
If many such strings exist, you can print any.

```input1
2
1
01
01
10
2
0101
0011
1100
```

```output1
010
11011
```

In the first case, `010` is a subsequence of `0101`, `0101`, and `1010`.

In the second case, `11011` is a subsequence of `01010101`, `00110011`, and `11001100`.