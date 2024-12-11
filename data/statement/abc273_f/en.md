Score : $500$ points

## Problem Statement

Takahashi is at the origin of a number line.  Takahashi wants to reach the goal at coordinate $X$.

Also, there are $N$ walls and $N$ hammers on the number line.

- At coordinates $Y_1,Y_2,\dots,Y_N$ are walls of types $1,2,\dots,N$, respectively.-   - Initially, Takahashi cannot get over the walls.
- At coordinates $Z_1,Z_2,\dots,Z_N$ are hammers of types $1,2,\dots,N$, respectively.-   - When he arrives at a coordinate with a hammer, he obtains the hammer.
-   - The hammer of type $i$ is dedicated to destroying the wall of type $i$.  After he obtains the hammer of type $i$, he can destroy the wall of type $i$ and get over it.

Determine if he can reach the goal.  If he can, find the minimum distance he travels.

## Constraints

- All values in the input are integers.
- $1 \le N \le 1500$
- $1 \le |X|,|Y_i|,|Z_i| \le 10^9$
- The $(2 \times N + 1)$ coordinates $X,Y_i$ and $Z_i$ are distinct.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $Y_1$ $Y_2$ $\dots$ $Y_N$
> 
> $Z_1$ $Z_2$ $\dots$ $Z_N$

## Output

If Takahashi can reach the goal, print the minimum possible distance he travels as an integer.<br>
Otherwise, print `-1`.

```input1
3 10
-2 8 -5
5 -10 3
```

```output1
40
```

Takahashi can reach the goal by traveling a distance of $40$ as follows, which is the minimum possible:

- He starts at coordinate $0$.
- He moves to coordinate $3$ to obtain the hammer of type $3$.
- He moves to coordinate $5$ to obtain the hammer of type $1$.
- He moves to coordinate $-2$ to destroy the wall of type $1$.
- He moves to coordinate $-5$ to destroy the wall of type $3$.
- He moves to coordinate $-10$ to obtain the hammer of type $2$.
- He moves to coordinate $8$ to destroy the wall of type $2$.
- He moves to coordinate $10$, which is the goal.

```input2
5 -1
10 -20 30 -40 50
-10 20 -30 40 -50
```

```output2
1
```

It may not be required that he obtains a hammer or destroys a wall to reach the goal.

```input3
1 100
30
60
```

```output3
-1
```

Takahashi cannot obtain the hammer of type $1$, and neither can he reach the goal.

```input4
4 865942261
703164879 -531670946 -874856231 -700164975
-941120316 599462305 -649785130 665402307
```

```output4
4078987507
```