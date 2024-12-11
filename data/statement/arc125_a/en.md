Score : $300$ points

## Problem Statement

Snuke has a sequence of $N$ integers $a=(a_1,a_2,\cdots,a_N)$ consisting of $0$s and $1$s, and an empty integer sequence $b$.
The initial state $a_i=S_i$ is given to you as input.

Snuke can do the following three operations any number of times in any order.

- <p>Shift $a$ to the right. In other words, replace $a$ with $(a_N,a_1,a_2,\cdots,a_{N-1})$.</p>
- <p>Shift $a$ to the left. In other words, replace $a$ with $(a_2,a_3,\cdots,a_N,a_1)$.</p>
- <p>Append the current value of $a_1$ at the end of $b$.</p>

You are also given a sequence of $M$ integers $T=(T_1,T_2,\cdots,T_M)$.
Determine whether it is possible to make $b$ equal to $T$. If it is possible, find the minimum number of operations needed to do so.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $0 \leq S_i \leq 1$
- $0 \leq T_i \leq 1$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$ $S_2$ $\cdots$ $S_N$
> 
> $T_1$ $T_2$ $\cdots$ $T_M$

## Output

If it is impossible to make $b$ equal to $T$, print `-1`.
If it is possible, print the minimum number of operations needed to do so.

```input1
3 4
0 0 1
0 1 1 0
```

```output1
6
```

The following sequence of six operations will do the job.

- <p>Append the current value of $a_1$ at the end of $b$, making $b=(0)$.</p>
- <p>Shift $a$ to the right, making $a=(1,0,0)$.</p>
- <p>Append the current value of $a_1$ at the end of $b$, making $b=(0,1)$.</p>
- <p>Append the current value of $a_1$ at the end of $b$, making $b=(0,1,1)$.</p>
- <p>Shift $a$ to the right, making $a=(0,1,0)$.</p>
- <p>Append the current value of $a_1$ at the end of $b$, making $b=(0,1,1,0)$.</p>

```input2
1 1
0
1
```

```output2
-1
```