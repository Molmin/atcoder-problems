Score : $1500$ points

## Problem Statement

Solve the following problem for $T$ test cases.

You are currently at coordinate $0$ on a number line, and you want to reach coordinate $L$.

You will use a car for the movement. This car runs on two types of fuel: types $1$ and $2$. For each type, the car has a fuel tank of that type with a capacity of $C$ liters. Currently, both fuel tanks are full. The car can consume $x$ liters of either type of fuel (where $x$ is any positive integer not exceeding the remaining fuel) to move $x$ units in any direction on the number line. You can choose which type of fuel to use for each movement.

There are $N$ fuel stations on the number line. The $i$-th fuel station is located at coordinate $X_i$. When the car is exactly at coordinate $X_i$, you can buy type-$K_i$ fuel at a cost of $1$ per liter. Of course, you cannot buy more fuel than allowed by the tank capacity.

Determine whether it is possible to reach coordinate $L$. If it is possible, find the minimum total cost of purchasing fuel.

## Constraints

- $1 \leq T \leq 250000$
- $1 \leq N \leq 5000$
- $1 \leq L \leq 10^9$
- $1 \leq C \leq 10^9$
- $0 &lt; X_1 &lt; X_2 &lt; \cdots &lt; X_N &lt; L$
- $K_i=1$ or $2$
- The sum of $N^2$ across all test cases in a single input does not exceed $5000^2$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each test case is given in the following format:

> $N$ $L$ $C$
> 
> $X_1$ $X_2$ $\cdots$ $X_N$
> 
> $K_1$ $K_2$ $\cdots$ $K_N$

## Output

Print $T$ lines.
In the $i$-th line, for the $i$-th test case, print $-1$ if it is impossible to reach coordinate $L$, and print the minimum total cost of purchasing fuel otherwise.

```input1
5
1 10 4
7
1
1 10 6
7
1
2 12 3
5 7
1 1
2 12 3
5 7
1 2
20 749013197 23809523
46981984 70791437 118235723 132421762 180040807 203849360 251468335 275277857 322889975 346699150 394318091 418113855 465732891 489532137 537144103 558852533 606466719 630275002 677584754 701394209
1 2 2 1 1 2 1 2 1 2 2 1 2 1 2 1 1 2 1 2
```

```output1
2
0
-1
6
585545066743659
```

Let us explain the first test case.
You can reach coordinate $L$ with a cost of $2$ as follows:

- Consume $3$ liters of type-$1$ fuel to move from coordinate $0$ to $3$. The remaining type-$1$ fuel is $1$ liter.
- Consume $4$ liters of type-$2$ fuel to move from coordinate $3$ to $7$. The remaining type-$2$ fuel is $0$ liters.
- Buy $2$ liters of type-$1$ fuel at the fuel station. The remaining type-$1$ fuel is $3$ liters.
- Consume $3$ liters of type-$1$ fuel to move from coordinate $7$ to $10$. The remaining type-$1$ fuel is $0$ liters.

It is impossible to reach coordinate $L$ with a cost less than $2$. Thus, the answer is $2$.