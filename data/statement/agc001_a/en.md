Score : $200$ points

## Problem Statement

Snuke is having a barbeque party.

At the party, he will make $N$ servings of *Skewer Meal*.

![](https://agc001.contest.atcoder.jp/img/agc/001/Gg9pvPKw/abbq.png)

Example of a serving of Skewer Meal

He has a stock of $2N$ skewers, all of which will be used in Skewer Meal. The length of the $i$-th skewer is $L_i$.
Also, he has an infinite supply of ingredients.

To make a serving of Skewer Meal, he picks $2$ skewers and threads ingredients onto those skewers.
Let the length of the shorter skewer be $x$, then the serving can hold the maximum of $x$ ingredients.

What is the maximum total number of ingredients that his $N$ servings of Skewer Meal can hold, if he uses the skewers optimally?

## Constraints

- $1 \leq N \leq 100$
- $1 \leq L_i \leq 100$
- For each $i$, $L_i$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $L_2$ $...$ $L_{2N}$

## Output

Print the maximum total number of ingredients that Snuke's $N$ servings of Skewer Meal can hold.

```input1
2
1 3 1 2
```

```output1
3
```

If he makes a serving using the first and third skewers, and another using the second and fourth skewers, each serving will hold $1$ and $2$ ingredients, for the total of $3$.

```input2
5
100 1 2 3 14 15 58 58 58 29
```

```output2
135
```