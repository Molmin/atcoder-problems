Score : $100$ points

## Problem Statement

For a three-dimensional convex polytope $P$, the **net** of it is the set of (possibly overlapping) polygons satisfying the following.

- Each polygon corresponds one-to-one with a face of $P$.
- $P$ can be constructed by repeating the operation of folding along its edges.

Here, folding along an edge is the following operation:

- Choose an edge, the removal of which would make the current figure disconnected. Use the line defined by this edge as the axis of rotation and rotate the entire part of the current figure that lies on one side of this edge by any angle (in three dimensions). If necessary, vertices or edges that coincide exactly in coordinates are identified.

Similarly, the **net of the net** of $P$ is the set of line segments satisfying the following.

- Each edge corresponds one-to one with an edge of the net of $P$.
- The net of $P$ can be constructed by repeating the operation of folding along its vertices.

Here, folding along a vertex is the following operation:

- Choose a vertex, the removal of which would make the current figure disconnected. Use this vertex as the center of rotation and rotate the entire part of the current figure that lies on some side of this vertex by any angle (in two dimentions). If necessary, vertices that coincide exactly in coordinates are identified.

You are given $N$ points on the unit sphere such that no four of these are on the same plain.
The coordinate of $i$-th point is given by $(x_i,y_i,(-1)^{c_i}\sqrt{1-x_i^2-y_i^2})$.

Determine whether there exists a net of a net of the convex hull of given points, which is a path.
If exists, compute the largest length of such path.

## Constraints

- $4 \leq N \leq 14$
- $-1\leq x_i,y_i\leq 1$
- $c_i$ is $0$ or $1$
- $x_i^2+y_i^2\leq 1$
- No two given points coincide.
- For all four different given points $p,q,r,s$, the distance between $s$ and the plain on which $p,q,r$ exist is at least $10^{-5}$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$ $c_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$ $c_N$

## Output

If there exists a net of a net of the convex hull of given points, which is a path, print the largest possible length.
If not print `-1`.

An output is considered correct if the absolute or the relative error from the true value is at most $10^{-7}$.

```input1
4
0.000000 0.000000 1
0.000000 0.000000 0
1.000000 0.000000 1
0.000000 1.000000 0
```

```output1
13.899494936612
```

The following net of net is optimal.

![](https://img.atcoder.jp/DEGwer2023/G_zu.png)

Figure: the optimal net of the net.

```input2
6
-0.322191 -0.852465 0
-0.463288 -0.553583 1
0.378710 -0.346882 1
-0.489727 0.488028 0
-0.731142 0.227066 1
0.254757 -0.899035 0
```

```output2
22.950966056549
```

```input3
8
0.837078 0.492956 1
0.360579 -0.565500 0
-0.367448 -0.492394 1
0.491637 -0.658814 1
-0.505114 -0.538563 1
0.544637 0.592884 1
-0.622207 -0.379934 1
0.402129 0.684158 1
```

```output3
28.879053537910
```

```input4
4
0.800000 0.600000 0
1.000000 0.000000 1
-0.280000 -0.960000 1
0.000000 0.000000 0
```

```output4
13.284042973728
```