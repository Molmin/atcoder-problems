Score : $1000$ points

## Problem Statement

You are given two length-$N$ strings $A = A_1A_2 \ldots A_N$ and $B = B_1B_2 \ldots B_N$, each consisting of `0` and `1`.

There are $N$ squares aligned in a row from left to right. For $i = 1, 2, \ldots, N$, the $i$-th square from the left is called square $i$. Initially, square $i$ contains a piece if $A_i =$ `1`, and no piece if $A_i =$ `0`.

You may repeat the following operation any number of times (possibly zero):

- Choose an integer $i$ between $1$ and $N$, inclusive.
- Move all pieces simultaneously one square closer to square $i$. That is, for each piece, let square $j$ be its current position and square $j'$ be its new position, and the following holds:-   - if $i &amp;lt; j$, then $j' = j-1$;
-   - if $i &amp;gt; j$, then $j' = j+1$;
-   - if $i = j$, then $j' = j$.

Determine whether it is possible to reach a configuration satisfying the following condition, and if it is possible, find the minimum number of operations needed to do so:

For every $i = 1, 2, \ldots, N$, there is at least one piece in square $i$ if and only if $B_i =$ `1`.

You are given $T$ independent test cases. Print the answer for each of them.

## Constraints

- $1 \leq T \leq 2 \times 10^5$
- $1 \leq N \leq 10^6$
- $T$ and $N$ are integers.
- $A$ and $B$ are strings of length $N$, each consisting of `0` and `1`.
- There exists $i$ such that $A_i =$ `1`.
- There exists $i$ such that $B_i =$ `1`.
- The sum of $N$ over all test cases is at most $10^6$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Here, $\mathrm{case}_i$ ($i=1,2,\ldots,T$) denotes the $i$-th test case.

Each test case is given in the following format:

> $N$
> 
> $A$
> 
> $B$

## Output

Print $T$ lines.
For each $i = 1, 2, \ldots, T$, on the $i$-th line, print `-1` if it is impossible to reach a configuration satisfying the condition for the $i$-th test case. Otherwise, print the minimum number of operations needed.

```input1
3
8
01001101
00001011
3
010
111
20
10100011011110101011
00010001111101100000
```

```output1
3
-1
5
```

The input has three independent test cases.

In the first test case, initially, the sequence of the numbers of pieces in the squares is $(0, 1, 0, 0, 1, 1, 0, 1)$. By performing the operation three times as follows, you can satisfy the condition:

- Choose $i = 5$. After the operation, the configuration is $(0, 0, 1, 0, 2, 0, 1, 0)$.
- Choose $i = 8$. After the operation, the configuration is $(0, 0, 0, 1, 0, 2, 0, 1)$.
- Choose $i = 8$. After the operation, the configuration is $(0, 0, 0, 0, 1, 0, 2, 1)$.

It is impossible to satisfy the condition in fewer than three operations, so the answer is $3$.

In the second test case, no matter how you perform the operations, you cannot satisfy the condition, so the answer is `-1`.