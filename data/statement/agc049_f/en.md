Score : $2400$ points

## Problem Statement

Integer sequences $A, B$ and $C$, each of length $N$, are given.
Snuke is happy if and only if the following condition is met.

- For every integer $x$, $\sum_{1 \leq i \leq N} |A_i-x| \leq \sum_{1 \leq i \leq N} |B_i-x|$ holds.

He decided to change at least $0$ elements of $A$ to become happy.
It costs him $C_i \times (A_i-t)^2$ to change $A_i$ to $t$.
Here, $t$, the value after the change, should be an **integer** as well.

Find the minimum possible sum of costs in order for Snuke to become happy.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 2 \times 10^5$
- $0 \leq B_i \leq 2 \times 10^5$
- $1 \leq C_i \leq 5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $B_1$ $B_2$ $\cdots$ $B_N$
> 
> $C_1$ $C_2$ $\cdots$ $C_N$

## Output

Print the answer.

```input1
3
0 1 4
1 2 3
1 3 2
```

```output1
6
```

After the following operations, the sum of costs is $6$.

- Change $A_1$ to $2$. This change costs $1 \times (0-2)^2=4$.
- Change $A_3$ to $3$. This change costs $2 \times (4-3)^2=2$.

After the operations, $A=(2,1,3)$ holds, which makes Snuke happy.
It is impossible to achieve the goal with sum of costs less than $6$, so the answer is $6$.

```input2
20
185 89 216 105 56 383 193 161 75 196 322 180 390 15 206 78 275 338 225 167
161 77 294 117 22 382 218 140 57 231 343 160 397 8 264 68 301 349 295 157
3 1 3 5 2 1 3 4 1 4 2 2 2 2 5 1 1 5 4 3
```

```output2
3758
```

```input3
1
0
0
1
```

```output3
0
```