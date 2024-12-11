Score : $500$ points

## Problem Statement

Takahashi is at an all-you-can-eat restaurant.

The restaurant offers $N$ kinds of dishes. It takes $A_i$ minutes to eat the $i$-th dish, whose deliciousness is $B_i$.

The restaurant has the following rules:

- You can only order one dish at a time. The dish ordered will be immediately served and ready to eat.
- You cannot order the same kind of dish more than once.
- Until you finish eating the dish already served, you cannot order a new dish.
- After $T-0.5$ minutes from the first order, you can no longer place a new order, but you can continue eating the dish already served.

Let Takahashi's happiness be the sum of the deliciousness of the dishes he eats in this restaurant.

What is the maximum possible happiness achieved by making optimal choices?

## Constraints

- $2 \leq N \leq 3000$
- $1 \leq T \leq 3000$
- $1 \leq A_i \leq 3000$
- $1 \leq B_i \leq 3000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $T$
> 
> $A_1$ $B_1$
> 
> $:$
> 
> $A_N$ $B_N$

## Output

Print the maximum possible happiness Takahashi can achieve.

```input1
2 60
10 10
100 100
```

```output1
110
```

By ordering the first and second dishes in this order, Takahashi's happiness will be $110$.

Note that, if we manage to order a dish in time, we can spend any amount of time to eat it.

```input2
3 60
10 10
10 20
10 30
```

```output2
60
```

Takahashi can eat all the dishes within $60$ minutes.

```input3
3 60
30 10
30 20
30 30
```

```output3
50
```

By ordering the second and third dishes in this order, Takahashi's happiness will be $50$.

We cannot order three dishes, in whatever order we place them.

```input4
10 100
15 23
20 18
13 17
24 12
18 29
19 27
23 21
18 20
27 15
22 25
```

```output4
145
```