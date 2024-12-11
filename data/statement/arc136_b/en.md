Score : $400$ points

## Problem Statement

You are given integer sequences of length $N$ each: $A=(A_1,A_2,\cdots,A_N)$ and $B=(B_1,B_2,\cdots,B_N)$.

You can repeat the following operation any number of times.

- Choose an integer $i$ ($1 \leq i \leq N-2$) and let $x,y,z$ be the current values of $A_i,A_{i+1},A_{i+2}$, respectively.
Then, replace the values of $A_i,A_{i+1},A_{i+2}$ with $z,x,y$, respectively.

Determine whether it is possible to make $A$ equal $B$.

## Constraints

- $3 \leq N \leq 5000$
- $1 \leq A_i,B_i \leq 5000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $B_1$ $B_2$ $\cdots$ $B_N$

## Output

If it is possible to make $A$ equal $B$, print `Yes`; otherwise, print `No`.

```input1
4
3 1 4 5
4 1 5 3
```

```output1
Yes
```

We should do the following.

- Initially, we have $A=(3,1,4,5)$.
- Do the operation with $i=1$, making $A=(4,3,1,5)$.
- Do the operation with $i=2$, making $A=(4,5,3,1)$.
- Do the operation with $i=2$, making $A=(4,1,5,3)$.

```input2
3
1 2 2
2 1 2
```

```output2
Yes
```

```input3
3
1 2 3
2 3 4
```

```output3
No
```