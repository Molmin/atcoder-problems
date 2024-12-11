Score: $500$ points

## Problem Statement

New AtCoder City has an infinite grid of streets, as follows:

- At the center of the city stands a clock tower. Let $(0, 0)$ be the coordinates of this point.
- A straight street, which we will call *East-West Main Street*, runs east-west and passes the clock tower. It corresponds to the $x$-axis in the two-dimensional coordinate plane.
- There are also other infinitely many streets parallel to East-West Main Street, with a distance of $1$ between them. They correspond to the lines $\ldots, y = -2, y = -1, y = 1, y = 2, \ldots$ in the two-dimensional coordinate plane.
- A straight street, which we will call *North-South Main Street*, runs north-south and passes the clock tower. It corresponds to the $y$-axis in the two-dimensional coordinate plane.
- There are also other infinitely many streets parallel to North-South Main Street, with a distance of $1$ between them. They correspond to the lines $\ldots, x = -2, x = -1, x = 1, x = 2, \ldots$ in the two-dimensional coordinate plane.

There are $N$ residential areas in New AtCoder City. The $i$-th area is located at the intersection with the coordinates $(X_i, Y_i)$ and has a population of $P_i$. Each citizen in the city lives in one of these areas.

**The city currently has only two railroads, stretching infinitely, one along East-West Main Street and the other along North-South Main Street.**<br>
M-kun, the mayor, thinks that they are not enough for the commuters, so he decides to choose $K$ streets and build a railroad stretching infinitely along each of those streets.

Let the *walking distance* of each citizen be the distance from his/her residential area to the nearest railroad.<br>
M-kun wants to build railroads so that the sum of the walking distances of all citizens, $S$, is minimized.

For each $K = 0, 1, 2, \dots, N$, what is the minimum possible value of $S$ after building railroads?

## Constraints

- $1 \leq N \leq 15$
- $-10 \ 000 \leq X_i \leq 10 \ 000$
- $-10 \ 000 \leq Y_i \leq 10 \ 000$
- $1 \leq P_i \leq 1 \ 000 \ 000$
- The locations of the $N$ residential areas, $(X_i, Y_i)$, are all distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$ $P_1$
> 
> $X_2$ $Y_2$ $P_2$
> 
>  $:$  $:$  $:$
> 
> $X_N$ $Y_N$ $P_N$

## Output

Print the answer in $N+1$ lines.<br>
The $i$-th line $(i = 1, \ldots, N+1)$ should contain the minimum possible value of $S$ after building railroads for the case $K = i-1$.

```input1
3
1 2 300
3 3 600
1 4 800
```

```output1
2900
900
0
0
```

When $K = 0$, the residents of Area $1$, $2$, and $3$ have to walk the distances of $1$, $3$, and $1$, respectively, to reach a railroad.<br>
Thus, the sum of the walking distances of all citizens, $S$, is $1 \times 300 + 3 \times 600 + 1 \times 800 = 2900$.

When $K = 1$, if we build a railroad along the street corresponding to the line $y = 4$ in the coordinate plane, the walking distances of the citizens of Area $1$, $2$, and $3$ become $1$, $1$, and $0$, respectively.<br>
Then, $S = 1 \times 300 + 1 \times 600 + 0 \times 800 = 900$.<br>
We have many other options for where we build the railroad, but none of them makes $S$ less than $900$.

When $K = 2$, if we build a railroad along the street corresponding to the lines $x = 1$ and $x = 3$ in the coordinate plane, all citizens can reach a railroad with the walking distance of $0$, so $S = 0$. We can also have $S = 0$ when $K = 3$.

The figure below shows the optimal way to build railroads for the cases $K = 0, 1, 2$.<br>
The street painted blue represents the roads along which we build railroads.

![](https://img.atcoder.jp/m-solutions2020/fc274bed71a4c37706550fa083496d39.png)

```input2
5
3 5 400
5 3 700
5 5 1000
5 7 700
7 5 400
```

```output2
13800
1600
0
0
0
0
```

The figure below shows the optimal way to build railroads for the cases $K = 1, 2$.

![](https://img.atcoder.jp/m-solutions2020/7c6b7a31998a1c46fba4c0679b023822.png)

```input3
6
2 5 1000
5 2 1100
5 5 1700
-2 -5 900
-5 -2 600
-5 -5 2200
```

```output3
26700
13900
3200
1200
0
0
0
```

The figure below shows the optimal way to build railroads for the case $K = 3$.

![](https://img.atcoder.jp/m-solutions2020/0453fa9c2f02c3bd5d5f9e20d0e8e589.png)

```input4
8
2 2 286017
3 1 262355
2 -2 213815
1 -3 224435
-2 -2 136860
-3 -1 239338
-2 2 217647
-1 3 141903
```

```output4
2576709
1569381
868031
605676
366338
141903
0
0
0
```

The figure below shows the optimal way to build railroads for the case $K = 4$.

![](https://img.atcoder.jp/m-solutions2020/464ce76d1d7d72638eb372342f8386c5.png)