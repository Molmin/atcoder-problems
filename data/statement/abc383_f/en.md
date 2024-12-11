Score : $525$ points

## Problem Statement

There are $N$ products for sale in a store. The $i$-th product has a price of $P_i$ yen, a utility value of $U_i$, and a color $C_i$.

You will choose some subset of these $N$ products to buy (possibly none). The total price of the chosen products must be at most $X$ yen.

Your satisfaction is $S + T \times K$, where $S$ is the sum of utilities of the chosen products, and $T$ is the number of distinct colors among the chosen products. Here, $K$ is a given constant.

You will choose products to maximize your satisfaction. Find the maximized satisfaction.

## Constraints

- $1 \leq N \leq 500$
- $1 \leq X \leq 50000$
- $1 \leq K \leq 10^9$
- $1 \leq P_i \leq X$ $(1 \leq i \leq N)$
- $1 \leq U_i \leq 10^9$ $(1 \leq i \leq N)$
- $1 \leq C_i \leq N$ $(1 \leq i \leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$ $K$
> 
> $P_1$ $U_1$ $C_1$
> 
> $P_2$ $U_2$ $C_2$
> 
> $\vdots$
> 
> $P_N$ $U_N$ $C_N$

## Output

Print the answer.

```input1
3 10 5
1 3 1
7 4 2
4 5 1
```

```output1
17
```

If you buy the 1st and 2nd products, the total utility $S$ is $7$, and the number of distinct colors $T$ is $2$. Thus, your satisfaction is $7 + 2 \times 5 = 17$. No purchase plan makes your satisfaction $18$ or greater, so the answer is $17$.

```input2
5 30 3
5 4 3
11 20 1
9 10 4
7 5 2
16 15 4
```

```output2
44
```

If you buy the 2nd, 3rd, and 4th products, the total utility $S$ is $35$, and the number of distinct colors $T$ is $3$. Thus, your satisfaction is $35 + 3 \times 3 = 44$. No purchase plan makes your satisfaction $45$ or greater, so the answer is $44$.

```input3
22 75 6426
9 309 9
5 470 5
17 481 12
27 352 14
1 191 18
7 353 20
9 99 15
20 401 17
46 434 19
11 459 22
10 317 19
15 440 18
17 438 19
25 461 22
5 320 22
1 476 21
11 315 3
8 112 9
11 438 13
19 362 8
10 422 13
10 152 21
```

```output3
67717
```