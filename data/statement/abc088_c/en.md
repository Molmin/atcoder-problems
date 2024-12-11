Score: $300$ points

## Problem Statement

We have a $3 \times 3$ grid. A number $c_{i, j}$ is written in the square $(i, j)$, where $(i, j)$ denotes the square at the $i$-th row from the top and the $j$-th column from the left.<br>
According to Takahashi, there are six integers $a_1, a_2, a_3, b_1, b_2, b_3$ whose values are fixed, and the number written in the square $(i, j)$ is equal to $a_i + b_j$.<br>
Determine if he is correct.  

## Constraints

- $c_{i, j} \ (1 \leq i \leq 3, 1 \leq j \leq 3)$ is an integer between $0$ and $100$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $c_{1,1}$ $c_{1,2}$ $c_{1,3}$
> 
> $c_{2,1}$ $c_{2,2}$ $c_{2,3}$
> 
> $c_{3,1}$ $c_{3,2}$ $c_{3,3}$

## Output

If Takahashi's statement is correct, print `Yes`; otherwise, print `No`.

```input1
1 0 1
2 1 2
1 0 1
```

```output1
Yes
```

Takahashi is correct, since there are possible sets of integers such as: $a_1=0,a_2=1,a_3=0,b_1=1,b_2=0,b_3=1$.

```input2
2 2 2
2 1 2
2 2 2
```

```output2
No
```

Takahashi is incorrect in this case.

```input3
0 8 8
0 8 8
0 8 8
```

```output3
Yes
```

```input4
1 8 6
2 9 7
0 7 7
```

```output4
No
```