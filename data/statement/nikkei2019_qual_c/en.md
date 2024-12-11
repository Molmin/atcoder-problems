Score : $400$ points

## Problem Statement

There are $N$ dishes of cuisine placed in front of Takahashi and Aoki.
For convenience, we call these dishes Dish $1$, Dish $2$, ..., Dish $N$.

When Takahashi eats Dish $i$, he earns $A_i$ points of *happiness*; when Aoki eats Dish $i$, she earns $B_i$ points of happiness.

Starting from Takahashi, they alternately choose one dish and eat it, until there is no more dish to eat.
Here, both of them choose dishes so that the following value is maximized: "the sum of the happiness he/she will earn in the end" minus "the sum of the happiness the other person will earn in the end".

Find the value: "the sum of the happiness Takahashi earns in the end" minus "the sum of the happiness Aoki earns in the end".

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $:$
> 
> $A_N$ $B_N$

## Output

Print the value: "the sum of the happiness Takahashi earns in the end" minus "the sum of the happiness Aoki earns in the end".

```input1
3
10 10
20 20
30 30
```

```output1
20
```

In this sample, both of them earns $10$ points of happiness by eating Dish $1$, $20$ points by eating Dish $2$, and $30$ points by eating Dish $3$.

In this case, since Takahashi and Aoki have the same "taste", each time they will choose the dish with which they can earn the greatest happiness. Thus, first Takahashi will choose Dish $3$, then Aoki will choose Dish $2$, and finally Takahashi will choose Dish $1$, so the answer is $(30 + 10) - 20 = 20$.

```input2
3
20 10
20 20
20 30
```

```output2
20
```

In this sample, Takahashi earns $20$ points of happiness by eating any one of the dishes $1, 2$ and $3$, but Aoki earns $10$ points of happiness by eating Dish $1$, $20$ points by eating Dish $2$, and $30$ points by eating Dish $3$.

In this case, since only Aoki has likes and dislikes, each time they will choose the dish with which Aoki can earn the greatest happiness. Thus, first Takahashi will choose Dish $3$, then Aoki will choose Dish $2$, and finally Takahashi will choose Dish $1$, so the answer is $(20 + 20) - 20 = 20$.

```input3
6
1 1000000000
1 1000000000
1 1000000000
1 1000000000
1 1000000000
1 1000000000
```

```output3
-2999999997
```

Note that the answer may not fit into a $32$-bit integer.