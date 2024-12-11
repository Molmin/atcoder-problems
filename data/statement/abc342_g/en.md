Score: $625$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\ldots,A_N)$ of length $N$.

Process $Q$ operations in order. There are three types of operations:

- A type-1 operation is represented by a triple of integers $(l,r,x)$, which corresponds to replacing $A_i$ with $\max\lbrace A_i,x\rbrace$ for each $i=l,l+1,\ldots,r$.
- A type-2 operation is represented by an integer $i$, which corresponds to canceling the $i$-th operation (it is guaranteed that the $i$-th operation is of type 1 and has not already been canceled). The new sequence $A$ can be obtained by performing all type-1 operations that have **not been canceled**, starting from the initial state.
- A type-3 operation is represented by an integer $i$, which corresponds to printing the current value of $A_i$.

## Constraints

- $1\leq N\leq2\times10^5$
- $1\leq A_i\leq10^9\ (1\leq i\leq N)$
- $1\leq Q\leq2\times10^5$
- In a type-1 operation, $1\leq l\leq r\leq N$ and $1\leq x\leq10^9$.
- In a type-2 operation, $i$ is not greater than the number of operations given before, and $1\leq i$.
- In a type-2 operation, the $i$-th operation is of type 1.
- In type-2 operations, the same $i$ does not appear multiple times.
- In a type-3 operation, $1\leq i\leq N$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $Q$
> 
> $\operatorname{query}_1$
> 
> $\operatorname{query}_2$
> 
> $\vdots$
> 
> $\operatorname{query}_Q$

Here, $\operatorname{query}_k\ (1\leq k\leq Q)$ represents the $k$-th operation, and depending on the type of the $k$-th operation, one of the following is given.

For a type-1 operation, the following is given, meaning that the $k$-th operation is a type-1 operation represented by $(l,r,x)$:

> $1$ $l$ $r$ $x$

For a type-2 operation, the following is given, meaning that the $k$-th operation is a type-2 operation represented by $i$:

> $2$ $i$

For a type-3 operation, the following is given, meaning that the $k$-th operation is a type-3 operation represented by $i$:

> $3$ $i$

## Output

Let $q$ be the number of type-3 operations. Print $q$ lines.
The $i$-th line $(1\leq i\leq q)$ should contain the value that should be printed for the $i$-th given type-3 operation.

```input1
6
2 7 1 8 2 8
15
3 1
3 3
3 4
1 1 5 4
3 1
3 3
3 4
1 3 6 9
3 1
3 3
3 4
2 4
3 1
3 3
3 4
```

```output1
2
1
8
4
4
8
4
9
9
2
9
9
```

Initially, the sequence $A$ is $(2,7,1,8,2,8)$.

For the $1$-st, $2$-nd, $3$-rd operations, print the values of $A_1, A_3, A_4$, which are $2,1,8$, respectively.

The $4$-th operation replaces the values of $A_1, A_2, A_3, A_4, A_5$ with $\max\lbrace A_i,4\rbrace$.
Just after this operation, $A$ is $(4,7,4,8,4,8)$.

For the $5$-th, $6$-th, $7$-th operations, print the values of $A_1, A_3, A_4$ at this point, which are $4,4,8$, respectively.

The $8$-th operation replaces the values of $A_3, A_4, A_5, A_6$ with $\max\lbrace A_i,9\rbrace$.
Just after this operation, $A$ is $(4,7,9,9,9,9)$.

For the $9$-th, $10$-th, $11$-th operations, print the values of $A_1, A_3, A_4$ at this point, which are $4,9,9$, respectively.

The $12$-th operation cancels the $4$-th operation.
Just after this operation, $A$ is $(2,7,9,9,9,9)$.

For the $13$-th, $14$-th, $15$-th operations, print the values of $A_1, A_3, A_4$ at this point, which are $2,9,9$, respectively.

```input2
24
721 78 541 256 970 478 370 467 344 542 43 166 619 17 592 222 983 729 338 747 62 452 815 838
35
3 10
3 8
3 8
3 13
3 9
1 1 17 251
3 3
3 19
3 13
3 22
3 1
3 15
3 18
3 10
3 15
1 16 19 883
1 8 23 212
3 5
3 13
2 6
3 15
1 5 18 914
2 17
3 20
1 23 23 56
3 13
2 25
3 13
3 13
3 10
2 16
1 17 22 308
3 19
3 17
3 7
```

```output2
542
467
467
619
344
541
338
619
452
721
592
729
542
592
970
619
592
747
914
914
914
914
338
983
914
```