Score : $500$ points

## Problem Statement

We have an integer $P=0$. Find the minimum total cost to make $P=N$ by doing the following three kinds of operations any number of times in any order.

- Increase $P$ by $1$, at a cost of $X$.
- Increase $P$ by $A$, at a cost of $Y$.
- Increase $P$ by $B$, at a cost of $Z$.

Solve each of the $T$ test cases given to you.

## Constraints

- $1 \le T \le 100$
- $1 \le N,A,B,X,Y,Z \le 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is in the following format:

> $N\ A\ B\ X\ Y\ Z$

## Output

Print $T$ lines, the $i$-th of which should contain the answer to $\mathrm{case}_i$.

```input1
5
10 3 5 2 3 6
10 3 5 1 1000000000 1000000000
139 2 139 1 1 1
139 1 1 1 1 1
139 7 10 3845 26982 30923
```

```output1
11
10
1
139
436604
```

In the first test case, below is one way to make $P=10$ at the cost of $11$, which is optimal.

- Increase $P$ by $3$, making $P=3$, at a cost of $3$.
- Increase $P$ by $1$, making $P=4$, at a cost of $2$.
- Increase $P$ by $3$, making $P=7$, at a cost of $3$.
- Increase $P$ by $3$, making $P=10$, at a cost of $3$.