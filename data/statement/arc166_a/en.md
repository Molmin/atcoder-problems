Score : $400$ points

## Problem Statement

You are given strings $X$ and $Y$ of length $N$ each, consisting of `A`, `B`, and `C`.

Determine if it is possible to make $X$ coincide with $Y$ by performing the following three kinds of operations on $X$ any number of times, possibly zero.

- **Operation (1)**：Choose a character `C` in $X$ and replace it with `A`.
- **Operation (2)**：Choose a character `C` in $X$ and replace it with `B`.
- **Operation (3)**：Choose a substring `AB` in $X$ and replace it with `BA`. More formally, choose an $i$ such that the $i$-th and $(i+1)$-th characters of $X$ are `A` and `B`, respectively, and replace the former with `B` and the latter with `A`.

You have $T$ test cases to solve.

## Constraints

- $1\leq T\leq 2\times 10^5$
- $1\leq N\leq 2\times 10^5$
- Each of $X$ and $Y$ is a string of length $N$ consisting of `A`, `B`, and `C`.
- The sum of $N$ over the test cases in a single input is at most $2\times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each test case is given in the following format:

> $N$ $X$ $Y$

## Output

Print $T$ lines. The $i$-th line should contain `Yes` if it is possible to make $X$ coincide with $Y$ for the $i$-th test case, and `No` otherwise.

```input1
6
3 ABC ABC
1 C B
1 B C
2 AB BA
2 BA AB
3 CCB ABA
```

```output1
Yes
Yes
No
Yes
No
Yes
```

- For the first test case, you can perform the operations zero times to make $X$ coincide with $Y$.
- For the second test case, you can perform Operation (2) once to make $X$ coincide with $Y$.
- For the fourth test case, you can perform Operation (3) once to make $X$ coincide with $Y$.
- For the sixth test case, you can perform Operations (1), (3), (1) in this order at appropriate positions, for example, to make $X$ change as `CCB` → `CAB` → `CBA` → `ABA` and coincide with $Y$.

```input2
7
5 ABABA BABAB
5 ABCBC BBABA
5 CCCCC CBABC
5 BBAAA AAABB
5 AAABB BBAAA
5 ACACB BAACB
5 ACACB BBACA
```

```output2
No
Yes
Yes
No
Yes
Yes
No
```