Score : $500$ points

## Problem Statement

We have an empty sequence $A$. You will be given $Q$ queries, which should be processed in the order they are given.
Each query is of one of the three kinds below:

- `1 x` : Append $x$ to the end of $A$.
- `2` : Print the element at the beginning of $A$. Then, delete that element. It is guaranteed that $A$ will not empty when this query is given.
- `3` : Sort $A$ in ascending order.

## Constraints

- $1 \leq Q \leq 2 \times 10^5$
- $0 \leq x \leq 10^9$
- $A$ will not be empty when a query `2` is given.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $Q$
> 
> $\mathrm{query} 1$
> 
> $\mathrm{query} 2$
> 
> $\vdots$
> 
> $\mathrm{query} Q$

The $i$-th query, $\mathrm{query} i$, begins with the kind of query $c_i$ ($1$, $2$, or $3$).
If $c_i = 1$, the line additionally has an integer $x$.

In other words, each query is in one of the three formats below.

> $1$ $x$
> $2$
> $3$

## Output

Print $q$ lines, where $q$ is the number of queries with $c_i = 2$.<br>
The $j$-th line $(1 \leq j \leq q)$ should contain the response for the $j$-th such query.

```input1
8
1 4
1 3
1 2
1 1
3
2
1 0
2
```

```output1
1
2
```

The $i$-th line below shows the contents of $A$ after the $i$-th query is processed in Sample Input $1$.

- $(4)$
- $(4, 3)$
- $(4, 3, 2)$
- $(4, 3, 2, 1)$
- $(1, 2, 3, 4)$
- $(2, 3, 4)$
- $(2, 3, 4, 0)$
- $(3, 4, 0)$

```input2
9
1 5
1 5
1 3
2
3
2
1 6
3
2
```

```output2
5
3
5
```

The $i$-th line below shows the contents of $A$ after the $i$-th query is processed in Sample Input $2$.

- $(5)$
- $(5, 5)$
- $(5, 5, 3)$
- $(5, 3)$
- $(3, 5)$
- $(5)$
- $(5, 6)$
- $(5, 6)$
- $(6)$