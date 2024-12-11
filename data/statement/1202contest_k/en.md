Score : $100$ points

## Problem Statement

DEGwer owns a rectangular land $[-W, W] \times [-H, H]$ in the plane, and he is engaged in farming there.
He is suffering from damage caused by birds and beasts, and he has decided to stretch beams that burn out creatures invading his land.
Specifically, he will construct pillars having a sign, either $+$ or $-$, on integer grid points in his land, and then stretch a beam as a segment between **two pillars having different signs**.
However, if two beams share a point without a pillar, then something horrible happens because of resonance of beam energy, and hence he has to let any two beams not share a point without a pillar.

DEGwer has decided $N$ integer grid points $(X_i, Y_i) \ (i = 1, 2, \dots, N)$ on which he will construct the pillars.
These grid points include the four corners of his land, and any three among these grid points are not on a single line.
Your mission is to maximize the number of stretched beams by determining the sign of each pillar and between which pillars beams are stretched.

## Constraints

- $1 \le W \le 10^9$
- $1 \le H \le 10^9$
- $4 \le N \le 10^5$
- $-W \le X_i \le W \ \ (1 \leq i \leq N)$
- $-H \le Y_i \le H \ \ (1 \leq i \leq N)$
- $(X_i, Y_i) \neq (X_j, Y_j) \ \ (i \neq j)$
- There exists an index $i$ such that $(X_i, Y_i) = (\pm W, \pm H)$ (for any pair of signs).
- When $i \neq j \neq k \neq i,$ the three grid points $(X_i, Y_i),$ $(X_j, Y_j),$ and $(X_k, Y_k)$ are not on a single line.

## Input

The input is given from Standard Input in the following format:

> $W \ H$
> 
> $N$
> 
> $X_1 \ Y_1$
> 
> $X_2 \ Y_2$
> 
> $\vdots$
> 
> $X_N \ Y_N$

## Output

Print a way to maximize the number of stretched beams in the following format:

> $S$
> 
> $M$
> 
> $P_1 \ Q_1$
> 
> $P_2 \ Q_2$
> 
> $\vdots$
> 
> $P_M \ Q_M$

- $S$ is a string of length $N$ consisting of `+` and `-`, whose $i$-th character $S_i$ represents the sign of the pillar $i$ constructed on $(X_i, Y_i)$.
- $M$ is the maximum number of stretched beams.
- For $i = 1, 2, \dots, M,$ the pair $(P_i, Q_i)$ means to stretch a beam between the pillar $P_i$ and the pillar $Q_i,$ where $S_{P_i} \neq S_{Q_i}$ necessarily holds.
- When $i \neq j,$ the two segments between $(X_{P_i}, Y_{P_i})$ and $(X_{Q_i}, Y_{Q_i})$ and between $(X_{P_j}, Y_{P_j})$ and $(X_{Q_j}, Y_{Q_j})$ do not share any point except for their common end points.

```input1
1 1
4
1 1
-1 1
-1 -1
1 -1
```

```output1
+-+-
4
1 2
2 3
3 4
4 1
```

DEGwer's land is $[-1, 1] \times [-1, 1]$, and he will construct four pillars on the four corners.
If you assign alternating signs to the corner pillars in (counter)clockwise direction, you can stretch a beam between any adjacent pillars, and this is maximum.

```input2
1 2
5
1 2
-1 2
0 1
-1 -2
1 -2
```

```output2
+-++-
6
1 2
2 4
4 5
5 1
2 3
3 5
```

DEGwer's land is $[-1, 1] \times [-2, 2]$, and he will construct five pillars on the grid point $(0, 1)$ in addition to the four corners.
If you assign alternating signs to the corner pillars in (counter)clockwise direction and an arbitrary sign to the pillar on $(0, 1)$, you can stretch six beams in total as Sample Output 2.
It can be proved that seven beams cannot be stretched, so this is an example of a solution.