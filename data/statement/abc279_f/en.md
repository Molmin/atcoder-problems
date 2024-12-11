Score : $500$ points

## Problem Statement

There are $N$ boxes numbered $1,2,\ldots,N$, and $10^{100}$ balls numbered $1,2,\dots,10^{100}$.
Initially, box $i$ contains just ball $i$.

Process a total of $Q$ operations that will be performed.

There are three types of operations: $1$, $2$, and $3$.

Type $1$: Put all contents of box $Y$ into box $X$. It is guaranteed that $X \neq Y$.

```plain
1 $X$ $Y$
```

Type $2$: Put ball $k+1$ into box $X$, where $k$ is the current total number of balls contained in the boxes.

```plain
2 $X$
```

Type $3$: Report the number of the box that contains ball $X$.

```plain
3 $X$
```

## Constraints

- All values in the input are integers.
- $2 \le N \le 3 \times 10^5$
- $1 \le Q \le 3 \times 10^5$
- For each type-$1$ operation, $1 \le X,Y \le N$ and $X \neq Y$.
- For each type-$2$ operation, $1 \le X \le N$.
- For each type-$3$ operation, ball $X$ is contained in some box at that point.
- There is at least one type-$3$ operation.

## Input

The input is given from Standard Input in the following format.<br>
Here, $op_i$ represents the $i$-th operation.

> $N$ $Q$
> 
> $op_1$
> 
> $op_2$
> 
> $\vdots$
> 
> $op_Q$

## Output

For each type-$3$ operation, print a line containing the response as an integer.

```input1
5 10
3 5
1 1 4
2 1
2 4
3 7
1 3 1
3 4
1 1 4
3 7
3 6
```

```output1
5
4
3
1
3
```

This input contains ten operations.

- The first operation is of type $3$. Ball $5$ is in box $5$.
- The second operation is of type $1$. Put all contents of box $4$ into box $1$.-   - Box $1$ now contains balls $1$ and $4$, and box $4$ is now empty.
- The third operation is of type $2$. Put ball $6$ into box $1$.
- The fourth operation is of type $2$. Put ball $7$ into box $4$.
- The fifth operation is of type $3$. Ball $7$ is in box $4$.
- The sixth operation is of type $1$. Put all contents of box $1$ into box $3$.-   - Box $3$ now contains balls $1$, $3$, $4$, and $6$, and box $1$ is now empty.
- The seventh operation is of type $3$. Ball $4$ is in box $3$.
- The eighth operation is of type $1$. Put all contents of box $4$ into box $1$.-   - Box $1$ now contains ball $7$, and box $4$ is now empty.
- The ninth operation is of type $3$. Ball $7$ is in box $1$.
- The tenth operation is of type $3$. Ball $6$ is in box $3$.