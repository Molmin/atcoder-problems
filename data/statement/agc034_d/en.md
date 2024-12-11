Score : $1200$ points

## Problem Statement

Snuke is playing with red and blue balls, placing them on a two-dimensional plane.

First, he performed $N$ operations to place red balls. In the $i$-th of these operations, he placed $RC_i$ red balls at coordinates $(RX_i,RY_i)$.
Then, he performed another $N$ operations to place blue balls. In the $i$-th of these operations, he placed $BC_i$ blue balls at coordinates $(BX_i,BY_i)$.
The total number of red balls placed and the total number of blue balls placed are equal, that is, $\sum_{i=1}^{N} RC_i = \sum_{i=1}^{N} BC_i$. Let this value be $S$.

Snuke will now form $S$ pairs of red and blue balls so that every ball belongs to exactly one pair.
Let us define the *score* of a pair of a red ball at coordinates $(rx, ry)$ and a blue ball at coordinates $(bx, by)$ as $|rx-bx| + |ry-by|$.

Snuke wants to maximize the sum of the scores of the pairs.
Help him by finding the maximum possible sum of the scores of the pairs.

## Constraints

- $1 \leq N \leq 1000$
- $0 \leq RX_i,RY_i,BX_i,BY_i \leq 10^9$
- $1 \leq RC_i,BC_i \leq 10$
- $\sum_{i=1}^{N} RC_i = \sum_{i=1}^{N} BC_i$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $RX_1$ $RY_1$ $RC_1$
> 
> $RX_2$ $RY_2$ $RC_2$
> 
> $\vdots$
> 
> $RX_N$ $RY_N$ $RC_N$
> 
> $BX_1$ $BY_1$ $BC_1$
> 
> $BX_2$ $BY_2$ $BC_2$
> 
> $\vdots$
> 
> $BX_N$ $BY_N$ $BC_N$

## Output

Print the maximum possible sum of the scores of the pairs.

```input1
2
0 0 1
3 2 1
2 2 1
5 0 1
```

```output1
8
```

If we pair the red ball at coordinates $(0,0)$ and the blue ball at coordinates $(2,2)$, the score of this pair is $|0-2| + |0-2|=4$.
Then, if we pair the red ball at coordinates $(3,2)$ and the blue ball at coordinates $(5,0)$, the score of this pair is $|3-5| + |2-0|=4$.
Making these two pairs results in the total score of $8$, which is the maximum result.

```input2
3
0 0 1
2 2 1
0 0 2
1 1 1
1 1 1
3 3 2
```

```output2
16
```

Snuke may have performed multiple operations at the same coordinates.

```input3
10
582463373 690528069 8
621230322 318051944 4
356524296 974059503 6
372751381 111542460 9
392867214 581476334 6
606955458 513028121 5
882201596 791660614 9
250465517 91918758 3
618624774 406956634 6
426294747 736401096 5
974896051 888765942 5
726682138 336960821 3
715144179 82444709 6
599055841 501257806 6
390484433 962747856 4
912334580 219343832 8
570458984 648862300 6
638017635 572157978 10
435958984 585073520 7
445612658 234265014 6
```

```output3
45152033546
```