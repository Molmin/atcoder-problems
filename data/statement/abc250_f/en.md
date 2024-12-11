Score : $500$ points

## Problem Statement

ABC 250 is a commemorable quarter milestone for Takahashi, who aims to hold ABC 1000,
so he is going to celebrate this contest by eating as close to $1/4$ of a pizza he bought as possible.

The pizza that Takahashi bought has a planar shape of convex $N$-gon.  When the pizza is placed on an $xy$-plane, the $i$-th vertex has coordinates $(X_i, Y_i)$.

Takahashi has decided to cut and eat the pizza as follows.

- First, Takahashi chooses two non-adjacent vertices from the vertices of the pizza and makes a cut with a knife along the line passing through those two points, dividing the pizza into two pieces.
- Then, he chooses one of the pieces at his choice and eats it.

Let $a$ be the quarter ($=1/4$) of the area of the pizza that Takahashi bought, and $b$ be the area of the piece of pizza that Takahashi eats.  Find the minimum possible value of $8 \times |a-b|$.  We can prove that this value is always an integer.

## Constraints

- All values in input are integers.
- $4 \le N \le 10^5$
- $|X_i|, |Y_i| \le 4 \times 10^8$
- The given points are the vertices of a convex $N$-gon in the counterclockwise order.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\dots$
> 
> $X_N$ $Y_N$

## Output

Print the answer as an integer.

```input1
5
3 0
2 3
-1 3
-3 1
-1 -1
```

```output1
1
```

Suppose that he makes a cut along the line passing through the $3$-rd and the $5$-th vertex and eats the piece containing the $4$-th vertex.<br>
Then, $a=\frac{33}{2} \times \frac{1}{4} = \frac{33}{8}$, $b=4$, and $8 \times |a-b|=1$, which is minimum possible.

```input2
4
400000000 400000000
-400000000 400000000
-400000000 -400000000
400000000 -400000000
```

```output2
1280000000000000000
```

```input3
6
-816 222
-801 -757
-165 -411
733 131
835 711
-374 979
```

```output3
157889
```