Score : $600$ points

## Problem Statement

You are given an integer sequence of length $N$: $A=(A_1,A_2,\cdots,A_N)$.

Find the number of pairs of integers $(i,j)$ ($1 \leq i &lt; j \leq N$) such that calculation of $A_i+A_j$ by column addition does not involve carrying.

## Constraints

- $2 \leq N \leq 10^6$
- $0 \leq A_i \leq 10^6-1$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
4
4 8 12 90
```

```output1
3
```

The pairs $(i,j)$ that count are $(1,3),(1,4),(2,4)$.

For example, calculation of $A_1+A_3=4+12$ does not involve carrying, so $(i,j)=(1,3)$ counts.
On the other hand, calculation of $A_3+A_4=12+90$ involves carrying, so $(i,j)=(3,4)$ does not count.

```input2
20
313923 246114 271842 371982 284858 10674 532090 593483 185123 364245 665161 241644 604914 645577 410849 387586 732231 952593 249651 36908
```

```output2
6
```

```input3
5
1 1 1 1 1
```

```output3
10
```