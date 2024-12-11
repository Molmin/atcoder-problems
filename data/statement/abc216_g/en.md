Score : $600$ points

## Problem Statement

Consider a sequence of length $N$ consisting of `0`s and `1`s, $A=(A_1,A_2,\dots,A_N)$, that satisfies the following condition.

For every $i=1,2,\dots,M$, there are at least $X_i$ occurrences of `1` among $A_{L_i}, A_{L_i+1}, \dots, A_{R_i}$.

Print one such sequence with the **fewest** number of occurrences of `1`s. 

There always exists a sequence that satisfies the condition under the Constraints.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq \min(2 \times 10^5, \frac{N(N+1)}{2} )$
- $1 \leq L_i \leq R_i \leq N$
- $1 \leq X_i \leq R_i-L_i+1$
- $(L_i,R_i) \neq (L_j,R_j)$ if $i \neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$ $X_1$
> 
> $L_2$ $R_2$ $X_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$ $X_M$

## Output

Print a sequence $A$ consisting of `0`s and `1`s, with spaces in between.

> $A_1$ $A_2$ $\dots$ $A_N$

It must satisfy all the requirements above.

```input1
6 3
1 4 3
2 2 1
4 6 2
```

```output1
0 1 1 1 0 1
```

Another acceptable output is `1 1 0 1 1 0`.<br>
On the other hand, `0 1 1 1 1 1`, which has more than the fewest number of `1`s, is unacceptable.

```input2
8 2
2 6 1
3 5 3
```

```output2
0 0 1 1 1 0 0 0
```