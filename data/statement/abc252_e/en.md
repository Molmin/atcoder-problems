Score : $500$ points

## Problem Statement

The Kingdom of AtCoder has $N$ cities called City $1,2,\ldots,N$ and $M$ roads called Road $1,2,\ldots,M$.<br>
Road $i$ connects Cities $A_i$ and $B_i$ bidirectionally and has a length of $C_i$.<br>
One can travel between any two cities using some roads.

Under financial difficulties, the kingdom has decided to maintain only $N-1$ roads so that one can still travel between any two cities using those roads and abandon the rest.

Let $d_i$ be the total length of the roads one must use when going from City $1$ to City $i$ using only maintained roads. Print a choice of roads to maintain that minimizes $d_2+d_3+\ldots+d_N$.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $N-1 \leq M \leq 2\times 10^5$
- $1 \leq A_i &lt; B_i \leq N$
- $(A_i,B_i)\neq(A_j,B_j)$ if $i\neq j$.
- $1\leq C_i \leq 10^9$
- One can travel between any two cities using some roads.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

Print the indices of roads to maintain, in arbitrary order, with spaces in between.<br>
If multiple solutions exist, you may print any of them.

```input1
3 3
1 2 1
2 3 2
1 3 10
```

```output1
1 2
```

Here are the possible choices of roads to maintain and the corresponding values of $d_i$.

- Maintain Road $1$ and $2$: $d_2=1$, $d_3=3$.
- Maintain Road $1$ and $3$: $d_2=1$, $d_3=10$.
- Maintain Road $2$ and $3$: $d_2=12$, $d_3=10$.

Thus, maintaining Road $1$ and $2$ minimizes $d_2+d_3$.

```input2
4 6
1 2 1
1 3 1
1 4 1
2 3 1
2 4 1
3 4 1
```

```output2
3 1 2
```