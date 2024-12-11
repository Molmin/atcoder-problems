Score : $600$ points

## Problem Statement

There are $N$ people in a three-dimensional space. The $i$-th person is at the coordinates $(X_i,Y_i,Z_i)$.<br>
All people are at different coordinates, and we have $X_i &gt; 0$ for every $i$.

You will choose a point $p=(x,y,z)$ such that $x&lt;0$, and take a photo in the positive $x$-direction.

If the point $p$ and the positions $A, B$ of two people are on the same line in the order $p,A,B$, then the person at $B$ will not be in the photo.
There are no other potential obstacles.

Find the number of people in the photo when $p$ is chosen to minimize this number.

## Constraints

- $1 \leq N \leq 50$
- $0 &lt; X_i \leq 1000$
- $-1000 \leq Y_i,Z_i \leq 1000$
- The triples $(X_i,Y_i,Z_i)$ are distinct.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$ $Z_1$
> 
> $\vdots$
> 
> $X_N$ $Y_N$ $Z_N$

## Output

Print the answer.  

```input1
3
1 1 1
2 2 2
100 99 98
```

```output1
2
```

For instance, if you take the photo from the point $(-0.5,-0.5,-0.5)$, it will not show the second person.

```input2
8
1 1 1
1 1 -1
1 -1 1
1 -1 -1
3 2 2
3 2 -2
3 -2 2
3 -2 -2
```

```output2
4
```

If you take the photo from the point $(-1,0,0)$, it will show four people.