Score : $1100$ points

## Problem Statement

Takahashi, with a notepad, is standing at the origin $(0,0)$ of a two-dimensional plane. His notepad has $N$ **even numbers** $D_i\ (1\leq i \leq N)$ written.

Takahashi will perform the following actions $N$ times on the plane.

- He chooses and erases one even number written on the notepad. Let $d$ be the chosen even number. He then moves to a point exactly $d$ distance away in terms of Manhattan distance. More precisely, if Takahashi is currently at the coordinates $(x,y)$, he moves to a point $(x',y')$ such that $|x-x'|+|y-y'|=d$.

After performing $N$ actions, Takahashi must return to the origin $(0,0)$.

Determine if it is possible to perform $N$ actions in such a way. If it is possible, find the minimum value of $\displaystyle \max_{1\leq i \leq N}(|x_i|+|y_i|)$, where $(x_i,y_i)$ are the coordinates where Takahashi is located after the $i$-th action (we can prove that this value is an integer).

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $2 \leq D_i \leq 2 \times 10^5$
- $D_i\ (1\leq i \leq N)$ is even.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $D_1$ $D_2$ $\dots$ $D_N$

## Output

If it is impossible to perform $N$ actions as described above, print `-1`. If it is possible, print the minimum value of $\displaystyle \max_{1\leq i \leq N}(|x_i|+|y_i|)$ as an integer.

```input1
3
2 4 6
```

```output1
4
```

If Takahashi erases $2,6,4$ from his notepad for the first to third actions, respectively, and moves as $(0,0)\rightarrow (0,2) \rightarrow (-4,0) \rightarrow (0,0)$, then $\displaystyle \max_{1\leq i \leq N}(|x_i|+|y_i|)$ is $4$, which is the minimum.

```input2
5
2 2 2 2 6
```

```output2
3
```

If Takahashi erases $2,2,6,2,2$ from his notepad for the first to fifth actions, respectively, and moves as $(0,0)\rightarrow (\frac{1}{2},\frac{3}{2})\rightarrow (0,3) \rightarrow (0,-3) \rightarrow (-\frac{1}{2},-\frac{3}{2}) \rightarrow (0,0)$, then $\displaystyle \max_{1\leq i \leq N}(|x_i|+|y_i|)$ is $3$, which is the minimum.

Takahashi can also move to non-grid points.

```input3
2
2 200000
```

```output3
-1
```

Takahashi cannot return to the origin after performing $N$ actions as described above.