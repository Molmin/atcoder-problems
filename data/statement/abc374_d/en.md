Score : $350$ points

## Problem Statement

There is a printing machine that prints line segments on the $xy$-plane by emitting a laser.

- At the start of printing, the laser position is at coordinate $(0, 0)$.
- <p>When printing a line segment, the procedure below is followed.</p>
-   - First, move the laser position to one of the endpoints of the line segment.-   -   - One may start drawing from either endpoint.
-   - Then, move the laser position in a straight line from the current endpoint to the other endpoint while emitting the laser.-   -   - It is not allowed to stop printing in the middle of a line segment.
- <p>When not emitting the laser, the laser position can move in any direction at a speed of $S$ units per second.</p>
- When emitting the laser, the laser position can move along the line segment being printed at a speed of $T$ units per second.
- The time required for operations other than moving the laser position can be ignored.

Takahashi wants to print $N$ line segments using this printing machine.<br>
The $i$-th line segment connects coordinates $(A_i, B_i)$ and $(C_i, D_i)$.<br>
Some line segments may overlap, in which case he needs to print the overlapping parts for each line segment separately.

What is the minimum number of seconds required to complete printing all the line segments when he operates the printing machine optimally?

## Constraints

- All input values are integers.
- $1 \le N \le 6$
- $1 \le T \le S \le 1000$
- $-1000 \le A_i,B_i,C_i,D_i \le 1000$
- $(A_i,B_i) \neq (C_i,D_i)$ ( $1 \le i \le N$ )

## Input

The input is given from Standard Input in the following format:

> $N$ $S$ $T$
> 
> $A_1$ $B_1$ $C_1$ $D_1$
> 
> $\vdots$
> 
> $A_N$ $B_N$ $C_N$ $D_N$

## Output

Print the answer.

Your output will be considered correct if the absolute or relative error from the true value does not exceed $10^{-6}$.

```input1
3 2 1
1 3 2 1
0 2 0 0
3 0 2 0
```

```output1
6.44317475868633722080
```

- Emit the laser while moving the laser position from $(0,0)$ to $(0,2)$, printing the second line segment.-   - This takes $2$ seconds.
- Move the laser position from $(0,2)$ to $(1,3)$ without emitting the laser.-   - This takes $\sqrt{2}/2$ seconds.
- Emit the laser while moving the laser position from $(1,3)$ to $(2,1)$, printing the first line segment.-   - This takes $\sqrt{5}$ seconds.
- Move the laser position from $(2,1)$ to $(2,0)$ without emitting the laser.-   - This takes $1/2$ second.
- Emit the laser while moving the laser position from $(2,0)$ to $(3,0)$, printing the third line segment.-   - This takes $1$ second.
- The total time taken is $2 + (\sqrt{2}/2) + \sqrt{5} + (1/2) + 1 \approx 6.443175$ seconds.

```input2
2 1 1
0 0 10 10
0 2 2 0
```

```output2
20.97056274847714058517
```

```input3
6 3 2
-1000 -1000 1000 1000
1000 -1000 -1000 1000
-1000 -1000 1000 1000
1000 -1000 -1000 1000
1000 1000 -1000 -1000
-1000 1000 1000 -1000
```

```output3
9623.35256169626864153344
```

Multiple line segments overlap here, and you need to print the overlapping parts for each line segment separately.

```input4
6 10 8
1000 1000 -1000 -1000
1000 -1000 -1000 -1000
-1000 1000 1000 1000
-1000 1000 -1000 -1000
1000 1000 1000 -1000
1000 -1000 -1000 1000
```

```output4
2048.52813742385702910909
```