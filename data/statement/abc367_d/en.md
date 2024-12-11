Score : $400$ points

## Problem Statement

There are $N$ rest areas around a lake.<br>
The rest areas are numbered $1$, $2$, ..., $N$ in clockwise order.<br>
It takes $A_i$ steps to walk clockwise from rest area $i$ to rest area $i+1$ (where rest area $N+1$ refers to rest area $1$).<br>
The minimum number of steps required to walk clockwise from rest area $s$ to rest area $t$ ($s \neq t$) is a multiple of $M$.<br>
Find the number of possible pairs $(s,t)$.

## Constraints

- All input values are integers
- $2 \le N \le 2 \times 10^5$
- $1 \le A_i \le 10^9$
- $1 \le M \le 10^6$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
4 3
2 1 4 3
```

```output1
4
```

- The minimum number of steps to walk clockwise from rest area $1$ to rest area $2$ is $2$, which is not a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $1$ to rest area $3$ is $3$, which is a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $1$ to rest area $4$ is $7$, which is not a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $2$ to rest area $3$ is $1$, which is not a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $2$ to rest area $4$ is $5$, which is not a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $2$ to rest area $1$ is $8$, which is not a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $3$ to rest area $4$ is $4$, which is not a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $3$ to rest area $1$ is $7$, which is not a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $3$ to rest area $2$ is $9$, which is a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $4$ to rest area $1$ is $3$, which is a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $4$ to rest area $2$ is $5$, which is not a multiple of $3$.
- The minimum number of steps to walk clockwise from rest area $4$ to rest area $3$ is $6$, which is a multiple of $3$.

Therefore, there are four possible pairs $(s,t)$.

```input2
2 1000000
1 1
```

```output2
0
```

```input3
9 5
9 9 8 2 4 4 3 5 3
```

```output3
11
```