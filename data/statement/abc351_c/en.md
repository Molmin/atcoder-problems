Score: $250$ points

## Problem Statement

You have an empty sequence and $N$ balls. The size of the $i$-th ball $(1 \leq i \leq N)$ is $2^{A_i}$.

You will perform $N$ operations.<br>
In the $i$-th operation, you add the $i$-th ball to the right end of the sequence, and repeat the following steps:

1. If the sequence has one or fewer balls, end the operation.
2. If the rightmost ball and the second rightmost ball in the sequence have **different** sizes, end the operation.
3. If the rightmost ball and the second rightmost ball in the sequence have the **same** size, remove these two balls and add a new ball to the right end of the sequence with a size equal to the sum of the sizes of the two removed balls. Then, go back to step 1 and repeat the process.

Determine the number of balls remaining in the sequence after the $N$ operations.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the number of balls in the sequence after the $N$ operations.

```input1
7
2 1 1 3 5 3 3
```

```output1
3
```

The operations proceed as follows:

- After the first operation, the sequence has one ball, of size $2^2$.
- After the second operation, the sequence has two balls, of sizes $2^2$ and $2^1$ in order.
- After the third operation, the sequence has one ball, of size $2^3$. This is obtained as follows:-   - When the third ball is added during the third operation, the sequence has balls of sizes $2^2, 2^1, 2^1$ in order.
-   - The first and second balls from the right have the same size, so these balls are removed, and a ball of size $2^1 + 2^1 = 2^2$ is added. Now, the sequence has balls of sizes $2^2, 2^2$.
-   - Again, the first and second balls from the right have the same size, so these balls are removed, and a ball of size $2^2 + 2^2 = 2^3$ is added, leaving the sequence with a ball of size $2^3$.
- After the fourth operation, the sequence has one ball, of size $2^4$.
- After the fifth operation, the sequence has two balls, of sizes $2^4$ and $2^5$ in order.
- After the sixth operation, the sequence has three balls, of sizes $2^4$, $2^5$, $2^3$ in order.
- After the seventh operation, the sequence has three balls, of sizes $2^4$, $2^5$, $2^4$ in order.

Therefore, you should print $3$, the final number of balls in the sequence.

```input2
5
0 0 0 1 2
```

```output2
4
```

The operations proceed as follows:

- After the first operation, the sequence has one ball, of size $2^0$.
- After the second operation, the sequence has one ball, of size $2^1$.
- After the third operation, the sequence has two balls, of sizes $2^1$ and $2^0$ in order.
- After the fourth operation, the sequence has three balls, of sizes $2^1$, $2^0$, $2^1$ in order.
- After the fifth operation, the sequence has four balls, of sizes $2^1$, $2^0$, $2^1$, $2^2$ in order.

Therefore, you should print $4$, the final number of balls in the sequence.