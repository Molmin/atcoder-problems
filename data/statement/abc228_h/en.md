Score : $600$ points

## Problem Statement

Given are integer sequences of length $N$ each: $A = (A_1, \dots, A_N)$ and $C = (C_1, \dots, C_N)$.

You can do the following operation any number of times, possibly zero.

- Choose an integer $i$ such that $1 \leq i \leq N$ and add $1$ to the value of $A_i$, for a cost of $C_i$ yen (Japanese currency).

After you are done with the operation, you have to pay $K \times X$ yen, where $K$ is the number of different values among the elements of $A$.

What is the minimum total amount of money you have to pay?

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq X \leq 10^6$
- $1 \leq A_i, C_i \leq 10^6 \, (1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $C_1$
> 
> $\vdots$
> 
> $A_N$ $C_N$

## Output

Print a number representing the answer.

```input1
3 5
3 2
2 4
4 3
```

```output1
12
```

After adding $1$ to $A_1$, there will be two different values among the elements of $A$, for a total cost of $C_1 + 2 \times X = 12$ yen. It is impossible to make the total cost less than this.

```input2
1 1
1 1
```

```output2
1
```

```input3
7 7
3 2
1 7
4 1
1 8
5 2
9 8
2 1
```

```output3
29
```