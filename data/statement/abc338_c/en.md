Score: $300$ points

## Problem Statement

Your refrigerator has $N$ kinds of ingredients. Let us call them ingredient $1$, $\dots$, ingredient $N$. You have $Q_i$ grams of ingredient $i$.

You can make two types of dishes. To make one serving of dish A, you need $A_i$ grams of each ingredient $i$ $(1 \leq i \leq N)$. To make one serving of dish B, you need $B_i$ grams of each ingredient $i$. You can only make an integer number of servings of each type of dish.

Using only the ingredients in the refrigerator, what is the maximum total number of servings of dishes you can make?

## Constraints

- $1 \leq N \leq 10$
- $1 \leq Q_i \leq 10^6$
- $0 \leq A_i \leq 10^6$
- There is an $i$ such that $A_i \geq 1$.
- $0 \leq B_i \leq 10^6$
- There is an $i$ such that $B_i \geq 1$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $Q_1$ $Q_2$ $\dots$ $Q_N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$

## Output

Assuming that you can make a maximum total of $S$ servings of dishes, print the integer $S$.

```input1
2
800 300
100 100
200 10
```

```output1
5
```

This refrigerator has $800$ grams of ingredient $1$ and $300$ grams of ingredient $2$.

You can make one serving of dish A with $100$ grams of ingredient $1$ and $100$ grams of ingredient $2$, and one serving of dish B with $200$ grams of ingredient $1$ and $10$ grams of ingredient $2$.

To make two servings of dish A and three servings of dish B, you need $100 \times 2 + 200 \times 3 = 800$ grams of ingredient $1$, and $100 \times 2 + 10 \times 3 = 230$ grams of ingredient $2$, neither of which exceeds the amount available in the refrigerator. In this way, you can make a total of five servings of dishes, but there is no way to make six, so the answer is $5$.

```input2
2
800 300
100 0
0 10
```

```output2
38
```

You can make $8$ servings of dish A with $800$ grams of ingredient $1$, and $30$ servings of dish B with $300$ grams of ingredient $2$, for a total of $38$ servings.

```input3
2
800 300
801 300
800 301
```

```output3
0
```

You cannot make any dishes.

```input4
10
1000000 1000000 1000000 1000000 1000000 1000000 1000000 1000000 1000000 1000000
0 1 2 3 4 5 6 7 8 9
9 8 7 6 5 4 3 2 1 0
```

```output4
222222
```