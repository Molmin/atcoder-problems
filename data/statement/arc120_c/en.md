Score : $500$ points

## Problem Statement

Given are two sequences of length $N$ each: $A = (A_1, A_2, A_3, \dots, A_N)$ and $B = (B_1, B_2, B_3, \dots, B_N)$.<br>
Determine whether it is possible to make $A$ equal $B$ by repeatedly doing the operation below (possibly zero times). If it is possible, find the minimum number of operations required to do so.

- Choose an integer $i$ such that $1 \le i \lt N$, and do the following in order:-   - swap $A_i$ and $A_{i + 1}$;
-   - add $1$ to $A_i$;
-   - subtract $1$ from $A_{i + 1}$.

## Constraints

- $2 \le N \le 2 \times 10^5$
- $0 \le A_i \le 10^9$
- $0 \le B_i \le 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $B_3$ $\dots$ $B_N$

## Output

If it is impossible to make $A$ equal $B$, print `-1`.<br>
Otherwise, print the minimum number of operations required to do so.

```input1
3
3 1 4
6 2 0
```

```output1
2
```

We can match $A$ with $B$ in two operations, as follows:

- First, do the operation with $i = 2$, making $A = (3, 5, 0)$.
- Next, do the operation with $i = 1$, making $A = (6, 2, 0)$.

We cannot meet our objective in one or fewer operations.

```input2
3
1 1 1
1 1 2
```

```output2
-1
```

In this case, it is impossible to match $A$ with $B$.

```input3
5
5 4 1 3 2
5 4 1 3 2
```

```output3
0
```

$A$ may equal $B$ before doing any operation.

```input4
6
8 5 4 7 4 5
10 5 6 7 4 1
```

```output4
7
```