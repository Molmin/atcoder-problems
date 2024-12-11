Score : $1600$ points

## Problem Statement

There are $A$ slimes lining up in a row.
Initially, the sizes of the slimes are all $1$.

Snuke can repeatedly perform the following operation.

- Choose a positive even number $M$. Then, select $M$ consecutive slimes and form $M / 2$ pairs from those slimes as follows: pair the $1$-st and $2$-nd of them from the left, the $3$-rd and $4$-th of them, $...$, the $(M-1)$-th and $M$-th of them. Combine each pair of slimes into one larger slime. Here, the size of a combined slime is the sum of the individual slimes before combination. The order of the $M / 2$ combined slimes remain the same as the $M / 2$ pairs of slimes before combination.

Snuke wants to get to the situation where there are exactly $N$ slimes, and the size of the $i$-th ($1 \leq i \leq N$) slime from the left is $a_i$.
Find the minimum number of operations required to achieve his goal.

Note that $A$ is not directly given as input. Assume $A = a_1 + a_2 + ... + a_N$.

## Constraints

- $1 \leq N \leq 10^5$
- $a_i$ is an integer.
- $1 \leq a_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print the minimum number of operations required to achieve Snuke's goal.

```input1
2
3 3
```

```output1
2
```

One way to achieve Snuke's goal is as follows.
Here, the selected slimes are marked in bold.

- (1, **1**, **1**, **1**, **1**, 1) → (1, **2**, **2**, 1)
- (**1**, **2**, **2**, **1**) → (**3**, **3**)

```input2
4
2 1 2 2
```

```output2
2
```

One way to achieve Snuke's goal is as follows.

- (**1**, **1**, 1, 1, 1, 1, 1) → (**2**, 1, 1, 1, 1, 1)
- (2, 1, **1**, **1**, **1**, **1**) → (2, 1, **2**, **2**)

```input3
1
1
```

```output3
0
```

```input4
10
3 1 4 1 5 9 2 6 5 3
```

```output4
10
```