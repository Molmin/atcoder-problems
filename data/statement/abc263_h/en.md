Score : $600$ points

## Problem Statement

There are $N$ lines in a two-dimensional plane. The $i$-th line is $A_i x + B_i y + C_i = 0$. It is guaranteed that no two of the lines are parallel.

In this plane, there are $\frac{N(N-1)}{2}$ intersection points of two lines, including duplicates. Print the distance between the origin and the $K$-th nearest point to the origin among these $\frac{N(N-1)}{2}$ points.

## Constraints

- $2 \le N \le 5 \times 10^4$
- $1 \le K \le \frac{N(N-1)}{2}$
- $-1000 \le |A_i|,|B_i|,|C_i| \le 1000(1 \le i \le N)$
- No two of the lines are parallel.
- $A_i \neq 0$ or $B_i \neq 0(1 \le i \le N)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$ $C_N$

## Output

Print a real number representing the answer.

Your output is considered correct when its absolute or relative error from the judge's output is at most $10^{-4}$.

```input1
3 2
1 1 1
2 1 -3
1 -1 2
```

```output1
2.3570226040
```

Let us call the $i$-th line Line $i$.

- The intersection point of Line $1$ and Line $2$ is $(4,-5)$, whose distance to the origin is $\sqrt{41} \simeq 6.4031242374$.
- The intersection point of Line $1$ and Line $3$ is $(\frac{-3}{2},\frac{1}{2})$, whose distance to the origin is $\frac{\sqrt{10}}{2} \simeq 1.5811388300$.
- The intersection point of Line $2$ and Line $3$ is $(\frac{1}{3},\frac{7}{3})$, whose distance to the origin is $\frac{5\sqrt{2}}{3} \simeq 2.3570226040$.

Therefore, the second nearest intersection point is $(\frac{1}{3},\frac{7}{3})$, and $\frac{5\sqrt{2}}{3}$ should be printed.

```input2
6 7
5 1 9
4 4 -3
8 -1 2
0 1 -8
4 0 -4
2 -3 0
```

```output2
4.0126752298
```