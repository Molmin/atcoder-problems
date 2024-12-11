Score : $600$ points

## Problem Statement

Given is an integer sequence of length $N$: $A=(A_1,A_2,\cdots,A_N)$.

You can repeat the operation below any number of times.

- Choose an integer $i$ ($1 \leq i \leq N$) and add $-1, 2, -1$ to $A_{i-1},A_i,A_{i+1}$, respectively.
Here, $A_0$ stands for $A_N$, and $A_{N+1}$ stands for $A_1$.

Determine whether it is possible to make every element of $A$ $0$. If it is possible, find the minimum number of operations needed.

## Constraints

- $3 \leq N \leq 200000$
- $-100 \leq A_i \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

If it is impossible to make every element of $A$ $0$, print `-1`.
If it is possible to do so, print the minimum number of operations needed.

```input1
4
3 0 -1 -2
```

```output1
5
```

We can achieve the objective in five operations, as follows.

- Do the operation with $i=2$. Now we have $A=(2,2,-2,-2)$.
- Do the operation with $i=3$. Now we have $A=(2,1,0,-3)$.
- Do the operation with $i=3$. Now we have $A=(2,0,2,-4)$.
- Do the operation with $i=4$. Now we have $A=(1,0,1,-2)$.
- Do the operation with $i=4$. Now we have $A=(0,0,0,0)$.

```input2
3
1 0 -2
```

```output2
-1
```

```input3
4
1 -1 1 -1
```

```output3
-1
```

```input4
10
-28 -3 90 -90 77 49 -31 48 -28 -84
```

```output4
962
```