Score : $200$ points

## Problem Statement

Takahashi lives in another world. There are slimes (creatures) of $10000$ colors in this world. Let us call these colors Color $1, 2, ..., 10000$.

Takahashi has $N$ slimes, and they are standing in a row from left to right. The color of the $i$-th slime from the left is $a_i$.
If two slimes of the same color are adjacent, they will start to combine themselves. Because Takahashi likes smaller slimes, he has decided to change the colors of some of the slimes with his magic.

Takahashi can change the color of one slime to any of the $10000$ colors by one spell.
How many spells are required so that no slimes will start to combine themselves?

## Constraints

- $2 \leq N \leq 100$
- $1 \leq a_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print the minimum number of spells required.

```input1
5
1 1 2 2 2
```

```output1
2
```

For example, if we change the color of the second slime from the left to $4$, and the color of the fourth slime to $5$, the colors of the slimes will be $1, 4, 2, 5, 2$, which satisfy the condition.

```input2
3
1 2 1
```

```output2
0
```

Although the colors of the first and third slimes are the same, they are not adjacent, so no spell is required.

```input3
5
1 1 1 1 1
```

```output3
2
```

For example, if we change the colors of the second and fourth slimes from the left to $2$, the colors of the slimes will be $1, 2, 1, 2, 1$, which satisfy the condition.

```input4
14
1 2 2 3 3 3 4 4 4 4 1 2 3 4
```

```output4
4
```