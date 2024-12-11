Score : $400$ points

## Problem Statement

Given strings $S_1,S_2,S_3$ consisting of lowercase English letters, solve the alphametic $S_1+S_2=S_3$.

Formally, determine whether there is a triple of **positive** integers $N_1, N_2, N_3$ satisfying all of the three conditions below, and find one such triple if it exists.<br>
Here, $N'_1, N'_2, N'_3$ are strings representing $N_1, N_2, N_3$ (without leading zeros) in base ten, respectively.

- $N'_i$ and $S_i$ have the same number of characters.
- $N_1+N_2=N_3$.
- The $x$-th character of $S_i$ and the $y$-th character of $S_j$ is the same if and only if the $x$-th character of $N'_i$ and the $y$-th character of $N'_j$ are the same.

## Constraints

- Each of $S_1$, $S_2$, $S_3$ is a string of length between $1$ and $10$ (inclusive) consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S_1$
> 
> $S_2$
> 
> $S_3$

## Output

If there is a triple of positive integers $N_1, N_2, N_3$ satisfying the conditions, print one such triple, using newline as a separator.
Otherwise, print `UNSOLVABLE` instead.

```input1
a
b
c
```

```output1
1
2
3
```

Outputs such as $(N_1, N_2, N_3) = (4,5,9)$ will also be accepted, but $(1,1,2)$ will not since it violates the third condition (both `a` and `b` correspond to `1`).

```input2
x
x
y
```

```output2
1
1
2
```

Outputs such as $(N_1, N_2, N_3) = (3,3,6)$ will also be accepted, but $(1,2,3)$ will not since it violates the third condition (both $1$ and $2$ correspond to `x`).

```input3
p
q
p
```

```output3
UNSOLVABLE
```

```input4
abcd
efgh
ijkl
```

```output4
UNSOLVABLE
```

```input5
send
more
money
```

```output5
9567
1085
10652
```