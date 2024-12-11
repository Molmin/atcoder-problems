Score : $400$ points

## Problem Statement

We have a horizontal cylinder.  Given $Q$ queries, process them in the given order.<br>
Each query is of one of the following two types.

- `1 x c`: Insert $c$ balls, with a number $x$ written on each of them, to the right end of the cylinder.
- `2 c`: Take out the $c$ leftmost balls contained in the cylinder and print the sum of the numbers written on the balls that have been taken out.

We assume that the balls do never change their order in the cylinder.

## Constraints

- $1 \leq Q \leq 2\times 10^5$
- $0 \leq x \leq 10^9$
- $1 \leq c \leq 10^9$
- Whenever a query of type `2 c` is given, there are $c$ or more balls in the cylinder.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $Q$
> 
> ${\rm query}_1$
> 
> $\vdots$
> 
> ${\rm query}_Q$

The $i$-th query ${\rm query}_i$ is in one of the following two formats.

> $1$ $x$ $c$
> $2$ $c$

## Output

Print the response to the queries of type `2 c` in the given order, with newlines in between.

```input1
4
1 2 3
2 2
1 3 4
2 3
```

```output1
4
8
```

- For the $1$-st query, insert $3$ balls, with a number $2$ written on each of them, to the right end of the cylinder.<br>
  The cylinder has now balls with numbers $(2,2,2)$ written on them, from left to right.
- For the $2$-nd query, take out the $2$ leftmost balls contained in the cylinder.<br>
  The numbers written on the balls taken out are $2,2$, for a sum of $4$, which should be printed.
  The cylinder has now a ball with a number $(2)$ written on it, from left to right.
- For the $3$-rd query, insert $4$ balls, with a number $3$ written on each of them, to the right end of the cylinder.<br>
  The cylinder has now balls with numbers $(2,3,3,3,3)$ written on them, from left to right.
- For the $4$-th query, take out the $3$ leftmost balls contained in the cylinder.<br>
  The numbers written on the balls taken out are $2,3,3$, for a sum of $8$, which should be printed.
  The cylinder has now balls with numbers $(3,3)$ written on them, from left to right.

```input2
2
1 1000000000 1000000000
2 1000000000
```

```output2
1000000000000000000
```

```input3
5
1 1 1
1 1 1
1 1 1
1 1 1
1 1 1
```

```output3

```

There may be nothing you should print.