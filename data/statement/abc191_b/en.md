Score : $200$ points

## Problem Statement

Given are an integer sequence $A$ of length $N$, and an integer $X$.<br>
Remove all elements that are equal to $X$ from $A$, and arrange the remaining elements without changing the order to obtain the sequence $A'$. Print $A'$.

## Constraints

- $1 \le N \le 10^5$
- $1 \le X \le 10^9$
- $1 \le A_i \le 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$

## Output

Print the elements of $A'$ in order, with space in between.

```input1
5 5
3 5 6 5 4
```

```output1
3 6 4
```

Removing $5$s from $[3, 5, 6, 5, 4]$ results in $[3, 6, 4]$.

```input2
3 3
3 3 3
```

```output2

```

$A'$ can be a sequence with zero elements, in which case we should just print an empty line.