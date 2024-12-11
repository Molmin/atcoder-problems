Score : $700$ points

## Problem Statement

There are $N$ candies on a number line. The $i$-th candy from the left is at the position $2i$ and has the tastiness of $a_i$.
Here, it is guaranteed that the tastinesses of all candies are distinct.

Snuke and Ant have decided to play a game of alternately taking one candy.
At the beginning of the game, Ant chooses one of the positions $1,3,\ldots, 2N+1$ and stands there.

Snuke goes first. In his turn, he can choose any one candy and get it.

In Ant's turn, she chooses the candy with the greater tastiness of the following two: the nearest candy to the left of her and the nearest candy to the right of her. If there are candies in only one direction, she chooses the nearest one.

The game ends when no candies are left.
For each of the positions $1, 3, \ldots, 2N+1$, find the maximum possible sum of the tastinesses of candies Snuke takes when Ant chooses that position.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 400$
- $1 \leq a_i \leq 10^{6}$
- $a_i$ are distinct.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$

## Output

Print $N+1$ lines. The $i$-th line should contain the maximum possible sum of the tastinesses of candies Snuke takes when Ant initially stands at the position $2i-1$.

```input1
7
4 3 1 2 1000 2000 3000
```

```output1
6004
6004
6004
6001
5007
4007
4007
4007
```

- We will explain one optimal strategy for Snuke when Ant initially stands at the position $7$.-   - Snuke chooses the candy of tastiness $1$.
-   - The candies to the left and right of Ant have the tastinesses of $3$ and $2$, respectively. She chooses the one with the greater tastiness, that is, the one with tastiness $3$.
-   - Snuke chooses the candy of tastiness $1000$.
-   - The candies to the left and right of Ant have the tastinesses of $4$ and $2$, respectively. She chooses the one with the greater tastiness, that is, the one with tastiness $4$.
-   - Snuke chooses the candy of tastiness $2000$.
-   - There is no candy to the left of Ant, and the candy to the right of Ant has the tastiness of $2$. She chooses this candy with tastiness $2$.
-   - Snuke chooses the candy of tastiness $3000$.
-   - The sum of the tastinesses of candies Snuke has taken is $6001$. There is no way to take candies that results in a greater total tastiness.

```input2
40
45651 92206 55173 24815 34809 73343 60978 57984 6919 89624 19693 30037 87070 6713 65976 37597 51929 93304 70911 7343 65414 38977 47998 52123 53590 35714 59319 50872 53850 40991 85668 8808 32846 70831 3416 42173 89538 73410 21502 69631
```

```output2
1416699
1416699
1416699
1416699
1413888
1410894
1410894
1410894
1413888
1413888
1413888
1413888
1413888
1413888
1419943
1419943
1419943
1400961
1400961
1400961
1419943
1419943
1419943
1419749
1419749
1419749
1419749
1419749
1419749
1419749
1419749
1419749
1419943
1419943
1419943
1419943
1398462
1398462
1398462
1402241
1402241
```