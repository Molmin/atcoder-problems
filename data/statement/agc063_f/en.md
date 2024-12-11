Score : $1700$ points

## Problem Statement

You are given pairs of non-negative integers $a = (a_1,a_2)$ and $b = (b_1,b_2)$.
You can perform the following operation on the pair $a$ any number of times, possibly zero.

- Operation: Choose a **positive real number** $x$. Replace $a = (a_1,a_2)$ with $(\lfloor a_1x\rfloor, \lfloor a_2x\rfloor)$.

Your objective is to make the pair $a$ equal the pair $b$. Determine whether it is achievable. If it is, find the minimum number of times you must perform the operation to achieve it.

You have $T$ test cases to solve.

## Constraints

- $1\leq T\leq 10^5$
- $0\leq a_1, a_2, b_1, b_2 \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each test case is given in the following format:

> $a_1$ $a_2$ $b_1$ $b_2$

## Output

Print $T$ lines. The $i$-th line should contain `-1` if it is impossible to make $a$ equal $b$ in the $i$-th test case, and otherwise, the minimum number of times the operation must be performed to achieve the objective.

```input1
7
2 3 1 1
1 1 2 3
3 2 9 8
12 34 56 78
56 78 12 34
87 65 43 21
43 21 87 65
```

```output1
1
-1
3
-1
4
2
-1
```

For the first test case, here is one optimal solution.

- Initially, $a = (2,3)$.
- Perform the operation with $x = 0.6$, replacing $a$ with $(\lfloor 1.2 \rfloor, \lfloor 1.8\rfloor) = (1,1)$.

For the third test case, here is one optimal solution.

- Initially, $a = (3,2)$.
- Perform the operation with $x = 1.5$, replacing $a$ with $(4,3)$.
- Perform the operation with $x = 1.7$, replacing $a$ with $(6,5)$.
- Perform the operation with $x = 1.6$, replacing $a$ with $(9,8)$.

```input2
9
5 5 5 5
5 5 3 3
3 9 0 2
3 9 0 3
0 3 3 9
3 0 2 0
5 2 0 0
0 0 5 2
0 0 0 0
```

```output2
0
1
1
2
-1
1
1
-1
0
```