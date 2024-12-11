Score : $200$ points

## Problem Statement

You are given $N$ strings of length six each, consisting of digits.  Let $S_i$ be the $i$-th $(i = 1, 2, \dots, N)$ of them.

You are also given $M$ strings of length three each, consisting of digits.  Let $T_j$ be the $j$-th $(j = 1, 2, \dots, M)$ of them.

Find the number of strings among $S_1, S_2, \dots, S_N$ whose last three characters coincide with one or more of $T_1, T_2, \dots, T_M$.

## Constraints

- $1 \leq N, M \leq 1000$
- $N$ and $M$ are integers.
- $S_i$ is a string of length $6$ consisting of digits, for all $i = 1, 2, \dots, N$.
- $T_j$ is a string of length $3$ consisting of digits, for all $j = 1, 2, \dots, M$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$
> 
> $T_1$
> 
> $T_2$
> 
> $\vdots$
> 
> $T_M$

## Output

Print the answer.

```input1
3 3
142857
004159
071028
159
287
857
```

```output1
2
```

The last three characters of $S_1$ are `857`, which coincide with $T_3$.<br>
The last three characters of $S_2$ are `159`, which coincide with $T_1$.<br>
The last three characters of $S_3$ are `028`, which do not coincide with $T_1$, $T_2$, or $T_3$.  

Thus, the answer is $2$.

```input2
5 4
235983
109467
823476
592801
000333
333
108
467
983
```

```output2
3
```

```input3
4 4
000000
123456
987111
000000
000
111
999
111
```

```output3
3
```