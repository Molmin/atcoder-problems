Score : $1400$ points

## Problem Statement

Snuke is having another barbeque party.

This time, he will make one serving of *Skewer Meal*.

He has a stock of $N$ *Skewer Meal Packs*. The $i$-th Skewer Meal Pack contains one skewer, $A_i$ pieces of beef and $B_i$ pieces of green pepper.
All skewers in these packs are different and distinguishable, while all pieces of beef and all pieces of green pepper are, respectively, indistinguishable.

To make a Skewer Meal, he chooses two of his Skewer Meal Packs, and takes out all of the contents from the chosen packs, that is, two skewers and some pieces of beef or green pepper.
(Remaining Skewer Meal Packs will not be used.)
Then, all those pieces of food are threaded onto both skewers, one by one, in any order.

(See the image in the Sample section for better understanding.)

In how many different ways can he make a Skewer Meal? Two ways of making a Skewer Meal is different if and only if the sets of the used skewers are different, or the orders of the pieces of food are different.
Since this number can be extremely large, find it modulo $10^9+7$.

## Constraints

- $2 \leq N \leq 200,000$
- $1 \leq A_i \leq 2000, 1 \leq B_i \leq 2000$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> :
> 
> $A_N$ $B_N$

## Output

Print the number of the different ways Snuke can make a serving of Skewer Meal, modulo $10^9+7$.

```input1
3
1 1
1 1
2 1
```

```output1
26
```

The $26$ ways of making a Skewer Meal are shown below.
Gray bars represent skewers, each with a number denoting the Skewer Meal Set that contained the skewer.
Brown and green rectangles represent pieces of beef and green pepper, respectively.

![ebbq.png](https://agc001.contest.atcoder.jp/img/agc/001/Gg9pvPKw/ebbq.png)