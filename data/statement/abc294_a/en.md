Score : $100$ points

## Problem Statement

You are given a sequence of $N$ integers: $A=(A _ 1,A _ 2,\ldots,A _ N)$.

Print all even numbers in $A$ without changing the order.

## Constraints

- $1\leq N\leq 100$
- $1\leq A _ i\leq 100\ (1\leq i\leq N)$
- $A$ contains at least one even number.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A _ 1$ $A _ 2$ $\ldots$ $A _ N$

## Output

Print a line containing the sequence of all even numbers in $A$, with spaces in between.

```input1
5
1 2 3 5 6
```

```output1
2 6
```

We have $A=(1,2,3,5,6)$.
Among them are two even numbers, $A _ 2=2$ and $A _ 5=6$, so print $2$ and $6$ in this order, with a space in between.

```input2
5
2 2 2 3 3
```

```output2
2 2 2
```

$A$ may contain equal elements.

```input3
10
22 3 17 8 30 15 12 14 11 17
```

```output3
22 8 30 12 14
```