Score : $500$ points

## Problem Statement

There is a length-$N$ sequence $A=(A_1,\ldots,A_N)$ that is a permutation of $1,\ldots,N$.

While you do not know $A$, you know that $A_{X_i}&lt;A_{Y_i}$ for $M$ pairs of integers $(X_i,Y_i)$.

Can $A$ be uniquely determined?  If it is possible, find $A$.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $1 \leq M \leq 2\times 10^5$
- $1\leq X_i,Y_i \leq N$
- All values in the input are integers.
- There is an $A$ consistent with the input.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $Y_1$
> 
> $\vdots$
> 
> $X_M$ $Y_M$

## Output

If $A$ can be uniquely determined, print `Yes` in the first line.  Then, print $A_1,\ldots,A_N$ in the second line, separated by spaces.

If $A$ cannot be uniquely determined, just print `No`.

```input1
3 2
3 1
2 3
```

```output1
Yes
3 1 2
```

We can uniquely determine that $A=(3,1,2)$.

```input2
3 2
3 1
3 2
```

```output2
No
```

Two sequences $(2,3,1)$ and $(3,2,1)$ can be $A$.

```input3
4 6
1 2
1 2
2 3
2 3
3 4
3 4
```

```output3
Yes
1 2 3 4
```