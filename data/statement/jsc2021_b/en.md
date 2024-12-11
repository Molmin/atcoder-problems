Score : $200$ points

## Problem Statement

We have two strictly increasing integer sequences $A = (A_1, A_2, \dots, A_N)$ and $B = (B_1, B_2, \dots, B_M)$.<br>
Find all integers that appear in exactly one of $A$ and $B$ and print them in ascending order.

## Constraints

- All values in input are integers.
- $1 \leq N, M \leq 10^3$
- $1 \leq A_1 &lt; A_2 &lt; \dots &lt; A_N \leq 10^3$
- $1 \leq B_1 &lt; B_2 &lt; \dots &lt; B_M \leq 10^3$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $B_1$ $B_2$ $\cdots$ $B_M$

## Output

Print all integers that appear in exactly one of $A$ and $B$ in ascending order, with space as separator.

```input1
2 2
1 2
1 3
```

```output1
2 3
```

$1$ is contained in both $A$ and $B$;<br>
$2$ is contained in only $A$;<br>
$3$ is contained in only $B$.<br>
Thus, we should print $2$ and $3$.

```input2
4 4
1 2 3 4
1 2 3 4
```

```output2

```

You can print an empty line or nothing.