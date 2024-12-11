Score : $550$ points

## Problem Statement

There is a tree with $N$ vertices.
The $1$-st vertex is the root, and the parent of the $i$-th vertex $(2\leq i\leq N)$ is $p _ i\ (1\leq p _ i\lt i)$.

Each non-root vertex has an **enemy** or a **medicine** on it.
Takahashi wants to defeat all the enemies.
Initially, his strength is $1$, and he is at vertex $1$.
For $i=2,\ldots,N$, the information of the $i$-th vertex is represented by a triple of integers $(t _ i,s _ i,g _ i)$ as follows.

- If $t _ i=1$, there is an enemy at the $i$-th vertex. When Takahashi visits this vertex for the first time, if his strength is less than $s _ i$, Takahashi is defeated by the enemy and **loses**, after which he cannot move to other vertices. Otherwise, he defeats the enemy, and his strength increases by $g _ i$.
- If $t _ i=2$, there is a medicine at the $i$-th vertex. When Takahashi visits this vertex for the first time, he takes the medicine, and his strength is multiplied by $g _ i$. (For a vertex with a medicine, $s _ i=0$.)

There are at most $10$ vertices with a medicine.

Takahashi can repeatedly move to an adjacent vertex.
Determine if he can defeat all the enemies.

## Constraints

- $2\leq N\leq 500$
- $1\leq p _ i\lt i\ (2\leq i\leq N)$
- $t _ i\in\lbrace1,2\rbrace\ (2\leq i\leq N)$
- $t _ i=1\implies1\leq s _ i\leq 10 ^ 9\ (2\leq i\leq N)$
- $t _ i=2\implies s _ i=0\ (2\leq i\leq N)$
- $1\leq g _ i\leq 10 ^ 9\ (2\leq i\leq N)$
- There are at most $10$ vertices with $t _ i=2$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $p _ 2$ $t _ 2$ $s _ 2$ $g _ 2$
> 
> $p _ 3$ $t _ 3$ $s _ 3$ $g _ 3$
> 
> $\vdots$
> 
> $p _ N$ $t _ N$ $s _ N$ $g _ N$

## Output

Print the answer (`Yes` or `No`) in one line.

```input1
8
1 2 0 3
2 1 3 3
1 2 0 4
4 1 2 2
1 2 0 5
6 1 5 5
5 1 140 1
```

```output1
Yes
```

Initially, the tree looks like this:

![](https://img.atcoder.jp/abc319/df876b93cd1181b6e7269d978c19632b.png)

Takahashi can defeat all the enemies by moving from vertex $1$ to $2,3,2,1,6,7,6,1,4,5,8$ in this order.
Here, his position and strength change as shown in the following figure (movements to vertices that have already been visited are omitted).

![](https://img.atcoder.jp/abc319/de96b59f8e4b180017fbd1aba73f4fb3.png)

On the other hand, if he moves from vertex $1$ to $4,5,8$ in this order, for example, his strength when visiting vertex $8$ will be less than $s _ 8=140$, so he will lose without defeating all the enemies.

```input2
12
1 1 166 619
1 1 17 592
2 1 222 983
2 1 729 338
5 1 747 62
3 1 452 815
3 2 0 1
4 2 0 40
4 1 306 520
6 1 317 591
1 1 507 946
```

```output2
No
```

```input3
12
1 1 1 791
2 2 0 410
2 1 724 790
2 1 828 599
5 2 0 13
3 1 550 803
1 1 802 506
5 1 261 587
6 1 663 329
8 1 11 955
9 1 148 917
```

```output3
Yes
```

```input4
12
1 2 0 1000000000
2 2 0 1000000000
3 2 0 1000000000
4 2 0 1000000000
5 2 0 1000000000
6 2 0 1000000000
7 2 0 1000000000
8 2 0 1000000000
9 2 0 1000000000
10 2 0 1000000000
11 1 1 1
```

```output4
Yes
```