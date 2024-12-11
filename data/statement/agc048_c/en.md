Score : $700$ points

## Problem Statement

There are $L$ squares lining up horizontally in a row, numbered $1, 2, \ldots, L$ from left to right.

On those squares are $N$ penguins, numbered $1, 2, \ldots, N$ from left to right.
Initially, Penguin $i$ is on Square $A_i$.
Here, $1 \leq A_1 &lt; A_2 &lt; \ldots &lt; A_N \leq L$ holds.

You can do the following operations any number of times:

- Choose one penguin and slide it to the left or the right.
The penguin will keep sliding as long as there is an empty square ahead.
It will stop when it reaches a square just before a square occupied by another penguin, or there is no square ahead.

For example, assume that $N=3$, $L=10$, and the penguins are on the squares $(2,3,7)$.
Here, if we slide Penguin $2$ to the right, it will move to Square $6$; if we slide Penguin $3$ to the right, it will move to Square $10$.

Your objective is to put Penguin $i$ on Square $B_i$ for every $i$.
Here, $1 \leq B_1 &lt; B_2 &lt; \ldots &lt; B_N \leq L$ holds.
Determine whether the objective is achievable. If it is achievable, find the minimum number of operations needed.

## Constraints

- $1 \leq N \leq 10^5$
- $N \leq L \leq 10^9$
- $1 \leq A_1 &lt; A_2 &lt; \ldots &lt; A_N \leq L$
- $1 \leq B_1 &lt; B_2 &lt; \ldots &lt; B_N \leq L$
- All numbers in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $L$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $B_1$ $B_2$ $\cdots$ $B_N$

## Output

If the objective is unachievable, print $-1$; if it is achievable, print the minimum number of operations needed.

```input1
4 11
3 4 6 10
1 5 6 11
```

```output1
3
```

The following sequence of operations achieves the objective:

- Slide Penguin $1$ to the left. The penguins are now on the squares $(1,4,6,10)$.
- Slide Penguin $2$ to the right. The penguins are now on the squares $(1,5,6,10)$.
- Slide Penguin $4$ to the right. The penguins are now on the squares $(1,5,6,11)$.

```input2
1 3
1
2
```

```output2
-1
```

```input3
10 1000000000
65110170 68805223 123016442 275946481 661490312 760727752 764540566 929355340 930658577 947099792
1 2 123016442 661490311 929355337 930658574 999999997 999999998 999999999 1000000000
```

```output3
13
```