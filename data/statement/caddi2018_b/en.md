Score : $500$ points

## Problem Statement

There is an apple tree that bears apples of $N$ colors. The $N$ colors of these apples are numbered $1$ to $N$, and there are $a_i$ apples of Color $i$.

You and Lunlun the dachshund alternately perform the following operation (starting from you):

- Choose one or more apples from the tree and eat them. Here, the apples chosen at the same time must all have different colors.

The one who eats the last apple from the tree will be declared winner. If both you and Lunlun play optimally, which will win?

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq a_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$
> 
> $a_2$
> 
> $:$
> 
> $a_N$

## Output

If you will win, print `first`; if Lunlun will win, print `second`.

```input1
2
1
2
```

```output1
first
```

Let Color $1$ be red, and Color $2$ be blue. In this case, the tree bears one red apple and two blue apples.

You should eat the red apple in your first turn. Lunlun is then forced to eat one of the blue apples, and you can win by eating the other in your next turn.

Note that you are also allowed to eat two apples in your first turn, one red and one blue (not a winning move, though).

```input2
3
100000
30000
20000
```

```output2
second
```