Score : $1100$ points

## Problem Statement

Let $f(A, B)$, where $A$ and $B$ are positive integers, be the string satisfying the following conditions:

- $f(A, B)$ has length $A + B$;
- $f(A, B)$ contains exactly $A$ letters `A` and exactly $B$ letters `B`;
- The length of the longest substring of $f(A, B)$ consisting of equal letters (ex., `AAAAA` or `BBBB`) is as small as possible under the conditions above;
- $f(A, B)$ is the lexicographically smallest string satisfying the conditions above.

For example, $f(2, 3)$ = `BABAB`, and $f(6, 4)$ = `AABAABAABB`.

Answer $Q$ queries: find the substring of $f(A_i, B_i)$ from position $C_i$ to position $D_i$ (1-based).

## Constraints

- $1 \leq Q \leq 10^3$
- $1 \leq A_i, B_i \leq 5 \times 10^8$
- $1 \leq C_i \leq D_i \leq A_i + B_i$
- $D_i - C_i + 1 \leq 100$
- All input values are integers.

## Partial Score

- $500$ points will be awarded for passing the testset satisfying $1 \leq A_i, B_i \leq 10^3$.

## Input

Input is given from Standard Input in the following format:

> $Q$
> 
> $A_1$ $B_1$ $C_1$ $D_1$
> 
> $A_2$ $B_2$ $C_2$ $D_2$
> 
> $:$
> 
> $A_Q$ $B_Q$ $C_Q$ $D_Q$

## Output

For each query $i$ in order of input, print a line containing the substring of $f(A_i, B_i)$ from position $C_i$ to position $D_i$ (1-based).

```input1
5
2 3 1 5
6 4 1 10
2 3 4 4
6 4 3 7
8 10 5 8
```

```output1
BABAB
AABAABAABB
A
BAABA
ABAB
```