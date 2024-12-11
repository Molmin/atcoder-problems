Score : $400$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\cdots,A_N)$ of length $N$, and another integer sequence $P=(P_2,\cdots,P_N)$ of length $N-1$. Note that the index of $P$ starts at $2$. It is guaranteed that $1 \leq P_i &lt; i$ for each $i$.

You will now repeat the following operation $10^{100}$ times.

- For each $i=2,\cdots,N$, in this order, replace the value of $A_{P_i}$ with $A_{P_i}+A_{i}$.

Determine whether $A_1$ will be positive, negative, or zero when all operations are completed.

## Constraints

- $2 \leq N \leq 250000$
- $-10^9 \leq A_i \leq 10^9$
- $1 \leq P_i &lt; i$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $P_2$ $\cdots$ $P_N$

## Output

If $A_1$ is positive when all operations are completed, print `+`; if it is negative, print `-`; if it is zero, print `0`.

```input1
4
1 -2 3 -4
1 2 3
```

```output1
-
```

Shown below are the results of the first few operations.

- After the first operation:-   - Before the operation: $A=(1,-2,3,-4)$.
-   - Processing for $i=2$: Replace the value of $A_1$ with $A_1+A_2=1+(-2)=-1$.
-   - Processing for $i=3$: Replace the value of $A_2$ with $A_2+A_3=-2+3=1$.
-   - Processing for $i=4$: Replace the value of $A_3$ with $A_3+A_4=3+(-4)=-1$.
-   - After the operation: $A=(-1,1,-1,-4)$.
- After the second operation, $A=(0,0,-5,-4)$.
- After the third operation, $A=(0,-5,-9,-4)$.
- After the fourth operation, $A=(-5,-14,-13,-4)$.
- $\vdots$

After $10^{100}$ operations, $A_1$ will be negative.
Thus, you should print `-`.

```input2
3
0 1 -1
1 1
```

```output2
0
```

```input3
5
1 -1 1 -1 1
1 1 2 2
```

```output3
+
```

```input4
20
568273618 939017124 -32990462 -906026662 403558381 -811698210 56805591 0 436005733 -303345804 96409976 179069924 0 0 0 -626752087 569946496 0 0 0
1 1 1 4 4 6 7 2 2 3 3 8 13 14 9 9 15 18 19
```

```output4
+
```