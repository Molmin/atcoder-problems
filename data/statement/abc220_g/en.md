Score : $600$ points

## Problem Statement

In the $xy$-plane, we have $N$ points, each assigned a weight.<br>
The $i$-th point has the coordinates $(X_i,Y_i)$ and the weight $C_i$.

We will choose four of the $N$ points to form an isosceles trapezoid whose vertices are the chosen points.<br>
What is the maximum possible total weight of the points chosen here?

If it is impossible to form an isosceles trapezoid, print `-1`.

We remind you that an isosceles trapezoid is a quadrilateral that satisfies all of the following conditions.

- It is a trapezoid.
- For one of the two parallel sides, the two angles at its ends are equal.

## Constraints

- $4 \leq N \leq 1000$
- $-10^9 \leq X_i,Y_i \leq 10^9$
- $1 \leq C_i \leq 10^9$
- $(X_i,Y_i) \neq (X_j,Y_j)$ if $i \neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$ $C_1$
> 
> $X_2$ $Y_2$ $C_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$ $C_N$

## Output

Print the answer.

```input1
5
0 3 10
3 3 10
-1 0 10
2 0 10000
4 0 10
```

```output1
40
```

![](https://img.atcoder.jp/ghi/950d55e5491c25b5776d4bec170f313a.png)  

We can choose Points $1, 2, 3, 5$ to form an isosceles trapezoid, with the points having a total weight of $40$.<br>
Any other way to choose points would not form an isosceles trapezoid.

```input2
6
0 1 1
1 4 20
2 7 300
5 6 4000
4 3 50000
3 0 600000
```

```output2
650021
```

![](https://img.atcoder.jp/ghi/5b2010c444d75d8220a5b19a356a3ee9.png)  

Note that a square and a rectangle are also isosceles trapezoids.

```input3
7
-3 0 1
-2 0 1
-1 0 1
0 0 1
1 0 1
2 0 1
3 0 1
```

```output3
-1
```

We cannot form an isosceles trapezoid.