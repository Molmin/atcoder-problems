Score : $300$ points

## Problem Statement

A programming competition site *AtCode* provides algorithmic problems.
Each problem is allocated a score based on its difficulty.
Currently, for each integer $i$ between $1$ and $D$ (inclusive), there are $p_i$ problems with a score of $100i$ points.
These $p_1 + \cdots + p_D$ problems are all of the problems available on AtCode.

A user of AtCode has a value called *total score*.
The total score of a user is the sum of the following two elements:

- Base score: the sum of the scores of all problems solved by the user.
- Perfect bonuses: when a user solves all problems with a score of $100i$ points, he/she earns the perfect bonus of $c_i$ points, aside from the base score $(1 \leq i \leq D)$.

Takahashi, who is the new user of AtCode, has not solved any problem.
His objective is to have a total score of $G$ or more points.
At least how many problems does he need to solve for this objective?

## Constraints

- $1 \leq D \leq 10$
- $1 \leq p_i \leq 100$
- $100 \leq c_i \leq 10^6$
- $100 \leq G$
- All values in input are integers.
- $c_i$ and $G$ are all multiples of $100$.
- It is possible to have a total score of $G$ or more points.

## Input

Input is given from Standard Input in the following format:

> $D$ $G$
> 
> $p_1$ $c_1$
> 
> $:$
> 
> $p_D$ $c_D$

## Output

Print the minimum number of problems that needs to be solved in order to have a total score of $G$ or more points. Note that this objective is always achievable (see Constraints).

```input1
2 700
3 500
5 800
```

```output1
3
```

In this case, there are three problems each with $100$ points and five problems each with $200$ points. The perfect bonus for solving all the $100$-point problems is $500$ points, and the perfect bonus for solving all the $200$-point problems is $800$ points. Takahashi's objective is to have a total score of $700$ points or more.

One way to achieve this objective is to solve four $200$-point problems and earn a base score of $800$ points. However, if we solve three $100$-point problems, we can earn the perfect bonus of $500$ points in addition to the base score of $300$ points, for a total score of $800$ points, and we can achieve the objective with fewer problems.

```input2
2 2000
3 500
5 800
```

```output2
7
```

This case is similar to Sample Input 1, but the Takahashi's objective this time is $2000$ points or more. In this case, we inevitably need to solve all five $200$-point problems, and by solving two $100$-point problems additionally we have the total score of $2000$ points.

```input3
2 400
3 500
5 800
```

```output3
2
```

This case is again similar to Sample Input 1, but the Takahashi's objective this time is $400$ points or more. In this case, we only need to solve two $200$-point problems to achieve the objective.

```input4
5 25000
20 1000
40 1000
50 1000
30 1000
1 1000
```

```output4
66
```

There is only one $500$-point problem, but the perfect bonus can be earned even in such a case.